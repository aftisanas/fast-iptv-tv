/**
 * Funnel instrumentation.
 *
 * Six orders in fifteen days was discovered by counting Shopify rows by hand.
 * Nothing on the path from "chose a plan" to "paid" was measured, so a drop-off
 * could not be located and a fix could not be proven to have worked. These are
 * the four events that make that path visible, plus the two that catch it
 * silently degrading.
 *
 * Deliberately vendor-neutral: events are pushed to `window.dataLayer`, which
 * is what GTM and GA4 already read. No vendor script ships from here, so this
 * file sets no cookies and needs no consent banner on its own — it just means
 * the data is already flowing on the day a tag manager is added.
 */

export type AnalyticsEvent =
  /** A plan button was clicked on the pricing section. */
  | "plan_selected"
  /** The checkout page rendered with a valid plan. */
  | "checkout_viewed"
  /** The hub availability probe failed or timed out — see `reason`. */
  | "availability_failed"
  /** Checkout fell back to WhatsApp instead of the card checkout. */
  | "checkout_degraded"
  /** The buyer submitted the form and we called the hub. */
  | "order_submitted"
  /** The hub returned a Shopify URL and we are handing the buyer over. */
  | "checkout_handoff";

type Payload = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: Payload[];
  }
}

/**
 * Fire and forget. Never throws: a missing tag manager, a blocked script or a
 * server render must not be able to break a checkout.
 */
export function track(event: AnalyticsEvent, payload: Payload = {}): void {
  if (typeof window === "undefined") return;

  try {
    window.dataLayer = window.dataLayer ?? [];
    window.dataLayer.push({ event, ...payload });

    if (process.env.NODE_ENV === "development") {
      console.debug("[analytics]", event, payload);
    }
  } catch {
    // Analytics is never worth a broken page.
  }
}
