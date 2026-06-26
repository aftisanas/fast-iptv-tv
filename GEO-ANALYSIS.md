# GEO Analysis — fast-iptv.tv

**Date:** 2026-06-23
**Scope:** Live homepage + site-wide signals (robots, sitemap, schema, rendering, brand entity presence)
**Framework:** GEO = SEO fundamentals applied to AI-search surfaces (Google AIO, ChatGPT, Perplexity, Bing Copilot)
**Compared against:** prior analysis 2026-06-20 (Phase 2a — 76/100)
**Site state:** Phase 2c deployed (commit `a40807f`)

---

## 1. GEO Readiness Score: 79 / 100  ▲ +3 vs Phase 2a

| Category | Weight | Score | Δ | Notes |
|---|---|---|---|---|
| Citability | 25 | 24/25 | +1 | All 11 FAQ answers now expanded (89–103 words median); definition in first 18 words; specific stats throughout |
| Structural readability | 20 | 17/20 | — | Clean H1→H2→H3 hierarchy; question-based FAQ H3s; Read More truncation is CSS-only (full text remains in DOM for AI extraction) |
| Multi-modal content | 15 | 6/15 | — | Unchanged — still no video, no comparison table, no infographic, no interactive tool. Largest single ceiling. |
| Authority & brand signals | 20 | 16/20 | +2 | **AggregateRating now present** (3.9★ / 12) — Product rich-result ceiling cleared. Article schema + dateModified + Wikipedia entity citations retained. Author is still entity-only ("Fast IPTV Editorial Team"), not a named Person with credentials. |
| Technical accessibility | 20 | 16/20 | — | SSR ✓ · AI crawlers allowed via wildcard · `/llms.txt` still 404 (no citation-weight impact per primary sources, but documents intent) · `/tutorials` missing from sitemap |
| **Total** | **100** | **79** | **+3** | Authority + multi-modal remain the binding constraints. Citability + technical are at or near ceiling. |

---

## 2. Platform Breakdown

| Platform | Score | Δ | Why |
|---|---|---|---|
| Google AI Overviews | 81/100 | ▲ +3 | AggregateRating now feeds Product rich results in SERP (review stars eligible). Article schema with `dateModified` + Wikipedia `sameAs` citations remain strong. FAQPage may not earn rich snippets (Aug 2023 restriction to gov/healthcare) but AI extraction is unaffected. |
| ChatGPT (web search) | 64/100 | ▲ +2 | Q1 "What is Fast IPTV?" answer pattern + all 11 expanded FAQ blocks match ChatGPT extraction. Still no Wikipedia entity for "Fast IPTV" itself — the lever that would push past 75. |
| Perplexity | 58/100 | ▲ +2 | More self-contained answer blocks now exist (Q2/Q4/Q6/Q8/Q9/Q10 added in Phase 2c). Still no Reddit / community discussion surface — Perplexity ceiling unchanged. |
| Bing Copilot | 70/100 | — | No measurable change. Article `dateModified` is freshness signal; sitemap stays clean. |

**Cross-platform reality:** Only 11% of domains are cited by *both* ChatGPT and Google AIO for the same query (Ahrefs Dec 2025). The Google AIO score is your best near-term lever; the ChatGPT/Perplexity scores depend on off-site signals (Wikipedia, Reddit, YouTube) you can't fix from the codebase.

---

## 3. AI Crawler Access Status

`/robots.txt` contents (verbatim):

```
User-Agent: *
Allow: /

Sitemap: https://fast-iptv.tv/sitemap.xml
```

| Crawler | Owner | Purpose | Status |
|---|---|---|---|
| GPTBot | OpenAI | ChatGPT web search | **Allowed** (wildcard) |
| OAI-SearchBot | OpenAI | OpenAI search features | **Allowed** (wildcard) |
| ChatGPT-User | OpenAI | ChatGPT user browsing | **Allowed** (wildcard) |
| ClaudeBot | Anthropic | Claude web features | **Allowed** (wildcard) |
| anthropic-ai | Anthropic | Claude training | **Allowed** (wildcard) |
| PerplexityBot | Perplexity | Perplexity AI search | **Allowed** (wildcard) |
| CCBot | Common Crawl | Training data | **Allowed** (wildcard) |
| Google-Extended | Google | Gemini training | **Allowed** (wildcard) |
| Applebot-Extended | Apple | Apple Intelligence | **Allowed** (wildcard) |
| Bytespider | ByteDance | TikTok/Douyin | **Allowed** (wildcard) |

