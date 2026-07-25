import type { Metadata } from "next";
import { SITE_NAME, CONTACT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: `${SITE_NAME} refund policy. 30-day money-back guarantee on all plans.`,
  alternates: { canonical: "/refund" },
};

export default function RefundPage() {
  return (
    <div className="pt-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">Refund Policy</h1>
        <div className="space-y-6 text-sm text-gray-600 leading-relaxed">
          <p className="text-muted">Last updated: 1 April 2026</p>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">30-Day Money-Back Guarantee</h2>
            <p>At {SITE_NAME}, we stand behind our service with a no-questions-asked 30-day money-back guarantee on all new subscriptions. If you are not completely satisfied with the streaming quality, channel selection, or anything else within the first 30 days, we will issue a full refund. No hoops, no delays.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">How to Request a Refund</h2>
            <p>To request a refund, simply contact our customer support team via WhatsApp or email at <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">{CONTACT_EMAIL}</a>. Please include your subscription details and the reason for your refund request (optional but helpful).</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Processing Time</h2>
            <p>Refund requests are typically processed within 24–48 hours of receipt. Depending on your payment method, the refund may take an additional 5–10 business days to appear in your account.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Conditions</h2>
            <p>The 30-day money-back guarantee applies to first-time purchases only. Renewals and repeat subscriptions are subject to a 7-day refund window. Refunds are processed within 5–7 business days.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
