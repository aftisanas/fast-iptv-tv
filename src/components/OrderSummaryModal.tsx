// Checkout flow: POSTs to the central checkout hub. Hub returns either a
// Shopify checkout URL (redirect) or a WhatsApp fallback URL when stores are
// unavailable. Loading overlay is held open for a minimum of 3s so the user
// perceives the "preparing secure checkout" step even on fast responses.
"use client";

import { useEffect, useRef, useState } from "react";
import { Loader2, MessageCircle, Minus, Plus, Shield, ShoppingCart, X } from "lucide-react";
import {
  CHECKOUT_COPY,
  EXTRA_CONNECTION_PRICE,
  EXTRA_CONNECTIONS_MAX,
  SITE_SLUG,
} from "@/lib/constants";
import { calculateOrderTotal } from "@/lib/whatsapp";
import { callCheckoutHub } from "@/lib/checkout";
import { toAccessLabel } from "@/lib/utils";

type OrderSummaryModalProps = {
  open: boolean;
  onClose: () => void;
  planName: string;
  planPrice: number;
  proxyPrice: number;
  currency?: string;
};

const MIN_LOADER_MS = 3000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const formatPrice = (value: number, currency: string) =>
  `${currency}${value.toFixed(2)}`;

// planName arrives from PricingSection as the raw "N Months" shape.
// toAccessLabel builds the display string; parseDurationMonths still tolerates
// both forms defensively.
const parseDurationMonths = (label: string): number | null => {
  const match = label.match(/^(\d+)[-\s]?Months?/i);
  if (!match) return null;
  const months = parseInt(match[1], 10);
  return Number.isFinite(months) && months > 0 ? months : null;
};

function buildWhatsappMessage({
  planName,
  proxyOn,
  extraConnections,
  total,
  currency,
}: {
  planName: string;
  proxyOn: boolean;
  extraConnections: number;
  total: number;
  currency: string;
}): string {
  const parts = [`Hi, I'd like to complete my ${planName} order.`];

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

  parts.push(`Total: ${formatPrice(total, currency)}.`);
  parts.push(
    "The checkout page wasn't available — can you help me complete the order here?"
  );

  return parts.join(" ");
}

