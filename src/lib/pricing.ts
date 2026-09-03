import { CHECKOUT_HUB_URL, PRICING_PLANS, SITE_SLUG } from "./constants";

/**
 * Prices come from the hub, which reads them from Shopify per market. That
 * chain matters: Shopify decides what a buyer is actually charged, so anything
 * we hold locally is a copy and a copy can disagree. Fetching at build time
 * keeps every price in the static HTML — no request in front of the pricing
 * section — while leaving Shopify as the only place a price is really set.
 *
 * The site's plan ids are in live checkout URLs (/checkout?plan=gold), so they
 * are a public contract and do not change. The hub keys plans by term instead,
 * and this map is the join. It is small, explicit and type-checked, which is
 * what stops it drifting.
 */
const HUB_ID_BY_PLAN: Record<string, string> = {
  bronze: "3-months",
  silver: "6-months",
  gold: "12-months",
  diamond: "24-months",
};

export type CurrencyCode = "GBP" | "EUR" | "USD";

export const CURRENCY_SYMBOL: Record<CurrencyCode, string> = {
  GBP: "£",
  EUR: "€",
  USD: "$",
};

type MoneyByCurrency = Partial<Record<CurrencyCode, number>>;

export type PlanPrices = {
  price: MoneyByCurrency;
  proxyPrice: MoneyByCurrency;
  extraConnectionPrice: MoneyByCurrency;
};

export type PricingTable = {
  /** Currencies the hub could actually price in — see the note below. */
  currencies: CurrencyCode[];
  defaultCurrency: CurrencyCode;
  /** ISO-3166 alpha-2 → currency, with "*" as the fallback. From Shopify. */
  countryToCurrency: Record<string, CurrencyCode>;
  /** Keyed by the SITE's plan id, not the hub's. */
  plans: Record<string, PlanPrices>;
};

type HubPlan = {
  id: string;
  name: string;
  price: MoneyByCurrency;
  proxyPrice: MoneyByCurrency;
  extraConnectionPrice: MoneyByCurrency;
};

type HubPricing = {
  defaultCurrency: CurrencyCode;
  currencies: CurrencyCode[];
  countryToCurrency: Record<string, CurrencyCode>;
  plans: HubPlan[];
};

/**
 * GBP-only table built from the local constants.
 *
 * Used when the hub cannot be reached during a build. A deploy must never fail
 * because a pricing endpoint was slow, and GBP-everywhere is exactly how the
 * site behaved before any of this — degraded, but correct.
 */
function fallbackTable(): PricingTable {
  const plans: Record<string, PlanPrices> = {};
  for (const plan of PRICING_PLANS) {
    plans[plan.id] = {
      price: { GBP: plan.price },
      proxyPrice: { GBP: plan.proxyPrice },
      extraConnectionPrice: { GBP: plan.extraConnectionPrice },
    };
  }
  return {
    currencies: ["GBP"],
    defaultCurrency: "GBP",
    countryToCurrency: { "*": "GBP" },
    plans,
  };
}

let cached: PricingTable | null = null;

/**
 * Called from server components at build time. Result is memoised for the
 * build, so many pages cost one request.
 */
export async function getPricingTable(): Promise<PricingTable> {
  if (cached) return cached;

  try {
    const res = await fetch(
      `${CHECKOUT_HUB_URL}/api/pricing?siteSlug=${SITE_SLUG}`,
      { next: { revalidate: 3600 }, signal: AbortSignal.timeout(8000) }
    );
    if (!res.ok) throw new Error(`pricing endpoint returned ${res.status}`);

    const data = (await res.json()) as HubPricing;
    if (!Array.isArray(data.plans) || data.plans.length === 0) {
      throw new Error("pricing response had no plans");
    }

    const plans: Record<string, PlanPrices> = {};
    for (const sitePlan of PRICING_PLANS) {
      const hubId = HUB_ID_BY_PLAN[sitePlan.id];
      const hubPlan = data.plans.find((p) => p.id === hubId);

      // An unmapped plan keeps its local GBP price rather than vanishing from
      // the page. A missing price is a bug; a missing plan is a broken site.
      if (!hubPlan) {
        plans[sitePlan.id] = {
          price: { GBP: sitePlan.price },
          proxyPrice: { GBP: sitePlan.proxyPrice },
          extraConnectionPrice: { GBP: sitePlan.extraConnectionPrice },
        };
        continue;
      }

      plans[sitePlan.id] = {
        price: hubPlan.price,
        proxyPrice: hubPlan.proxyPrice,
        extraConnectionPrice: hubPlan.extraConnectionPrice,
      };
    }

    cached = {
      currencies: data.currencies ?? ["GBP"],
      defaultCurrency: data.defaultCurrency ?? "GBP",
      countryToCurrency: data.countryToCurrency ?? { "*": "GBP" },
      plans,
    };
    return cached;
  } catch (err) {
    console.warn("[pricing] falling back to local GBP prices:", err);
    cached = fallbackTable();
    return cached;
  }
}

/** Format for display. Whole-pound/euro amounts still show their decimals. */
export function formatMoney(amount: number, currency: CurrencyCode): string {
  return `${CURRENCY_SYMBOL[currency]}${amount.toFixed(2)}`;
}

/**
 * Price in the requested currency, falling back to GBP when a currency was not
 * available for that plan. Callers get the currency back as well as the
 * amount, so nothing can render a euro symbol against a sterling number.
 */
export function priceIn(
  prices: MoneyByCurrency,
  currency: CurrencyCode
): { amount: number; currency: CurrencyCode } {
  const wanted = prices[currency];
  if (typeof wanted === "number") return { amount: wanted, currency };
  return { amount: prices.GBP ?? 0, currency: "GBP" };
}

/**
 * Resolve a plan's three prices together, in one currency.
 *
 * Resolving them individually risks a euro plan price beside a sterling add-on
 * if one currency is missing for one of them — a total that is arithmetic
 * nonsense. If any part is unavailable in the wanted currency, the whole set
 * falls back to GBP so the order is at least internally consistent.
 */
export function resolvePlanPrices(
  table: PricingTable,
  planId: string,
  fallback: { price: number; proxyPrice: number; extraConnectionPrice: number },
  currency: CurrencyCode
): {
  currency: CurrencyCode;
  price: number;
  proxyPrice: number;
  extraConnectionPrice: number;
} {
  const entry = table.plans[planId];
  if (entry) {
    const p = entry.price[currency];
    const x = entry.proxyPrice[currency];
    const e = entry.extraConnectionPrice[currency];
    if (typeof p === "number" && typeof x === "number" && typeof e === "number") {
      return { currency, price: p, proxyPrice: x, extraConnectionPrice: e };
    }
    const pg = entry.price.GBP;
    const xg = entry.proxyPrice.GBP;
    const eg = entry.extraConnectionPrice.GBP;
    if (typeof pg === "number" && typeof xg === "number" && typeof eg === "number") {
      return { currency: "GBP", price: pg, proxyPrice: xg, extraConnectionPrice: eg };
    }
  }
  return { currency: "GBP", ...fallback };
}
