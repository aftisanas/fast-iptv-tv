import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, MessageCircle, PlayCircle } from "lucide-react";
import {
  SITE_NAME,
  WHATSAPP_DISPLAY,
  WHATSAPP_NUMBER,
} from "@/lib/constants";
import OrderReference from "./OrderReference";

export const metadata: Metadata = {
  title: "Payment Successful",
  description: `Thank you for your ${SITE_NAME} order. Your login credentials are on their way.`,
  alternates: { canonical: "/thanks" },
  robots: { index: false, follow: false },
};

type ThanksSearchParams = {
  order?: string | string[];
  cart?: string | string[];
  plan?: string | string[];
  amount?: string | string[];
  proxy?: string | string[];
  extras?: string | string[];
};

const firstParam = (value: string | string[] | undefined): string | null => {
  if (Array.isArray(value)) return value[0] ?? null;
  return value ?? null;
};

const parseIntParam = (value: string | null): number | null => {
  if (value === null) return null;
  const n = parseInt(value, 10);
  return Number.isFinite(n) ? n : null;
};

export default async function ThanksPage({
  searchParams,
}: {
  searchParams: Promise<ThanksSearchParams>;
}) {
  const resolved = await searchParams;
  const orderId = firstParam(resolved.order);
  const cartId = firstParam(resolved.cart);
  const reference = orderId ?? cartId;

  const planName = firstParam(resolved.plan);
  const amountPence = parseIntParam(firstParam(resolved.amount));
  const proxyOn = firstParam(resolved.proxy) === "1";
  const extras = parseIntParam(firstParam(resolved.extras)) ?? 0;
  const amountPounds = amountPence !== null ? amountPence / 100 : null;
  const showSummary = Boolean(planName);

  const supportMessage = reference
    ? `Hi, I need help with my order ${reference}`
    : `Hi, I need help with my ${SITE_NAME} order`;
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(supportMessage)}`;

  return (
    <div className="pt-20">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="rounded-2xl border border-violet-100/60 bg-white p-8 sm:p-10 shadow-2xl shadow-purple-900/10">
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50">
            <CheckCircle2 className="h-8 w-8 text-emerald-600" aria-hidden="true" />
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Payment successful
          </h1>

          <p className="text-base text-muted leading-relaxed mb-4">
            Your login details are on their way. They usually arrive within a minute.
          </p>

          <div
            role="note"
            className="mb-6 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs leading-relaxed text-amber-900"
          >
            If you don&apos;t see the email, check your spam or junk folder and mark it
            as &ldquo;Not spam&rdquo; so future emails reach you.
          </div>

          {showSummary && (
            <div className="mb-6 rounded-xl border border-gray-100 bg-gray-50/80 px-5 py-4">
              <div className="text-[10px] font-semibold tracking-[0.15em] text-muted mb-3">
                ORDER SUMMARY
              </div>
              <ul className="space-y-1.5 text-sm text-foreground">
                <li>{planName}</li>
                {proxyOn && <li>Proxy Protection</li>}
                {extras > 0 && (
                  <li>
                    {extras} Extra Connection{extras > 1 ? "s" : ""}
                  </li>
                )}
              </ul>
              {amountPounds !== null && (
                <div className="border-t border-gray-100 mt-3 pt-3 flex items-center justify-between">
                  <span className="text-sm font-semibold text-foreground">Total</span>
                  <span className="text-base font-extrabold text-accent">
                    £{amountPounds.toFixed(2)}
                  </span>
                </div>
              )}
            </div>
          )}

          {reference && (
            <OrderReference
              reference={reference}
              label={orderId ? "ORDER REFERENCE" : "CART REFERENCE"}
            />
          )}

          <div className="mb-8">
            <div className="text-[10px] font-semibold tracking-[0.15em] text-muted mb-2">
              GETTING STARTED
            </div>
            <Link
              href="/tutorials"
              className="flex items-center gap-3 rounded-xl border border-violet-100 bg-violet-50/50 px-4 py-3 transition-colors hover:bg-violet-50"
            >
              <PlayCircle
                className="h-5 w-5 shrink-0 text-violet-600"
                aria-hidden="true"
              />
              <div>
                <div className="text-sm font-semibold text-foreground">
                  Setup guides
                </div>
                <div className="text-xs text-muted">
                  Setup guides for Firestick, Smart TV, and mobile
                </div>
              </div>
            </Link>
          </div>

          <div className="space-y-3">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Contact ${SITE_NAME} support on WhatsApp at ${WHATSAPP_DISPLAY}`}
              className="flex w-full items-center justify-center gap-2.5 rounded-xl bg-green-500 px-6 py-3.5 text-sm font-bold tracking-wide text-white transition-all hover:bg-green-600 hover:shadow-lg hover:shadow-green-500/30 active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-green-700 focus-visible:outline-offset-2"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Need help? Contact us on WhatsApp
            </a>

            <Link
              href="/"
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-violet-600 focus-visible:outline-offset-2"
            >
              Back to {SITE_NAME}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
