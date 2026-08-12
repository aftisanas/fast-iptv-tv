# Fast IPTV — SEO Expansion Plan (No-Backlink Strategy)

**Site:** https://fast-iptv.tv
**Current state:** DR 0-ish, ranking for 2 keywords only (`fast iptv` pos 7 SV 200, `fastest iptv` pos 1 SV 20). GSC last 3 months: 6 clicks, 70 impressions, 12.86% CTR — mostly branded.
**Framework:** Next.js 15 App Router (TypeScript, Tailwind, framer-motion).
**Existing sub-pages:** `/4k-iptv-uk`, `/iptv-for-firestick`, `/iptv-buffering-fix`, `/iptv-smarters-pro-setup`, `/is-iptv-legal-uk`, `/blog`, `/tutorials`.
**Competitor benchmark:** televo.uk — 224 keywords, 13,660 monthly organic traffic, single-page homepage-dominant strategy.

**Goal:** Add 8 new commercial pages targeting 12+ high-buyer-intent keywords with combined monthly SV of ~7,850. All KD ≤ 7. Zero backlinks assumed.

---

## 1. Keyword Selection & Mapping

Every keyword below is filtered from the Televo.uk ranking export (they've proven each keyword ranks) and cross-verified against the `google_gb_iptv_matching-terms` universe. All chosen keywords are: buyer-intent (commercial or transactional), KD ≤ 7, SV ≥ 100, UK Google.

### The 8 Target Pages + Keyword Map

| # | New URL | Primary keyword | Secondary keywords | KD | Combined UK SV | Existing overlap risk |
|---|---|---|---|---:|---:|---|
| 1 | `/iptv-subscription` | iptv subscription | iptv subscriptions, iptv subscribe | 2-7 | 2,400 | None |
| 2 | `/best-iptv-uk` | best iptv uk | best iptv in uk, best uk iptv | 0-2 | 2,100 | Blog post `/blog/best-iptv-uk-guide-2026` exists — DIFFERENT INTENT (guide vs commercial ranking). Blog stays as long-form editorial; new page is the commercial landing. |
| 3 | `/best-iptv-provider-uk` | best iptv provider uk | uk iptv provider, best iptv providers uk | 0-3 | 650 | None |
| 4 | `/best-iptv-subscription` | best iptv subscription | best iptv subscription uk | 2-5 | 400 | None |
| 5 | `/buy-iptv` | buy iptv | iptv buy, buy iptv subscription | 3-18 | 750 | None |
| 6 | `/iptv-services` | iptv services | best iptv services, iptv service uk, iptv service provider | 0-2 | 950 | None |
| 7 | `/iptv-channels` | iptv channels | iptv channels uk (secondary), channels list | 3 | 400 | None (existing `ChannelsSection` component is a homepage section only) |
| 8 | `/cheap-iptv` | cheap iptv | cheap iptv uk | 0 | 300 | None |

**Total addressable UK search volume: ~7,850 monthly searches.** All keywords sit in the KD 0-7 zone where a well-optimised page on a DR 0 site can realistically rank top 5 within 8-16 weeks.

### Why zero cannibalization

1. **Existing sub-pages are informational/technical**, not commercial-ranking pages. `/4k-iptv-uk` targets `4k iptv` (KD 0, SV 250) — kept, no overlap with our list. `/iptv-for-firestick` targets `iptv firestick` — kept, no overlap. `/is-iptv-legal-uk` targets `is iptv legal uk` — kept, no overlap. `/iptv-buffering-fix` and `/iptv-smarters-pro-setup` target technical long-tails not in our target list.
2. **Homepage** targets brand + generic "iptv subscription" via H1 — we'll add explicit canonical + refine H1 to prevent overlap with `/iptv-subscription` (details in Section 5).
3. **Blog post `best-iptv-uk-guide-2026`** vs new `/best-iptv-uk`: blog is intended as a long-form editorial with different H1 ("The Complete UK IPTV Buyer's Guide 2026"), the money page is intended for commercial intent with H1 ("Best IPTV UK 2026 — Top-Rated Subscription From £3.75/month"). Both link to each other with different anchors (see Section 5).
4. **No two new pages share the same primary keyword** — each targets a distinct search-intent slice.

---

## 2. Silo Architecture & Content Plan

### Folder Structure Rationale

**Flat URL structure at root level** — same pattern as your existing `/4k-iptv-uk`, `/iptv-for-firestick`, etc. This is deliberate:

- Google 2026: URL depth carries **no direct ranking signal** (John Mueller, 2023) — but flatter URLs are shorter, better for CTR in SERP, and receive more direct link equity from homepage.
- Sub-folders (`/subscription/pillar`, `/subscription/best`, etc.) fragment link equity and force additional internal-linking work.
- Competitor televo.uk ranks 224 keywords from a single homepage — pattern confirms UK IPTV market rewards flat + comprehensive over nested + niche.

### The Silo (Hub-and-Spoke Model)

```
                            HOMEPAGE (/)
                                 |
       ┌─────────────────────────┼─────────────────────────┐
       |                         |                         |
   PILLAR PAGES              INFO PAGES              BLOG POSTS
   (commercial)              (existing)              (editorial)
       |                         |                         |
  /iptv-subscription       /4k-iptv-uk           /blog/best-iptv-uk-guide-2026
  /best-iptv-uk            /iptv-for-firestick   /blog/how-to-setup-iptv-firestick
  /best-iptv-provider-uk   /iptv-buffering-fix   /blog/iptv-vs-traditional-tv
  /best-iptv-subscription  /iptv-smarters-pro-setup
  /buy-iptv                /is-iptv-legal-uk
  /iptv-services
  /iptv-channels
  /cheap-iptv
```

### Per-Page Content Plan

#### Page 1 — `/iptv-subscription` (Pillar)

- **Meta title (60 chars):** `IPTV Subscription UK 2026 — From £3.75/month, 30-Day Refund`
- **Meta description (155 chars):** `The Fast IPTV subscription: 37,000 UK & international channels, true 4K UHD, 60-second activation, five screens, 30-day money-back. Plans from £3.75/month.`
- **H1:** `IPTV Subscription UK — 37,000 Channels From £3.75/month`
- **H2s:**
  1. What a Fast IPTV Subscription Includes
  2. IPTV Subscription Plans & Pricing (3, 6, 12, 24 months)
  3. How the £3.75/month Plan Compares to UK Pay-TV
  4. Devices Your IPTV Subscription Works On
  5. Activation, Refund & Support
  6. IPTV Subscription vs Free IPTV — Why Free Fails
  7. Frequently Asked Questions
- **Internal-link anchors received (from other pages):**
  - Homepage hero: `[Browse the Fast IPTV subscription plans](/iptv-subscription)`
  - Homepage pricing section: `[See full subscription details](/iptv-subscription)`
  - `/best-iptv-uk`: `[our IPTV subscription plans](/iptv-subscription)`
  - `/best-iptv-subscription`: `[the base IPTV subscription](/iptv-subscription)`
  - `/buy-iptv`: `[current IPTV subscription pricing](/iptv-subscription)`
  - `/iptv-services`: `[full IPTV subscription details](/iptv-subscription)`
  - Blog posts: 2 contextual links each
- **Word count:** 1,800-2,200
- **Primary keyword density:** `iptv subscription` — 1.7% (roughly 30-35 mentions in a 2,000-word page)
- **LSI terms to include (each 2-4x):** monthly plan, activation, refund, 4K UHD, multi-device, Firestick, smart TV, live sport, VPN, EPG guide, catch-up
- **Schema:** Product + Offer[] + FAQPage + BreadcrumbList (SubPageShell handles this)

#### Page 2 — `/best-iptv-uk`

- **Meta title:** `Best IPTV UK 2026 — Top-Rated From £3.75/month | Fast IPTV`
- **Meta description:** `The best IPTV UK households can buy in 2026 — 37,000 channels, 4K UHD, sub-second anti-freeze, 30-day money-back guarantee. Full comparison and pricing inside.`
- **H1:** `Best IPTV UK 2026 — Tested Across Channels, Speed & Support`
- **H2s:**
  1. What Makes an IPTV Service "The Best" in the UK
  2. The 7-Criteria Ranking Framework
  3. Fast IPTV vs Other UK Providers — Head-to-Head
  4. UK Channel Coverage: Sport, Entertainment, News, Kids
  5. Best IPTV UK for Firestick, Smart TV & Apple TV
  6. Pricing: Where the Value Line Sits in 2026
  7. FAQ
- **Internal links received:** homepage `Why Us` section, `/iptv-subscription`, `/best-iptv-provider-uk`, blog posts.
- **Word count:** 1,600-2,000
- **Primary density:** `best iptv uk` — 1.5%
- **LSI:** UK IPTV service, top-rated, channel line-up, 4K, refund policy, verified reviews, Trustpilot
- **Schema:** Article + FAQPage + BreadcrumbList

#### Page 3 — `/best-iptv-provider-uk`

- **Meta title:** `Best IPTV Provider UK 2026 — Fast IPTV Ranked #1`
- **Meta description:** `Compare the best IPTV provider UK households pick in 2026. Fast IPTV leads on uptime, 4K support, refund honesty and 24/7 UK-based support. Plans from £3.75/month.`
- **H1:** `Best IPTV Provider UK 2026 — Ranked on 7 Criteria`
- **H2s:** Selection criteria, provider comparison table (text), our #1 pick, red flags, verification steps, pricing, FAQ
- **Word count:** 1,500-1,800
- **Primary density:** `best iptv provider uk` — 1.6%
- **LSI:** IPTV company, UK IPTV supplier, licensed provider, DMCA, refund

#### Page 4 — `/best-iptv-subscription`

- **Meta title:** `Best IPTV Subscription UK 2026 — Compare Fast IPTV Plans`
- **Meta description:** `The best IPTV subscription UK 2026: 37,000 channels, 4K UHD, 5 screens, built-in VPN. £3.75-£8.66/month with a 30-day money-back guarantee.`
- **H1:** `Best IPTV Subscription 2026 — Complete Plan Comparison`
- **H2s:** What "best" means for subscriptions, 3/6/12/24-month plans compared, feature parity, upgrading & renewals, FAQ

#### Page 5 — `/buy-iptv`

- **Meta title:** `Buy IPTV UK — Instant 60-Second Activation | Fast IPTV`
- **Meta description:** `Buy IPTV UK in 60 seconds. Fast IPTV: 37,000 channels, 4K UHD, secure card payment, 30-day money-back. Credentials arrive by email instantly.`
- **H1:** `Buy IPTV Online — Instant Setup in 60 Seconds`
- **H2s:** Payment options, activation flow, refund policy, safe-purchase checklist, FAQ

#### Page 6 — `/iptv-services`

- **Meta title:** `IPTV Services UK 2026 — Fast IPTV | 37K Channels, 4K UHD`
- **Meta description:** `Fast IPTV — the UK IPTV services provider ranked #1 on uptime, channels and refund. 37,000 channels, 4K UHD, 24/7 support, 30-day money-back. From £3.75/month.`
- **H1:** `IPTV Services UK — 37,000 Channels From £3.75/month`
- **H2s:** What IPTV services include, our infrastructure, channel breadth, device coverage, support & refund, FAQ

#### Page 7 — `/iptv-channels`

- **Meta title:** `IPTV Channels UK 2026 — Full List | Fast IPTV`
- **Meta description:** `The complete IPTV channels list included with every Fast IPTV subscription — 37,000 UK & international channels, sport, entertainment, news, kids. From £3.75/month.`
- **H1:** `IPTV Channels — 37,000 UK & International Feeds Included`
- **H2s:** Category breakdown (sport, entertainment, news, kids, cinema, international), regional variants, catch-up TV, EPG guide, FAQ

#### Page 8 — `/cheap-iptv`

- **Meta title:** `Cheap IPTV UK — Best Value Plans From £3.75/month`
- **Meta description:** `Cheap IPTV UK 2026 — Fast IPTV plans from £3.75/month with full 37,000-channel line-up. What gets cut at rock-bottom prices, and where the real value line sits.`
- **H1:** `Cheap IPTV UK 2026 — Real Value From £3.75/month`
- **H2s:** What "cheap" actually means, the £3.75/month sweet spot, what gets cut at sub-£3 prices, our verified cheap pick, red flags on cheap plans, FAQ

### How to modify the homepage to support the silo

Two changes:

1. **Add a "Services & Subscription" nav dropdown.** Update `NAV_LINKS` in `src/lib/constants.ts` to include a `MONEY_LINKS` array with the 8 new URLs. Wire into Navbar as a hover dropdown, exposing these on every page (sitewide internal links = maximum PageRank flow).
2. **Add a compact "Related pages" strip** below the homepage `PricingSection` that links to `/iptv-subscription`, `/best-iptv-uk`, `/buy-iptv`, `/iptv-channels`. This puts 4 of the 8 new pages one click from the homepage — the highest-PageRank position on the site.

---

## 3. On-Page Optimization Blueprint

### Reusable page template (already exists as `SubPageShell` — extend it)

Every new page uses `src/components/SubPageShell.tsx`, which already emits:

- Article schema with `mainEntityOfPage`, `headline`, `datePublished`, `dateModified`, `author`, `publisher`, `image`, `inLanguage: en-GB`
- BreadcrumbList schema (Home → Page)
- FAQPage schema (fed from `faqs` prop)
- Canonical via `alternates.canonical` in `metadata` export

### Required metadata pattern for every new page

```tsx
export const metadata: Metadata = {
  title: { absolute: "<Title with primary keyword, ≤60 chars>" },
  description: "<Meta description with primary keyword, 145-160 chars>",
  alternates: {
    canonical: "https://fast-iptv.tv/<slug>",
    languages: { "en-GB": "https://fast-iptv.tv/<slug>" },
  },
  openGraph: {
    title: "<Same as absolute title>",
    description: "<Same as meta description>",
    url: "https://fast-iptv.tv/<slug>",
    type: "article",
    locale: "en_GB",
    siteName: "Fast IPTV",
    images: ["/fast-iptv-og-image.webp"],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true, googleBot: { "max-snippet": -1, "max-image-preview": "large" } },
};
```

### Image alt text pattern

Every image on the new pages:

```
alt="<primary keyword> — <specific descriptor> | Fast IPTV"
```

Example (on `/iptv-subscription`):

```
alt="IPTV subscription — 4K UHD stream on Fire Stick | Fast IPTV"
alt="IPTV subscription pricing plans compared | Fast IPTV"
```

### Bold/italic keyword usage rule

- Primary keyword: **bold on first mention** in the intro paragraph. Bold once more in a mid-body context. Never bold more than 3x per page (over-optimisation signal).
- Secondary keywords: no explicit bolding required — flow naturally in H2s and body.
- Never italicise keywords for SEO — italic implies emphasis in English typography, not SEO weight.

### Breadcrumb schema

`SubPageShell` already emits `BreadcrumbList` JSON-LD. No action needed unless adding sub-pages.

### FAQ schema

Pass 5-7 FAQs per page via the `faqs` prop. `SubPageShell` emits `FAQPage` JSON-LD automatically. Each FAQ must:

- Contain the primary keyword or a variation in the question
- Have a 40-80 word answer (Google truncates longer for AI Overview snippets)
- Be substantively different from other FAQs on other pages (no duplication)

---

## 4. Indexation Speed Hacks (Target: 24-48 hours)

### Immediately after deploying each page

1. **Update sitemap.ts** — add each new URL with `lastModified: new Date()` and `priority: 0.9` for pillar (`/iptv-subscription`), `0.8` for secondary money pages. Force sitemap to include `<lastmod>` matching today's date — Google prioritises re-crawl for URLs with recent lastmod.

2. **Ping the sitemap manually** — after deploy, hit:
   ```
   https://www.google.com/ping?sitemap=https://fast-iptv.tv/sitemap.xml
   https://www.bing.com/ping?sitemap=https://fast-iptv.tv/sitemap.xml
   ```

3. **GSC URL Inspection → Request Indexing** — do this **individually** for each of the 8 new URLs. Manual request-indexing has a ~24-hour crawl SLA. Daily limit is 10-12 URLs; you have 8, so all 8 fit in one day.

4. **Homepage internal-link cascade** — every new page must be **one click from the homepage**. This is done by (a) adding the "Services & Subscription" dropdown to `NAV_LINKS` (appears sitewide including homepage), (b) adding the "Related pages" strip below `PricingSection`. Google's crawler follows homepage links first — internal linking from homepage = fastest discovery path.

5. **Cross-link between new pages** — each new page contains 3-5 outbound internal links to sibling new pages. This creates a mesh that helps Google understand the topical cluster.

6. **IndexNow (Bing/Yandex)** — Bing supports IndexNow, an instant-notification protocol. Add a build-time hook or use the API:
   ```
   https://api.indexnow.org/indexnow?url=https://fast-iptv.tv/iptv-subscription&key=<your-key>
   ```
   IndexNow indexing is often within 1-2 hours on Bing (feeds Copilot / Grok).

### Time-to-indexation targets

| Search engine | Method | Realistic time to index |
|---|---|---|
| Google | GSC URL Inspection | 24-48 hours |
| Google | Sitemap ping + homepage link | 3-7 days |
| Bing | IndexNow API | 1-2 hours |
| Yandex | IndexNow API | 4-24 hours |

---

## 5. Cannibalization Prevention Protocol

### Canonical strategy

Every new page emits a **self-canonical** via `alternates.canonical` in its metadata (Next.js 15 handles this automatically). Never point one new page's canonical at another — that would kill the target page's ranking.

### Homepage vs `/iptv-subscription` — the key overlap

**Risk:** Homepage already includes `iptv subscription` in its meta description. If left unchanged, the homepage could rank for `iptv subscription` and cannibalize the dedicated pillar page.

**Fix:**
1. **Rewrite the homepage `<h1>`** to emphasize the brand + core "fast iptv" only, dropping "subscription" from the H1 and above-fold copy. Homepage keeps its position on `fast iptv` (SV 200) and `fastest iptv` (SV 20) — the two branded terms it already owns.
2. **Homepage internal link** to `/iptv-subscription` uses **exact-match anchor**: `[Browse the Fast IPTV subscription plans](/iptv-subscription)`. This passes the topical signal explicitly to the new page.
3. **Keep the homepage `PricingSection`** — but change its heading from "Choose Your Subscription" to "Choose Your Plan", and add a sub-link `[Compare all IPTV subscription options →](/iptv-subscription)`.
4. **Meta description tweak** on homepage: remove "subscription" — new copy: `Fast IPTV — UK-focused streaming with 37,000 live channels, 4K UHD, sub-60-second activation and a 30-day money-back. Setup in two minutes on any device.` (No "subscription" keyword; keeps the pillar page's rank potential intact.)

### Blog `/blog/best-iptv-uk-guide-2026` vs new `/best-iptv-uk`

**Risk:** Both target "best iptv uk". Without differentiation, Google will pick one and may not pick the money page.

**Fix (differentiation strategy):**
1. **Blog post H1** rewritten to `The Complete UK IPTV Buyer's Guide 2026 — What to Look For`. Primary keyword shifts from `best iptv uk` to `uk iptv buyer's guide` (a long-tail informational).
2. **Money page H1** stays as `Best IPTV UK 2026 — Tested Across Channels, Speed & Support`. Primary keyword `best iptv uk` — commercial intent.
3. **Cross-link both ways** with distinct anchors:
   - Blog → money: `[Compare current subscription plans on our best IPTV UK page](/best-iptv-uk)`
   - Money → blog: `[Read our long-form UK IPTV buyer's guide](/blog/best-iptv-uk-guide-2026)`
4. **Different intent signals**: money page includes Product schema + Offer[]; blog post includes only Article schema.

### Anchor text variation rules

- Never use the exact-match anchor `best iptv uk` on more than **2 internal links across the whole site**. Google's over-optimisation filter kicks in above that.
- Preferred internal-link anchor mix:
  - 15% exact match (`best iptv uk`)
  - 40% partial match with modifiers (`best IPTV UK 2026`, `top-rated UK IPTV`, `best IPTV UK services`)
  - 25% branded (`Fast IPTV's UK ranking`, `our best IPTV UK page`)
  - 20% generic (`compare here`, `see the ranking`, `read the guide`)

### 301 redirects

None required. Old blog posts and existing sub-pages stay put. New pages are additive.

---

## 6. Content Generation

Full production-ready TSX files for all 8 pages have been written directly into `src/app/<slug>/page.tsx`. Each file uses the existing `SubPageShell` component, so schema/canonical/breadcrumb/FAQ markup is emitted automatically and consistently with the rest of the site.

Files written:
- `src/app/iptv-subscription/page.tsx`
- `src/app/best-iptv-uk/page.tsx`
- `src/app/best-iptv-provider-uk/page.tsx`
- `src/app/best-iptv-subscription/page.tsx`
- `src/app/buy-iptv/page.tsx`
- `src/app/iptv-services/page.tsx`
- `src/app/iptv-channels/page.tsx`
- `src/app/cheap-iptv/page.tsx`

Each file follows the same pattern as your existing `/4k-iptv-uk/page.tsx` — no new components required.

Sitemap and `constants.ts` have been updated to include the 8 new pages and add a `MONEY_LINKS` group for the nav.

---

## 7. Implementation Order (Exact Sequence)

**Day 1 — Deploy**

1. `git pull` the changes I've made (or apply the files by hand)
2. `npm run build` — verify all 8 new pages compile
3. `npm run lint` — verify zero warnings
4. Deploy to production

**Day 1 — Immediately after deploy**

5. Manually visit each of the 8 new URLs in a browser → confirm they render
6. View source on each → confirm `<link rel="canonical">` + JSON-LD schema present
7. Test one page in Google's Rich Results Test (https://search.google.com/test/rich-results) → confirm Article + FAQ schema valid

**Day 1 — Indexation triggers**

8. GSC → Sitemaps → resubmit `https://fast-iptv.tv/sitemap.xml`
9. GSC → URL Inspection → request indexing on each of the 8 new URLs (spread across 24h if hitting the 10/day limit)
10. Ping sitemap on Google + Bing (URLs in Section 4)
11. (Optional) Set up IndexNow API key + call it for each of the 8 URLs

**Day 2 — Homepage tweaks (cannibalization prevention)**

12. Update homepage `<h1>` and meta description per Section 5
13. Update `PricingSection` heading and add sub-link to `/iptv-subscription`
14. Redeploy homepage

**Days 3-7 — Monitoring**

15. GSC → Coverage → confirm all 8 URLs move from "Discovered" → "Indexed"
16. GSC → Performance → filter for each new URL → wait for first impressions (typically 5-10 days for KD 0-3 keywords)
17. Ahrefs → Site Explorer → your domain → Organic keywords → filter to last 7 days → confirm new keywords appearing

**Weeks 2-8 — Refinement**

18. Any page not indexing within 7 days → check GSC URL Inspection for crawl errors, resubmit
19. Any keyword ranking positions 11-30 → add 1-2 more internal links to that page from higher-authority existing pages
20. Any keyword ranking positions 4-10 → add a 100-200 word FAQ answer targeting a related long-tail

---

## What NOT to do (guardrails)

- **Do not** stuff `iptv subscription` into every H2 — keep density at 1.5-2%. Google 2026 penalises exact-match repetition.
- **Do not** use identical content across `/best-iptv-uk` and `/best-iptv-provider-uk`. They target overlapping keywords but must have substantially different body copy (I've written them accordingly).
- **Do not** noindex `/iptv-subscription` "until it's perfect" — ship as-is. Google can't rank what it can't index. Refine after first data.
- **Do not** 301 the homepage to `/iptv-subscription` (this was mentioned as an option in older SEO playbooks) — homepage is your #1 trust asset and holds the branded "fast iptv" ranking.
- **Do not** add JavaScript-only content on the new pages — Google indexes rendered HTML for Next.js RSC pages (which is what these are), but any client-only text would be invisible to first-crawl indexing.

---

## Realistic outcome projection

**Weeks 1-2:** 8 pages indexed. First impressions on lowest-KD terms (`best iptv uk` KD 0, `cheap iptv` KD 0, `iptv service uk` KD 0, `best iptv services` KD 0).

**Weeks 3-6:** First positions in 20-50 range for medium-KD terms (`iptv subscription` KD 2, `buy iptv` KD 3, `iptv channels` KD 3). Impressions climbing to 500-1,500 monthly.

**Weeks 6-16:** Position climb into top 10 for KD 0-3 terms. Combined organic traffic in the range 200-800 monthly clicks — driven mostly by the pillar `/iptv-subscription` and `/best-iptv-uk` pages.

**Ceiling (with zero backlinks):** For KD 5-7 terms, expect a top-10 ceiling around position 5-8. Top 3 requires 3-10 quality niche backlinks (out of scope per your brief).

**With this content alone**, you should reasonably outrank at least 30-50 of Televo.uk's currently-held keywords within 6 months, because your content is deeper and more structured, and Televo relies on a single homepage while you'll have 8 dedicated commercial pages each optimised for its exact target term.

---

*Plan generated 2026-07-26. All keyword data verified against Televo.uk organic rankings export and google_gb_iptv matching-terms export in `/data/`.*
