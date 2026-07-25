# Action Plan — Sprint A2 & Sprint A3 Baseline

**Site:** iptv-providers-uk.com
**Date:** 2026-07-11
**Overall SEO Health:** 62/100 · **GEO:** 38/100

Priority legend: **P0 = Critical**, **P1 = High**, **P2 = Medium**, **P3 = Low/backlog**.
Sprint routing: **A2** = E-E-A-T + performance, **A3** = /tutorials port, **M** = later polish, **defer** = out of scope.

---

## P0 — Critical

| # | Issue | Sprint | Effort | Rationale |
|---|---|---|---|---|
| 1 | Remove `iptv-vs-sky-comparison` from `BLOG_POSTS` (`src/lib/constants.ts:383-391`). Confirm URL is 301 or 404. Rebuild sitemap so it stops advertising a dead URL. | A2 (or hotfix) | 5 min | Spec says URL is dead-forever; sitemap currently promotes it. |
| 2 | Create `/about` page. Port from sister repo with brand swap. Include `Person` entities for AUTHOR_BYLINE + REVIEWER_BYLINE, `Organization` link, publisher address block, editorial standards summary. | A2 | 45 min | Absent About = strongest E-E-A-T hole, blocks Person schema on posts. |
| 3 | Create `/editorial-policy` page. Port from sister repo. Explain sourcing, review cadence, corrections policy. | A2 | 30 min | Standard Google trust signal + LLM authority signal. |

## P1 — High (Sprint A2)

| # | Issue | Effort | Fix |
|---|---|---|---|
| 4 | H1 wrapped in `motion.h1` → hurts LCP | 10 min | Render H1 as plain server text. Move motion wrapper to subtitle/paragraph only. |
| 5 | 15/15 components are `"use client"` | 2-3 hrs | Convert non-interactive: `FeaturesSection`, `ChannelsSection`, `DevicesSection`, `TrustSection`, `CTASection`, `HeroSection` (shell), `PricingSection` (shell), `FAQSection` (shell), `TestimonialsSection`, `Footer`. |
| 6 | framer-motion bundled into every section | 1 hr | Extract client islands: `HeroMotion`, `SubPageMotion`, `MotionReveal`, `MotionScaleCard`, `MotionScaleIn`, `MotionFadeIn`, `FAQAccordion`, `PricingPlansInteractive`. |
| 7 | Homepage schema is 3 separate `<script>` blocks | 15 min | Merge into single `@graph` array. Model: sister repo pattern. |
| 8 | `Organization.logo` missing `width` + `height` | 2 min | Add `width: 1024, height: 1024` to logo ImageObject. |
| 9 | Sitemap missing /about, /editorial-policy | 5 min | Add both to `staticRoutes` in `sitemap.ts`. Priorities: about 0.7, editorial-policy 0.5. |
| 10 | `LEGAL_LINKS` in `constants.ts` missing "About Us" + "Editorial Policy" | 3 min | Append both entries after A2 pages ship. |
| 11 | `AUTHOR_BYLINE` / `REVIEWER_BYLINE` are dead exports | 30 min | Render visible byline chip on blog posts + wire into Article/Person schema. |

## P2 — Medium (Sprint A3 or after A2)

| # | Issue | Sprint | Effort | Fix |
|---|---|---|---|---|
| 12 | No `/tutorials` hub or device pages | A3 | 2-3 hrs | Verbatim port from sister repo — 12 devices + hub + dynamic route + schema. |
| 13 | Add tutorials to sitemap | A3 | 5 min | Data-driven `.map()` over `TUTORIAL_DEVICES`. Hub 0.7, devices 0.6. |
| 14 | No `Article` / `BlogPosting` schema on blog posts | A2 or M | 30 min | Emit on `src/app/blog/[slug]/page.tsx` with `author`, `reviewedBy`, `dateModified`. |
| 15 | No `BreadcrumbList` schema anywhere | A2 or M | 20 min | Emit on blog posts + tutorial pages. |
| 16 | `AUTHOR_BYLINE.updatedDate` = 2026-07-07 (stale) | A2 | 1 min | Bump to A2 ship date. |
| 17 | No visible "Last updated" chip on blog posts | M | 15 min | Add small metadata row using `AUTHOR_BYLINE.updatedDate`. |

## P3 — Medium/Low (M-tier polish or backlog)

| # | Issue | Sprint | Notes |
|---|---|---|---|
| 18 | No `llms.txt` | M | Add `public/llms.txt` summarizing site scope, pricing, key URLs for AI crawlers. |
| 19 | `Organization.sameAs` empty | M | Add Twitter/X + LinkedIn once accounts confirmed. |
| 20 | Blog post images not audited | M | Alt text, dimensions, WebP, lazy-load audit. |
| 21 | Cluster pages targeting `iptv provider`, `premium iptv`, `uk iptv subscription` | defer | Out of scope per operator brief. Separate content strategy session. |
| 22 | Backlink strategy | defer | Explicitly out of scope. |
| 23 | Blog wave 2 trademark scrub (155+ references on safety branch) | defer | Needs its own scrub session per operator brief. |
| 24 | OG image asset | M | Currently OG uses no explicit `images:` array — fine but a branded 1200×630 OG lifts CTR. |

---

## Sprint A2 checklist (in order)

1. **Discovery** — this document.
2. **A2-A** — Ask operator to paste `/about` + `/editorial-policy` from sister repo → port with brand swap. Build check.
3. **A2-B** — Convert non-interactive sections to server components. Build check.
4. **A2-C** — Extract framer-motion into 6 client islands + 2 interactive islands. Build check.
5. **A2-D** — Remove motion wrapper from H1 (LCP fix). Build check.
6. **A2-E** — Consolidate homepage schema into single `@graph`, add logo dims. Build check.
7. **A2-F** — Update `sitemap.ts` (+about, +editorial-policy) and `LEGAL_LINKS` (+About Us, +Editorial Policy). Build check.
8. **A2-cleanup** — Remove `iptv-vs-sky-comparison` from `BLOG_POSTS`. Rebuild sitemap.
9. **Verify** — `npm run build` → expect 23+ static pages, TS clean.
10. **Report** in Fix 1 shape. **Do not commit** until operator approves.

### Expected verify output after A2

```bash
grep -l '^"use client"' src/components/*.tsx | wc -l   # 6-8
ls src/app/about/page.tsx src/app/editorial-policy/page.tsx  # both exist
grep -c '<script type="application/ld+json"' src/app/page.tsx  # 1
grep -n "editorial-policy\|/about" src/app/sitemap.ts   # ≥ 2 hits
```

## Sprint A3 checklist (after A2 approved)

Verbatim port of sister-repo tutorials architecture — 12 devices, hub, dynamic route, cross-links. Brand swaps only. See operator brief for detail.

Expected: 35+ static pages after A3.
