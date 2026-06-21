# GEO Analysis — fast-iptv.tv

**Date:** 2026-06-20
**Scope:** Homepage + site-wide signals (robots, sitemap, schema, rendering, brand entity presence)
**Framework:** GEO = SEO fundamentals applied to AI-search surfaces (Google AIO, ChatGPT, Perplexity)
**Compared against:** baseline analysis 2026-06-19 (59/100)

---

## 1. GEO Readiness Score: 76 / 100  ▲ +17 vs baseline

| Category | Weight | Score | Δ | Notes |
|---|---|---|---|---|
| Citability | 25 | 23/25 | +7 | "What is X?" in first 60 words ✓ · four 134-167w answer blocks ✓ · Article citations |
| Structural readability | 20 | 17/20 | +1 | New question-based H2 "What is Fast IPTV?" — hierarchy preserved |
| Multi-modal content | 15 | 6/15 | — | Unchanged — still no video, no infographic, no interactive tool |
| Authority & brand signals | 20 | 14/20 | +9 | Author byline ✓ · Updated date ✓ · Article schema with author/publisher/dateModified/citation ✓ |
| Technical accessibility | 20 | 16/20 | — | SSR ✓ · AI crawlers allowed via wildcard · `/llms.txt` still 404 |
| **Total** | **100** | **76** | **+17** | Strong upper-mid band — authority layer is now the binding constraint, not citability |

---

## 2. Platform Breakdown

| Platform | Score | Δ | Why |
|---|---|---|---|
| Google AI Overviews | 78/100 | ▲ +16 | Article schema + named author + `dateModified` + Wikipedia citation = all the E-E-A-T signals AIO ranks on. FAQPage + Product + Service unchanged. Still no `AggregateRating` (rich snippet ceiling). |
| ChatGPT (web search) | 62/100 | ▲ +12 | Wikipedia citation in Article schema + 140-word self-contained Q1 answer + explicit definition in first paragraph all match ChatGPT's extraction patterns. Still no Wikipedia entity for "Fast IPTV" itself (the lever that would push to 75+). |
| Perplexity | 56/100 | ▲ +11 | Self-contained 150-word answer blocks for the four most cited intents (definition, devices, broadband, comparison) match Perplexity's quote-extraction selector. Still no Reddit/community surface — Perplexity citation ceiling. |
| Bing Copilot | 70/100 | ▲ +10 | Article schema + clean sitemap + IndexNow-compatible Next.js. The Article `dateModified` is a Bing freshness signal. |

---

## 3. What Changed vs Baseline (Phase 1+2a)

**Newly live:**
- `H2: What is Fast IPTV?` definition section above the fold, server-rendered, with byline `Reviewed by Fast IPTV Editorial Team · Updated 19 June 2026` and `<time dateTime="2026-06-19">` element
- `Article` JSON-LD `@graph` node with `author`, `publisher`, `datePublished: 2025-11-07`, `dateModified: 2026-06-19`, `about[]` linking to Wikipedia entities for `IPTV` and `United Kingdom`, and `citation[]` to Wikipedia + Ofcom
- FAQ Q1 renamed `What makes this a fast IPTV service?` → `What is Fast IPTV?` (matches AI query pattern)
- 4 FAQ answers expanded into the 134–167 word citability range:
  - Q1 (definition) — 140 words
  - Q5 (devices) — 150 words
  - Q7 (internet speed) — 150 words
  - Q11 (vs traditional pay-TV) — 150 words
- Site-wide compliance scrub removed unverifiable claims (`99.9% uptime`, `sub-three-second lag`, `under four minutes response`, broadcaster trademarks) — these were trust-debt for AI summaries

**Still missing (gating further uplift):**
- `/llms.txt` — 404
- `Organization.sameAs[]` array — no entity graph (Wikipedia / LinkedIn / YouTube / Trustpilot)
- `AggregateRating` schema — no Google rich snippet star eligibility
- Wikipedia entity for "Fast IPTV" brand — ChatGPT ceiling
- Reddit / YouTube brand mention surface — Perplexity ceiling
- Multi-modal: no video embed, no infographic, no calculator/tool

---

## 4. AI Crawler Access Status

`robots.txt` (unchanged since baseline):

```
User-Agent: *
Allow: /
Disallow: /tutorials
Sitemap: https://fast-iptv.tv/sitemap.xml
```

| Crawler | Status | Implication |
|---|---|---|
| GPTBot, OAI-SearchBot, ChatGPT-User | Allowed (wildcard) | ChatGPT web surfaces can index |
| ClaudeBot | Allowed (wildcard) | Claude search/browse works |
| PerplexityBot | Allowed (wildcard) | Perplexity can index |
| CCBot, anthropic-ai, Bytespider, cohere-ai | Allowed (wildcard) | Training corpora captured |
| Google-Extended | Allowed (wildcard) | Bard/Gemini training-corpus opt-in |

