import type { Metadata } from "next";
import { SITE_NAME, CONTACT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms and conditions for using ${SITE_NAME} IPTV services.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="pt-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
        <div className="space-y-6 text-sm text-gray-600 leading-relaxed">
          <p className="text-muted">Last updated: 1 April 2026</p>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">1. Acceptance of Terms</h2>
            <p>By accessing and using {SITE_NAME} (&ldquo;the Service&rdquo;), you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must not use our Service.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">2. Service Description</h2>
            <p>{SITE_NAME} provides Internet Protocol Television (IPTV) streaming services, delivering live television channels and video-on-demand content over the internet to subscribers in the United Kingdom and internationally.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">3. Subscriptions & Payments</h2>
            <p>Subscriptions are billed according to the plan selected at the time of purchase. All prices are displayed in British Pounds (GBP). We offer monthly, quarterly, and annual billing cycles. Payment is due at the start of each billing period.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">4. Refund Policy</h2>
            <p>We offer a 30-day money-back guarantee on all new subscriptions. If you are not satisfied with our service within the first 30 days, contact us for a full refund. Refunds are processed within 5–10 business days.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">5. Acceptable Use</h2>
            <p>You agree not to redistribute, resell, or share your subscription credentials with unauthorised parties. Each subscription is for personal, non-commercial use only. We reserve the right to suspend or terminate accounts that violate these terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">6. Service Availability</h2>
            <p>While we aim for 99.9% uptime, we do not guarantee uninterrupted access to the Service. Scheduled maintenance, technical issues, or circumstances beyond our control may occasionally affect availability. We will endeavour to notify users of planned maintenance in advance.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">7. Contact</h2>
            <p>For questions about these Terms of Service, please contact us at <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">{CONTACT_EMAIL}</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
