import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import DevicesSection from "@/components/DevicesSection";
import ChannelsSection from "@/components/ChannelsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import TrustSection from "@/components/TrustSection";
import CTASection from "@/components/CTASection";
import { FAQ_ITEMS, PRICING_PLANS, SITE_NAME, SITE_URL } from "@/lib/constants";

export default function HomePage() {
  const organizationId = `${SITE_URL}/#organization`;
  const websiteId = `${SITE_URL}/#website`;
  const serviceId = `${SITE_URL}/#service`;
  const productId = `${SITE_URL}/#product`;
  const breadcrumbId = `${SITE_URL}/#breadcrumb`;
  const faqId = `${SITE_URL}/#faq`;
  const logoUrl = `${SITE_URL}/fast-iptv.webp`;

  const prices = PRICING_PLANS.map((p) => p.price);
  const lowPrice = Math.min(...prices).toFixed(2);
  const highPrice = Math.max(...prices).toFixed(2);

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
          "The fastest IPTV UK subscription: 37,000 live channels, 198,000 films and series, native 4K UHD, secure proxy option, extra connection options, 60-second activation, sub-3-second live sport delay and a 30-day money-back guarantee.",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Fast IPTV UK Plans",
          itemListElement: PRICING_PLANS.map((plan) => ({
            "@type": "Offer",
            name: `${plan.name} Plan`,
            price: plan.price.toFixed(2),
            priceCurrency: "GBP",
            url: `${SITE_URL}/#pricing`,
            availability: "https://schema.org/InStock",
          })),
        },
      },
      {
        "@type": "Product",
        "@id": productId,
        name: "Fast IPTV UK Subscription",
        brand: { "@id": organizationId },
        description:
          "Fast IPTV UK subscription with 37,000 live channels, native 4K UHD, sub-3-second live sport delay, secure proxy option and extra connection options.",
        image: logoUrl,
        offers: {
          "@type": "AggregateOffer",
          lowPrice,
          highPrice,
          priceCurrency: "GBP",
          offerCount: PRICING_PLANS.length,
          availability: "https://schema.org/InStock",
          url: `${SITE_URL}/#pricing`,
        },
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
      <FeaturesSection />
      <PricingSection />
      <DevicesSection />
      <ChannelsSection />
      <TestimonialsSection />
      <FAQSection />
      <TrustSection />
      <CTASection />

      {/* JSON-LD Structured Data — single @graph */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
      />
    </>
  );
}
