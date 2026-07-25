# Full SEO Audit Report — Sprint A2 Baseline

**Site:** iptv-providers-uk.com
**Date:** 2026-07-11
**Branch:** main @ ad5a97a (post Sprint A1)
**Scope:** Baseline for Sprint A2 (E-E-A-T + performance) and Sprint A3 (/tutorials port). Excludes backlinks, payment, sister-network sites.

---

## 1. Scores

| Category | Weight | Score | Notes |
|---|---|---|---|
| Technical SEO | 22% | 76 | Robots, canonicals, metadata solid. No hreflang alt, no /tutorials, no /about. |
| Content Quality | 23% | 52 | E-E-A-T weak: no About, no Editorial Policy, no visible bylines on posts. |
| On-Page SEO | 20% | 78 | Rich metadata in `layout.tsx`, keyword-optimized title, description, OG. |
| Schema / Structured Data | 10% | 58 | Three separate `<script>` blocks (should be one `@graph`). Publisher.logo missing width/height. No Article/BreadcrumbList on blog. |
| Performance (CWV) | 10% | 42 | 15/15 components are `"use client"`. H1 wrapped in `motion.h1` → LCP element hydrated. Aurora blobs + particles + framer-motion on every section. |
| AI / GEO Readiness | 10% | 38 | No llms.txt, no Person schema for author/reviewer, split JSON-LD hard for LLMs to parse, no About entity page. |
| Images | 5% | 68 | Logo alt present. No systematic audit of blog images. |
| **Overall SEO Health** | | **62 / 100** | Baseline — Sprint A2 targets Content, Schema, Perf, AI. |

---

## 2. Discovery output (Sprint A2 preflight)

```text
# Client components (src/components/*.tsx)
15 total, ALL 15 use "use client"
  ChannelsSection, CTASection, DevicesSection, FAQSection,
  FeaturesSection, Footer, HeroSection, Navbar, OrderSummaryModal,
  ParticleBackground, PricingSection, PromoBanner, SectionLink,
  StatsBar, TrustSection
Note: TestimonialsSection.tsx exists and is imported (src/app/page.tsx:7)
      but was omitted from the `ls` above. It is also "use client".

# SubPageShell? No — src/components/SubPageShell.tsx does not exist
# /about? No — src/app/about/page.tsx does not exist
# /editorial-policy? No — src/app/editorial-policy/page.tsx does not exist
# /tutorials? No — src/app/tutorials does not exist

# Homepage JSON-LD blocks
src/app/page.tsx: 3 separate <script type="application/ld+json"> blocks
  Block 1: @graph — Organization, WebSite, WebPage
  Block 2: Product (with Offer array from PRICING_PLANS)
  Block 3: FAQPage
src/app/layout.tsx: 0 JSON-LD blocks

# Sprint A1 constants present in src/lib/constants.ts
  Line   2: SITE_URL     = "https://iptv-providers-uk.com"
  Line   3: LOGO_PATH    = "/iptv-providers-uk.webp"
  Line 403: AUTHOR_BYLINE   { name: "IPTV Providers UK Editorial", ... }
  Line 411: REVIEWER_BYLINE { name: "Editorial Review Team", ... }

# Sitemap URLs (live fetch of /sitemap.xml)
  11 URLs: /, /blog, /contact, /terms, /privacy, /dmca, /refund
           + 4 blog posts
```

Bylines exist as constants but are **not applied** anywhere in blog post rendering, layout, or homepage — dead exports as of A1.

---

## 3. Technical SEO

### Passes
- `src/app/robots.ts` correctly disallows `/api/`, `/_next/`, `/admin/` and points to sitemap.
- Canonical set on homepage via `alternates.canonical: "/"` (`layout.tsx:49-54`).
- `en-GB` language declared in HTML tag + metadata `languages` map.
- Robots meta enables `max-image-preview:large`, `max-snippet:-1` — good for rich results.
- Full favicon set (16, 32, 192, 512, apple-touch, ICO, webmanifest).

