import type { Metadata } from "next";
import Link from "next/link";
import SubPageShell, {
  type SubPageFAQItem,
  type SubPageRelatedGuide,
} from "@/components/SubPageShell";
import { AUTHOR_BYLINE, SITE_URL } from "@/lib/constants";

const SLUG = "editorial-policy";
const CANONICAL = `${SITE_URL}/${SLUG}`;
const PUBLISHED_DATE = "2026-07-11";

const PAGE_TITLE = "Editorial Policy — IPTV Providers UK";
const PAGE_DESCRIPTION =
  "Our editorial standards, evaluation methodology, corrections policy and contact route for factual disputes. How IPTV Providers UK Editorial researches, cites and updates every guide.";

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
    href: "/about",
    title: "About IPTV Providers UK Editorial",
    description:
      "Who we are, what we cover, and why the editorial framework exists.",
  },
  {
    href: "/dmca",
    title: "DMCA Policy",
    description:
      "Takedown route and compliance posture used across the site.",
  },
  {
    href: "/blog/best-iptv-uk-guide-2026",
    title: "Best IPTV Providers UK 2026 — Buyer's Guide",
    description:
      "The seven verifiable criteria used across every service reviewed on the site.",
  },
];

const faqItems: SubPageFAQItem[] = [
  {
    question: "How do you decide which IPTV services to cover?",
    answer:
      "We cover services that are actively sold to UK consumers with a published price, a published refund window, and a verifiable point of contact. Services that fail any of those three are excluded — not on ethical grounds but on the practical grounds that our seven-criteria framework cannot be applied to them.",
  },
  {
    question: "How do you handle conflicts of interest?",
    answer:
      "IPTV Providers UK Editorial is operated by the team that also runs the recommended service listed on this site. That relationship is disclosed on every page that recommends the service. The buyer's framework at /blog/best-iptv-uk-guide-2026 was written before any specific service was recommended against it — the criteria are the same criteria a competing operator would face.",
  },
  {
    question: "What happens if you get something wrong?",
    answer:
      "Send factual corrections to contact@buy-iptv-uk.com. Corrections that materially affect a claim (a specific price, a specific channel count, a specific legal citation) are applied within 5 working days and stamped with a dateModified update in the page schema. Editorial disagreements about framing or emphasis are not corrections.",
  },
  {
    question: "Do you accept sponsored content or affiliate placements?",
    answer:
      "No. Every service mentioned on this site is either the operator's own recommended service (disclosed) or a category-level competitor mention used for framework comparison. No IPTV operator has paid for a mention, review, or ranking placement.",
  },
  {
    question: "How often do you update guides?",
    answer:
      "Every guide and blog post carries a datePublished and dateModified in schema and in the visible byline. Guides are reviewed at minimum every 90 days. Pages affected by regulatory change (Ofcom updates, CDPA amendments, ISP filtering shifts) are updated within 30 days of the change being confirmed.",
  },
];

