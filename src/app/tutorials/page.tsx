import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import TutorialsContent from "./TutorialsContent";

const pageUrl = `${SITE_URL}/tutorials`;

export const metadata: Metadata = {
  title: "Fast IPTV Setup Guides — Activate On Any Device",
  description:
    "Step-by-step Fast IPTV activation guides for Firestick, Smart TV (Samsung, LG), Android, iPhone, Apple TV, Windows and Mac. Post-purchase help for Fast IPTV customers.",
  alternates: { canonical: pageUrl },
  // Post-purchase content — must not compete with the homepage for "fast iptv".
  robots: {
    index: false,
    follow: true,
    googleBot: { index: false, follow: true },
  },
  openGraph: {
    type: "article",
    locale: "en_GB",
    siteName: SITE_NAME,
    url: pageUrl,
    title: "Fast IPTV Setup Guides — Activate On Any Device",
    description:
      "Step-by-step Fast IPTV activation guides for Firestick, Smart TV, Android, iPhone, PC and Mac.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fast IPTV Setup Guides — Activate On Any Device",
    description:
      "Step-by-step Fast IPTV activation guides for every device — Firestick, Smart TV, Android, iPhone, PC and Mac.",
  },
};

export default function TutorialsPage() {
  return (
    <>
      <TutorialsContent />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "How to activate Fast IPTV on Amazon Firestick",
            description:
              "Activate your Fast IPTV subscription on Amazon Firestick / Fire TV using the Downloader app, IPTV Smarters Pro and your Xtream Codes credentials.",
            totalTime: "PT5M",
            supply: [
              { "@type": "HowToSupply", name: "Amazon Firestick or Fire TV" },
              { "@type": "HowToSupply", name: "Fast IPTV welcome email credentials" },
            ],
            tool: [
              { "@type": "HowToTool", name: "Downloader app (by AFTVnews)" },
              { "@type": "HowToTool", name: "IPTV Smarters Pro" },
            ],
            step: [
              {
                "@type": "HowToStep",
                position: 1,
                name: "Allow unknown apps",
                text: "Open Settings → My Fire TV → Developer Options and enable Apps from Unknown Sources.",
              },
              {
                "@type": "HowToStep",
                position: 2,
                name: "Install Downloader",
                text: "From the home screen use Find → Search, type Downloader and install it.",
              },
              {
                "@type": "HowToStep",
                position: 3,
                name: "Download the player",
                text: "In Downloader, enter https://www.iptvsmarters.com/download and press Go.",
              },
              {
                "@type": "HowToStep",
                position: 4,
                name: "Install IPTV Smarters Pro",
                text: "Let the download finish, then choose Install.",
              },
              {
                "@type": "HowToStep",
                position: 5,
                name: "Sign in",
                text: "Open IPTV Smarters Pro, choose Login with Xtream Codes API and enter the username, password and server URL from your Fast IPTV welcome email.",
              },
            ],
          }),
        }}
      />
    </>
  );
}
