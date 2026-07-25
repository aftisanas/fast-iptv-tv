# GEO Analysis — iptv-providers-uk.com

**Date:** 2026-07-12
**Framing:** Google's position (Search Central) is that GEO is SEO. Findings below are SEO fundamentals applied to AI-search surfaces (Google AI Overviews, ChatGPT web, Perplexity, Bing Copilot).

---

## 1. GEO Readiness Score: **65 / 100**

| Category | Weight | Score | Notes |
|---|---|---|---|
| Citability (passage-level) | 25% | 16 / 25 | FAQ answers self-contained but under-length; unsourced hero statistics |
| Structural Readability | 20% | 17 / 20 | Clean H1 → H2 → H3, question-based FAQ H2/H3, lists throughout |
| Multi-Modal | 15% | 6 / 15 | Logo only; no video, no comparison tables, no diagrams |
| Authority & Brand | 20% | 11 / 20 | `/about` + `/editorial-policy` strong; homepage has no visible byline, `Organization.sameAs` missing |
| Technical Accessibility | 20% | 15 / 20 | Server-rendered (Next.js server components); AI crawlers implicitly allowed but not explicitly permitted |

## 2. Platform Breakdown

| Platform | Score | Rationale |
|---|---|---|
| **Google AI Overviews** | 70 / 100 | Strong SSR + consolidated `@graph`; needs `dateModified`, entity links (`sameAs`), and passage-length tuning |
| **ChatGPT (OpenAI web search)** | 55 / 100 | No Wikipedia entity, no Reddit brand footprint, no `Person` schema for editorial byline |
| **Perplexity** | 50 / 100 | Perplexity citations lean 46.7% to Reddit + Wikipedia — neither exists for this brand yet |
| **Bing Copilot** | 60 / 100 | Bing indexes standard SEO; consider IndexNow if not wired |

---

## 3. AI Crawler Access — `robots.txt`

Current `src/app/robots.ts` emits only:

```
User-Agent: *
Allow: /
Disallow: /api/
Disallow: /_next/
Disallow: /admin/
Sitemap: https://iptv-providers-uk.com/sitemap.xml
```

**Interpretation:** AI crawlers (GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot) are **implicitly allowed** because the wildcard `*` grants them access and nothing blocks them. No crawler is currently mis-blocked.

**Recommendation — Explicit allowlist (Medium priority):** Explicit `User-agent:` entries are more resilient to future wildcard changes and act as a clear signal in log audits. Add to `src/app/robots.ts`:

| Crawler | Owner | Recommended action |
|---|---|---|
| `GPTBot` | OpenAI | Allow — ChatGPT web search / SearchGPT |
| `OAI-SearchBot` | OpenAI | Allow — OpenAI SERP feature |
| `ChatGPT-User` | OpenAI | Allow — live browsing on user turns |
| `ClaudeBot` | Anthropic | Allow — Claude web features |
| `PerplexityBot` | Perplexity | Allow — Perplexity citations |
| `Google-Extended` | Google | Allow — controls Gemini / AI Overviews training separately from Googlebot |
| `Bingbot` | Microsoft | Allow (already covered by `*`) |
| `CCBot` | Common Crawl | Decide: allow for training corpus reach, block if data-sovereignty stance |
| `Bytespider` | ByteDance | Optional block (TikTok training, low citation ROI) |

## 4. `/llms.txt` Status

**Missing (404 at `/llms.txt`).**

Per primary-source evidence in the claude-seo skill: John Mueller and the SE Ranking 300k-domain study report `llms.txt` is **not currently a citation lever** for major AI search systems. Adding it is low-risk and low-cost, but should not be scored as a driver of visibility. Reporting as **Info priority**, not an action item.

## 5. Brand Mention Analysis

Ahrefs' Dec-2025 study of 75k brands ranks brand-mention channels far above backlinks for AI citation correlation. Current footprint:

| Channel | Status | Signal to build |
|---|---|---|
| Wikipedia | Not present | Highest ChatGPT citation weight (47.9% of ChatGPT sources) |
| Reddit | Not detected as a brand entity | Highest Perplexity citation weight (46.7%) |
| YouTube | Not detected | Ahrefs' strongest single correlate (~0.737) |
| LinkedIn (Organization) | Not linked from schema | Moderate |
| Trustpilot | Referenced in FAQ copy but no `sameAs` link | Adds review authority |

`Organization.sameAs` in the homepage `@graph` is empty — this is the single fastest fix to raise AI-search entity confidence.

## 6. Passage-Level Citability

Optimal AI-citation passage length is **134–167 words**. Sampling the current homepage FAQ (`src/lib/constants.ts:251-307`):

