import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AUTHOR_BYLINE, SITE_NAME, SITE_URL } from "@/lib/constants";
import { TUTORIAL_DEVICES } from "@/lib/tutorial-content";
import DeviceTutorialContent from "./DeviceTutorialContent";

// Only prerender the 11 known device slugs; anything else 404s.
export const dynamicParams = false;

export function generateStaticParams() {
  return TUTORIAL_DEVICES.map((d) => ({ device: d.slug }));
}

type PageProps = {
  params: Promise<{ device: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { device: slug } = await params;
  const device = TUTORIAL_DEVICES.find((d) => d.slug === slug);
  if (!device) return {};

  const canonical = `${SITE_URL}/tutorials/${device.slug}`;
  return {
    title: { absolute: device.metaTitle },
    description: device.metaDescription,
    alternates: { canonical },
    openGraph: {
      type: "article",
      locale: "en_GB",
      url: canonical,
      siteName: SITE_NAME,
      title: device.metaTitle,
      description: device.metaDescription,
      publishedTime: AUTHOR_BYLINE.publishedDate,
      modifiedTime: AUTHOR_BYLINE.updatedDate,
      authors: [AUTHOR_BYLINE.name],
    },
    twitter: {
      card: "summary_large_image",
      title: device.metaTitle,
      description: device.metaDescription,
    },
  };
}

const PUBLISHED_DATE = "2026-06-09";
const UPDATED_DATE = "2026-07-05";

export default async function DeviceTutorialPage({ params }: PageProps) {
  const { device: slug } = await params;
  const device = TUTORIAL_DEVICES.find((d) => d.slug === slug);
  if (!device) notFound();

  const canonical = `${SITE_URL}/tutorials/${device.slug}`;
  const headline = `${device.displayName} — Step-by-Step Guide (2026)`;

  // Three sibling devices for the "related guides" rail (deterministic, wraps).
  const startIndex = TUTORIAL_DEVICES.findIndex((d) => d.slug === device.slug);
  const relatedDevices = [1, 2, 3].map(
    (offset) => TUTORIAL_DEVICES[(startIndex + offset) % TUTORIAL_DEVICES.length]
  );

  const graphSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${canonical}#webpage`,
        url: canonical,
        name: device.metaTitle,
        inLanguage: "en-GB",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#organization` },
        description: device.metaDescription,
      },
      {
        "@type": "Article",
        "@id": `${canonical}#article`,
        headline,
        description: device.metaDescription,
        inLanguage: "en-GB",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        mainEntityOfPage: { "@id": `${canonical}#webpage` },
        datePublished: PUBLISHED_DATE,
        dateModified: UPDATED_DATE,
        author: { "@id": `${SITE_URL}/#organization` },
        publisher: { "@id": `${SITE_URL}/#organization` },
        articleSection: "Device Setup Guide",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonical}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Setup Guides", item: `${SITE_URL}/tutorials` },
          { "@type": "ListItem", position: 3, name: device.displayName, item: canonical },
        ],
      },
    ],
  };

  return (
    <>
      <DeviceTutorialContent
        device={device}
        headline={headline}
        relatedDevices={relatedDevices}
        updatedDate={UPDATED_DATE}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graphSchema) }}
      />
    </>
  );
}