### Issues
| Severity | Issue | Evidence |
|---|---|---|
| High | `iptv-vs-sky-comparison` still enumerated in `BLOG_POSTS` (`constants.ts:384`) → surfaces in sitemap. User spec says URL is deleted-forever + redirect only. Sitemap currently advertises a URL that should be gone. | `sitemap.xml` line 10 |
| High | No `/about` or `/editorial-policy` — Google & LLMs use these to identify publisher entity. | Filesystem |
| High | No `/tutorials` hub or device pages (Sprint A3 gap — noted, not fixed this sprint). | Filesystem |
| Med | Only 11 URLs in sitemap. After A2+A3 target ≥ 25 (add about, editorial-policy, tutorials hub + 12 device). | Live fetch |
| Med | No hreflang self-reference in HTML for en-GB alternate — Next reads it from `alternates.languages` but map only lists `en-GB → /`. Fine for single-locale but confirm rendered `<link rel="alternate" hreflang="en-GB" href="/">` is present. | `layout.tsx:49-54` |
| Low | `changeFrequency` all-in-one values — Google largely ignores. Not blocking. | `sitemap.ts` |

---

## 4. Content Quality & E-E-A-T

### Current state
- Homepage renders ~2,200–2,400 visible words (live fetch). Good depth.
- 4 blog posts in `BLOG_POSTS` array. Each has title/excerpt/date/readTime/category but posts have **no author, no reviewer, no visible "Last updated" chip.**
- Footer shows "London, United Kingdom" as address — **unsupported** without an About page.
- `AUTHOR_BYLINE.updatedDate: "2026-07-07"` is stale-ish (audit date is 2026-07-11) and unused in any rendered UI.

### Gaps for A2 (E-E-A-T)
1. **Missing `/about`** — no publisher entity page. LLMs will not treat the site as an authoritative source.
2. **Missing `/editorial-policy`** — no explanation of how content is produced/reviewed. This is a standard Google trust signal.
3. **Constants exist, application does not** — `AUTHOR_BYLINE` / `REVIEWER_BYLINE` should render on every blog post + About page + editorial page + Article schema `author` / `reviewedBy`.
4. **Footer legal links (`LEGAL_LINKS`)** — need "About Us" + "Editorial Policy" appended after Sprint A2 pages ship.

---

## 5. On-Page SEO