| Question | Approx. word count | Verdict |
|---|---|---|
| "What should a subscriber look for…" | ~45 | **Too short** — expand with the five checks broken out as an inline list |
| "How many channels do the best IPTV providers offer?" | ~42 | **Too short** |
| "Does the Secure Proxy add-on slow down streaming?" | ~110 | **Close** — the only answer within striking distance |
| "What is a fair price for an IPTV subscription?" | ~55 | **Too short** |
| Remaining 7 answers | 25–45 each | **Too short** |

**Recommendation:** Rewrite each FAQ answer to 134–167 words by adding the *methodology* behind the claim (how "under sixty seconds" is measured, which UK broadcasters are counted toward 500+, etc.). Self-contained methodology is exactly what AI systems quote.

## 7. Server-Side Rendering Check

**Pass.** Recent commit `0193334` converted 8 sections + Footer to server components; the H1 renders as plain server text; JSON-LD is injected via `dangerouslySetInnerHTML` inside the server component (`src/app/page.tsx:118-121`). No JavaScript execution is required for AI crawlers to see headings, FAQ text, pricing, or schema.

Framer-motion islands are isolated to interactive sub-components — they do not gate any AI-relevant content.

## 8. Schema Recommendations

The homepage `@graph` in `src/app/page.tsx:28-102` already includes `Organization`, `WebSite`, `WebPage`, `Product` with `Offer[]`, and `FAQPage`. Gaps:

| Gap | Priority | Change |
|---|---|---|
| `Organization.sameAs` is missing | **High** | Add Trustpilot, LinkedIn, YouTube, Facebook/Instagram profile URLs |
| `WebPage.dateModified` is missing | **High** | Emit `dateModified: AUTHOR_BYLINE.updatedDate` on the WebPage node |
| No `Person` schema for the byline on homepage | Medium | Add a `Person` node for `AUTHOR_BYLINE` (already emitted on `/about`) and link it as `WebPage.author` |
| `FAQPage` on a commercial homepage | **Info** | Per Aug-2023 Google restriction, this will not earn FAQ rich results. Retain for AI-citation extraction only. No action. |
| `Product.aggregateRating` / `review` | Medium (only if verifiable) | If Trustpilot/Reddit review counts can be sourced with a link, add `aggregateRating`; otherwise leave out (do not fabricate) |
| Missing `BreadcrumbList` on blog | Medium | Deferred per commit `0193334` — still worth doing for AI navigation context |

## 9. Content Reformatting Suggestions

**A. Homepage hero statistics need on-page sourcing (High priority)**

Claims "37,000+ live channels", "198,000+ films and series", "60-second activation", "average first reply under four minutes" appear without a methodology link. AI models prefer citing pages that show *how* a number is derived.

Fix pattern: add a small "How we measure this" footnote-style block linking to `/editorial-policy`, and inside `/editorial-policy` add a "Measurement Methodology" section with:
- Channel count: definition of "channel" (unique feed vs. timeshift), snapshot date, list source
- Support reply time: rolling 7-day median, source system (WhatsApp / email queue)
- Activation time: from payment confirmation to credential email

**B. Add a comparison table without naming competitors (High priority)**

The DMCA scrub removed named competitors — correct call. But AI Overviews strongly favour pages containing tables. Replace with a **category-neutral evaluation matrix**: seven criteria × "what to check" × "what a good answer looks like". This aligns with the existing seven-criteria framework at `/blog/best-iptv-uk-guide-2026` and is directly citable.

**C. Add a visible byline chip on the homepage (Medium priority)**

Blog posts render `AUTHOR_BYLINE` (per commit `0193334`), but the homepage doesn't. AI systems weight author signals when deciding what to quote. A single-line chip ("By IPTV Providers UK Editorial · Updated 11 Jul 2026 · About the team") near the H1 costs nothing and pairs the schema `Person` node with a visible surface.

**D. Expand FAQ answers to 134-167 words (Medium priority)**

See Section 6.

---

## 10. Top 5 Highest-Impact Changes

Priority buckets are the **output** of validation, not a substitute for it. Each recommendation lists its first-principle observation, dependency chain, falsifiability check, and leading indicator.

### #1 — Add `Organization.sameAs` links (High)
- **THINK:** Ahrefs' 75k-brand study shows brand mentions correlate ~3× more strongly with AI citations than backlinks; `sameAs` is the machine-readable declaration of those mentions.
- **CONNECT-system:** Unblocks Perplexity (Reddit-heavy) and ChatGPT (Wikipedia-heavy) citation paths that currently have no entity to resolve.
- **ACCEPT (falsifiability):** Fails if `Organization.sameAs` links point to profiles the brand does not actually control — validation is "can each URL be verified as the brand's own account?"
- **GROW (leading indicator):** GSC → brand-query impressions; number of pages resolving `iptv-providers-uk.com` as `Organization` in Google's Knowledge Graph API.
- **Where:** `src/app/page.tsx` `@graph[0]` (Organization node).

