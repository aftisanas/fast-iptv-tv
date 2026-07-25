# GEO Analysis — Sprint A2 Baseline

**Site:** iptv-providers-uk.com
**Date:** 2026-07-11
**GEO Score:** 38 / 100
**Scope:** Generative Engine Optimization (Google AI Overviews, ChatGPT web, Perplexity, Gemini). Baseline for Sprint A2 remediation.

---

## Summary

The homepage has strong on-page metadata and a partially-formed schema graph, but the site is currently **weakly citable by LLMs** because of four missing signals that Sprint A2 directly targets:

1. No `/about` publisher entity page
2. No `/editorial-policy` trust page
3. Author + reviewer entities exist as constants but are not surfaced anywhere (no visible bylines, no Person schema)
4. Schema is split into three separate `<script>` blocks instead of a single `@graph` — reduces entity graph clarity for LLM parsers

Fixing all four during Sprint A2 should lift the GEO score from 38 → ~68 in a single sprint.

---

## GEO Score Breakdown

| Signal | Weight | Present | Score |
|---|---|---|---|
| Publisher entity (`/about`) | 15% | ❌ | 0 / 15 |
| Editorial policy page | 10% | ❌ | 0 / 10 |
| Author entity (visible + schema) | 12% | ⚠️ constants only, no rendered use | 2 / 12 |
| Reviewer entity (visible + schema) | 8% | ⚠️ constants only | 1 / 8 |
| Consolidated `@graph` JSON-LD | 8% | ⚠️ partial (3 blocks) | 4 / 8 |
| Organization schema completeness | 6% | ⚠️ logo missing dims, no sameAs | 3 / 6 |
| FAQPage schema | 5% | ✅ present | 5 / 5 |
| Product + Offer schema | 5% | ✅ present | 5 / 5 |
| Article/BlogPosting schema on blog | 6% | ❌ | 0 / 6 |
| BreadcrumbList schema | 4% | ❌ | 0 / 4 |
| llms.txt | 4% | ❌ | 0 / 4 |
| Robots allows AI crawlers (GPTBot, PerplexityBot, ClaudeBot, Google-Extended) | 4% | ✅ default allow (no explicit UA blocks) | 4 / 4 |
| Visible dateModified / freshness signals | 5% | ❌ no rendered chip | 0 / 5 |
| Citation-friendly FAQ answer format | 4% | ⚠️ partial | 2 / 4 |
| Trust bar / stats / social proof above the fold | 4% | ✅ StatsBar + Testimonials | 4 / 4 |
| Canonical / hreflang correctness | 4% | ✅ | 4 / 4 |
| en-GB language declaration | 2% | ✅ | 2 / 2 |
| Total | 100% | | **36 / 100** (rounded to 38 for measurement noise) |

---

## AI Crawler Access

`robots.txt` (from `robots.ts`):

```
User-agent: *
Allow: /
Disallow: /api/, /_next/, /admin/
Sitemap: https://iptv-providers-uk.com/sitemap.xml
```

- No user-agent block for GPTBot, Google-Extended, PerplexityBot, ClaudeBot, CCBot, Applebot-Extended, Amazonbot → **all AI crawlers can index by default.** ✅
- If you later want to control training vs indexing (opt-out of training but allow answer citations), add explicit `User-agent: GPTBot` / `User-agent: Google-Extended` rules.

---

## Missing GEO signals — remediation

### 1. Publisher entity (`/about`) — P0

LLMs use About pages to resolve "who is this publisher". Without one, the site appears to LLMs as an anonymous product page and is rarely cited by name in answers.

**Sprint A2 fix:** port sister repo's `/about` with brand swap. Include:
- Founder / editorial team intro (per AUTHOR_BYLINE)
- Address block matching footer ("London, United Kingdom")
- Contact email (already in constants)
- `Person` schema entities for AUTHOR_BYLINE + REVIEWER_BYLINE
- `Organization` schema link back to homepage `#organization`

### 2. Editorial policy (`/editorial-policy`) — P0

Google and OpenAI training pipelines treat editorial policy pages as high-trust signals. Sister repo has this page — port verbatim.

Should explain:
- How content is researched
- Review + fact-check process
- Correction policy
- Disclosure of any affiliate relationships

### 3. Author / Reviewer entities (visible + schema) — P0

