# Fast IPTV UK — SEO Implementation Report

**Date:** 2026-05-19
**Site:** https://fast-iptv.tv (Next.js 16 App Router, PM2 `fast-iptv` on port 3010, behind Cloudflare grey-cloud→now proxied)
**Status:** Shipped to production. Lint ✅ · TypeScript ✅ · Build ✅ · PM2 reloaded ✅ · Live HTML verified ✅

---

## 1. Clarifications resolved with the user (before any edit)

| Item | Decision |
|---|---|
| 3/6/12/24-month pricing | **Use NEW aligned prices**: £25.99 / £35.99 / £49.99 / £79.99. Hero CTA → "From £4.17/mo". |
| Real UK postal address / phone | **Remove entirely.** Placeholder phone `+44 20 0000 0000` and `London, United Kingdom` deleted. `contactPoint` dropped from schema. |
| Vimeo embeds on /tutorials | **User owns them** — embeds kept verbatim. |
| GSC coverage URLs | I cannot read GSC from the server. Fixed all structural causes from code; the 4 categories you supplied are mapped below. You confirm/Validate-Fix in GSC. |

---

## 2. Git diff summary (18 tracked files + 2 new files)

```
package.json                            |   2 +-   (start port — prior deploy task)
src/app/blog/[slug]/BlogPostContent.tsx |   2 +-
src/app/blog/[slug]/page.tsx            |  10 +-
src/app/contact/ContactContent.tsx      |   2 +-
src/app/contact/page.tsx                |   2 +-
src/app/layout.tsx                      |  32 +-
src/app/page.tsx                        | 261 +-   (JSON-LD @graph rewrite + preload)
src/app/robots.ts                       |   2 +-
src/app/sitemap.ts                      |  16 +-
src/components/CTASection.tsx           |  10 +-
src/components/DevicesSection.tsx       |   2 +-
src/components/FAQSection.tsx           |  56 +-
src/components/FeaturesSection.tsx      |   6 +-
src/components/Footer.tsx               |  10 +-
src/components/HeroSection.tsx          |  15 +-
src/components/StatsBar.tsx             |   4 +-
src/components/TrustSection.tsx         |   6 +-
src/lib/constants.ts                    |  99 +-
NEW: src/app/tutorials/page.tsx
NEW: src/app/tutorials/TutorialsContent.tsx
```
No pages/routes deleted or renamed. All previously-live routes still resolve.

---

## 3. Verification checklist (all run against the deployed app)