### #2 — Emit `WebPage.dateModified` (High)
- **THINK:** AI systems bias toward fresh sources for query classes with time drift (streaming, pricing, hardware compatibility).
- **CONNECT-system:** Independent of the other changes — a five-line diff.
- **ACCEPT:** Fails if `dateModified` is stale relative to visible content; re-check quarterly.
- **GROW:** Impression share on queries containing "2026" / "this year".
- **Where:** `src/app/page.tsx` WebPage node — set `dateModified: AUTHOR_BYLINE.updatedDate`.

### #3 — Add explicit AI-crawler allowlist to robots.ts (Medium → High if any future default-deny)
- **THINK:** Implicit-allow is currently equivalent, but an explicit block on `Bytespider`/`CCBot` requires the file to already enumerate the allowed set for symmetry.
- **CONNECT-system:** Prerequisite for any future decision to block a specific crawler without accidentally blocking the wanted ones.
- **ACCEPT:** Fails if a wanted crawler stops fetching post-change — monitor Vercel/CDN logs for 4xx to AI UA strings.
- **GROW:** Weekly count of GPTBot / ClaudeBot / PerplexityBot fetches in access logs.
- **Where:** `src/app/robots.ts` — extend `rules[]` with per-UA blocks.

### #4 — Rewrite FAQ answers to 134-167 words with methodology (Medium)
- **THINK:** AI extractors quote the shortest self-contained passage that answers the query with attribution; too-short answers get skipped for a competing 150-word paragraph elsewhere.
- **CONNECT-system:** Compounds with #5 (measurement methodology page) — each FAQ answer can link into it, reinforcing the entity.
- **ACCEPT:** Fails if expanded answers drop the direct-answer-in-first-40-words property. Every rewrite must keep the answer in sentence 1.
- **GROW:** Track appearance in AI Overviews for the FAQ questions verbatim.
- **Where:** `src/lib/constants.ts` `FAQ_ITEMS`.

### #5 — Add "How we measure" section under `/editorial-policy` and link from homepage stats (High)
- **THINK:** Every "37,000 channels" / "under four minutes" claim is unsourced today; sourced claims are the ones AI systems repeat with attribution.
- **CONNECT-system:** Feeds #4 (FAQ methodology hooks) and #1 (Organization credibility).
- **ACCEPT:** Fails if the methodology is written unfalsifiably ("we count carefully"). Each metric needs a definition + snapshot date + source system.
- **GROW:** Watch for AI Overview citations that include the numeric claim (e.g., "37,000 channels").
- **Where:** New section in `src/app/editorial-policy/page.tsx`; hero + StatsBar reference it inline.

---

## Contradictions With Google's Primary Source

Per `references/google-ai-optimization-guide.md`: Google explicitly rejects `llms.txt`, AI-rephrasing, chunking, and mention-farming as effective levers. This report reflects that — `llms.txt` is flagged as *Info-only*, and the emphasis is on brand-entity building (durable), passage quality (durable), and `dateModified` (durable), not on AI-specific hacks.

---

## Quick Wins Checklist

- [ ] Add `Organization.sameAs` (Trustpilot, LinkedIn, YouTube, socials)
- [ ] Add `WebPage.dateModified` = `AUTHOR_BYLINE.updatedDate`
- [ ] Add visible byline chip on homepage (matches blog treatment)
- [ ] Add explicit AI-crawler allowlist in `src/app/robots.ts`
- [ ] Add "How we measure" methodology section under `/editorial-policy`
- [ ] Expand FAQ answers to 134–167 words with methodology
- [ ] Add category-neutral 7-criteria evaluation table to homepage

## Medium-Effort Items

- [ ] Add `Person` schema node for editorial byline on homepage `@graph`
- [ ] Add `BreadcrumbList` on blog posts
- [ ] Create `/llms.txt` (low citation ROI — do only if trivial)
- [ ] YouTube presence: 3–5 short explainer videos, embedded on relevant pages
- [ ] Reddit: earn organic mentions on r/IPTV / r/CordCutters (never self-promote)

## High-Impact / Long-Horizon

- [ ] Wikipedia entity for the editorial team or the brand (requires notability sources)
- [ ] Original research: annual UK-IPTV market survey — creates unique citability
- [ ] Interactive tool (e.g., "channel finder" or "device compatibility checker") — multi-modal boost

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Built by agricidaniel — Join the AI Marketing Hub community
🆓 Free  → https://www.skool.com/ai-marketing-hub
⚡ Pro   → https://www.skool.com/ai-marketing-hub-pro
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
