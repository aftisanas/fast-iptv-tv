import type { Metadata } from "next";
import { SITE_NAME, CONTACT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "DMCA Policy",
  description: `DMCA and copyright policy for ${SITE_NAME}.`,
  alternates: { canonical: "/dmca" },
};

export default function DMCAPage() {
  return (
    <div className="pt-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">DMCA Policy</h1>
        <div className="space-y-6 text-sm text-gray-600 leading-relaxed">
          <p className="text-muted">Last updated: 1 April 2026</p>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Copyright Policy</h2>
            <p>{SITE_NAME} respects the intellectual property rights of others and expects its users to do the same. We comply with the Digital Millennium Copyright Act (DMCA) and respond promptly to valid copyright infringement notices.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Reporting Copyright Infringement</h2>
            <p>If you believe that content available through our service infringes your copyright, please send a written notice to our designated copyright agent at <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">{CONTACT_EMAIL}</a> with the following information:</p>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>A description of the copyrighted work you claim has been infringed</li>
              <li>Identification of the material that you claim is infringing</li>
              <li>Your contact information (name, address, telephone, email)</li>
              <li>A statement that you have a good faith belief the use is not authorised</li>
              <li>A statement that the information in the notification is accurate</li>
              <li>Your physical or electronic signature</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Disclaimer</h2>
            <p>{SITE_NAME} is not affiliated with any television networks or content providers. All trademarks and logos mentioned on this website are the property of their respective owners. Users are responsible for ensuring compliance with all applicable laws regarding any content accessed via our platform.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