| Check | Expected | Result |
|---|---|---|
| `grep -c "37,000"` | ≥1 | ✅ 1 (SSR'd) |
| `grep -c "198,000"` | ≥1 | ✅ 1 |
| `grep -c "99.9"` | ≥1 | ✅ 1 |
| `grep -c "50,000"` | ≥1 | ✅ |
| `grep -c "0.9%"` | 0 | ✅ 0 |
| `grep -c "application/ld+json"` | ≥1 | ✅ 1 (single @graph) |
| `grep -c 'name="keywords"'` | 0 | ✅ 0 (tag removed) |
| `grep -ci "built-in vpn"` | 0 | ✅ 0 |
| `grep -ci "five/5 ... screens"` | 0 | ✅ 0 |
| `grep -ci "free trial"` | 0 | ✅ 0 |
| `grep -c "+44 20 0000 0000"` | 0 | ✅ 0 |
| H1 exact string present | ≥1 | ✅ 1, exactly one `<h1>` |
| `<title>Fast IPTV UK 2026 \| #1 Fastest IPTV Subscription` | ≥1 | ✅ |
| `grep -c "Frequently IPTV Subscription Answered"` | 0 | ✅ 0 (heading fixed) |
| `grep -c "/tutorials"` on homepage | 0 | ✅ 0 (no link from homepage) |
| `/tutorials` HTTP | 200 | ✅ 200 |
| `/tutorials` noindex | meta or header | ✅ `<meta name="robots" content="noindex, follow">` |
| `robots.txt` `Disallow: /tutorials` | 1 | ✅ (only Disallow line) |
| `sitemap.xml` `<loc>` count | ≥8, no /tutorials | ✅ 11, no /tutorials |
| All live routes (/, /blog, /blog/iptv-vs-sky-comparison, /refund, /contact, /terms, /privacy, /dmca, /tutorials) | no 404 | ✅ all 200 |
| JSON-LD parse | valid | ✅ parses; @graph = Organization, WebSite, Service, Product, BreadcrumbList, FAQPage |
| Service.description VPN/screens | absent | ✅ neither present |
| FAQ Q&A full text in initial HTML | present | ✅ FAQ panels refactored to stay in DOM (collapsed via height) |
| Internal Sky link in static HTML | present | ✅ 1× `href="/blog/iptv-vs-sky-comparison"` anchor "see our full IPTV vs Sky comparison" |
| `npm run lint` / build | pass | ✅ both pass, no warnings silenced |

---

## 4. Before / After CTR copy (live)

| | Before | After |
|---|---|---|
| `<title>` | `Fast IPTV \| Fastest UK IPTV Service` (33 ch) | `Fast IPTV UK 2026 \| #1 Fastest IPTV Subscription — 60s Activation` |
| `<meta description>` | "Fast IPTV built for speed. … built-in VPN. The fastest IPTV subscription in the UK." | "Fast IPTV UK 2026: the fastest IPTV subscription in Britain. 37,000 channels, 4K UHD, sub-3s sport delay, 60-second activation. Live in two minutes — from £25.99." |
| H1 | `Fast IPTV UK — The Fastest␣␣IPTV UK Service, Live In 60 Seconds` | `Fast IPTV UK — The Fastest IPTV UK Subscription, Live In 60 Seconds` |
| og:title / twitter:title | "Speed-First Streaming For British Homes" | mirrored to new title |
| og:url / canonical | mixed | both `https://fast-iptv.tv` (no trailing slash, matches sitemap) |

---

## 5. The four GSC coverage errors

You supplied the categories (counts), not the exact URLs. Structural causes addressed in code:

| GSC category | Likely URL | What was wrong | Action taken | Curl-verifiable |
|---|---|---|---|---|
| **Blocked by robots.txt** (validation *Started*) | a `/_next/…` or `/admin` asset, or a real page caught by old rules | `robots.ts` disallowed `/api/`, `/_next/`, `/admin/` — `/_next/` blocks JS/CSS Google needs and can suppress indexing | `robots.ts` rewritten to **exactly** `Allow: /` + only `Disallow: /tutorials` | ✅ `curl /robots.txt` |
| **Not found (404)** | a stale URL (old slug / removed draft) | dangling external/old link | No live route 404s now; sitemap rewritten to the canonical route inventory so Google re-discovers only valid URLs. **If GSC shows a specific old slug, send it and I'll add a 301.** | partial |
| **Page with redirect** | `https://www.fast-iptv.tv/…` or trailing-slash variant | non-canonical host/slash variant indexed | Canonical + og:url + sitemap all unified to `https://fast-iptv.tv` (no slash). www→apex 301 is handled at nginx/Cloudflare (confirmed `https://www.fast-iptv.tv` 301→apex earlier). | partial |
| **Discovered – currently not indexed** (first seen 02/05/2026) | **`https://fast-iptv.tv/blog/premier-league-streaming-guide`** (confirmed by user from GSC; "Sans objet" = never crawled) | Orphan-ish post: only inbound link was the low-priority `/blog` index, no link from any frequently-crawled page, so Google queued but never crawled it | **Fixed:** (1) blog template now renders a "More Fast IPTV UK guides" related-links block, so the homepage-linked Sky post links to it → crawl path **homepage → /blog/iptv-vs-sky-comparison → /blog/premier-league-streaming-guide** (verified in static HTML); (2) Article `dateModified` refreshed to 2026-05-19; (3) sitemap `lastmod` 2026-05-19 + priority raised to 0.6. Then **Validate Fix** in GSC. | ✅ links + schema curl-verifiable |

**Action for you:** open GSC → Indexing → Pages, click each of the 4 groups to reveal the exact URL, then **Validate Fix**. If the 404/discovered URLs are specific old slugs, paste them and I'll add targeted 301s/canonicals.

---

## 6. /tutorials confirmation

- Built from the reference at `/home/fast-iptv/htdocs/fast-iptv.tv/tutorials_page_code`.
- **Re-worded**: every H1/H2/H3, eyebrow, intro, device blurb, FAQ Q&A and CTA rewritten to be Fast-IPTV-specific (no verbatim copy from the reference — duplicate-content safe). "VPN" advertising removed; user-side "switch off your VPN/proxy" instructions kept (operational, not advertising). "7-day free trial" line reworded to "a short trial period" (Business Rule #1).
- **Re-styled**: uses the existing design tokens/components (`gradient-text`, `mesh-gradient`, violet/cyan palette, `SectionLink`) — consistent with the site, no foreign CSS/classes.
- **Vimeo embeds kept verbatim** (you confirmed ownership): video IDs 901151892, 900296474, 900296864, 900297180.
- Route serves real SSG HTML at `https://fast-iptv.tv/tutorials` → **200**.
- `<meta name="robots" content="noindex, follow">` ✅
- In `robots.txt` `Disallow: /tutorials` ✅ · **excluded** from `sitemap.xml` ✅
- **Not linked** from homepage header/footer/body ✅ (global Navbar/Footer logo links back to `/` — allowed).
- Lint/typecheck/build pass ✅

---

## 7. Items still needing user input

1. **Exact GSC URLs** for the 404 / redirect / discovered-not-indexed groups (only categories were provided). I can add precise 301s/canonicals once you paste them.
2. **Real UK address / Companies House / founder name** — none supplied, so all placeholders were *removed* (not faked), per your instruction.
3. **Cloudflare** is currently proxying (orange cloud) — your runbook expects grey-cloud. HTML is served `cf-cache-status: DYNAMIC` (not cached) so updates are already live, but flag if you want the proxy turned off.

---

## 8. External validations — direct confirmation

| Tool | Who runs it | Result |
|---|---|---|
| JSON-LD structural parse (server-side, `json.loads`) | **Me** | ✅ Valid. Single `@graph`: Organization, WebSite, Service, Product (AggregateOffer £25.99–£79.99), BreadcrumbList, FAQPage (11 Q). No `VPN`/`screens` in Service/Product descriptions. |
| https://validator.schema.org/ | **You** | Not runnable from the server (interactive POST tool, no API/credentials here). Paste the homepage URL — expect 0 errors (structure pre-validated above). |
| https://search.google.com/test/rich-results | **You** | Same — run on `https://fast-iptv.tv`. Expect FAQ + Organization + Product/Offer eligible (all types present and well-formed in the @graph). |
| https://pagespeed.web.dev/ (mobile + desktop) | **You** | Cannot run Lighthouse from this server. LCP work shipped: `<link rel=preload as=image href=/fast-iptv.webp fetchpriority=high>` + logo `<Image priority fetchPriority="high">`; no new deps; no layout/CLS changes. Run PSI on the live URL and confirm LCP ≤2.5s / INP ≤200ms / CLS ≤0.1. |

> Honest note: schema.org validator, Rich Results Test and PageSpeed Insights are interactive web tools that require either a public submission UI or API keys not available on this server. The JSON-LD has been parsed and type-checked locally instead; the remaining three are user actions (Change 21 steps 6–7) and are listed for you below.

---

## 9. Tests / lint warnings introduced or silenced

**None.** No `eslint-disable`, no `@ts-ignore`, no test files modified. Unused `MapPin` import removed from `Footer.tsx` (would otherwise have been a lint error after address removal). FAQ accordion refactored from mount/unmount to always-in-DOM + animated height — improves SEO crawlability and removes the now-unused `AnimatePresence` import cleanly.

---

## 10. Day-to-day commands

```bash
# Deploy an update
sudo -u fast-iptv bash -lc 'source ~/.nvm/nvm.sh && nvm use 22 && \
  cd ~/htdocs/fast-iptv.tv && git pull && npm install && npm run build && pm2 reload fast-iptv'

# Status / logs
sudo -u fast-iptv bash -lc 'source ~/.nvm/nvm.sh && pm2 status'
sudo -u fast-iptv bash -lc 'source ~/.nvm/nvm.sh && pm2 logs fast-iptv --lines 80'
```
