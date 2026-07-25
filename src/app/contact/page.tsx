import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact IPTV Providers UK — 24/7 Named British Support Team",
  description:
    "Contact the IPTV Providers UK support team via WhatsApp, email or live chat, 24/7. Named British staff, average first reply under four minutes — setup help, troubleshooting and billing answers on record.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <ContactContent />;
}