**Verdict:** Default-open. Acceptable. Two policy decisions for the operator:

1. **Block training crawlers if desired:** Add explicit `Disallow: /` blocks for CCBot, Google-Extended, anthropic-ai, Applebot-Extended, Bytespider — these are training-data crawlers, not search-time citation crawlers. Blocking them does not hurt AI search visibility.
2. **Keep search-time bots allowed:** Never block GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, PerplexityBot — these are the bots that fetch your pages at AI-search-query time and produce citations.

---

## 4. llms.txt Status

**Status:** 404 — file does not exist.

**Verdict:** Per primary sources (Mueller, Illyes, SE Ranking 300k-domain study), `/llms.txt` is not currently a citation lever for major AI search systems. Creating it has documentation/intent value but no measured ranking impact.

**Recommendation:** Low priority. If you create one, point it at your most-cited pages (homepage, the 4 blog posts, /tutorials) with the existing 18-word definition as the description.

---

## 5. Brand Mention Analysis

**Status:** Not investigated this run (web search tools were declined during the audit).

**Why it matters:** Ahrefs Dec 2025 study of 75,000 brands — brand mentions correlate 3× more strongly with AI visibility than backlinks. YouTube mentions correlate strongest (~0.737), followed by Reddit and Wikipedia.

**Recommend the operator manually check:**

- **Reddit** — search `site:reddit.com "fast-iptv.tv"` and `site:reddit.com "fast iptv" UK` on Google. Look for r/IPTVUK, r/IPTV, r/firestick threads.
- **YouTube** — search "fast iptv UK review" and "fast-iptv.tv tutorial" on YouTube. Tutorial videos from setup creators are high-value mentions.
- **Wikipedia** — fast-iptv.tv is unlikely to merit a standalone article (notability bar). The realistic lever is being cited as a *source* on the existing IPTV article — would need genuine notable coverage first.
- **Trustpilot / Reviews.io** — measured profile presence + review volume. The on-page AggregateRating is 3.9★ / 12 reviews (Google Business Profile) — Trustpilot would broaden the signal.
- **LinkedIn** — company page presence, follower count, employee profiles.

---

## 6. Passage-Level Citability

**Optimal range per current research:** 134–167 words per self-contained answer block.

| Block | Word count | Status |
|---|---|---|
| Q1 — What is Fast IPTV? | ~140 | ✓ In range |
| Q2 — How fast is activation? | ~92 | Below range — could grow to 134+ |
| Q3 — What makes Fast IPTV speed-focused? | ~98 | Below range |
| Q4 — Does fast IPTV sacrifice quality? | ~95 | Below range |
| Q5 — Which devices work best? | ~150 | ✓ In range |
| Q6 — Does Secure Proxy slow streaming? | ~100 | Below range |
| Q7 — What internet speed do I need? | ~165 | ✓ In range |
| Q8 — Multi-device streaming? | ~90 | Below range |
| Q9 — Contract / cancellation? | ~99 | Below range |
| Q10 — Support response time? | ~95 | Below range |
| Q11 — Compare to traditional pay-TV? | ~155 | ✓ In range |

**Verdict:** 4 of 11 blocks are in optimal range; 7 are 30–50 words short. Phase 2c expansion was significant but stopped before clearing the citability sweet spot. Worth one more pass to lift Q2/Q3/Q4/Q6/Q8/Q9/Q10 each by ~40–50 words with specific data (timestamps, version numbers, percentage figures, named UK ISPs).

---

## 7. Server-Side Rendering Check

**Confirmed:** Next.js 16 with Turbopack, statically prerendered. Build output lists every public route as `○ (Static)` or `● (SSG)`. AI crawlers see complete HTML on first byte — no JavaScript dependency for content extraction.

**One exception:** The FAQ Read More button is client-side React (line-clamp toggle). The full answer text is still present in initial HTML — only the CSS truncation toggles. **AI extraction is unaffected.**

---

## 8. Schema Inventory (live, Phase 2c)

`@graph` node types currently emitted by the homepage:

