import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { TUTORIAL_DEVICES } from "@/lib/tutorial-content";
import TutorialsContent from "./TutorialsContent";

const pageUrl = `${SITE_URL}/tutorials`;

const PAGE_TITLE = "IPTV Setup Guides — 11 Devices Covered";
const PAGE_DESCRIPTION =
  "Step-by-step IPTV setup guides for 11 devices — Fire Stick, Samsung and LG Smart TV, Apple TV, Android, iPhone, Windows, Mac, Formuler and BuzzTV. Pick your device and follow the walkthrough.";

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: SITE_NAME,
    url: pageUrl,
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

export default function TutorialsPage() {
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    inLanguage: "en-GB",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    hasPart: TUTORIAL_DEVICES.map((d) => ({
      "@type": "Article",
      "@id": `${SITE_URL}/tutorials/${d.slug}#article`,
      headline: `${d.displayName} — Step-by-Step Guide (2026)`,
      url: `${SITE_URL}/tutorials/${d.slug}`,
    })),
  };

  return (
    <>
      <TutorialsContent />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
    </>
  );
}