`src/app/layout.tsx` metadata is one of the strongest assets in the repo:
- Default title 55 chars — under Google's ~60 char limit.
- Description 175 chars — good.
- 13 targeted keywords in the `keywords` array (mostly ignored by Google, but doesn't hurt).
- OG + Twitter cards complete.
- `metadataBase` set from `SITE_URL` — correct for absolute URL resolution.

Issues:
- Homepage `<h1>` is wrapped in `motion.h1` with `initial={{ opacity: 0, y: 30 }}` (`HeroSection.tsx:67-77`). LCP element is **JS-hydrated + animated in from opacity 0**, delaying LCP + risking CLS. Should render plain server-side text.
- H1 contains 2 `<br>`-separated lines — no semantic issue but "The Guide To The" is copy-heavy in the LCP element.
- Homepage H2/H3 count: 8 H2 + 11 H3 = 19 subheadings. Fine.

---

## 6. Schema / Structured Data

Homepage currently emits **3 separate `<script type="application/ld+json">` blocks** (page.tsx:41–134):

1. `@graph` — Organization, WebSite, WebPage
2. Product with Offer array
3. FAQPage

**Recommendations:**
- Merge all three into a single `@graph` array. Sister repo (`best-iptv-uk-subscription.com`) demonstrates the pattern. Cleaner for LLM ingestion + easier maintenance.
- `Organization.logo` currently: `{ "@type": "ImageObject", url: logoUrl }` — Google requires `width` and `height` on Publisher logo. Set `width: 1024, height: 1024`.
- Add `Organization.sameAs` array once About page ships (external profile URLs — even if just LinkedIn/Twitter placeholders).
- Add `BreadcrumbList` schema on blog posts and (future) tutorial pages.
- Add `Article` / `BlogPosting` schema on blog post pages (currently no per-post schema — verified via file `src/app/blog/[slug]/`).
- Add `Person` schemas keyed to `AUTHOR_BYLINE` / `REVIEWER_BYLINE`, reference from Article `author` and `reviewedBy`.

---

## 7. Performance (Core Web Vitals — lab estimate)

Field CrUX not available. Lab estimate from static analysis:

| Metric | Estimate | Root cause |
|---|---|---|
| LCP | **Poor** (>3.5s expected) | H1 is `motion.h1` with `opacity 0 → 1, y: 30 → 0, duration: 0.7, delay: 0.1` — LCP element only paints after hydration + animation completes. Aurora blobs (5x), radial gradients (4x), floating orbs (4x), particle background canvas all layered in hero. |
| CLS | Medium risk | Motion `y: 30 → 0` on H1 + p → layout shift. Also `h-[104vh]` on hero forces layout binding to viewport. |
| INP | Medium | 15 client components → large hydration payload. framer-motion loaded on every section. |
| TBT | High | ParticleBackground component + framer-motion on every below-fold section blocks main thread. |

### Sprint A2 fixes required
1. Convert all non-interactive sections to server components: `FeaturesSection`, `ChannelsSection`, `DevicesSection`, `TrustSection`, `CTASection`, `HeroSection` shell, `PricingSection` (server shell + interactive island), `FAQSection` (server shell + interactive island), `TestimonialsSection`.
2. Keep client: `Navbar` (dropdown state), `PromoBanner` (dismiss), `OrderSummaryModal` (modal), `SectionLink` (scroll behavior), `ParticleBackground` (canvas), `Footer` (only if truly needs client — likely can be server).
3. Extract framer-motion into islands: `HeroMotion`, `SubPageMotion`, `MotionReveal`, `MotionScaleCard`, `MotionScaleIn`, `MotionFadeIn`, `FAQAccordion` (state), `PricingPlansInteractive` (billing toggle).
4. H1 renders as plain server text — no motion wrapper on the LCP element.
5. Target: from 15/15 client → 6-8/15 client after A2.

---

## 8. AI / GEO Readiness

See `GEO-ANALYSIS-A2.md` for full breakdown. Summary here:

| Signal | State | Impact |
|---|---|---|
| llms.txt | ❌ absent | Missed AI crawl summary |
| Author Person schema | ❌ absent | LLMs cannot link content to a byline entity |
| Reviewer schema | ❌ absent | No "reviewedBy" trust signal |
| Publisher entity (About page) | ❌ absent | Weakest E-E-A-T signal for LLM citation |
| Editorial policy page | ❌ absent | LLMs use these to score trustworthiness |
| Consolidated @graph | ❌ (split into 3 blocks) | Parsers may miss entity relationships |
| Publisher.logo dimensions | ❌ missing width/height | Google validator complains |
| FAQ answer format | ⚠️ partial | Answers should lead with the direct answer sentence (citation-friendly) |
| Visible dateModified | ❌ absent from blog UI | AI answers prefer content with clear last-updated dates |

---

## 9. Images

- Homepage renders 1 image with alt (`iptv-providers-uk logo`) via `Image` in Footer + Navbar likely.
- `public/iptv-providers-uk.webp` exists — properly renamed in Sprint A1.
- No systematic audit of blog post images performed (out of scope for A2 planning; queue for M-tier polish session).

---

## 10. Unexpected findings

1. **`iptv-vs-sky-comparison` bug** — user spec says "URL stays deleted forever, redirect only" but it is still present in `BLOG_POSTS` (`constants.ts:384-391`) and therefore emitted in `sitemap.xml`. Advertising a URL that should 404/301 is a mixed signal to Google. **Recommendation: remove from `BLOG_POSTS` and confirm the redirect works.**
2. **Every single component is client-side.** Not "most" — literally 15/15. This is unusual for a Next.js 14+ App Router site and is the single biggest opportunity for perf gains.
3. **Sprint A1 shipped bylines-as-dead-exports.** `AUTHOR_BYLINE` and `REVIEWER_BYLINE` are declared but zero rendered use. Sprint A2 must wire them up in Person schema + visible byline chips.
4. **Homepage schema `@graph` already exists** — the split is only 3 blocks (not 5+ as I initially feared). Consolidation is a small refactor, not a rewrite.
5. **Footer claims "London, United Kingdom"** as address without an About page confirming it → weak entity signal + minor GBP consistency risk if a Google Business Profile is ever added.
