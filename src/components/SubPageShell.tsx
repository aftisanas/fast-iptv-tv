import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

export type ArticleSection = {
  h2: string;
  paragraphs: ReactNode[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type RelatedLink = {
  href: string;
  label: string;
  blurb: string;
};

export type SubPageShellProps = {
  slug: string;
  eyebrow: string;
  h1: string;
  intro: string;
  bylineName: string;
  bylineRole: string;
  updatedISO: string;
  readMinutes: number;
  sections: ArticleSection[];
  faqs: FaqItem[];
  related: RelatedLink[];
  description: string;
};

export default function SubPageShell(props: SubPageShellProps) {
  const {
    slug,
    eyebrow,
    h1,
    intro,
    bylineName,
    bylineRole,
    updatedISO,
    readMinutes,
    sections,
    faqs,
    related,
    description,
  } = props;

  const pageUrl = `${SITE_URL}${slug}`;
  const articleId = `${pageUrl}#article`;
  const breadcrumbId = `${pageUrl}#breadcrumb`;
  const faqId = `${pageUrl}#faq`;
  const organizationId = `${SITE_URL}/#organization`;

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": articleId,
        mainEntityOfPage: pageUrl,
        headline: h1,
        description,
        inLanguage: "en-GB",
        datePublished: updatedISO,
        dateModified: updatedISO,
        author: {
          "@type": "Organization",
          name: `${SITE_NAME} Editorial`,
          url: SITE_URL,
        },
        publisher: { "@id": organizationId },
        image: `${SITE_URL}/fast-iptv.webp`,
      },
      {
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: h1, item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": faqId,
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
    ],
  };

  const updatedHuman = new Date(updatedISO).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <article>
        {/* ── Hero (matches homepage HeroSection treatment: dark gradient,
             aurora blobs, radial overlays, mesh grid, floating orbs, particles).
             Sits at top: 0 so the transparent fixed Navbar overlays the dark
             gradient directly — no white body bleeds through above the hero. ── */}
        <header className="relative overflow-hidden">
          {/* Deep premium gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0118] via-[#1a0a3e] to-[#0c1445]" />

          {/* Vivid aurora blobs (sized down vs homepage since the hero is shorter) */}
          <div className="aurora-blob w-[600px] h-[600px] bg-purple-600/25 -top-32 -left-32" style={{ animationDelay: "0s" }} />
          <div className="aurora-blob w-[420px] h-[420px] bg-blue-500/20 top-1/4 right-[-8%]" style={{ animationDelay: "4s" }} />
          <div className="aurora-blob w-[500px] h-[500px] bg-violet-500/15 bottom-[-25%] left-1/3" style={{ animationDelay: "8s" }} />
          <div className="aurora-blob w-[350px] h-[350px] bg-cyan-500/20 top-[55%] left-[-5%]" style={{ animationDelay: "12s" }} />
          <div className="aurora-blob w-[300px] h-[300px] bg-fuchsia-500/15 top-[8%] left-[55%]" style={{ animationDelay: "6s" }} />

          {/* Layered radial overlays for depth */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(124,58,237,0.2),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(6,182,212,0.12),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.08),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(59,130,246,0.1),transparent_40%)]" />

          {/* Subtle mesh grid */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          {/* Decorative floating orbs */}
          <div className="absolute top-[18%] left-[10%] w-2 h-2 rounded-full bg-purple-400/60 animate-float" />
          <div className="absolute top-[38%] right-[15%] w-1.5 h-1.5 rounded-full bg-cyan-400/50 animate-float" style={{ animationDelay: "2s" }} />
          <div className="absolute bottom-[22%] left-[20%] w-1 h-1 rounded-full bg-blue-400/60 animate-float" style={{ animationDelay: "4s" }} />
          <div className="absolute top-[50%] right-[8%] w-2.5 h-2.5 rounded-full bg-violet-400/40 animate-float" style={{ animationDelay: "1s" }} />

          {/* Particles */}
          <ParticleBackground />

          {/* Bottom gradient fade to article body */}
          <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-white to-transparent pointer-events-none" />

          {/* Content — flex-col with gap so vertical spacing works even when
              inline elements would otherwise collapse onto the same line.
              pt-28 sm:pt-32 lg:pt-32 mirrors HeroSection's clearance of the
              fixed Navbar; bottom padding keeps the hero a similar height. */}
          <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 flex flex-col items-center text-center gap-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-cyan-300/90 hover:text-cyan-200 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Fast IPTV
            </Link>

            <span className="inline-block rounded-full bg-white/10 backdrop-blur-sm border border-white/15 px-4 py-1.5 text-xs sm:text-sm font-medium text-cyan-200">
              {eyebrow}
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight leading-[1.1] text-white">
              {h1}
            </h1>

            <p className="text-base sm:text-lg text-gray-300/90 leading-relaxed max-w-2xl">
              {intro}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs sm:text-sm text-gray-400">
              <span>
                By <span className="text-gray-200 font-medium">{bylineName}</span>
                <span className="text-gray-500"> · {bylineRole}</span>
              </span>
              <span aria-hidden="true" className="text-gray-600">·</span>
              <span>
                Updated <time dateTime={updatedISO}>{updatedHuman}</time>
              </span>
              <span aria-hidden="true" className="text-gray-600">·</span>
              <span>{readMinutes} min read</span>
            </div>
          </div>
        </header>

        {/* ── Article body ── */}
        <div className="relative bg-white">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            {sections.map((section) => (
              <section key={section.h2} className="mb-12 last:mb-0">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-5 leading-tight">
                  {section.h2}
                </h2>
                <div className="space-y-4 text-base text-gray-700 leading-relaxed">
                  {section.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </section>
            ))}

            {/* FAQ block */}
            <section className="mt-16 pt-10 border-t border-violet-100/70" aria-labelledby="page-faq-heading">
              <h2 id="page-faq-heading" className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
                Frequently asked questions
              </h2>
              <dl className="space-y-6">
                {faqs.map((f, i) => (
                  <div key={i} className="rounded-xl border border-violet-100/70 bg-violet-50/30 p-5">
                    <dt className="text-base font-semibold text-foreground mb-2">{f.question}</dt>
                    <dd className="text-base text-gray-700 leading-relaxed">{f.answer}</dd>
                  </div>
                ))}
              </dl>
            </section>

            {/* Related guides */}
            <nav aria-label="Related Fast IPTV guides" className="mt-16 pt-10 border-t border-violet-100/70">
              <h2 className="text-xl font-bold text-foreground mb-5">More Fast IPTV UK guides</h2>
              <ul className="grid sm:grid-cols-2 gap-4">
                {related.map((r) => (
                  <li key={r.href}>
                    <Link
                      href={r.href}
                      className="group block rounded-xl border border-violet-100/60 bg-white p-5 transition-all hover:border-violet-200 hover:shadow-sm"
                    >
                      <span className="block text-sm font-semibold text-foreground group-hover:text-violet-700">
                        {r.label}
                      </span>
                      <span className="mt-1 block text-sm text-muted">{r.blurb}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </article>

      {/* ── Conversion footer (reused homepage components) ── */}
      <PricingSection />
      <CTASection />

      {/* ── JSON-LD structured data ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
      />
    </>
  );
}
