import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact IPTV Subscription UK 4K — 24/7 UK IPTV Support",
  description:
    "Get in touch with the IPTV Subscription UK 4K support team. 24/7 IPTV subscription support via WhatsApp, email and live chat. A named UK team that answers in minutes — setup, troubleshooting and account help all in one place.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <ContactContent />;
}
