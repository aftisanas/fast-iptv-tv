import { CHECKOUT_HUB_URL } from "./constants";

export type CheckoutResponse =
  | {
      kind: "shopify";
      checkoutUrl: string;
      orderId: string;
      /**
       * What Shopify will actually charge, read back from the cart by the hub
       * rather than assumed. This is the number the page must reconcile
       * against before sending anyone to pay.
       */
      amountCents?: number;
      currency?: string;
    }
  | { kind: "whatsapp"; whatsappUrl: string };

export interface CheckoutHubParams {
  planName: string;
  siteSlug: string;
  email: string;
  name: string;
  phone?: string;
  proxyEnabled: boolean;
  extraConnections: number;
  /** ISO-3166 alpha-2. Absent means the hub falls back to CF-IPCountry. */
  countryCode?: string;
}

interface HubApiResponse {
  storesUnavailable?: boolean;
  whatsappUrl?: string;
  checkoutUrl?: string;
  orderId?: string;
  amountCents?: number;
  currency?: string;
}

export async function callCheckoutHub(
  params: CheckoutHubParams
): Promise<CheckoutResponse> {
  const { planName, siteSlug, email, name, phone, proxyEnabled, extraConnections, countryCode } = params;

  const res = await fetch(`${CHECKOUT_HUB_URL}/api/checkout`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      siteSlug,
      planName,
      email,
      name,
      phone,
      ...(countryCode ? { countryCode } : {}),
      addons: {
        proxyProtection: proxyEnabled,
        extraConnections,
      },
    }),
  });

  if (!res.ok) {
    throw new Error(`Checkout hub returned ${res.status}`);
  }

  const data = (await res.json()) as HubApiResponse;

  if (data.storesUnavailable) {
    if (!data.whatsappUrl) {
      throw new Error("Checkout hub reported stores unavailable without a fallback URL");
    }
    return { kind: "whatsapp", whatsappUrl: data.whatsappUrl };
  }

  if (!data.checkoutUrl || !data.orderId) {
    /**
     * Observed in production when a store is inside its post-sale cooldown:
     * the hub answers 200 with neither a checkoutUrl nor storesUnavailable.
     * Throwing here made a routine, expected state look like an outage in the
     * logs. It is a degradation, so it is reported as one — the caller already
     * knows how to fall back to WhatsApp and record the lead.
     */
    console.warn("[checkout] hub returned no checkoutUrl; treating as unavailable");
    return { kind: "whatsapp", whatsappUrl: data.whatsappUrl ?? "" };
  }

  return {
    kind: "shopify",
    checkoutUrl: data.checkoutUrl,
    orderId: data.orderId,
    amountCents: data.amountCents,
    currency: data.currency,
  };
}
