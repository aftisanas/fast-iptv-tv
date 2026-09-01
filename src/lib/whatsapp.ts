import { WHATSAPP_NUMBER, EXTRA_CONNECTION_PRICE } from "./constants";

export interface WhatsAppOrderDetails {
  planName: string;
  planPrice: number;
  proxyEnabled: boolean;
  proxyPrice: number;
  extraConnections: number;
  /** Per-plan unit price for one extra connection over the full term. */
  extraConnectionPrice?: number;
  brandName?: string;
}

export function calculateOrderTotal(
  order: Omit<WhatsAppOrderDetails, "brandName" | "planName">
): number {
  const unit = order.extraConnectionPrice ?? EXTRA_CONNECTION_PRICE;
  return (
    order.planPrice +
    (order.proxyEnabled ? order.proxyPrice : 0) +
    order.extraConnections * unit
  );
}

export interface WhatsappFallbackMessage {
  planName: string;
  proxyOn: boolean;
  extraConnections: number;
  total: number;
  currency: string;
  /** Carried into the message so the chat can be matched to the hub record. */
  name?: string;
  email?: string;
}

export function buildWhatsappMessage({
  planName,
  proxyOn,
  extraConnections,
  total,
  currency,
  name,
  email,
}: WhatsappFallbackMessage): string {
  const parts = [`Hi, I'd like to complete my ${planName} order.`];

  // The buyer may message from a different number than they typed, so the
  // email is what ties this conversation to the order logged on the hub.
  if (name) parts.push(`Name: ${name}.`);
  if (email) parts.push(`Email: ${email}.`);

  const addons: string[] = [];
  if (proxyOn) addons.push("Proxy Protection");
  if (extraConnections > 0) {
    addons.push(
      `${extraConnections} Extra Connection${extraConnections > 1 ? "s" : ""}`
    );
  }

  if (addons.length > 0) {
    parts.push(`Add-ons: ${addons.join(", ")}.`);
  }

  parts.push(`Total: ${currency}${total.toFixed(2)}.`);
  parts.push(
    "The checkout page wasn't available — can you help me complete the order here?"
  );

  return parts.join(" ");
}

export function buildWhatsAppCheckoutUrl(order: WhatsAppOrderDetails): string {
  const brand = order.brandName ?? "the service";
  const unit = order.extraConnectionPrice ?? EXTRA_CONNECTION_PRICE;
  const extraConnectionsPrice = order.extraConnections * unit;
  const total = calculateOrderTotal({
    planPrice: order.planPrice,
    proxyEnabled: order.proxyEnabled,
    proxyPrice: order.proxyPrice,
    extraConnections: order.extraConnections,
    extraConnectionPrice: unit,
  });

  const lines = [
    `Hi 👋 I'd like to order ${brand}.`,
    "",
    `Plan: ${order.planName} (£${order.planPrice.toFixed(2)})`,
  ];

  if (order.proxyEnabled) {
    lines.push(`Proxy Protection: Yes (+£${order.proxyPrice.toFixed(2)})`);
  }

  if (order.extraConnections > 0) {
    lines.push(
      `Extra Connections: ${order.extraConnections} × £${unit.toFixed(2)} (+£${extraConnectionsPrice.toFixed(2)})`
    );
  }

  lines.push(
    "",
    `Total: £${total.toFixed(2)}`,
    "",
    "Please send me the payment details. Thanks!"
  );

  const message = lines.join("\n");
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
