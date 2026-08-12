import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, MessageCircle } from "lucide-react";
import {
  SITE_NAME,
  WHATSAPP_DISPLAY,
  WHATSAPP_NUMBER,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Payment Successful",
  description: `Thank you for your ${SITE_NAME} order. Your login credentials are on their way.`,
  alternates: { canonical: "/thanks" },
  robots: { index: false, follow: false },
};

type ThanksSearchParams = {
  order?: string | string[];
  cart?: string | string[];
};

const firstParam = (value: string | string[] | undefined): string | null => {
  if (Array.isArray(value)) return value[0] ?? null;
  return value ?? null;
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

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}`;

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

          <p className="text-base text-muted leading-relaxed mb-6">
            Your credentials are on their way — check your email in 30 seconds.
          </p>

          {reference && (
            <div className="mb-8 rounded-xl border border-gray-100 bg-gray-50/80 px-5 py-4">
              <div className="text-[10px] font-semibold tracking-[0.15em] text-muted">
                {orderId ? "ORDER REFERENCE" : "CART REFERENCE"}
              </div>
              <div className="mt-1 font-mono text-xs text-foreground break-all">
                {reference}
              </div>
            </div>
          )}

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