**No regression.** Optional improvement: split into explicit AI-crawler blocks so future tooling auto-detects allow/deny intent (e.g. for IndexNow + Cloudflare AI Audit). Low priority — wildcard semantics are unambiguous.

The `Disallow: /tutorials` blocks Googlebot from `/tutorials` too. Reconsider — this is the only path-level block and may be unintentional crawl-budget loss. **Flag: P2 — investigate intent.**

---

## 5. `/llms.txt` Status

**Result:** 404 (unchanged).

Evidence position from the seo-geo skill: `/llms.txt` has no proven citation-ranking weight (Mueller, Illyes, SE Ranking 300k-domain study). Recommend adding as a low-cost hedge (15 min) but do not treat as a lever.

Template (paste at `public/llms.txt`):

```
# Fast IPTV
> UK-focused IPTV subscription. 37,000+ live channels, 198,000+ on-demand titles, native 4K UHD, 60-second automatic activation, 30-day money-back.

## Pillar pages
- [What is Fast IPTV?](https://fast-iptv.tv/#what-is-fast-iptv): Definition + service summary
- [Pricing plans](https://fast-iptv.tv/#pricing): Four plans, £25.99 to £79.99
- [Device compatibility](https://fast-iptv.tv/iptv-for-firestick): Firestick + Apple TV + smart TV setup
- [Buffering diagnosis](https://fast-iptv.tv/iptv-buffering-fix): Five root causes of IPTV buffering
- [UK legality](https://fast-iptv.tv/is-iptv-legal-uk): Legal-status explainer

## Key facts
- Channel count: 37,000+ live channels
- VOD library: 198,000+ films and series
- Activation: ~60 seconds via email after payment
- Lowest effective monthly rate: £3.33 on the 24-month plan
- Refund window: 30 days
- Support: 24/7 UK-based live chat and email
```

---

## 6. Brand Mention / Entity Analysis (UNCHANGED — biggest remaining lever)

| Signal | Status | GEO Risk |
|---|---|---|
| Wikipedia presence (brand) | None | **High** — ChatGPT pulls 47.9% of citations from Wikipedia |
| Reddit threads / mentions | Unverified, likely none | **High** — Perplexity pulls 46.7% from Reddit |
| YouTube channel / mentions | Unverified | **High** — YouTube mentions correlate ~0.737 with AI citations |
| LinkedIn company page | Unverified | Moderate |
| Trustpilot | Mentioned on-page but no `sameAs` link | Moderate |
| Schema `Organization.sameAs[]` | **Still missing entirely** | **High** — no entity graph |

**Brand mentions correlate 3× more strongly with AI visibility than backlinks** (Ahrefs 75k-brand study). On-page signals are now strong; the next blocker is OFF-page.

---

## 7. Passage-Level Citability (Sampled)

| Block | Word count | Self-contained? | Has data? | Verdict |
|---|---|---|---|---|
| DefinitionSection ¶1 | ~85 | Yes | Yes (37k/198k, device list) | ✓ AI citation target |
| DefinitionSection ¶2 | ~95 | Yes | Yes (£25.99 → £79.99, 60s, 30-day) | ✓ AI citation target |
| FAQ Q1 (What is Fast IPTV?) | 140 | Yes | Yes | ✓ Optimal (134-167 band) |
| FAQ Q5 (Devices) | 150 | Yes | Yes (specific models, 25 Mbps) | ✓ Optimal |
| FAQ Q7 (Speed) | 150 | Yes | Yes (10/25/50 Mbps tiers, 5GHz Wi-Fi) | ✓ Optimal |
| FAQ Q11 (vs pay-TV) | 150 | Yes | Yes (£3.33 vs £75+, 37k vs 270) | ✓ Optimal |
| Q2-Q4, Q6, Q8-Q10 | 20-50 each | Partial | Low | Still short — phase-2b candidate |

---

## 8. Server-Side Rendering Check

Next.js 16.2.2 App Router with `static` prerender confirmed on all 21 routes (build output). All content above is server-rendered HTML — AI crawlers without JS execution receive the full DOM including the new `Article` JSON-LD and the DefinitionSection text. **Pass.**

---

## 9. Top 5 Highest-Impact Next Changes (Phase 2b candidates)

### 1. Add `Organization.sameAs[]` array  ·  Authority +3, ChatGPT +5
**Where:** `src/app/page.tsx` Organization node in `@graph`
```ts
sameAs: [
  "https://www.trustpilot.com/review/fast-iptv.tv",      // when live
  "https://www.linkedin.com/company/fast-iptv",            // when live
  "https://www.youtube.com/@FastIPTV",                     // when live
  "https://twitter.com/FastIPTVuk",                        // when live
]
```
**THINK:** Entity-graph anchor. **ACCEPT:** Validate each URL returns 200 + brand match. **GROW:** Track via `site-explorer-linked-anchors-external` in 30 days.

