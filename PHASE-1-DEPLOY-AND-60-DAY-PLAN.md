# Fast IPTV — Phase 1 Deploy + 60-Day Link/SERP-Presence Plan

**Date:** 2026-07-30
**Site:** https://fast-iptv.tv
**Baseline (GSC, 90 days):** 289 clicks on homepage, position 8.46 for "fast iptv" (SV 200), ~98% branded traffic. Non-branded acquisition: effectively zero. Referring domains: **0**.

---

## What shipped in Phase 1

**Architecture — 2 money pages, homepage byte-identical, /buy-iptv held for Phase 2:**

| URL | Primary keyword | KD | SV | Status |
|---|---|---:|---:|---|
| `/` (homepage) | fast iptv + brand-navigational | — | 200 | UNTOUCHED |
| `/best-iptv-provider-uk` | best iptv provider uk + word-order cluster | 0-4 | ~1,090 combined | Ships |
| `/iptv-channels` | iptv channels | 3 | 400 | Ships |
| `/buy-iptv` | buy iptv + iptv service provider | 2-3 | ~600 | HELD BACK (Phase 2) |

**Cluster targeted on `/best-iptv-provider-uk` — all KD 0-4, single SERP:**
- best iptv provider uk (KD 0, SV 450) — primary
- uk iptv provider (KD 0, SV 100)
- best iptv uk provider (SV 80)
- best iptv provider in uk (KD 4, SV 80)
- best uk iptv provider (KD 1, SV 70)
- iptv providers in uk (KD 2, SV 70)
- best uk based iptv provider (SV 50)
- iptv provider in uk (KD 3, SV 40)
- iptv uk provider (KD 0, SV 40)

**Excluded as too hard for a zero-backlink site:** `iptv provider` (KD 20), `best iptv provider` (KD 20), `iptv provider uk` (KD 24). Secondary body mentions only, never in title/H1.

**Files changed:**
- `src/app/best-iptv-provider-uk/page.tsx` — H1 changed to "Best IPTV Provider UK 2026 — Ranked & Compared", FAQ #7 rephrased to real user query, related links now point at existing pages
- `src/app/iptv-channels/page.tsx` — related links point at existing pages
- `src/app/best-iptv-uk/page.tsx`, `src/app/best-iptv-subscription/page.tsx`, `src/app/iptv-services/page.tsx`, `src/app/iptv-subscription/page.tsx`, `src/app/buy-iptv/page.tsx` — all overwritten with `notFound()` stub. **Delete these 5 folders manually in Explorer before deploying** for cleaner code.
- `src/app/sitemap.ts` — only survivors listed
- `src/lib/constants.ts` — MONEY_LINKS shrunk to 2 items; blog post title/excerpt for `best-iptv-uk-guide-2026` rewritten
- `src/app/blog/[slug]/page.tsx` — blog post fully rewritten as pure how-to-choose editorial (no provider rankings), 2 blog posts now link to `/best-iptv-provider-uk` with varied anchors, 1 blog post links to `/iptv-channels`
- `src/app/blog/[slug]/BlogPostContent.tsx` — added `renderInlineLinks()` helper to parse `[text](url)` markdown links in body
- `src/app/4k-iptv-uk/page.tsx`, `src/app/iptv-for-firestick/page.tsx`, `src/app/iptv-buffering-fix/page.tsx`, `src/app/iptv-smarters-pro-setup/page.tsx`, `src/app/is-iptv-legal-uk/page.tsx` — added contextual `related` link to `/best-iptv-provider-uk` with varied anchors

