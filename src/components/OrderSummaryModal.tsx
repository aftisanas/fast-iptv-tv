// TODO: Re-enable Stripe/Shopify card checkout when payment accounts are set up.
// Original SECURE CHECKOUT button code preserved in git history.
// For now, WhatsApp is the sole checkout flow.
"use client";

import { useEffect, useRef, useState } from "react";
import { X, Shield, MessageCircle, Minus, Plus } from "lucide-react";
import { CHECKOUT_COPY, EXTRA_CONNECTION_PRICE, EXTRA_CONNECTIONS_MAX, SITE_NAME } from "@/lib/constants";
import { buildWhatsAppCheckoutUrl, calculateOrderTotal } from "@/lib/whatsapp";

type OrderSummaryModalProps = {
  open: boolean;
  onClose: () => void;
  planName: string;
  planPrice: number;
  proxyPrice: number;
  currency?: string;
};

const formatPrice = (value: number, currency: string) =>
  `${currency}${value.toFixed(2)}`;

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

  useEffect(() => {
    setProxyOn(false);
    setExtraConnections(0);
  }, [planName]);

  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = prevOverflow;
      previouslyFocused?.focus?.();
    };
  }, [open, onClose]);

  if (!open) return null;

  const total = calculateOrderTotal({
    planPrice,
    proxyEnabled: proxyOn,
    proxyPrice,
    extraConnections,
  });

  const extraConnectionsSubtotal = extraConnections * EXTRA_CONNECTION_PRICE;

  const handleCheckout = () => {
    const url = buildWhatsAppCheckoutUrl({
      planName,
      planPrice,
      proxyEnabled: proxyOn,
      proxyPrice,
      extraConnections,
      brandName: SITE_NAME,
    });
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
      {/* Backdrop */}
      <div
        onClick={onClose}
        aria-hidden="true"
        className="absolute inset-0 bg-foreground/60 backdrop-blur-sm"
      />

      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="order-summary-title"
        className="relative w-full max-w-md overflow-hidden rounded-2xl border border-violet-100/60 bg-white shadow-2xl shadow-purple-900/20"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
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
            aria-label="Close order summary"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-muted transition-colors hover:bg-gray-200 hover:text-foreground focus-visible:outline-2 focus-visible:outline-violet-600 focus-visible:outline-offset-2"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        {/* Body */}
        <div className="space-y-5 px-6 pt-5 pb-6">
          {/* Plan row */}
          <div className="flex items-center justify-between rounded-xl border border-gray-100 bg-gray-50/80 px-5 py-4">
            <span className="text-base font-semibold text-foreground">
              {planName}
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
            <h3 className="mb-3 text-xs font-bold tracking-[0.18em] text-muted">
              RECOMMENDED OPTIONS
            </h3>

            {/* Proxy Protection */}
            <div className="rounded-xl border border-gray-100 bg-white px-5 py-4">
              <div className="mb-1 flex items-start justify-between gap-3">
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

              <div className="mb-2 text-sm font-bold text-accent">
                +{formatPrice(proxyPrice, currency)}
              </div>

              <p className="text-xs leading-relaxed text-muted">
                An integrated proxy designed to prevent ISP tracking of service usage.
              </p>
            </div>

            {/* Extra Connections */}
            <div className="mt-3 rounded-xl border border-gray-100 bg-white px-5 py-4">
              <div className="mb-1 flex items-start justify-between gap-3">
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

              <div className="mt-2 text-xs font-semibold text-accent">
                {CHECKOUT_COPY.extraConnectionsPriceLabel}
              </div>

              {extraConnections > 0 && (
                <div className="mt-1 text-xs text-muted">
                  {extraConnections} × £{EXTRA_CONNECTION_PRICE.toFixed(2)} ={" "}
                  <span className="font-semibold text-foreground">
                    {formatPrice(extraConnectionsSubtotal, currency)}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="space-y-4 border-t border-gray-100 bg-gray-50/70 px-6 py-5">
          <div className="flex items-center justify-between">
            <span className="text-base font-medium text-muted">Total</span>
            <span className="text-xl font-extrabold text-foreground">
              {formatPrice(total, currency)}
            </span>
          </div>

          <button
            type="button"
            onClick={handleCheckout}
            aria-label={`${CHECKOUT_COPY.buttonLabelPrefix} for ${formatPrice(total, currency)}`}
            className="flex w-full items-center justify-center gap-2.5 rounded-xl bg-green-500 px-6 py-3.5 text-sm font-bold tracking-wide text-white transition-all hover:bg-green-600 hover:shadow-lg hover:shadow-green-500/30 active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-green-700 focus-visible:outline-offset-2"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            {CHECKOUT_COPY.buttonLabelPrefix} · {formatPrice(total, currency)}
          </button>

          <div className="text-center text-xs text-muted">
            {CHECKOUT_COPY.buttonSubtitle}
          </div>

          <div className="flex items-center justify-center gap-2 text-xs text-muted">
            <Shield className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" />
            <span>{CHECKOUT_COPY.footerNote}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