1. **Organization** (with ImageObject logo)
2. **WebSite**
3. **Service** (areaServed: United Kingdom · OfferCatalog of 4 plans)
4. **Product** (with AggregateOffer + **AggregateRating: 3.9★ / 12** ← *added Phase 2c*)
5. **BreadcrumbList**
6. **Article** (with author, dateModified, citation Wikipedia entities for IPTV + United Kingdom)
7. **FAQPage** (11 Q&A pairs — note Aug 2023 Google restriction means no FAQ rich results on commercial sites, but AI/LLM extraction value remains)

**Gaps:**
- No **Person** schema for author. Currently "Fast IPTV Editorial Team" with no `sameAs` links. Replacing with a named Person + LinkedIn + author bio page would unlock the largest remaining authority signal.
- No **VideoObject** schema (no embedded videos exist yet).
- No **Review** schema for individual testimonials (TESTIMONIALS constant in code is not currently rendered live; if surfaced, individual `Review` nodes would complement the AggregateRating).

---

## 9. Top 5 Highest-Impact Changes

Ranked by impact-per-effort, with falsifiability checks per the synthesis methodology.

### #1 — Add /tutorials to sitemap.xml
- **Why:** /tutorials is built and deployed (per recent commit `4e8602f`) but missing from `sitemap.xml`. AI crawlers and Googlebot rely on the sitemap as a discovery hint. The page is being indexed via internal links only.
- **How to verify it failed:** Run `curl -s https://fast-iptv.tv/sitemap.xml | grep tutorials` after the fix — must return one match.
- **Leading indicator to monitor:** Google Search Console "Pages — Indexed" count for /tutorials should appear within 7–14 days.
- **Effort:** 2 minutes (one line in your sitemap generator).

### #2 — Lift 7 short FAQ answers to 134+ words
- **Why:** Q2/Q3/Q4/Q6/Q8/Q9/Q10 are currently 89–103 words — below the AI-citation sweet spot. Each needs ~40–50 more words of *specific* data (UK ISP names, exact Mbps figures, percentage of channels in 4K, named app version numbers, timezone-specific support hours).
- **How to verify it failed:** Word-count the answer strings in `src/lib/constants.ts` — all 11 should exceed 134.
- **Leading indicator to monitor:** AI Overview citation volume in GSC "AI Overviews" report (when GSC exposes the metric for your queries).
- **Effort:** 60–90 minutes of writing.

### #3 — Add a comparison table (Fast IPTV vs traditional pay-TV)
- **Why:** Currently the comparison lives only in Q11's prose. AI engines prefer `<table>` structures for comparative queries ("IPTV vs Sky", "IPTV vs Virgin Media"). Multi-modal content sees 156% higher selection rates.
- **How to verify it failed:** `grep -c "<table" .next/server/app/page.html` after build — must be ≥ 1.
- **Leading indicator to monitor:** SERP appearance for "[brand] vs traditional TV" comparison queries.
- **Effort:** 1–2 hours (component + content; pricing/channels/4K/contract columns map cleanly).

### #4 — Replace editorial team byline with a named Person + sameAs links
- **Why:** Google's QRG Sept 2025 update reinforced individual-author signals over corporate bylines. Anonymous "Editorial Team" caps E-E-A-T authority. A named person with `sameAs` linking to LinkedIn + a UK telecoms credential would land most heavily.
- **How to verify it failed:** Inspect deployed Article schema for `"@type": "Person"` under `author` — must match.
- **Leading indicator to monitor:** Click-through rate on author byline (if added as an interactive link to `/about/{author-slug}`).
- **Effort:** 30 minutes once you decide on a named editorial owner. Highest soft-cost: editorial governance, not code.

### #5 — Block training crawlers while keeping search crawlers (optional, policy)
- **Why:** Decoupling search-time citation crawlers (kept allowed) from training-data crawlers (blocked) is a defensible position. CCBot/anthropic-ai/Google-Extended/Bytespider don't deliver visibility — they only feed model training. No measurable downside to blocking.
- **How to verify it failed:** `curl https://fast-iptv.tv/robots.txt` shows the explicit Disallow blocks.
- **Leading indicator to monitor:** Server-log audit of bot user-agents over 30 days post-deploy.
- **Effort:** 15 minutes. **Policy decision, not a technical question.** Defer to operator preference.

---

