import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Fast IPTV — 24/7 UK IPTV Support",
  description:
    "Get in touch with the Fast IPTV support team. 24/7 fast IPTV support via email and live chat — setup, troubleshooting and account help in one place.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <ContactContent />;
}
