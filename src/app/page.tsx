import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import DefinitionSection from "@/components/DefinitionSection";
import StatsBar from "@/components/StatsBar";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import DevicesSection from "@/components/DevicesSection";
import ChannelsSection from "@/components/ChannelsSection";
import { getPricingTable } from "@/lib/pricing";
// import TestimonialsSection from "@/components/TestimonialsSection"; // Temporarily disabled — awaiting real testimonials
import TrustPanels from "@/components/TrustPanels";
import FAQSection from "@/components/FAQSection";
import TrustSection from "@/components/TrustSection";
import CTASection from "@/components/CTASection";
import StickyBuyBar from "@/components/StickyBuyBar";
import { FAQ_ITEMS, LAST_UPDATED, PRICING_PLANS, SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: { absolute: "Fast IPTV — UK Subscription, 4K, 60-Second Setup" },
  description:
    "Fast IPTV is a UK-focused IPTV subscription with 37,000 channels, 4K UHD, automatic 60-second activation and a 30-day money-back. Setup in under two minutes on Firestick, smart TV or phone.",
  openGraph: {
    title: "Fast IPTV — UK Subscription, 4K, 60-Second Setup",
    description:
      "Fast IPTV: 37,000 channels, 4K UHD, 60-second activation, 30-day money-back. UK-focused IPTV subscription from £25.99.",
    url: "https://fast-iptv.tv",
    siteName: "Fast IPTV",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/fast-iptv-og-image.webp",
        width: 1200,
        height: 630,
        alt: "Fast IPTV — UK IPTV Subscription with 37,000 channels and 60-second activation",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fast IPTV — UK Subscription, 4K, 60-Second Setup",
    description:
      "Fast IPTV: 37,000 channels, 4K UHD, 60-second activation, 30-day money-back. UK-focused IPTV subscription from £25.99.",
    images: ["/fast-iptv-og-image.webp"],
  },
  alternates: {
    canonical: "https://fast-iptv.tv",
  },
};

