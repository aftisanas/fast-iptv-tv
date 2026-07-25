import type { Metadata } from "next";
import { SITE_NAME, CONTACT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${SITE_NAME}. Learn how we collect, use, and protect your personal data.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="pt-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
        <div className="space-y-6 text-sm text-gray-600 leading-relaxed">
          <p className="text-muted">Last updated: 1 April 2026</p>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">1. Information We Collect</h2>
            <p>We collect information you provide directly, including your name, email address, and payment information when you subscribe to our service. We also collect usage data such as device information, IP addresses, and viewing preferences to improve our service.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">2. How We Use Your Information</h2>
            <p>Your information is used to provide and maintain our IPTV service, process payments, send service-related communications, provide customer support, and improve user experience. We do not sell your personal data to third parties.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">3. Data Protection</h2>
            <p>We implement industry-standard security measures to protect your personal information, including SSL encryption for all data transmissions and secure storage of payment details. We comply with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">4. Your Rights</h2>
            <p>Under UK GDPR, you have the right to access, rectify, erase, restrict processing, and port your personal data. You may also object to processing and withdraw consent at any time. To exercise these rights, contact us at <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">{CONTACT_EMAIL}</a>.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">5. Cookies</h2>
            <p>Our website uses essential cookies to ensure functionality and analytics cookies to understand how visitors interact with our site. You can manage cookie preferences through your browser settings.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">6. Contact</h2>
            <p>For privacy-related enquiries, contact our Data Protection Officer at <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">{CONTACT_EMAIL}</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
