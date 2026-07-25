import type { Metadata } from "next";
import { SITE_NAME, CONTACT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "IPTV Providers UK Privacy Policy",
  description: `Privacy policy for ${SITE_NAME}. How this IPTV provider collects, uses and protects personal data under UK GDPR.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="pt-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">IPTV Providers UK Privacy Policy</h1>
        <div className="space-y-6 text-sm text-gray-600 leading-relaxed">
          <p className="text-muted">Last updated: 1 April 2026</p>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">1. Information IPTV Providers UK Collects</h2>
            <p>The service collects information provided directly by the subscriber, including name, email address and payment information at the point of subscription. Usage data such as device information, IP addresses and viewing preferences is also recorded to improve the service.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">2. How IPTV Providers UK Uses Subscriber Information</h2>
            <p>Subscriber information is used to provide and maintain the IPTV service, process payments, send service-related communications, deliver customer support and improve the product. Personal data is not sold to third parties.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">3. Data Protection Standards At IPTV Providers UK</h2>
            <p>The service applies industry-standard security measures to protect personal information, including SSL encryption for all data transmissions and secure storage of payment details. The service complies with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">4. Subscriber Rights With IPTV Providers UK</h2>
            <p>Under UK GDPR, subscribers have the right to access, rectify, erase, restrict processing and port personal data. Subscribers may also object to processing and withdraw consent at any time. To exercise these rights, contact <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">{CONTACT_EMAIL}</a>.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">5. Cookies On The IPTV Providers UK Site</h2>
            <p>The website uses essential cookies to ensure functionality and analytics cookies to understand how visitors interact with the pages. Cookie preferences can be managed through any major browser.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">6. IPTV Providers UK Privacy Contact</h2>
            <p>For privacy-related enquiries, contact the Data Protection Officer at <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">{CONTACT_EMAIL}</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
