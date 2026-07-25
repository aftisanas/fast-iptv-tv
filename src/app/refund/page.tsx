import type { Metadata } from "next";
import { SITE_NAME, CONTACT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "IPTV Providers UK Refund Policy",
  description: `${SITE_NAME} refund policy. 30-day money-back guarantee on every plan from the #1 rated UK IPTV provider.`,
  alternates: { canonical: "/refund" },
};

export default function RefundPage() {
  return (
    <div className="pt-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">IPTV Providers UK Refund Policy</h1>
        <div className="space-y-6 text-sm text-gray-600 leading-relaxed">
          <p className="text-muted">Last updated: 1 April 2026</p>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">IPTV Providers UK 30-Day Money-Back Guarantee</h2>
            <p>At {SITE_NAME}, the service stands behind its commitments with a no-questions-asked 30-day money-back guarantee on all new subscriptions. If streaming quality, channel selection or any other element disappoints within the first 30 days, a full refund follows. No hoops, no delays.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">How To Request A Refund From IPTV Providers UK</h2>
            <p>To start a refund, contact the support team via WhatsApp or email at <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">{CONTACT_EMAIL}</a>. Include the subscription details and, if possible, a short note on the reason — optional but helpful for continuous improvement.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">IPTV Providers UK Refund Processing Time</h2>
            <p>Refund requests are typically processed within 24–48 hours of receipt. Depending on the original payment method, the refund may take an additional 5–10 business days to appear on the statement.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">IPTV Providers UK Refund Conditions</h2>
            <p>The 30-day money-back guarantee applies to first-time purchases only. Renewals and repeat subscriptions are subject to a 7-day refund window. Refunds are processed within 5–7 business days.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
