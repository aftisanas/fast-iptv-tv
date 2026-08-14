import { CHECKOUT_HUB_URL } from "./constants";

export type CheckoutResponse =
  | { kind: "shopify"; checkoutUrl: string; orderId: string }
  | { kind: "whatsapp"; whatsappUrl: string };

export interface CheckoutHubParams {
  planName: string;
  siteSlug: string;
  email: string;
  name: string;
  phone?: string;
  proxyEnabled: boolean;
  extraConnections: number;
}

interface HubApiResponse {
  storesUnavailable?: boolean;
  whatsappUrl?: string;
  checkoutUrl?: string;
  orderId?: string;
}

export async function callCheckoutHub(
  params: CheckoutHubParams
): Promise<CheckoutResponse> {
  const { planName, siteSlug, email, name, phone, proxyEnabled, extraConnections } = params;

  const res = await fetch(`${CHECKOUT_HUB_URL}/api/checkout`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      siteSlug,
      planName,
      email,
      name,
      phone,
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
    throw new Error("Checkout hub response missing checkoutUrl or orderId");
  }

  return { kind: "shopify", checkoutUrl: data.checkoutUrl, orderId: data.orderId };
}