## 10. Schema Recommendations

**Add (small effort):**
- `Person` schema for author (currently the largest authority gap — see Change #4)
- Sitemap entry for `/tutorials`

**Add when underlying content exists:**
- `VideoObject` if/when tutorial videos are embedded
- `HowTo` schema is **deprecated** (Sept 2023) — do not add even if tempted; AI engines still parse step lists in prose

**Maintain as-is:**
- AggregateRating at 3.9★ / 12 — keep manually synchronised with Google Business Profile aggregate; flag for review whenever the GBP count changes by ±5 or ±0.2 stars

---

## 11. Content Reformatting Suggestions

### A. FAQ answer expansion targets (the specific data to add)

- **Q2 (Activation):** Add typical email delivery window in BST vs out-of-hours (e.g., "Within 60 seconds during 09:00–22:00 BST, within 5–15 minutes overnight"). Name the email provider you send from.
- **Q3 (Speed-focused):** Add a concrete activation benchmark vs an unnamed industry comparison ("Activation under 60s vs typical IPTV reseller queues of 12–24 hours").
- **Q4 (Quality):** Quantify the 4K percentage of the library ("Approximately 18% of live channels broadcast in native 4K, with all major UK sport and entertainment feeds included").
- **Q6 (Secure Proxy):** Quantify latency overhead ("Measured latency overhead under 8ms in UK testing").
- **Q8 (Multi-device):** Name one or two real-world household scenarios.
- **Q9 (Contract):** Add the refund processing timeline ("Refunds are processed within 3 business days to the original payment method").
- **Q10 (Support):** Quote a typical response-time figure from your WhatsApp queue.

### B. Pricing table

Convert the current div-card pricing layout to a proper `<table>` (or render both: keep cards for visual UX, mirror as a hidden `<table>` with caption "Fast IPTV plans, durations and per-month effective price" for AI extraction). The current card layout is visually fine but provides AI engines with no tabular semantics.

### C. Outbound citations to authoritative sources

Currently zero outbound links to government/research/news sources. Two cheap additions:

- In Q7 (broadband speeds), cite Ofcom's UK home broadband report for the "10 Mbps stable HD / 25 Mbps 4K" figures.
- In Q11 (vs traditional TV), cite a 2025 Ofcom report on UK pay-TV pricing for the £75/month comparison anchor.

Authoritative outbound citations help both Google's E-E-A-T signal *and* AI extractors that prefer cited claims.

---

## 12. Comparison vs Phase 2a baseline (2026-06-20)

| Dimension | Phase 2a (76) | Phase 2c (79) | Net |
|---|---|---|---|
| FAQ blocks in optimal 134–167 word range | 4 | 4 | No net gain (expansions added but most still below 134) |
| Schema rich-result coverage | Article, FAQPage, Product | + AggregateRating | Product rich-result ceiling cleared |
| Robots & sitemap | All bots allowed, sitemap clean | Same + /tutorials missing | Slight regression (new page not in sitemap) |
| Author signal | Editorial Team byline | Same | No change |
| Multi-modal | No table, no video | Same | No change — largest remaining gap |
| Brand mention measurement | Not measured | Not measured | Recommend manual sweep |

**Net read:** Phase 2c was an authority + citability pass. The AggregateRating was the biggest single unlock. Multi-modal content (tables, video) is now the limiting category and would yield the largest score jump in the next pass.

---

## 13. What this report did NOT measure

Honesty about evidence gaps so future runs can target them:

- **Live brand mentions** on Reddit / YouTube / Wikipedia / Trustpilot — web search was declined during this audit.
- **Actual AI Overview / ChatGPT / Perplexity citation rates** for target queries (would need DataForSEO `ai_optimization_chat_gpt_scraper` or manual SERP checks).
- **Core Web Vitals field data** — separate `/seo google` run with PageSpeed Insights credentials.
- **Backlink profile** — separate `/seo backlinks` run.
- **/tutorials, /blog/\*, and individual guide pages** — only the homepage was deeply audited this run. The other 15 URLs in the sitemap would benefit from `/seo page` runs each, or a full `/seo audit`.

---

**Next-best follow-up command:** `/seo page https://fast-iptv.tv/tutorials` to audit the highest-traffic-potential supporting page, and verify whether the sitemap omission is hurting its indexation.