### 2. Expand FAQ Q2-Q4, Q6, Q8-Q10 to 134-167 words  ·  Citability +2, Perplexity +6
Each short answer is a missed Perplexity citation. Same pattern as Phase 2a Q1/Q5/Q7/Q11.
**THINK:** Citation window is the answer block, not the page. **ACCEPT:** All answers ≥ 130 words after edit. **GROW:** Test prompt "how fast is IPTV activation" weekly in Perplexity.

### 3. Publish `/llms.txt`  ·  Authority +1 (hedge, not lever)
Template above. 15-min job.
**ACCEPT:** Returns 200 with text/plain (not text/html). **GROW:** Server logs for GPTBot/ClaudeBot/PerplexityBot hits on `/llms.txt`.

### 4. Add `AggregateRating` schema (only if real reviews exist)  ·  Google AIO +4
Requires real verified Trustpilot pull or first-party reviews. Do NOT fabricate.
**ACCEPT:** All ratings traceable to verified source. **GROW:** Star snippet eligibility in GSC.

### 5. Reduce visible H1/H2 superlatives on `/` and sub-pages  ·  ChatGPT +3, Perplexity +3
Current H2 `Why Our Fast IPTV UK Subscription Beats Every Competitor` and `The Widest Fast IPTV UK Library` contain superlatives that AI summaries actively filter out. Rewrite as factual claims ("Why Fast IPTV — Four Differentiators"; "37,000-Channel Fast IPTV Library").
**THINK:** AI summaries quote the noun phrase, not the boast. **ACCEPT:** Re-run prompt "what does Fast IPTV offer" in ChatGPT after 30 days — should now cite by feature, not by claim.

---

## 10. Schema Recommendations (delta vs Phase 2a)

| Node | Status | Action |
|---|---|---|
| `Organization` | Present, missing `sameAs[]` | Add `sameAs` when external profiles ready |
| `WebSite` | Present | ✓ no change |
| `Service` | Present | ✓ no change |
| `Product` | Present, missing `AggregateRating` | Add IF real reviews exist |
| `BreadcrumbList` | Present | Expand for sub-pages (each route should breadcrumb to `/`) |
| `Article` (NEW) | **Present (Phase 2a)** | ✓ no change — author, publisher, dateModified, citation, about all there |
| `FAQPage` | Present, data-driven | ✓ no change — propagates from `FAQ_ITEMS` |

---

## 11. Falsifiability — How To Know This Worked

| Hypothesis | Falsification check | Window |
|---|---|---|
| Adding the DefinitionSection improves AI citability | Run prompt "what is fast iptv" in ChatGPT/Perplexity at T+30d; check if fast-iptv.tv is cited or quoted | 30 days |
| Article schema dateModified improves Google AIO freshness | GSC: AIO impressions for "fast iptv UK" cluster at T+30d vs prior 30d | 30 days |
| Expanded FAQ answers get cited by Perplexity | Perplexity prompt "what internet speed for 4K IPTV" — does fast-iptv.tv appear in sources? | 14 days |
| Authority layer (byline + dateModified) shifts E-E-A-T signal | GSC organic impressions for top-3 head terms | 60 days |

If none of the four pass at T+60d, the binding constraint is **off-page entity presence** (Section 6), not the on-page work.

---

## 12. Leading Indicators To Monitor Without Re-Running The Audit

1. **GSC AIO impressions** for the head-term cluster (`fast iptv`, `iptv uk`, `iptv subscription`) — weekly
2. **Direct branded search volume** for `fast iptv` — monthly (proxy for brand-mention growth)
3. **Server log hits** from GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot on `/` — weekly
4. **Citation appearances** in ChatGPT (test query: "best IPTV UK 2026") — monthly manual check
5. **Wikipedia + Reddit mention count** — quarterly (this is the lever that breaks the off-page ceiling)

---

## Verdict

Phase 1 (compliance scrub) + Phase 2a (definition + Article schema + FAQ expansion) lifted the GEO readiness score from **59 → 76 (+17)**. The on-page authority layer is now competitive. The remaining 24-point gap is overwhelmingly off-page: brand entity presence on Wikipedia, Reddit, YouTube. On-page Phase 2b can recover ~6 more points (sameAs array, FAQ expansion of remaining 7 answers, llms.txt, superlative cleanup); the rest requires off-domain work.

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Built by agricidaniel — Join the AI Marketing Hub community
🆓 Free  → https://www.skool.com/ai-marketing-hub
⚡ Pro   → https://www.skool.com/ai-marketing-hub-pro
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```