export default function OrderSummaryModal({
  open,
  onClose,
  planName,
  planPrice,
  proxyPrice,
  currency = "£",
}: OrderSummaryModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [proxyOn, setProxyOn] = useState(false);
  const [extraConnections, setExtraConnections] = useState(0);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [whatsappFallback, setWhatsappFallback] = useState<string | null>(null);

  useEffect(() => {
    setProxyOn(false);
    setExtraConnections(0);
    setEmail("");
    setName("");
    setSubmitError(null);
    setWhatsappFallback(null);
  }, [planName]);

  useEffect(() => {
    if (!open) {
      setWhatsappFallback(null);
      setSubmitError(null);
      return;
    }

    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !submitting) onClose();
    };

    document.addEventListener("keydown", handleKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = prevOverflow;
      previouslyFocused?.focus?.();
    };
  }, [open, onClose, submitting]);

  if (!open) return null;

  const total = calculateOrderTotal({
    planPrice,
    proxyEnabled: proxyOn,
    proxyPrice,
    extraConnections,
  });

  const extraConnectionsSubtotal = extraConnections * EXTRA_CONNECTION_PRICE;

  const displayLabel = toAccessLabel(planName);
  const durationMonths = parseDurationMonths(planName);
  const proxyPerMonth = durationMonths ? proxyPrice / durationMonths : null;
  const extraPerMonthPerConn = durationMonths
    ? EXTRA_CONNECTION_PRICE / durationMonths
    : null;
  const extraPerMonthTotal =
    durationMonths && extraConnections > 0
      ? extraConnectionsSubtotal / durationMonths
      : null;

  const trimmedName = name.trim();
  const trimmedEmail = email.trim();
  const emailValid = EMAIL_RE.test(trimmedEmail);
  const nameValid = trimmedName.length >= 2;
  const formValid = emailValid && nameValid;
  const canSubmit = formValid && !submitting;

  const handleCheckout = async () => {
    if (!canSubmit) return;

    setSubmitting(true);
    setSubmitError(null);

    const startedAt = Date.now();

    try {
      const [response] = await Promise.all([
        callCheckoutHub({
          planName,
          siteSlug: SITE_SLUG,
          email: trimmedEmail,
          name: trimmedName,
          proxyEnabled: proxyOn,
          extraConnections,
        }),
        new Promise<void>((resolve) => setTimeout(resolve, MIN_LOADER_MS)),
      ]);

      // Ensure elapsed >= MIN_LOADER_MS even if Promise.all math is off in edge cases.
      const elapsed = Date.now() - startedAt;
      if (elapsed < MIN_LOADER_MS) {
        await new Promise<void>((resolve) => setTimeout(resolve, MIN_LOADER_MS - elapsed));
      }

      if (response.kind === "shopify") {
        window.location.href = response.checkoutUrl;
        return;
      }

      setWhatsappFallback(response.whatsappUrl);
      setSubmitting(false);
      return;
    } catch (err) {
      const message =
        err instanceof Error && err.message
          ? err.message
          : "We couldn't reach checkout. Please try again.";
      setSubmitError(message);
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
      {/* Backdrop */}
      <div
        onClick={submitting ? undefined : onClose}
        aria-hidden="true"
        className="absolute inset-0 bg-foreground/60 backdrop-blur-sm"
      />

      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="order-summary-title"
        className="relative flex max-h-[90vh] w-full max-w-md md:max-w-2xl flex-col overflow-hidden rounded-2xl border border-violet-100/60 bg-white shadow-2xl shadow-purple-900/20"
      >
        {/* Header */}
        <div className="flex shrink-0 items-center justify-between border-b border-gray-100 px-6 md:px-8 py-5 md:py-6">
          <h2
            id="order-summary-title"
            className="text-xs font-bold tracking-[0.18em] text-foreground"
          >
            ORDER SUMMARY
          </h2>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            disabled={submitting}
            aria-label="Close order summary"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-muted transition-colors hover:bg-gray-200 hover:text-foreground focus-visible:outline-2 focus-visible:outline-violet-600 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto space-y-5 md:space-y-6 px-6 md:px-8 pt-5 md:pt-6 pb-6 md:pb-8">
          {/* Plan row */}
          <div className="flex items-center justify-between rounded-xl border border-gray-100 bg-gray-50/80 px-5 md:px-6 py-4 md:py-5">
            <span className="text-base font-semibold text-foreground">
              {displayLabel}
            </span>
            <div className="text-right">
              <div className="text-xl font-extrabold text-foreground">
                {formatPrice(planPrice, currency)}
              </div>
              <div className="mt-0.5 text-[10px] font-semibold tracking-[0.15em] text-muted">
                ONE-TIME PAYMENT
              </div>
            </div>
          </div>

          {/* Recommended options */}
          <div>
            <h3 className="mb-4 text-xs font-bold tracking-[0.18em] text-muted">
              RECOMMENDED OPTIONS
            </h3>

            <div className="grid gap-3 md:grid-cols-2 md:gap-4">
            {/* Proxy Protection */}
            <div className="rounded-xl border border-gray-100 bg-white px-5 md:px-6 py-4 md:py-5">
              <div className="mb-2 flex items-start justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm font-semibold text-foreground">
                    Proxy Protection
                  </span>
                  <span className="inline-flex items-center rounded-md bg-amber-100 px-2 py-0.5 text-[10px] font-bold tracking-[0.12em] text-amber-700">
                    POPULAR
                  </span>
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

              <div className="mb-3">
                {proxyPerMonth !== null ? (
                  <>
                    <div className="text-base font-bold text-accent">
                      +{formatPrice(proxyPerMonth, currency)}/month
                    </div>
                    <div className="mt-1 text-xs text-muted">
                      {formatPrice(proxyPrice, currency)} one-time · billed for {durationMonths} months
                    </div>
                  </>
                ) : (
                  <div className="text-base font-bold text-accent">
                    +{formatPrice(proxyPrice, currency)}
                  </div>
                )}
              </div>

              <p className="text-xs leading-relaxed text-muted">
                An integrated proxy designed to prevent ISP tracking of service usage.
              </p>
            </div>

            {/* Extra Connections */}
            <div className="rounded-xl border border-gray-100 bg-white px-5 md:px-6 py-4 md:py-5">
              <div className="mb-2 flex items-start justify-between gap-3">
                <div>
                  <div className="text-sm font-semibold text-foreground">
                    {CHECKOUT_COPY.extraConnectionsLabel}
                  </div>
                  <p className="mt-0.5 text-xs leading-relaxed text-muted">
                    {CHECKOUT_COPY.extraConnectionsHelp}
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() =>
                      setExtraConnections((v) => Math.max(0, v - 1))
                    }
                    disabled={extraConnections === 0}
                    aria-label="Decrease extra connections"
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white text-foreground transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white focus-visible:outline-2 focus-visible:outline-violet-600 focus-visible:outline-offset-2"
                  >
                    <Minus className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                  <span
                    aria-live="polite"
                    className="w-6 text-center text-sm font-bold text-foreground"
                  >
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
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white text-foreground transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white focus-visible:outline-2 focus-visible:outline-violet-600 focus-visible:outline-offset-2"
                  >
                    <Plus className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                </div>
              </div>

              <div className="mt-3">
                {extraPerMonthPerConn !== null ? (
                  <>
                    <div className="text-base font-bold text-accent">
                      +£{extraPerMonthPerConn.toFixed(2)}/month per connection
                    </div>
                    <div className="mt-1 text-xs text-muted">
                      £{EXTRA_CONNECTION_PRICE.toFixed(2)} one-time each · billed for {durationMonths} months
                    </div>
                  </>
                ) : (
                  <div className="text-sm font-semibold text-accent">
                    +£{EXTRA_CONNECTION_PRICE.toFixed(2)} per connection
                  </div>
                )}
              </div>

              {extraConnections > 0 && (
                <div className="mt-2 text-xs text-muted">
                  {extraConnections} × £{EXTRA_CONNECTION_PRICE.toFixed(2)} ={" "}
                  <span className="font-semibold text-foreground">
                    {formatPrice(extraConnectionsSubtotal, currency)}
                  </span>
                  {extraPerMonthTotal !== null && (
                    <>
                      {" · "}
                      <span className="font-semibold text-accent">
                        {formatPrice(extraPerMonthTotal, currency)}/month
                      </span>
                    </>
                  )}
                </div>
              )}
            </div>
            </div>
          </div>

          {/* Contact details */}
          <div>
            <h3 className="mb-4 text-xs font-bold tracking-[0.18em] text-muted">
              YOUR DETAILS
            </h3>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label
                  htmlFor="checkout-name"
                  className="mb-1.5 block text-xs font-semibold text-foreground"
                >
                  Full name
                </label>
                <input
                  id="checkout-name"
                  type="text"
                  autoComplete="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={submitting}
                  placeholder="Jane Smith"
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted/60 transition-colors focus:border-violet-400 focus:outline-2 focus:outline-violet-600 focus:outline-offset-1 disabled:cursor-not-allowed disabled:bg-gray-50"
                />
              </div>

              <div>
                <label
                  htmlFor="checkout-email"
                  className="mb-1.5 block text-xs font-semibold text-foreground"
                >
                  Email address
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
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted/60 transition-colors focus:border-violet-400 focus:outline-2 focus:outline-violet-600 focus:outline-offset-1 disabled:cursor-not-allowed disabled:bg-gray-50"
                />
                <p className="mt-1.5 text-[11px] leading-relaxed text-muted">
                  Your login credentials will be sent here after payment.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="shrink-0 space-y-4 border-t border-gray-100 bg-gray-50/70 px-6 md:px-8 py-5 md:py-6">
          <div className="flex items-center justify-between">
            <span className="text-base font-medium text-muted">Total</span>
            <span className="text-xl font-extrabold text-foreground">
              {formatPrice(total, currency)}
            </span>
          </div>

          {submitError && (
            <div
              role="alert"
              className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-xs font-medium text-red-700"
            >
              {submitError}
            </div>
          )}

          {whatsappFallback ? (
            <>
              <div
                role="status"
                className="mb-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-center text-xs leading-relaxed text-amber-800"
              >
                Card checkout is temporarily unavailable. Complete your order on WhatsApp — we&apos;ll respond within minutes.
              </div>
              <button
                type="button"
                onClick={() => {
                  const message = buildWhatsappMessage({
                    planName,
                    proxyOn,
                    extraConnections,
                    total,
                    currency,
                  });
                  const separator = whatsappFallback.includes("?") ? "&" : "?";
                  const finalUrl = `${whatsappFallback}${separator}text=${encodeURIComponent(message)}`;
                  window.open(finalUrl, "_blank", "noopener,noreferrer");
                }}
                aria-label="Continue on WhatsApp"
                className="flex w-full items-center justify-center gap-2.5 rounded-xl bg-green-500 px-6 py-3.5 text-sm font-bold tracking-wide text-white transition-all hover:bg-green-600 hover:shadow-lg hover:shadow-green-500/30 active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-green-700 focus-visible:outline-offset-2"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Continue on WhatsApp
              </button>
            </>
          ) : (
            <button
              type="button"
              onClick={handleCheckout}
              disabled={!canSubmit}
              aria-label={`Buy now for ${formatPrice(total, currency)}`}
              className="flex w-full items-center justify-center gap-2.5 rounded-xl bg-green-500 px-6 py-3.5 text-sm font-bold tracking-wide text-white transition-all hover:bg-green-600 hover:shadow-lg hover:shadow-green-500/30 active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-green-700 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-green-500 disabled:hover:shadow-none"
            >
              <ShoppingCart className="h-4 w-4" aria-hidden="true" />
              Buy Now · {formatPrice(total, currency)}
            </button>
          )}

          <div className="text-center text-xs text-muted">
            {CHECKOUT_COPY.buttonSubtitle}
          </div>

          <div className="flex items-center justify-center gap-2 text-xs text-muted">
            <Shield className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" />
            <span>{CHECKOUT_COPY.footerNote}</span>
          </div>
        </div>

        {/* Loading overlay — covers modal contents while POST + minimum wait is in flight */}
        {submitting && (
          <div
            role="status"
            aria-live="polite"
            className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 bg-white/90 backdrop-blur-sm"
          >
            <Loader2 className="h-10 w-10 animate-spin text-violet-600" aria-hidden="true" />
            <div className="text-center">
              <div className="text-sm font-bold text-foreground">
                Preparing your secure checkout…
              </div>
              <div className="mt-1 text-xs text-muted">
                One moment while we set things up.
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