export default function EditorialPolicyPage() {
  return (
    <SubPageShell
      slug={SLUG}
      title="Editorial Policy"
      category="Editorial Standards"
      intro="IPTV Providers UK Editorial covers the UK IPTV market since 2023. This page documents the standards applied when researching, citing, evaluating and updating every guide on the site. It is the framework any reader can hold us to."
      byline={AUTHOR_BYLINE}
      readTime="6 min read"
      relatedGuides={relatedGuides}
      faqItems={faqItems}
      publishedDate={PUBLISHED_DATE}
      citations={[
        { name: "Ofcom Media Nations Reports", url: "https://www.ofcom.org.uk/research-and-data/tv-radio-and-on-demand/media-nations-reports" },
        { name: "Consumer Rights Act 2015", url: "https://www.legislation.gov.uk/ukpga/2015/15/contents" },
      ]}
      aboutEntities={[
        { name: "Editorial Standards" },
        { name: "United Kingdom" },
      ]}
    >
      <h2>What This Site Is</h2>
      <p>
        IPTV Providers UK Editorial publishes evidence-led coverage of the UK
        IPTV market. The site is operated by the team that also runs the
        recommended service listed at{" "}
        <Link href="/">iptv-providers-uk.com</Link>. That relationship
        is disclosed on every page that carries a recommendation. Independence
        from external commercial pressure is a design constraint: no IPTV
        operator, app maker, or retailer has paid for a mention, review, ranking
        placement, or link on this site.
      </p>

      <h2>How Services Are Evaluated</h2>
      <p>
        Every service covered is assessed against the same seven verifiable
        criteria published at{" "}
        <Link href="/blog/best-iptv-uk-guide-2026">
          /blog/best-iptv-uk-guide-2026
        </Link>
        : channel coverage, uptime and infrastructure, refund window, 4K UHD
        availability, device support, GBP-denominated pricing, and provable
        point of contact. Criteria that require a subjective judgement (design
        taste, brand aesthetics, marketing polish) are excluded — they are not
        verifiable and therefore not reproducible by a reader running the same
        test.
      </p>

      <h2>Sourcing Standards</h2>
      <p>
        Every legal claim on the site cites its primary source: the Copyright,
        Designs and Patents Act 1988 (via{" "}
        <Link href="https://www.legislation.gov.uk">
          legislation.gov.uk
        </Link>
        ), the Consumer Rights Act 2015, the Consumer Contracts (Information,
        Cancellation and Additional Charges) Regulations 2013. Market data cites
        Ofcom&apos;s Media Nations reports. Enforcement examples cite named
        enforcement bodies (FACT, PIPCU) and where possible their public
        statements or filings.
      </p>
      <p>
        Secondary sources (news reporting, industry commentary) are used to
        contextualise but not as the sole basis for any factual claim. If a
        claim cannot be traced to a primary source, it is either rewritten to
        remove the specificity or removed entirely.
      </p>

      <h2>What We Will Not Publish</h2>
      <p>
        The following are excluded from the site by policy, not by preference:
      </p>
      <ul>
        <li>
          <strong>Unverifiable performance claims.</strong> Uptime figures,
          subscriber counts and speed benchmarks are only published when the
          underlying evidence is either linked or reproducible by the reader.
          Claims like &ldquo;99.9% uptime&rdquo; without a real status page are excluded.
        </li>
        <li>
          <strong>Broadcaster or league trademarks used as marketing.</strong>{" "}
          UK broadcasters, sports leagues and streaming services are named only
          when the reference is critical to the reader (a legal explainer, a
          comparison of what UK IPTV cannot legally distribute) — never as a
          selling point or channel-catalogue boast.
        </li>
        <li>
          <strong>Superlatives without proof.</strong> &ldquo;#1&rdquo;, &ldquo;voted best&rdquo;,
          &ldquo;fastest&rdquo;, &ldquo;widest catalogue&rdquo;, &ldquo;unlimited&rdquo;: excluded unless the
          underlying comparison and its source are shown on the same page.
        </li>
      </ul>

      <h2>Corrections Policy</h2>
      <p>
        Factual corrections take precedence over editorial disagreements. If a
        specific claim on the site is factually wrong, email{" "}
        <a href="mailto:contact@buy-iptv-uk.com">
          contact@buy-iptv-uk.com
        </a>{" "}
        with the URL, the specific claim, and (where possible) a link to a
        primary source that contradicts it.
      </p>
      <p>
        Confirmed corrections are applied within 5 working days. The page&apos;s
        visible byline and its Article schema&apos;s <code>dateModified</code> are
        both updated. Where the correction changes the meaning of a
        recommendation, a footnote records the previous claim and the date it
        was amended.
      </p>

      <h2>Update Cadence</h2>
      <p>
        Every guide is reviewed at minimum every 90 days. Pages affected
        by regulatory change — Ofcom guidance updates, CDPA amendments, ISP-level
        filtering shifts, HMRC or Trading Standards enforcement — are updated
        within 30 days of the change being confirmed via a primary source.
        Pricing pages are checked whenever the underlying subscription price
        changes. The dateModified schema field is the single source of truth for
        when any page was last edited.
      </p>

      <h2>Contact</h2>
      <p>
        Editorial contact for corrections, sources, or coverage suggestions:{" "}
        <a href="mailto:contact@buy-iptv-uk.com">
          contact@buy-iptv-uk.com
        </a>
      </p>
      <p>
        Commercial support for customers of the recommended service is handled
        separately via WhatsApp — the number is listed on every plan and the
        contact page.
      </p>
    </SubPageShell>
  );
}