**Anchor text variety on internal links to `/best-iptv-provider-uk`** (per critic's concentration rule):
- "Best IPTV Provider UK 2026 — Ranked & Compared" (from /4k-iptv-uk)
- "The best UK IPTV provider — 2026 comparison" (from /iptv-for-firestick)
- "Best IPTV Provider UK 2026" (from /iptv-buffering-fix)
- "UK IPTV provider comparison — 2026" (from /iptv-smarters-pro-setup)
- "Our UK IPTV provider ranking — 2026" (from /is-iptv-legal-uk)
- "compare UK IPTV providers" (from /blog/best-iptv-uk-guide-2026)
- "compare UK IPTV providers" (from /blog/iptv-vs-traditional-tv)
- "UK IPTV provider comparison" (from /blog/how-to-setup-iptv-firestick)
- Nav dropdown link (sitewide) — "Best IPTV Provider UK"

Total: 8 in-content links + 1 nav link + 1 from `/iptv-channels` = **10 internal links** to the test page. `/iptv-channels` gets nav link + link from `/best-iptv-provider-uk` + link from `/blog/live-uk-sports-streaming-guide` = **3 internal links**.

---

## Deploy checklist (execute in this order)

**Pre-deploy:**
1. Delete 5 folders in Windows Explorer: `src/app/best-iptv-uk/`, `src/app/best-iptv-subscription/`, `src/app/iptv-services/`, `src/app/iptv-subscription/`, `src/app/buy-iptv/`
2. `npm run build` — verify clean (workspace was down when I tried; run locally)
3. `npm run lint` — verify clean

**Deploy:**
4. Deploy to production

**Immediately after deploy (within 30 min):**
5. Open both new URLs in a browser to verify they render:
   - https://fast-iptv.tv/best-iptv-provider-uk
   - https://fast-iptv.tv/iptv-channels
6. Verify the rewritten blog post renders with the internal link: https://fast-iptv.tv/blog/best-iptv-uk-guide-2026
7. Verify the 5 deleted URLs return 404 (or your Next 404 page): https://fast-iptv.tv/best-iptv-uk, etc.

**GSC actions (within 24h):**
8. GSC → Sitemaps → resubmit `https://fast-iptv.tv/sitemap.xml`
9. GSC → URL Inspection → Request Indexing on:
   - `https://fast-iptv.tv/best-iptv-provider-uk`
   - `https://fast-iptv.tv/iptv-channels`
   - `https://fast-iptv.tv/blog/best-iptv-uk-guide-2026`
10. Bing Webmaster Tools → resubmit sitemap
11. IndexNow via `api.indexnow.org` for the 3 URLs above (Bing/Yandex — Google does NOT consume IndexNow)
12. **DO NOT** use `google.com/ping?sitemap=` or `bing.com/ping` — deprecated in 2023, they no longer work

---

## Monitoring (2 signals only, weekly)

**Signal 1 — "fast iptv" branded traffic must hold**

Homepage is byte-identical, so this should not move. If it does, it is volatility or an unrelated cause — do NOT revert the new pages for it.

| Metric | Baseline | Rollback trigger |
|---|---:|---|
| "fast iptv" 7-day rolling clicks | 9-10 | Two consecutive 7-day windows below 7 |
| "fast iptv" 7-day rolling impressions | 73 | — |
| "fast iptv" 7-day rolling avg position | 8.46 | Two consecutive 7-day windows worse than 11 |

**Signal 2 — GSC filtered to `/best-iptv-provider-uk`**

Expect first impressions in 1-3 weeks, initial positions 40-80.

- Week 1-2: any impressions at all
- Week 3-4: first queries appearing (should include cluster variants)
- Week 5-8: positions on KD 0-4 targets

---

## Phase 2 gate — 6-8 weeks after indexation

**Report back on these two questions:**

1. Has `/best-iptv-provider-uk` reached **position 20 or better** on any of the KD 0-4 targets?
2. How many of the 9 cluster keywords show **any impressions at all**?

**Decision matrix:**

- **YES on both** → on-page + internal links CAN rank the site. Expand: restore `/buy-iptv`, then add the homepage subscription section, then more money pages.
- **NO on both** → on-page is not the constraint, links are. Stop building pages, execute the link plan below.
- **Mixed** → keep publishing new content on the existing survivor pages, delay Phase 2 for another 4 weeks, re-check.

---

## The 60-day link + SERP-presence plan

Zero referring domains is your binding constraint. Even a perfect on-page implementation caps at ~300 clicks/month without external signals. This plan sizes 5 workstreams by cost, expected response rate and time.

### Workstream 1 — Trustpilot profile setup (Week 1, £0)

**Goal:** SERP entity presence, not a link. Trustpilot appears in Google Knowledge Panels for brand queries and adds trust signal for "best" queries.

**Steps:**
1. Register a Trustpilot business profile at business.trustpilot.com (free tier is enough)
2. Verify domain ownership via meta tag or DNS TXT
3. Configure auto-invite email post-purchase (Trustpilot handles the send)
4. Aim for 10 verified reviews in the first 30 days from existing customers
5. Add Trustpilot widget to the homepage footer (adds SERP snippet eligibility)

**Expected result:** Brand SERP for "fast iptv" gets a Trustpilot star-rating box within 4-6 weeks. Marginal boost to CTR on branded queries.

### Workstream 2 — Named IPTV/cord-cutting review site outreach (Weeks 2-6, £150-£750 total)

**Honest reset on this workstream (corrections after critic review):**

- Response rates below are all "unknown — measure after first 10 pitches". Any number I invent here is a guess.
- Most mainstream UK tech/AV publications will NOT cover IPTV subscription services because of the piracy association in this market. Expected yield: **0-3 links**, not 3-5.
- The specific outlets listed below are candidates I'd research first. You need to visit each and verify they've published IPTV service coverage before in the last 12 months. Any that haven't → drop from the list. **Verify before pitching.**

**Candidate outlets to VERIFY (not yet confirmed to cover IPTV):**

| Outlet | Approach | Cost | Verify first |
|---|---|---:|---|
| iptvsuppliers.com | Directory listing (if legitimate) | £0-£99 | Check if it's a real editorial site or a pay-for-listing farm |
| cordcuttersnews.com | Product news submission | £0 | Search "IPTV" on their site — have they covered paid IPTV services? |
| streamtvinsider.com | Press release submission | £0 | Same check |
| avforums.com | Community presence (NOT paid banners for IPTV) | £0 | AVForums TOS explicitly restrict IPTV promotion — read policy first |
| digitalspy.com forums | Genuine forum participation | £0 | Same — check their community rules on IPTV posts |
| ispreview.co.uk | Direct pitch — they cover UK broadband and adjacent tech | £0 | Have they covered IPTV subscription services? Verify. |
| thinkbroadband.com | Same as ispreview | £0 | Verify |

**Realistic outcome:** 0-3 dofollow links from DR 30-60 sites by Week 8. Measure yield after the first 10 verified pitches and re-scope.

**Email template (REWRITE per critic — only verifiable claims):**

> Subject: Fast IPTV — coverage suggestion
>
> Hi [name],
>
> I run Fast IPTV (fast-iptv.tv). Given your focus on [their beat], three angles that might fit an upcoming piece:
>
> 1. What UK IPTV subscribers should evaluate before paying — a practical checklist (refund policy specifics, DMCA policy existence, published uptime, response-time verification)
> 2. Anti-freeze technology and adaptive-bitrate behaviour on UK domestic broadband — the technical explanation for why streams freeze
> 3. Cost comparison between IPTV subscription pricing and mainstream UK pay-TV bundles in 2026
>
> Happy to provide quotes, data or a full guest contribution.
>
> [Your name], Fast IPTV
>
> **DO NOT claim** "UK-registered", "Companies House-listed", or any specific corporate status unless that is literally true and you can point to the record. If it isn't true, remove the sentence — a false claim in an outreach email destroys the pitch and the relationship.

### Workstream 3 — YouTube asset (Weeks 3-4, £0-£100)

**Why:** Our target SERPs show "Video preview" as a SERP feature on most cluster keywords. Google preferentially surfaces video results for these queries. Owning one asset in that slot compounds the on-page work.

**Deliverable:** One 5-8 minute YouTube video titled something like:
- "How To Choose A UK IPTV Provider In 2026 — The 7-Point Checklist"
- Uploaded to a new "Fast IPTV UK" YouTube channel
- Structured chapters (mirrors the H2 hierarchy of `/best-iptv-provider-uk`)
- Description contains one contextual link to `https://fast-iptv.tv/best-iptv-provider-uk`

**Production:** Screen-record with narration if in-house, or £75-£100 on Fiverr for a UK-accented voiceover on your slide deck. No talking-head needed.

**Expected result:** Video appears as a "Video preview" SERP feature for at least 2-3 of the cluster keywords within 30 days.

### Workstream 4 — Reddit presence with disclosed affiliation (Weeks 1-8, £0)

**Corrected per critic:** the earlier "aged account + undisclosed persona" pattern is astroturfing. When Reddit detects it, the domain gets sitewide-banned — worse than having no presence at all. Only two acceptable versions of this workstream:

**Option A — participate openly.** Create an account with the "Fast IPTV" name or clearly indicate affiliation in your profile bio. Answer IPTV-related questions in r/IPTV, r/CordCuttersUK, r/British TV. Disclose affiliation on every post that mentions your service ("Full disclosure: I work at Fast IPTV, but the answer above holds for any UK-registered provider"). Reddit tolerates this; opaque promotion it does not.

**Option B — skip the workstream.** Zero Reddit presence is better than a banned domain.

**Realistic outcome under Option A:** 1-3 disclosed brand mentions per month. Fewer than the undisclosed version would achieve, but zero domain-ban risk.

### Workstream 5 — Outbound citations on informational pages (Week 1, £0)

**Why:** Ahrefs shows zero outgoing links from the site. A commercial site with zero outbound authority citations looks unnatural to Google's spam heuristics. Adding real citations fixes this and adds genuine reader value.

**Where to add:**

| Page | Suggested citation | Placement |
|---|---|---|
| /is-iptv-legal-uk | Ofcom UK streaming rights framework | H2 opening paragraph |
| /is-iptv-legal-uk | UK Intellectual Property Office guidance | Body |
| /iptv-buffering-fix | Ofcom "Home Broadband Performance" report | Bandwidth section |
| /4k-iptv-uk | ISPreview 4K bandwidth requirements article | Bandwidth section |
| /iptv-for-firestick | Amazon Fire Stick official specs page | Device compatibility |
| /iptv-smarters-pro-setup | Which? IPTV consumer guide (if available) | Legality note |

**Effort:** 1 hour to add all 6 citations across 5 pages. Use plain `<a>` tags (no `rel="external"` — Google ignores that attribute, so it does nothing useful). Do not add `rel="nofollow"` either — the whole point is to make the outbound reference visible to search engines.

---

## Total 60-day cost & expected outcome (honest reset)

**Cost:** £150-£950 total across all 5 workstreams.

**Realistic signals by end of Week 8:**
- Trustpilot profile live with 5-10 verified reviews (depends on how many customers you invite)
- 0-3 dofollow links from IPTV-friendly outlets (yield genuinely unknown until measured)
- 1 YouTube asset published — may or may not surface in Video preview SERP slot within 30 days
- 1-3 disclosed-affiliation Reddit mentions per month (if Option A) or zero (if Option B)
- 6 outbound citations on informational pages — the one workstream with certain output

**Realistic ranking outlook (corrected):**
- First impressions on `/best-iptv-provider-uk` in 1-3 weeks
- Initial positions 40-80
- Meaningful movement on the KD 0-4 cluster over **3-6 months**
- The link workstream **increases the probability** of reaching top 10-20 in that window — it does not compress the timeline

**Earlier "top 10-20 in 3-4 months" claim was wrong.** Three to five DR 30-60 links do not compress a 6-month timeline to 3-4 months. What links do is make the top-10 outcome more likely rather than faster. Plan against 6 months.

**If the Phase 2 gate at Week 6-8 shows NO on the ranking questions,** links are proven as the binding constraint and this workstream becomes the entire priority for Weeks 9-16 — expand the outreach list, target 5-8 verified-fit outlets rather than pushing more pages.

---

## Sign-off checklist for this pass

### Done in this pass
- [x] H1 fix on `/best-iptv-provider-uk` (removed "Best" + "Provider" collocation)
- [x] FAQ #7 rephrased to real user query
- [x] 5 pages neutralised to `notFound()` (delete folders manually)
- [x] sitemap.ts trimmed to 2 survivors + existing pages
- [x] MONEY_LINKS trimmed to 2
- [x] `/blog/best-iptv-uk-guide-2026` fully rewritten as how-to-choose editorial with NO provider rankings
- [x] `BlogPostContent.tsx` extended to parse inline `[text](url)` links — regex traced, safe for zero-markdown paragraphs
- [x] 5 existing sub-pages link to `/best-iptv-provider-uk` with varied anchors
- [x] 3 blog posts link out (2 to `/best-iptv-provider-uk`, 1 to `/iptv-channels`)
- [x] `/best-iptv-provider-uk` and `/iptv-channels` internal `related` arrays cleaned (no dead links to deleted pages)
- [x] Homepage byte-identical (`title` unchanged: "Fast IPTV — UK Subscription, 4K, 60-Second Setup")
- [x] **Blocker 3 cleared:** Full-project grep found 2 dead body links (`/iptv-subscription`, `/best-iptv-uk`) — both fixed to point at `/#pricing` and `/iptv-channels`. Remaining hits are comments only.
- [x] **Blocker 2 cleared:** `/buy-iptv` draft preserved at `docs/phase-2-buy-iptv-page.tsx.txt` (.txt so Next doesn't compile it). Phase 2 restores by renaming + moving to `src/app/buy-iptv/page.tsx`.
- [x] **Blocker 4 cleared on parser logic:** `renderInlineLinks()` traced against all 4 blog-content markdown occurrences and against zero-markdown paragraphs. No edge cases in current content.
- [x] **Blocker 5 cleared:** 60-day plan corrected — invented response rates removed, outreach template stripped of unverifiable claims, Reddit workstream rewritten as disclosed-affiliation only, `rel="external"` removed, forecast reset to 3-6 months.

### Cannot verify remotely (YOU must do locally)
- [ ] **Blocker 1 still open:** Run `npx tsc --noEmit`, `npm run lint`, `npm run build`. Workspace shell was unavailable when I tried. Paste any errors to me and I'll fix before deploy.
- [ ] Run `npm run dev`, open every blog post, confirm no raw `[text](url)` visible and no broken anchors
- [ ] Delete 5 folders in Explorer: `src/app/best-iptv-uk/`, `src/app/best-iptv-subscription/`, `src/app/iptv-services/`, `src/app/iptv-subscription/`, `src/app/buy-iptv/`
- [ ] Deploy

### Post-deploy verification (from critic's list — add to your GSC actions)
- [ ] `curl -I` on each of the 5 deleted URLs — confirm HTTP 404, not 200 soft-404
- [ ] Fetch `https://fast-iptv.tv/sitemap.xml` — confirm 5 deleted routes absent, 2 new pages present
- [ ] Fetch `https://fast-iptv.tv/robots.txt` — confirm nothing blocks the new pages
- [ ] View source on both new pages — confirm no `noindex`, self-canonical correct, FAQPage + BreadcrumbList schema present
- [ ] Validate schema in Google's Rich Results Test
- [ ] Test both new pages on **mobile** specifically (GSC shows mobile pos 7.05 vs desktop 18.85 — mobile is where our ranking lives)
- [ ] Lighthouse on both new pages — report LCP, CLS, INP
