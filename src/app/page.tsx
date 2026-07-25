import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import DevicesSection from "@/components/DevicesSection";
import ChannelsSection from "@/components/ChannelsSection";
import FAQSection from "@/components/FAQSection";
import TrustSection from "@/components/TrustSection";
import CTASection from "@/components/CTASection";
import {
  AUTHOR_BYLINE,
  CONTACT_EMAIL,
  FAQ_ITEMS,
  LOGO_PATH,
  PRICING_PLANS,
  SITE_NAME,
  SITE_URL,
} from "@/lib/constants";

export default function HomePage() {
  const organizationId = `${SITE_URL}/#organization`;
  const websiteId = `${SITE_URL}/#website`;
  const webpageId = `${SITE_URL}/#webpage`;
  const productId = `${SITE_URL}/#product`;
  const faqId = `${SITE_URL}/#faq`;
  const logoUrl = `${SITE_URL}${LOGO_PATH}`;

  const homepageGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId,
        name: SITE_NAME,
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: logoUrl,
          width: 1024,
          height: 1024,
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          availableLanguage: "English",
          areaServed: "GB",
          email: CONTACT_EMAIL,
        },
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        name: SITE_NAME,
        url: SITE_URL,
        inLanguage: "en-GB",
        publisher: { "@id": organizationId },
      },
      {
        "@type": "WebPage",
        "@id": webpageId,
        url: SITE_URL,
        name: "IPTV Providers UK 2026 | #1 Rated 4K IPTV Service £4.99",
        inLanguage: "en-GB",
        isPartOf: { "@id": websiteId },
        about: { "@id": organizationId },
        description:
          "Trusted IPTV providers UK 2026. 37,000 channels, 4K UHD, five simultaneous screens and 24/7 UK support — from £4.99/month with a 30-day refund.",
        dateModified: AUTHOR_BYLINE.updatedDate,
        mainEntity: [{ "@id": productId }, { "@id": faqId }],
      },
      {
        "@type": "Product",
        "@id": productId,
        name: `${SITE_NAME} Subscription`,
        url: SITE_URL,
        image: [logoUrl],
        description:
          "IPTV Providers UK subscription with 37,000+ live channels, 198,000+ on-demand titles, 4K UHD and five simultaneous screens — from £4.99/month on the 12-month term.",
        brand: { "@type": "Brand", name: SITE_NAME },
        offers: PRICING_PLANS.map((plan) => ({
          "@type": "Offer",
          name: `${plan.name} Plan`,
          price: plan.price.toFixed(2),
          priceCurrency: "GBP",
          availability: "https://schema.org/InStock",
          itemCondition: "https://schema.org/NewCondition",
          url: `${SITE_URL}/#pricing`,
        })),
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
      <HeroSection />
      <StatsBar />
      <FeaturesSection />
      <PricingSection />
      <DevicesSection />
      <ChannelsSection />
      <FAQSection />
      <TrustSection />
      <CTASection />

      {/* JSON-LD Structured Data — consolidated @graph */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageGraph) }}
      />
    </>
  );
}