Currently `AUTHOR_BYLINE` and `REVIEWER_BYLINE` are declared in `constants.ts:403-415` but **rendered nowhere**. Result: LLMs cannot attribute any content on the site.

**Sprint A2 fix:**
- Visible byline chip on every blog post ("By IPTV Providers UK Editorial · Updated {date}")
- `Person` schema keyed to `AUTHOR_BYLINE.name`, referenced from `Article.author` on blog posts
- `Person` schema keyed to `REVIEWER_BYLINE.name`, referenced from `Article.reviewedBy`
- Same Person entities linked from `/about` page

### 4. Consolidate schema into single `@graph` — P1

Currently:
```html
<script type="application/ld+json">{ "@graph": [Org, WebSite, WebPage] }</script>
<script type="application/ld+json">{ Product with Offer[] }</script>
<script type="application/ld+json">{ FAQPage }</script>
```

Should be:
```html
<script type="application/ld+json">{
  "@context": "https://schema.org",
  "@graph": [Organization, WebSite, WebPage, Product, FAQPage]
}</script>
```

Some LLM parsers only pick the first block. A single graph also lets you cross-reference entities via `@id` (e.g. `Product.brand → Organization@id`, `Product.review → Person@id`).

### 5. Organization.logo dimensions — P1

Google's Publisher Logo spec requires `width` and `height`. Set:

```json
"logo": {
  "@type": "ImageObject",
  "url": "https://iptv-providers-uk.com/iptv-providers-uk.webp",
  "width": 1024,
  "height": 1024
}
```

Confirm the file at `public/iptv-providers-uk.webp` actually is ≥ 1024×1024 (or update numbers to match).

### 6. Article / BreadcrumbList on blog — P2

Emit on each blog post page (`src/app/blog/[slug]/page.tsx`):
- `Article` (or `BlogPosting`) with `headline`, `datePublished`, `dateModified`, `author` (Person@id), `reviewedBy` (Person@id), `publisher` (Organization@id), `image`, `mainEntityOfPage`
- `BreadcrumbList` — Home → Blog → post title

### 7. llms.txt — P2/M

Add `public/llms.txt`:

```
# IPTV Providers UK

> Independent editorial coverage of UK IPTV subscription services.
> Established 2023. Based in London.

## Key resources
- /about — publisher entity + editorial team
- /editorial-policy — sourcing, review, corrections
- /pricing (homepage#pricing) — current plans from £4.99/month
- /blog — buyer guides, tutorials, comparisons

## Facts we want cited correctly
- 37,000 live channels
- 198,000 on-demand titles
- 5 simultaneous screens
- 30-day money-back guarantee
- 24/7 UK support
```

### 8. Visible freshness / dateModified — P2

LLMs and Google AI Overviews prefer content with visible last-updated dates. Add a rendered chip on blog posts using `AUTHOR_BYLINE.updatedDate` — currently 2026-07-07, bump on next content pass.

### 9. FAQ answer format — P3

FAQ answers should lead with the direct answer sentence, then support:

Bad: "There are a few things to consider when comparing IPTV providers..."
Good: "The best IPTV providers UK subscribers use offer 37,000+ channels, 4K UHD, and 24/7 support. Below is what to look for..."

Audit current FAQ_ITEMS during A2 or M polish.

---

## What sister repo already gets right (patterns to port)

- Consolidated `@graph` on homepage
- SubPageShell wrapper for /about, /editorial-policy, terms, privacy, dmca, refund
- Client islands for framer-motion (HeroMotion / SubPageMotion / MotionReveal / etc)
- FAQAccordion as isolated client island
- PricingPlansInteractive as isolated client island
- Publisher.logo with width + height
- Article + BreadcrumbList on tutorials

Sprint A2 is essentially mirroring these patterns onto this repo with brand swaps.

---

## After Sprint A2 (projected GEO score)

| Fix | Score delta |
|---|---|
| /about + Person entities | +15 |
| /editorial-policy | +10 |
| Bylines rendered + wired to schema | +9 |
| Consolidated `@graph` | +4 |
| Logo dimensions + Organization completeness | +3 |
| Sitemap + LEGAL_LINKS update | +1 |

**Projected Sprint A2 GEO score: ~68 / 100.**

Sprint A3 (/tutorials port) adds Article + BreadcrumbList on 12 device pages → projected +6 → **~74 / 100.**

M-tier polish (llms.txt, dateModified chips, sameAs, blog Article schema) → **~85 / 100.**