export default async function HomePage() {
  const organizationId = `${SITE_URL}/#organization`;
  const websiteId = `${SITE_URL}/#website`;
  const serviceId = `${SITE_URL}/#service`;
  const productId = `${SITE_URL}/#product`;
  const breadcrumbId = `${SITE_URL}/#breadcrumb`;
  const faqId = `${SITE_URL}/#faq`;
  const logoUrl = `${SITE_URL}/fast-iptv.webp`;

  /**
   * The page shows one currency, chosen per visitor, but the product is
   * genuinely sold in all of them. So the markup declares every currency
   * rather than the one that happened to render — which keeps it truthful for
   * whichever price a visitor sees, and avoids a structured-data mismatch
   * without pinning the page to sterling.
   */
  const pricingTable = await getPricingTable();
  const currencies = pricingTable.currencies;

  const planOffers = PRICING_PLANS.flatMap((plan) =>
    currencies.flatMap((cur) => {
      const amount = pricingTable.plans[plan.id]?.price?.[cur];
      if (typeof amount !== "number") return [];
      return [
        {
          "@type": "Offer",
          name: `${plan.name} Plan`,
          price: amount.toFixed(2),
          priceCurrency: cur,
          url: `${SITE_URL}/#pricing`,
          availability: "https://schema.org/InStock",
        },
      ];
    })
  );

  const aggregateOffers = currencies.flatMap((cur) => {
    const amounts = PRICING_PLANS.map(
      (p) => pricingTable.plans[p.id]?.price?.[cur]
    ).filter((n): n is number => typeof n === "number");
    if (amounts.length === 0) return [];
    return [
      {
        "@type": "AggregateOffer",
        lowPrice: Math.min(...amounts).toFixed(2),
        highPrice: Math.max(...amounts).toFixed(2),
        priceCurrency: cur,
        offerCount: amounts.length,
        availability: "https://schema.org/InStock",
        url: `${SITE_URL}/#pricing`,
      },
    ];
  });

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId,
        name: SITE_NAME,
        alternateName: "Fast IPTV UK",
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: logoUrl,
          width: 512,
          height: 512,
        },
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: SITE_URL,
        name: SITE_NAME,
        publisher: { "@id": organizationId },
        inLanguage: "en-GB",
      },
      {
        "@type": "Service",
        "@id": serviceId,
        serviceType: "Fast IPTV UK Subscription",
        name: "Fast IPTV UK Subscription",
        provider: { "@id": organizationId },
        areaServed: { "@type": "Country", name: "United Kingdom" },
        description:
          "A UK-focused IPTV subscription: 37,000 live channels, 198,000 films and series, native 4K UHD, secure proxy option, extra connection options, 60-second activation, low-latency live sport playback and a 30-day money-back guarantee.",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Fast IPTV UK Plans",
          itemListElement: planOffers,
        },
      },
      {
        "@type": "Product",
        "@id": productId,
        name: "Fast IPTV UK Subscription",
        brand: { "@id": organizationId },
        description:
          "Fast IPTV UK subscription with 37,000 live channels, native 4K UHD, low-latency live sport playback, secure proxy option and extra connection options.",
        image: logoUrl,
        offers: aggregateOffers,
        // No `aggregateRating` here on purpose. One used to sit at 3.9 from 12
        // reviews with no reviews anywhere on the page to support it — both a
        // structured-data violation and, under the UK DMCC Act 2024, an
        // unverifiable review signal. It is not coming back until there are
        // real, published, on-page reviews with a real figure behind them.
        // The trust panels in <TrustPanels /> are evidence, not ratings, and
        // deliberately carry no score.
      },
      {
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
          },
        ],
      },
      {
        "@type": "Article",
        "@id": `${SITE_URL}/#article`,
        headline: "What is Fast IPTV? UK IPTV Subscription Guide",
        description:
          "Fast IPTV is a UK-focused IPTV subscription with 37,000 live channels, 198,000 on-demand titles, 4K UHD, automatic 60-second activation, optional secure proxy, and a 30-day money-back.",
        url: SITE_URL,
        inLanguage: "en-GB",
        datePublished: "2025-11-07",
        dateModified: LAST_UPDATED,
        author: {
          "@id": organizationId,
          name: "Fast IPTV Editorial Team",
        },
        publisher: {
          "@id": organizationId,
        },
        isPartOf: {
          "@id": websiteId,
        },
        mainEntityOfPage: SITE_URL,
        about: [
          { "@type": "Thing", name: "IPTV", sameAs: "https://en.wikipedia.org/wiki/IPTV" },
          { "@type": "Thing", name: "IPTV Subscription" },
          { "@type": "Thing", name: "4K UHD Streaming" },
          { "@type": "Thing", name: "United Kingdom", sameAs: "https://en.wikipedia.org/wiki/United_Kingdom" },
        ],
        citation: [
          {
            "@type": "CreativeWork",
            name: "IPTV - Wikipedia",
            url: "https://en.wikipedia.org/wiki/IPTV",
          },
          {
            "@type": "CreativeWork",
            name: "Ofcom — On-demand programme services",
            url: "https://www.ofcom.org.uk/tv-radio-and-on-demand/on-demand-services",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": faqId,
        mainEntity: FAQ_ITEMS.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      {/* LCP: preload the brand mark used in the fixed header */}
      <link
        rel="preload"
        as="image"
        href="/fast-iptv.webp"
        type="image/webp"
        fetchPriority="high"
      />

      <HeroSection />
      <StatsBar />
      <DefinitionSection />
      <FeaturesSection />
      <PricingSection />
      <DevicesSection />
      <ChannelsSection />
      {/* Trust panels replace the disabled TestimonialsSection. Real support
          threads as evidence — no ratings, scores or counts. */}
      <TrustPanels />
      <FAQSection />
      <TrustSection />
      <CTASection />
      <StickyBuyBar />

      {/* JSON-LD Structured Data — single @graph */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
      />
    </>
  );
}
