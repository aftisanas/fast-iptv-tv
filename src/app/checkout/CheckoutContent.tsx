"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import {
  ArrowLeft,
  Loader2,
  MessageCircle,
  Minus,
  Plus,
  Shield,
  ShoppingCart,
} from "lucide-react";
import {
  CHECKOUT_COPY,
  CHECKOUT_HUB_URL,
  CONTACT_EMAIL,
  EXTRA_CONNECTIONS_MAX,
  PAYMENT_MARKS,
  PRICING_PLANS,
  SITE_SLUG,
  TRUST_COPY,
  WHATSAPP_NUMBER,
} from "@/lib/constants";
import {
  buildWhatsappMessage,
  calculateOrderTotal,
} from "@/lib/whatsapp";
import { callCheckoutHub } from "@/lib/checkout";
import { track } from "@/lib/analytics";
import { toAccessLabel } from "@/lib/utils";
import { useCurrency } from "@/components/CurrencyProvider";
import { CURRENCY_SYMBOL, formatMoney, resolvePlanPrices } from "@/lib/pricing";
import { getCountries, isValidPhoneNumber } from "libphonenumber-js";
import type { CountryCode } from "libphonenumber-js";

type Plan = (typeof PRICING_PLANS)[number];

type Availability =
  | { state: "checking" }
  | { state: "available" }
  | { state: "unavailable"; whatsappUrl: string; reason?: string };

/**
 * Why card checkout is not on offer, in the buyer's terms.
 *
 * They arrived intending to pay by card and are being handed a WhatsApp
 * button; saying nothing about that is exactly the kind of unexplained
 * detour that reads as a scam. NO_CAPACITY is the routine one — a store
 * takes a sale, then pauses before the next.
 */
function unavailableMessage(reason?: string): string {
  switch (reason) {
    case "NO_CAPACITY":
      return "Card checkout is busy right now. You can still order on WhatsApp — we'll send a payment link and your login details straight after.";
    case "UNKNOWN_PLAN":
      return "We couldn't load this plan for card checkout. Order on WhatsApp and we'll set it up for you.";
    default:
      return "Card checkout isn't available for this plan at the moment. You can complete your order on WhatsApp instead.";
  }
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Reserved / non-deliverable TLDs the hub (Shopify) rejects. Kept lowercase;
// compared case-insensitively.
const BLOCKED_TLDS = new Set(["test", "local", "invalid", "example", "exp"]);

function isDeliverableEmail(email: string): boolean {
  if (!EMAIL_RE.test(email)) return false;
  const tld = email.slice(email.lastIndexOf(".") + 1).toLowerCase();
  if (tld.length < 2) return false;
  if (!/^[a-z]+$/.test(tld)) return false;
  if (BLOCKED_TLDS.has(tld)) return false;
  return true;
}
/**
 * Traffic countries first, then everywhere else. Ordering only affects how
 * quickly the common cases short-circuit — the set is every country the
 * library knows.
 */
const PRIORITY_COUNTRIES = [
  "GB", "IE", "DE", "FR", "AT", "ES", "PT", "IT",
  "NL", "TR", "US", "AE", "SA", "MA", "DZ", "BR",
] as const;

const PHONE_COUNTRIES: CountryCode[] = [
  ...PRIORITY_COUNTRIES,
  ...getCountries().filter(
    (c) => !(PRIORITY_COUNTRIES as readonly string[]).includes(c)
  ),
];

/**
 * Applied only to a number the buyer actually typed — the field is optional.
 *
 * 55% of this site's traffic is outside the UK, and people type their number
 * the way they do at home, without a country code. Validating against a single
 * default country rejected every one of those, so a number is accepted if it
 * is valid anywhere: written with a leading + it is checked internationally,
 * and written in national form it is checked against all 245 numbering plans.
 *
 * The trade that buys: some numbering plans (Germany and Austria especially)
 * allow long, loosely-structured subscriber numbers, so a random-looking
 * string of digits can be a structurally valid number somewhere. Accepting
 * every country's format means accepting that. Only a single repeated digit
 * is filtered, since that is nobody's phone number.
 */
function isContactablePhone(raw: string): boolean {
  const value = raw.trim();
  if (!value) return false;

  if (/^\+?(\d)\1*$/.test(value.replace(/[\s\-().]/g, ""))) return false;

  try {
    if (value.startsWith("+")) return isValidPhoneNumber(value);
    return PHONE_COUNTRIES.some((country) => {
      try {
        return isValidPhoneNumber(value, country);
      } catch {
        return false;
      }
    });
  } catch {
    return false;
  }
}
// Local wa.me fallback used when the hub is unreachable (network error,
// non-200, unparseable). The click handler appends `?text=…`, so no query
// string is baked in here.
const LOCAL_WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

/** How long the availability probe gets before we stop waiting on it. */
const AVAILABILITY_TIMEOUT_MS = 2500;

const parseDurationMonths = (label: string): number | null => {
  const match = label.match(/^(\d+)[-\s]?Months?/i);
  if (!match) return null;
  const months = parseInt(match[1], 10);
  return Number.isFinite(months) && months > 0 ? months : null;
};

export default function CheckoutContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const planId = searchParams.get("plan");

  const plan = useMemo<Plan | null>(() => {
    if (!planId) return null;
    return PRICING_PLANS.find((p) => p.id === planId) ?? null;
  }, [planId]);

  // Redirect if plan is missing/invalid.
  const redirectedRef = useRef(false);
  useEffect(() => {
    if (!plan && !redirectedRef.current) {
      redirectedRef.current = true;
      router.replace("/#pricing");
    }
  }, [plan, router]);

  if (!plan) return null;

  return <CheckoutForPlan plan={plan} />;
}

