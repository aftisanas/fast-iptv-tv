import type { Metadata } from "next";
import { SITE_NAME, CONTACT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "IPTV Providers UK DMCA Policy",
  description: `DMCA and copyright policy for ${SITE_NAME} — the rules applied to copyright notices sent to this IPTV provider.`,
  alternates: { canonical: "/dmca" },
};

export default function DMCAPage() {
  return (
    <div className="pt-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">IPTV Providers UK DMCA Policy</h1>
        <div className="space-y-6 text-sm text-gray-600 leading-relaxed">
          <p className="text-muted">Last updated: 1 April 2026</p>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">IPTV Providers UK Copyright Policy</h2>
            <p>{SITE_NAME} respects the intellectual property rights of others and expects subscribers to do the same. The service complies with the Digital Millennium Copyright Act (DMCA) and responds promptly to valid copyright infringement notices submitted through the channels below.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Reporting Infringement To IPTV Providers UK</h2>
            <p>If content available through the service is believed to infringe a copyright, please send a written notice to the designated copyright agent at <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">{CONTACT_EMAIL}</a> with the following information:</p>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>A description of the copyrighted work claimed to have been infringed</li>
              <li>Identification of the material claimed to be infringing</li>
              <li>Contact information (name, address, telephone, email)</li>
              <li>A statement of good faith belief that the use is not authorised</li>
              <li>A statement that the information in the notification is accurate</li>
              <li>A physical or electronic signature</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">IPTV Providers UK Disclaimer</h2>
            <p>{SITE_NAME} is not affiliated with any television networks or content providers. All trademarks and logos mentioned on this website are the property of their respective owners. Subscribers are responsible for ensuring compliance with all applicable laws regarding any content accessed via the platform.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
