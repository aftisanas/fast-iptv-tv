import type { Metadata } from "next";
import { SITE_NAME, CONTACT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "IPTV Providers UK Terms of Service",
  description: `Terms and conditions for using ${SITE_NAME}. Subscription rules, payment terms and acceptable use for every IPTV providers UK plan.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="pt-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">IPTV Providers UK Terms of Service</h1>
        <div className="space-y-6 text-sm text-gray-600 leading-relaxed">
          <p className="text-muted">Last updated: 1 April 2026</p>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">1. Acceptance Of IPTV Providers UK Terms</h2>
            <p>By accessing and using {SITE_NAME} (&ldquo;the Service&rdquo;), the subscriber agrees to be bound by these Terms of Service. Subscribers who do not agree with any part of these terms must not use the Service.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">2. IPTV Providers UK Service Description</h2>
            <p>{SITE_NAME} provides Internet Protocol Television (IPTV) streaming services, delivering live television channels and video-on-demand content over the internet to subscribers in the United Kingdom and internationally.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">3. IPTV Providers UK Subscriptions &amp; Payments</h2>
            <p>Subscriptions are billed according to the plan selected at the time of purchase. All prices are displayed in British Pounds (GBP). The service offers 3-month, 6-month, 12-month and 24-month terms. Payment is due at the start of each billing period.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">4. IPTV Providers UK Refund Policy</h2>
            <p>A 30-day money-back guarantee applies to all new subscriptions. If the service does not meet expectations within the first 30 days, the support team issues a full refund. Refunds are processed within 5–10 business days.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">5. IPTV Providers UK Acceptable Use</h2>
            <p>Subscribers agree not to redistribute, resell or share subscription credentials with unauthorised parties. Each subscription is for personal, non-commercial use only. The service reserves the right to suspend or terminate accounts that violate these terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">6. IPTV Providers UK Service Availability</h2>
            <p>The service aims to maintain high availability but does not guarantee uninterrupted access. Scheduled maintenance, technical issues or circumstances beyond operational control may occasionally affect availability. Planned maintenance is announced in advance wherever practical.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">7. IPTV Providers UK Contact</h2>
            <p>For questions about these Terms of Service, contact <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">{CONTACT_EMAIL}</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