function CheckoutForPlan({ plan }: { plan: Plan }) {
  const { currency: wantedCurrency, country, resolved: currencyResolved, table } = useCurrency();

  // All three prices resolve together — see resolvePlanPrices. `resolvedCurrency`
  // is what we can actually quote, which is not always what we wanted.
  const live = resolvePlanPrices(
    table,
    plan.id,
    {
      price: plan.price,
      proxyPrice: plan.proxyPrice,
      extraConnectionPrice: plan.extraConnectionPrice,
    },
    wantedCurrency
  );
  const resolvedCurrency = live.currency;
  const CURRENCY = CURRENCY_SYMBOL[resolvedCurrency];
  const formatPrice = (value: number) => formatMoney(value, resolvedCurrency);

  /**
   * Set when the hub comes back with a different total than the page showed.
   * The page's prices are baked at build time; Shopify's are live. When they
   * disagree the buyer sees the real number and confirms it — redirecting
   * silently is how "advertised ≠ charged" happens.
   */
  const [priceCorrection, setPriceCorrection] = useState<
    { amount: number; currency: string; checkoutUrl: string } | null
  >(null);

  const [availability, setAvailability] = useState<Availability>({ state: "checking" });
  const [proxyOn, setProxyOn] = useState(false);
  const [extraConnections, setExtraConnections] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [promoNotice, setPromoNotice] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  // Field errors stay quiet until the buyer actually tries to continue, so an
  // empty form does not greet every arrival with red text.
  const [showErrors, setShowErrors] = useState(false);

  // Fire once, but only after the currency has resolved — otherwise every
  // non-UK view is recorded in sterling, which is the number we are trying to
  // stop being wrong about.
  const viewTracked = useRef(false);
  useEffect(() => {
    if (viewTracked.current || !currencyResolved) return;
    viewTracked.current = true;
    track("checkout_viewed", {
      plan: plan.name,
      price: live.price,
      currency: resolvedCurrency,
    });
  }, [currencyResolved, plan.name, live.price, resolvedCurrency]);

  useEffect(() => {
    let cancelled = false;

    const url = `${CHECKOUT_HUB_URL}/api/availability?siteSlug=${SITE_SLUG}&planName=${encodeURIComponent(plan.name)}`;

    // The probe sits between the buyer and the card checkout, so it gets a
    // deadline. Without one, a hung request leaves the button disabled for as
    // long as the browser is willing to wait.
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), AVAILABILITY_TIMEOUT_MS);

    /**
     * A failed probe is not evidence that the store is down — it is far more
     * often an ad blocker, a privacy extension or a blocklist entry on the
     * hub's domain, which is unrelated to this site. Treating that as "store
     * unavailable" silently threw away the card checkout for buyers whose
     * checkout would have worked. So the failure path now keeps the card
     * checkout and reports itself instead.
     */
    const failOpen = (reason: string) => {
      if (cancelled) return;
      console.error("[checkout] availability probe failed:", reason);
      track("availability_failed", { plan: plan.name, reason });
      setAvailability({ state: "available" });
    };

    fetch(url, { signal: controller.signal })
      .then(async (res) => {
        if (!res.ok) throw new Error(`status ${res.status}`);
        return res.json() as Promise<{ available?: boolean; whatsappUrl?: string; reason?: string }>;
      })
      .then((data) => {
        if (cancelled) return;
        if (data.available) {
          setAvailability({ state: "available" });
          return;
        }
        // An explicit `available: false` is the one answer we trust, because
        // only the hub knows whether its stores are actually accepting orders.
        track("checkout_degraded", {
          plan: plan.name,
          reason: data.reason ?? "hub_reported_unavailable",
        });
        setAvailability({
          state: "unavailable",
          whatsappUrl: data.whatsappUrl || LOCAL_WHATSAPP_URL,
          reason: data.reason,
        });
      })
      .catch((err: unknown) => {
        const aborted = err instanceof DOMException && err.name === "AbortError";
        failOpen(aborted ? "timeout" : String(err));
      })
      .finally(() => clearTimeout(timer));

    return () => {
      cancelled = true;
      clearTimeout(timer);
      controller.abort();
    };
  }, [plan.name, plan.price]);

  const total = calculateOrderTotal({
    planPrice: live.price,
    proxyEnabled: proxyOn,
    proxyPrice: live.proxyPrice,
    extraConnections,
    extraConnectionPrice: live.extraConnectionPrice,
  });

  const extraConnectionsSubtotal = extraConnections * live.extraConnectionPrice;
  const durationMonths = parseDurationMonths(plan.name);
  const proxyPerMonth = durationMonths ? live.proxyPrice / durationMonths : null;
  const extraPerMonthPerConn = durationMonths
    ? live.extraConnectionPrice / durationMonths
    : null;
  const extraPerMonthTotal =
    durationMonths && extraConnections > 0
      ? extraConnectionsSubtotal / durationMonths
      : null;

  const name = `${firstName} ${lastName}`.trim();
  const trimmedName = name;
  const trimmedEmail = email.trim();
  const trimmedPhone = phone.trim();
  const emailValid = isDeliverableEmail(trimmedEmail);
  // Jointly required — either field alone can satisfy it, so mononyms work.
  const nameValid = (firstName.trim() + lastName.trim()).length >= 2;
  // Optional. The buyer is heading to WhatsApp anyway, so we already have a
  // way to reach them; making this required would only add friction. But a
  // number that IS given has to be a real one, or it is worse than blank.
  const phoneValid = trimmedPhone === "" || isContactablePhone(trimmedPhone);
  const formValid = emailValid && nameValid && phoneValid;

  const switchToWhatsapp = (whatsappUrl: string) => {
    setAvailability({ state: "unavailable", whatsappUrl });
  };

  const handleBuyNow = async () => {
    if (availability.state !== "available") return;
    if (submitting) return;
    if (!formValid) {
      setShowErrors(true);
      return;
    }

    setSubmitting(true);
    setSubmitError(null);
    track("order_submitted", {
      plan: plan.name,
      total,
      currency: resolvedCurrency,
      country: country ?? undefined,
      proxy: proxyOn,
      extraConnections,
    });

    try {
      const response = await callCheckoutHub({
        planName: plan.name,
        siteSlug: SITE_SLUG,
        email: trimmedEmail,
        name: trimmedName,
        phone: trimmedPhone || undefined,
        proxyEnabled: proxyOn,
        extraConnections,
        countryCode: country ?? undefined,
      });

      if (response.kind === "shopify") {
        /**
         * The page's prices were baked at build time; Shopify's are live. If
         * they disagree, the buyer sees the real number and confirms it rather
         * than being redirected to a surprise.
         *
         * A GBP answer is treated as "verify", not "trust": when the hub falls
         * back to a cart permalink it cannot read the cart's cost and reports
         * the sterling list price, while Shopify still charges by market. That
         * is the one path where the response can understate.
         */
        const hubCents = response.amountCents;
        const hubCurrency = response.currency;
        const shownCents = Math.round(total * 100);
        const disagrees =
          typeof hubCents === "number" &&
          typeof hubCurrency === "string" &&
          (hubCents !== shownCents || hubCurrency !== resolvedCurrency);

        if (disagrees) {
          track("checkout_price_mismatch", {
            plan: plan.name,
            shown: shownCents,
            shownCurrency: resolvedCurrency,
            charged: hubCents,
            chargedCurrency: hubCurrency,
          });
          setPriceCorrection({
            amount: hubCents / 100,
            currency: hubCurrency,
            checkoutUrl: response.checkoutUrl,
          });
          setSubmitting(false);
          return;
        }

        track("checkout_handoff", {
          plan: plan.name,
          total,
          currency: resolvedCurrency,
          orderId: response.orderId,
        });
        window.location.href = response.checkoutUrl;
        return;
      }

      // Store was claimed between page load and click — switch UI, don't redirect unexpectedly.
      logDiversion({
        planName: plan.name,
        email: trimmedEmail,
        name: trimmedName,
        phone: trimmedPhone,
        proxyOn,
        extraConnections,
        total,
        reason: "STORE_CLAIMED_MIDFLIGHT",
      });
      track("checkout_degraded", { plan: plan.name, reason: "store_claimed_midflight" });
      // Hub sometimes returns whatsapp-kind with an empty URL — treat that
      // as a hub degradation, not "no WhatsApp configured", and use the
      // site's own number instead of falling through to the mailto branch.
      switchToWhatsapp(response.whatsappUrl || LOCAL_WHATSAPP_URL);
      setSubmitting(false);
    } catch (err) {
      // Hub is down or unreachable. Rather than trapping the user on a red
      // error alert, degrade to the WhatsApp path using the site's own
      // number so the sale can still happen.
      console.error("[checkout] callCheckoutHub failed", err);
      track("checkout_degraded", { plan: plan.name, reason: "hub_unreachable" });
      // Record the lead HERE, not only when the buyer clicks through to
      // WhatsApp. They have already typed their details and pressed Buy; if
      // they give up at this point the order is invisible to the hub, which
      // is exactly the customer we most need to know about.
      logDiversion({
        planName: plan.name,
        email: trimmedEmail,
        name: trimmedName,
        phone: trimmedPhone,
        proxyOn,
        extraConnections,
        total,
        reason: "HUB_UNREACHABLE",
      });
      switchToWhatsapp(LOCAL_WHATSAPP_URL);
      setSubmitting(false);
    }
  };

  const handleWhatsappClick = () => {
    if (availability.state !== "unavailable") return;
    // Same bar as the card path. This used to be ungated, so a buyer could
    // reach WhatsApp with an empty form and the hub recorded a diversion with
    // no email and no number — an order that existed but could not be
    // followed up.
    if (!formValid) {
      setShowErrors(true);
      return;
    }

    logDiversion({
      planName: plan.name,
      email: trimmedEmail,
      name: trimmedName,
      phone: trimmedPhone,
      proxyOn,
      extraConnections,
      total,
      reason: "NO_STORE_AVAILABLE",
    });

    const message = buildWhatsappMessage({
      planName: plan.name,
      proxyOn,
      extraConnections,
      total,
      currency: CURRENCY,
      name: trimmedName,
      email: trimmedEmail,
    });

    const { whatsappUrl } = availability;
    if (!whatsappUrl) return; // handled in render — Contact us fallback

    const separator = whatsappUrl.includes("?") ? "&" : "?";
    window.open(
      `${whatsappUrl}${separator}text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div>
      {/* ── Hero Header ── */}
      <section className="relative overflow-hidden pt-28 pb-12 lg:pt-32 lg:pb-14">
        {/* Deep premium gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0118] via-[#1a0a3e] to-[#0c1445]" />

        {/* Aurora blobs */}
        <div
          className="aurora-blob w-[500px] h-[500px] bg-purple-600/20 -top-32 -left-32"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="aurora-blob w-[400px] h-[400px] bg-cyan-500/15 top-1/4 right-[-8%]"
          style={{ animationDelay: "4s" }}
        />

        {/* Radial overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(124,58,237,0.18),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(6,182,212,0.1),transparent_50%)]" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Back to plans */}
          <Link
            href="/#pricing"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-300 hover:text-cyan-200 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to plans
          </Link>

          {/* Page header */}
          <div className="mt-6">
            <div className="text-xs font-bold tracking-[0.18em] text-cyan-400">
              CHECKOUT
            </div>
            <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-white">
              {toAccessLabel(plan.name)}
            </h1>
            <div className="mt-3 flex items-baseline gap-3">
              <span className="text-3xl font-extrabold text-white">
                {formatPrice(live.price)}
              </span>
              <span className="text-xs font-semibold tracking-[0.15em] text-gray-300">
                ONE-TIME PAYMENT
              </span>
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      </section>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        {/* Two-column card-based layout */}
        <div className="grid gap-6 lg:grid-cols-[360px_minmax(0,1fr)] lg:gap-8 items-start">
          {/* Left Column (Narrower): Order Summary + Promo Code */}
          <div className="space-y-6 lg:sticky lg:top-24">
            {/* Top Card: Order Summary */}
            <div className="rounded-2xl border border-violet-100/60 bg-white p-6 shadow-lg shadow-purple-900/5">
              <h2 className="text-xs font-bold tracking-[0.18em] text-foreground uppercase border-b border-gray-100 pb-4 mb-4">
                ORDER SUMMARY
              </h2>

              <div className="space-y-3 text-sm">
                <SummaryRow label={toAccessLabel(plan.name)} value={formatPrice(live.price)} />
                {proxyOn && (
                  <SummaryRow label="Proxy Protection" value={`+${formatPrice(live.proxyPrice)}`} />
                )}
                {extraConnections > 0 && (
                  <SummaryRow
                    label={`Extra Connections × ${extraConnections}`}
                    value={`+${formatPrice(extraConnectionsSubtotal)}`}
                  />
                )}
              </div>

              <div className="border-t border-gray-100 mt-4 pt-4 flex items-center justify-between">
                <span className="text-base font-semibold text-foreground">TOTAL</span>
                <span className="text-xl font-extrabold text-accent">
                  {formatPrice(total)}
                </span>
              </div>
            </div>

            {/* Bottom Card: Promo Code */}
            <div className="rounded-2xl border border-violet-100/60 bg-white p-6 shadow-lg shadow-purple-900/5">
              <h2 className="text-xs font-bold tracking-[0.18em] text-foreground uppercase mb-1.5">
                HAVE A PROMO CODE?
              </h2>
              <p className="text-xs text-muted leading-relaxed mb-4">
                If you have a promo code, apply it below.
              </p>

              <div className="flex gap-2">
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => {
                    setPromoCode(e.target.value);
                    if (promoNotice) setPromoNotice(null);
                  }}
                  placeholder="Promo code"
                  className="w-full rounded-xl border border-gray-200 bg-white px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted/60 transition-colors focus:border-violet-400 focus:outline-2 focus:outline-violet-600 focus-visible:outline-none"
                />
                <button
                  type="button"
                  onClick={() => {
                    setPromoNotice("Promo codes aren't available yet.");
                  }}
                  className="shrink-0 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-4 py-2.5 text-xs font-bold tracking-wider text-white transition-all hover:shadow-md hover:shadow-purple-500/20 active:scale-[0.98]"
                >
                  APPLY
                </button>
              </div>
              {promoNotice && (
                <p className="mt-2 text-xs text-muted">{promoNotice}</p>
              )}
            </div>
          </div>

          {/* Right Column (Wider / Main Container Card): Billing Details */}
          <div className="rounded-2xl border border-violet-100/60 bg-white p-6 sm:p-8 shadow-lg shadow-purple-900/5 space-y-8">
            <h2 className="text-xs font-bold tracking-[0.18em] text-foreground uppercase border-b border-gray-100 pb-4">
              BILLING DETAILS
            </h2>

            {/* Recommended Options / Add-ons stacked vertically */}
            <section className="space-y-4">
              <div className="text-xs font-bold tracking-[0.18em] text-muted">
                RECOMMENDED OPTIONS
              </div>

              {/* Extra Connections */}
              <div className="rounded-xl border border-gray-200/80 bg-white p-5 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="text-sm font-semibold text-foreground">
                      {CHECKOUT_COPY.extraConnectionsLabel}
                    </div>
                    <p className="text-xs leading-relaxed text-muted">
                      {CHECKOUT_COPY.extraConnectionsHelp}
                    </p>
                  </div>

                  <div className="flex flex-col items-end gap-2 shrink-0">
                    <div className="text-xs font-bold text-accent">
                      {extraPerMonthPerConn !== null
                        ? `+${formatPrice(extraPerMonthPerConn)}/month`
                        : `+${formatPrice(live.extraConnectionPrice)}`}
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setExtraConnections((v) => Math.max(0, v - 1))}
                        disabled={extraConnections === 0}
                        aria-label="Decrease extra connections"
                        className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-200 bg-white text-foreground transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white"
                      >
                        <Minus className="h-3 w-3" aria-hidden="true" />
                      </button>
                      <span aria-live="polite" className="w-5 text-center text-xs font-bold text-foreground">
                        {extraConnections}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          setExtraConnections((v) =>
                            Math.min(EXTRA_CONNECTIONS_MAX, v + 1)
                          )
                        }
                        disabled={extraConnections === EXTRA_CONNECTIONS_MAX}
                        aria-label="Increase extra connections"
                        className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-200 bg-white text-foreground transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white"
                      >
                        <Plus className="h-3 w-3" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>

                {extraConnections > 0 && (
                  <div className="mt-2.5 text-xs text-muted pt-2 border-t border-gray-100">
                    {extraConnections} × {formatPrice(live.extraConnectionPrice)} ={" "}
                    <span className="font-semibold text-foreground">
                      {formatPrice(extraConnectionsSubtotal)}
                    </span>
                    {extraPerMonthTotal !== null && (
                      <>
                        {" · "}
                        <span className="font-semibold text-accent">
                          {formatPrice(extraPerMonthTotal)}/month
                        </span>
                      </>
                    )}
                  </div>
                )}
              </div>

              {/* Proxy Protection */}
              <div className="rounded-xl border border-gray-200/80 bg-white p-5 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-foreground">
                        Proxy Protection
                      </span>
                      <span className="inline-flex items-center rounded-md bg-amber-100 px-2 py-0.5 text-[10px] font-bold tracking-[0.12em] text-amber-700">
                        POPULAR
                      </span>
                    </div>
                    <p className="text-xs leading-relaxed text-muted">
                      Routes your stream over our own encrypted link, for steadier speeds when the network is busy in the evenings.
                    </p>
                  </div>

                  <div className="flex flex-col items-end gap-2 shrink-0">
                    <div className="text-xs font-bold text-accent">
                      {proxyPerMonth !== null
                        ? `+${formatPrice(proxyPerMonth)}/month`
                        : `+${formatPrice(live.proxyPrice)}`}
                    </div>
                    <button
                      type="button"
                      role="switch"
                      aria-checked={proxyOn}
                      aria-label="Toggle Proxy Protection"
                      onClick={() => setProxyOn((v) => !v)}
                      className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-violet-600 focus-visible:outline-offset-2 ${
                        proxyOn
                          ? "bg-gradient-to-r from-violet-600 to-cyan-500"
                          : "bg-gray-200"
                      }`}
                    >
                      <span
                        className={`inline-block h-5 w-5 rounded-full bg-white shadow transition-transform ${
                          proxyOn ? "translate-x-[1.375rem]" : "translate-x-0.5"
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Input Fields stacked directly below add-ons */}
            <section className="space-y-4 pt-2">
              <div className="text-xs font-bold tracking-[0.18em] text-muted">
                YOUR INFORMATION
              </div>

              {/* Name — first + last are jointly required (either alone satisfies it). */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="checkout-first-name"
                    className="mb-1.5 block text-xs font-semibold text-foreground"
                  >
                    First name{" "}
                    <span className="font-normal text-muted">
                      (first or last required)
                    </span>
                  </label>
                  <input
                    id="checkout-first-name"
                    type="text"
                    autoComplete="given-name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    disabled={submitting}
                    placeholder="Jane"
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted/60 transition-colors focus:border-violet-400 focus:outline-2 focus:outline-violet-600 focus:outline-offset-1 disabled:cursor-not-allowed disabled:bg-gray-50"
                  />
                </div>

                <div>
                  <label
                    htmlFor="checkout-last-name"
                    className="mb-1.5 block text-xs font-semibold text-foreground"
                  >
                    Last name{" "}
                    <span className="font-normal text-muted">
                      (first or last required)
                    </span>
                  </label>
                  <input
                    id="checkout-last-name"
                    type="text"
                    autoComplete="family-name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    disabled={submitting}
                    placeholder="Smith"
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted/60 transition-colors focus:border-violet-400 focus:outline-2 focus:outline-violet-600 focus:outline-offset-1 disabled:cursor-not-allowed disabled:bg-gray-50"
                  />
                </div>
              </div>

              {showErrors && !nameValid && (
                <p className="-mt-2 text-[11px] leading-relaxed text-red-600">
                  Please enter your name.
                </p>
              )}

              {/* Phone number — optional. Email is the required field, because
                  that is where the credentials are sent from the hub. */}
              <div>
                <label
                  htmlFor="checkout-phone"
                  className="mb-1.5 block text-xs font-semibold text-foreground"
                >
                  Phone number{" "}
                  <span className="font-normal text-muted">(optional)</span>
                </label>
                <input
                  id="checkout-phone"
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  disabled={submitting}
                  placeholder="07XXX XXXXXX"
                  aria-invalid={showErrors && !phoneValid}
                  aria-describedby="checkout-phone-help"
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted/60 transition-colors focus:border-violet-400 focus:outline-2 focus:outline-violet-600 focus:outline-offset-1 disabled:cursor-not-allowed disabled:bg-gray-50"
                />
                {showErrors && !phoneValid && (
                  <p className="mt-1.5 text-[11px] leading-relaxed text-red-600">
                    That doesn&apos;t look like a real phone number. Please
                    check it, or leave it blank.
                  </p>
                )}
                <p
                  id="checkout-phone-help"
                  className="mt-1.5 text-[11px] leading-relaxed text-muted"
                >
                  So we can reach you on WhatsApp if there&apos;s any issue with your order.
                </p>
              </div>

              {/* Email Address — the one truly required field. */}
              <div>
                <label
                  htmlFor="checkout-email"
                  className="mb-1.5 block text-xs font-semibold text-foreground"
                >
                  Email address <span className="text-red-500">*</span>
                </label>
                <input
                  id="checkout-email"
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={submitting}
                  placeholder="you@example.com"
                  aria-invalid={showErrors && !emailValid}
                  aria-describedby="checkout-email-help"
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted/60 transition-colors focus:border-violet-400 focus:outline-2 focus:outline-violet-600 focus:outline-offset-1 disabled:cursor-not-allowed disabled:bg-gray-50"
                />
                {showErrors && !emailValid && (
                  <p className="mt-1.5 text-[11px] leading-relaxed text-red-600">
                    {trimmedEmail === ""
                      ? "Please enter your email address — your login details are sent here."
                      : "Please enter a valid email address."}
                  </p>
                )}
                <p
                  id="checkout-email-help"
                  className="mt-1.5 text-[11px] leading-relaxed text-muted"
                >
                  Your login credentials will be sent here after payment.
                </p>
              </div>
            </section>

            {/* Primary CTA Section at bottom of right card */}
            <div className="pt-6 border-t border-gray-100 space-y-4">
              {submitError && (
                <div
                  role="alert"
                  className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-xs font-medium text-red-700"
                >
                  {submitError}
                </div>
              )}

              {/* Shown only when the live total differs from the one on the
                  page. The buyer is told the real number and chooses — nobody
                  is sent to a checkout quoting a different price than they
                  agreed to. */}
              {priceCorrection && (
                <div
                  role="alert"
                  className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-4 text-xs text-amber-900"
                >
                  <p className="mb-1 font-bold">
                    The total for this order is{" "}
                    {CURRENCY_SYMBOL[priceCorrection.currency as keyof typeof CURRENCY_SYMBOL] ??
                      ""}
                    {priceCorrection.amount.toFixed(2)}
                  </p>
                  <p className="mb-3 leading-relaxed">
                    That differs from the {formatPrice(total)} shown above.
                    The amount here is the one you will be charged.
                  </p>
                  <div className="flex flex-col gap-2 sm:flex-row">
                    <button
                      type="button"
                      onClick={() => {
                        track("checkout_handoff", {
                          plan: plan.name,
                          total: priceCorrection.amount,
                          currency: priceCorrection.currency,
                          corrected: true,
                        });
                        window.location.href = priceCorrection.checkoutUrl;
                      }}
                      className="rounded-lg bg-amber-600 px-4 py-2.5 text-xs font-bold text-white transition-colors hover:bg-amber-700 focus-visible:outline-2 focus-visible:outline-amber-800 focus-visible:outline-offset-2"
                    >
                      Continue at this price
                    </button>
                    <button
                      type="button"
                      onClick={() => setPriceCorrection(null)}
                      className="rounded-lg border border-amber-300 bg-white px-4 py-2.5 text-xs font-semibold text-amber-900 transition-colors hover:bg-amber-100 focus-visible:outline-2 focus-visible:outline-amber-800 focus-visible:outline-offset-2"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}

              <CtaArea
                currencySymbol={CURRENCY}
                availability={availability}
                formValid={formValid}
                submitting={submitting}
                total={total}
                onBuyNow={handleBuyNow}
                onWhatsapp={handleWhatsappClick}
              />

              {showErrors && !formValid && (
                <p className="text-center text-xs font-medium text-red-600" role="alert">
                  Please complete the highlighted fields above — we need a
                  working email address to send your login details to.
                </p>
              )}

              {/* The subtitle has to match the route the buyer is actually
                  about to take. `CHECKOUT_COPY.buttonSubtitle` describes the
                  WhatsApp flow and is only correct when the hub has told us
                  the store is unavailable. */}
              <div className="text-center text-xs text-muted">
                {availability.state === "available"
                  ? TRUST_COPY.handoff
                  : availability.state === "unavailable"
                    ? unavailableMessage(availability.reason)
                    : CHECKOUT_COPY.buttonSubtitle}
              </div>

              {/* Card marks sit at the decision point, not just in the footer. */}
              <ul className="flex flex-wrap items-center justify-center gap-2">
                {PAYMENT_MARKS.map((mark) => (
                  /* White artwork on transparency — it needs a dark chip to be
                     visible against the checkout's light panel. */
                  <li
                    key={mark.id}
                    className="flex h-6 items-center justify-center rounded border border-slate-700/50 bg-slate-800 px-2"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`/trust/${mark.id}.webp`}
                      alt={mark.name}
                      width={40}
                      height={26}
                      loading="lazy"
                      decoding="async"
                      className="h-3.5 w-auto"
                    />
                  </li>
                ))}
              </ul>

              <p className="text-center text-xs font-medium text-foreground">
                {TRUST_COPY.oneTime}
              </p>
              <p className="text-center text-xs text-muted">
                {TRUST_COPY.currencyNote(resolvedCurrency)}
              </p>

              <div className="flex items-center justify-center gap-2 text-xs text-muted">
                <Shield className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" />
                <span>{CHECKOUT_COPY.footerNote}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-muted">{label}</span>
      <span className="font-semibold text-foreground">{value}</span>
    </div>
  );
}

function CtaArea({
  availability,
  formValid,
  submitting,
  total,
  currencySymbol,
  onBuyNow,
  onWhatsapp,
}: {
  availability: Availability;
  formValid: boolean;
  submitting: boolean;
  total: number;
  /** Resolved on the parent — this component must never assume sterling. */
  currencySymbol: string;
  onBuyNow: () => void;
  onWhatsapp: () => void;
}) {
  const CURRENCY = currencySymbol;
  if (availability.state === "checking") {
    return (
      <button
        type="button"
        disabled
        aria-label="Checking availability"
        className="flex w-full items-center justify-center gap-2.5 rounded-xl bg-gray-200 px-6 py-3.5 text-sm font-bold tracking-wide text-muted"
      >
        <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
        Checking availability…
      </button>
    );
  }

  if (availability.state === "available") {
    // Deliberately not disabled on an invalid form: a dead button explains
    // nothing. The click is allowed through so the handler can reveal which
    // field is missing.
    return (
      <button
        type="button"
        onClick={onBuyNow}
        disabled={submitting}
        aria-disabled={!formValid}
        aria-label={`Buy now for ${CURRENCY}${total.toFixed(2)}`}
        className={"flex w-full items-center justify-center gap-2.5 rounded-xl bg-green-500 px-6 py-3.5 text-sm font-bold tracking-wide text-white transition-all hover:bg-green-600 hover:shadow-lg hover:shadow-green-500/30 active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-green-700 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-green-500 disabled:hover:shadow-none" + (formValid ? "" : " opacity-60")}
      >
        {submitting ? (
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
        ) : (
          <ShoppingCart className="h-4 w-4" aria-hidden="true" />
        )}
        Buy Now · {CURRENCY}{total.toFixed(2)}
      </button>
    );
  }

  // unavailable
  if (availability.whatsappUrl) {
    return (
      <button
        type="button"
        onClick={onWhatsapp}
        aria-disabled={!formValid}
        aria-label="Continue on WhatsApp"
        className={"flex w-full items-center justify-center gap-2.5 rounded-xl bg-green-500 px-6 py-3.5 text-sm font-bold tracking-wide text-white transition-all hover:bg-green-600 hover:shadow-lg hover:shadow-green-500/30 active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-green-700 focus-visible:outline-offset-2" + (formValid ? "" : " opacity-60")}
      >
        <MessageCircle className="h-4 w-4" aria-hidden="true" />
        Continue on WhatsApp
      </button>
    );
  }

  return (
    <a
      href={`mailto:${CONTACT_EMAIL}`}
      className="flex w-full items-center justify-center gap-2.5 rounded-xl border border-gray-200 bg-white px-6 py-3.5 text-sm font-bold tracking-wide text-foreground transition-colors hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-violet-600 focus-visible:outline-offset-2"
    >
      Contact us to complete your order
    </a>
  );
}

// Fire-and-forget diversion log. Failures are intentionally ignored — this must
// never block or surface an error to the user.
function logDiversion(params: {
  planName: string;
  email: string;
  name: string;
  phone: string;
  proxyOn: boolean;
  extraConnections: number;
  total: number;
  reason: string;
}) {
  const body = JSON.stringify({
    siteSlug: SITE_SLUG,
    planName: params.planName,
    email: params.email || undefined,
    name: params.name || undefined,
    phone: params.phone || undefined,
    proxyProtection: params.proxyOn,
    extraConnections: params.extraConnections,
    amountCents: Math.round(params.total * 100),
    reason: params.reason,
  });

  const post = (url: string) =>
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      keepalive: true,
      body,
    });

  try {
    // Straight to the hub first — unchanged, and the only hop when it works.
    post(`${CHECKOUT_HUB_URL}/api/diversion`)
      .then((res) => {
        if (!res.ok) throw new Error(`status ${res.status}`);
      })
      .catch(() => {
        // The hub is a third-party domain here, so a failure is as likely to
        // be an ad blocker as an outage. Retry through our own origin, which
        // extensions do not block, and let the server make the hop.
        post("/api/lead").catch(() => {});
      });
  } catch {
    // Lead capture must never be able to break the checkout.
  }
}
