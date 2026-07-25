import { ArrowLeft, Tag, Clock, User, ChevronRight } from "lucide-react";
import Link from "next/link";
import ParticleBackground from "./ParticleBackground";
import PricingSection from "./PricingSection";
import CTASection from "./CTASection";
import MotionFadeIn from "./MotionFadeIn";
import MotionScaleIn from "./MotionScaleIn";
import SubPageFAQ from "./SubPageFAQ";
import { LOGO_PATH, SITE_NAME, SITE_URL } from "@/lib/constants";

export interface SubPageByline {
  readonly name: string;
  readonly role: string;
  readonly description: string;
  readonly publishedDate: string;
  readonly updatedDate: string;
}

export interface SubPageRelatedGuide {
  readonly title: string;
  readonly href: string;
  readonly description: string;
}

export interface SubPageFAQItem {
  readonly question: string;
  readonly answer: string;
}

export interface SubPageCitation {
  readonly name: string;
  readonly url: string;
}

export interface SubPageEntity {
  readonly name: string;
}

export interface SubPageShellProps {
  readonly slug: string;
  readonly title: string;
  readonly category: string;
  readonly intro: string;
  readonly byline: SubPageByline;
  readonly citations?: ReadonlyArray<SubPageCitation>;
  readonly aboutEntities?: ReadonlyArray<SubPageEntity>;
  readonly readTime?: string;
  readonly publishedDate?: string;
  readonly updatedDate?: string;
  readonly relatedGuides: ReadonlyArray<SubPageRelatedGuide>;
  readonly faqItems: ReadonlyArray<SubPageFAQItem>;
  readonly children: React.ReactNode;
}

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export default function SubPageShell({
  slug,
  title,
  category,
  intro,
  byline,
  citations,
  aboutEntities,
  readTime,
  publishedDate,
  updatedDate,
  relatedGuides,
  faqItems,
  children,
}: SubPageShellProps) {
  const resolvedPublishedDate = publishedDate ?? byline.publishedDate;
  const resolvedUpdatedDate = updatedDate ?? byline.updatedDate;

  const canonicalUrl = `${SITE_URL}/${slug.replace(/^\/+/, "")}`;
  const logoUrl = `${SITE_URL}${LOGO_PATH}`;

  const articleSchema = {
    "@type": "Article",
    "@id": `${canonicalUrl}#article`,
    headline: title,
    description: intro,
    inLanguage: "en-GB",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    mainEntityOfPage: { "@id": `${canonicalUrl}#webpage` },
    datePublished: resolvedPublishedDate,
    dateModified: resolvedUpdatedDate,
    author: {
      "@type": "Organization",
      name: byline.name,
      description: byline.description,
    },
    ...(citations && citations.length > 0 && {
      citation: citations.map((c) => ({
        "@type": "CreativeWork",
        name: c.name,
        url: c.url,
      })),
    }),
    ...(aboutEntities && aboutEntities.length > 0 && {
      about: aboutEntities.map((e) => ({
        "@type": "Thing",
        name: e.name,
      })),
    }),
    publisher: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: logoUrl,
        width: 1024,
        height: 1024,
      },
    },
    articleSection: category,
  };

  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    "@id": `${canonicalUrl}#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${SITE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: title,
        item: canonicalUrl,
      },
    ],
  };

  const faqSchema = {
    "@type": "FAQPage",
    "@id": `${canonicalUrl}#faq`,
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const graphSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: title,
        inLanguage: "en-GB",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#organization` },
        description: intro,
        primaryImageOfPage: { "@type": "ImageObject", url: logoUrl },
      },
      articleSchema,
      breadcrumbSchema,
      faqSchema,
    ],
  };

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        {/* Deep premium gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0118] via-[#1a0a3e] to-[#0c1445]" />

        {/* Aurora blobs */}
        <div
          className="aurora-blob w-[700px] h-[700px] bg-purple-600/25 -top-32 -left-32"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="aurora-blob w-[500px] h-[500px] bg-blue-500/20 top-1/4 right-[-8%]"
          style={{ animationDelay: "4s" }}
        />
        <div
          className="aurora-blob w-[600px] h-[600px] bg-violet-500/15 bottom-[-15%] left-1/3"
          style={{ animationDelay: "8s" }}
        />
        <div
          className="aurora-blob w-[400px] h-[400px] bg-cyan-500/20 top-[60%] left-[-5%]"
          style={{ animationDelay: "12s" }}
        />

        {/* Radial overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(124,58,237,0.2),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(6,182,212,0.12),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.08),transparent_60%)]" />

        {/* Mesh grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Decorative floating orbs */}
        <div className="absolute top-[15%] left-[10%] w-2 h-2 rounded-full bg-purple-400/60 animate-float" />
        <div
          className="absolute top-[35%] right-[15%] w-1.5 h-1.5 rounded-full bg-cyan-400/50 animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-[25%] left-[20%] w-1 h-1 rounded-full bg-blue-400/60 animate-float"
          style={{ animationDelay: "4s" }}
        />

        {/* Particles */}
        <ParticleBackground />

        {/* Hero content */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 lg:pb-24">
          {/* Back link */}
          <MotionFadeIn x={-10} y={0} duration={0.5}>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to IPTV Providers UK
            </Link>
          </MotionFadeIn>

          {/* Category badge */}
          <MotionScaleIn initialScale={0.95} delay={0.05}>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-400/25 bg-white/[0.07] backdrop-blur-md px-4 py-1.5 text-xs font-semibold tracking-wider text-purple-200 uppercase mb-6">
              <Tag className="h-3 w-3 text-cyan-300" />
              {category}
            </span>
          </MotionScaleIn>

          {/* H1 — LCP element, no motion wrapper */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight leading-[1.1] text-white mb-5">
            {title}
          </h1>

          {/* Intro paragraph */}
          <MotionFadeIn
            as="p"
            delay={0.18}
            duration={0.7}
            className="text-base sm:text-lg text-gray-300/90 leading-relaxed max-w-3xl mb-8"
          >
            {intro}
          </MotionFadeIn>

          {/* Byline */}
          <MotionFadeIn
            delay={0.25}
            duration={0.7}
            className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm text-gray-400"
          >
            <span className="inline-flex items-center gap-1.5">
              <User className="h-3.5 w-3.5 text-purple-300" />
              <span className="text-gray-200 font-medium">{byline.name}</span>
              <span className="text-gray-500">— {byline.role}</span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span aria-hidden="true" className="h-1 w-1 rounded-full bg-gray-500" />
              <span>Updated {formatDate(resolvedUpdatedDate)}</span>
            </span>
            {readTime && (
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-cyan-300" />
                <span>{readTime}</span>
              </span>
            )}
          </MotionFadeIn>
        </div>

        {/* Bottom gradient fade to site background */}
        <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-[#fafbff] to-transparent pointer-events-none" />
      </section>

      {/* ── Article body slot ── */}
      <article className="relative py-12 lg:py-16">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </article>

      {/* ── FAQ (driven by faqItems prop, schema-aligned) ── */}
      {faqItems.length > 0 && (
        <section className="relative py-11 lg:py-14">
          <div className="absolute inset-0 mesh-gradient" />
          <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <span className="inline-block rounded-full bg-violet-50 border border-violet-200 px-4 py-1.5 text-sm font-medium text-violet-700 mb-4">
                Frequently Asked Questions
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
                Questions UK Buyers Ask About{" "}
                <span className="gradient-text">This Topic</span>
              </h2>
            </div>

            <SubPageFAQ items={faqItems} />
          </div>
        </section>
      )}

      {/* ── Related guides ── */}
      {relatedGuides.length > 0 && (
        <section className="relative py-11 lg:py-14">
          <div className="absolute inset-0 section-gradient-1" />
          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                <span className="gradient-text">Related IPTV Providers UK Guides</span>
              </h2>
              <p className="text-sm text-muted">
                Related editorial guides from IPTV Providers UK.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedGuides.map((guide) => (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="group relative flex flex-col rounded-2xl border border-violet-100/60 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-lg hover:shadow-violet-100/60"
                >
                  <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-violet-700 transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed flex-1">
                    {guide.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-violet-600 group-hover:text-violet-700">
                    Read the guide
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Conversion footer ── */}
      <PricingSection />
      <CTASection />

      {/* ── JSON-LD @graph (Article + BreadcrumbList + FAQPage) ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graphSchema) }}
      />
    </>
  );
}
