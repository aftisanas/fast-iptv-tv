import type { Metadata } from "next";
import Link from "next/link";
import SubPageShell, {
  type SubPageFAQItem,
  type SubPageRelatedGuide,
} from "@/components/SubPageShell";
import { AUTHOR_BYLINE, SITE_URL } from "@/lib/constants";

const SLUG = "about";
const CANONICAL = `${SITE_URL}/${SLUG}`;
const PUBLISHED_DATE = "2026-07-11";

const PAGE_TITLE = "About IPTV Providers UK Editorial";
const PAGE_DESCRIPTION =
  "Who runs IPTV Providers UK Editorial, what the site covers, and how it stays independent from the commercial IPTV market. UK editorial team covering IPTV since 2023.";

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: "article",
    locale: "en_GB",
    url: CANONICAL,
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

const relatedGuides: SubPageRelatedGuide[] = [
  {
    href: "/editorial-policy",
    title: "Editorial Policy",
    description:
      "Standards, sourcing, corrections and update cadence applied to every guide.",
  },
  {
    href: "/blog/best-iptv-uk-guide-2026",
    title: "Best IPTV Providers UK 2026 — Buyer's Guide",
    description:
      "The seven-criteria evaluation used on every service reviewed on the site.",
  },
  {
    href: "/blog/how-to-setup-iptv-firestick",
    title: "How To Set Up IPTV On Fire Stick",
    description:
      "Practical device setup — the mechanics of getting an IPTV subscription running.",
  },
];

const faqItems: SubPageFAQItem[] = [
  {
    question: "Are you an independent reviewer or an IPTV operator?",
    answer:
      "Both, with disclosure. IPTV Providers UK Editorial is operated by the same team that runs the recommended service on this site. Every page carrying a recommendation discloses the relationship in-line. The buyer's framework at /blog/best-iptv-uk-guide-2026 predates the recommendation and applies the same criteria to every operator, including the one we run.",
  },
  {
    question: "How long have you been publishing?",
    answer:
      "Since late 2023. Coverage started with compliance and legal-framework work, expanded through 2024 into device-specific setup guides, and formalised in 2026 into the seven-criteria buyer's framework used across the current guides.",
  },
  {
    question: "How can I contact the editorial team?",
    answer:
      "Editorial contact for corrections, sources or coverage suggestions: contact@buy-iptv-uk.com. Commercial support for customers of the recommended service is handled separately via WhatsApp — the number is on every plan card and the contact page.",
  },
  {
    question: "Do you take advertising or affiliate revenue?",
    answer:
      "No. The site's only revenue relationship is with the recommended IPTV service the team also operates. No third-party operator, app maker, or retailer has paid for a mention, review, or link.",
  },
];

export default function AboutPage() {
  return (
    <SubPageShell
      slug={SLUG}
      title="About IPTV Providers UK Editorial"
      category="About"
      intro="IPTV Providers UK Editorial is a UK-based editorial team covering the IPTV market since late 2023. This page explains who runs the site, what we cover, and how the framework applied to every guide is designed to be replicable by any reader."
      byline={AUTHOR_BYLINE}
      readTime="4 min read"
      relatedGuides={relatedGuides}
      faqItems={faqItems}
      publishedDate={PUBLISHED_DATE}
      aboutEntities={[
        { name: "IPTV" },
        { name: "United Kingdom" },
      ]}
    >
      <h2>Who We Are</h2>
      <p>
        IPTV Providers UK Editorial is the editorial arm of the team that also
        operates the recommended IPTV service on this site. The team is
        UK-based. Editorial and commercial roles are separated: the editorial
        team commissions and edits every guide; the commercial team handles
        subscription support and fulfilment via WhatsApp.
      </p>
      <p>
        The recommended service listed at{" "}
        <Link href="/">iptv-providers-uk.com</Link> is disclosed as
        such on every page that carries a recommendation. Where a page compares
        the recommendation against category competitors, the comparison uses
        the same seven-criteria framework — the operator relationship does not
        change how the criteria are applied.
      </p>

      <h2>What We Cover</h2>
      <p>
        The site covers four areas that a UK IPTV buyer needs to research before
        subscribing:
      </p>
      <ul>
        <li>
          <strong>Compliance and DMCA policy.</strong>{" "}
          <Link href="/dmca">/dmca</Link> documents the takedown route and the
          compliance posture the site operates under.
        </li>
        <li>
          <strong>Buyer&apos;s evaluation framework.</strong>{" "}
          <Link href="/blog/best-iptv-uk-guide-2026">
            /blog/best-iptv-uk-guide-2026
          </Link>{" "}
          documents the seven verifiable criteria applied to every service on
          the site.
        </li>
        <li>
          <strong>Device-specific setup.</strong>{" "}
          <Link href="/blog/how-to-setup-iptv-firestick">
            /blog/how-to-setup-iptv-firestick
          </Link>{" "}
          covers the practical mechanics of getting an IPTV subscription
          running on Fire Stick.
        </li>
        <li>
          <strong>Sports and Premier League coverage.</strong>{" "}
          <Link href="/blog/premier-league-streaming-guide">
            /blog/premier-league-streaming-guide
          </Link>{" "}
          contextualises UK sports streaming and matchday reliability.
        </li>
      </ul>

      <h2>Editorial Standards</h2>
      <p>
        Every claim on the site cites its source where verifiable. Legal claims
        cite primary legislation via{" "}
        <Link href="https://www.legislation.gov.uk">
          legislation.gov.uk
        </Link>
        . Market data cites Ofcom&apos;s Media Nations reports. Enforcement examples
        cite named enforcement bodies.
      </p>
      <p>
        Content that cannot be sourced against a primary document is either
        rewritten to remove the specificity or removed entirely. The full
        standards, including sourcing rules, corrections policy and update
        cadence, are documented at{" "}
        <Link href="/editorial-policy">/editorial-policy</Link>.
      </p>

      <h2>Independence</h2>
      <p>
        No third-party IPTV operator, app maker, retailer or affiliate network
        has paid for a mention, review, ranking placement or link on this site.
        The only commercial relationship on the site is the recommended
        service, which the same team operates — that relationship is disclosed
        rather than hidden.
      </p>
      <p>
        The site&apos;s independence from external commercial pressure is a design
        constraint, not a marketing claim: it exists because a review site
        funded by the operators it reviews cannot apply the same criteria
        consistently. The seven-criteria framework works only if the same test
        is applied to every service.
      </p>

      <h2>Contact</h2>
      <p>
        Editorial contact — corrections, sources, coverage suggestions:{" "}
        <a href="mailto:contact@buy-iptv-uk.com">
          contact@buy-iptv-uk.com
        </a>
      </p>
      <p>
        Commercial support for subscribers of the recommended service is
        handled via WhatsApp. The number is on every plan card and at{" "}
        <Link href="/contact">/contact</Link>.
      </p>
    </SubPageShell>
  );
}
