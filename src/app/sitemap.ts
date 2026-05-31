import type { MetadataRoute } from "next";
import { BLOG_POSTS, SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Homepage <loc> must match the canonical exactly (no trailing slash).
  // /tutorials is intentionally excluded — it is noindex post-purchase content.
  const subPagesUpdated = new Date("2026-05-31");

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: new Date("2026-05-19"), changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/4k-iptv-uk`, lastModified: subPagesUpdated, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/iptv-for-firestick`, lastModified: subPagesUpdated, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/iptv-buffering-fix`, lastModified: subPagesUpdated, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/iptv-smarters-pro-setup`, lastModified: subPagesUpdated, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/is-iptv-legal-uk`, lastModified: subPagesUpdated, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/refund`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${SITE_URL}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/dmca`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  // Posts were refreshed 2026-05-19 (pricing + internal-link pass) — a recent
  // lastmod nudges Google to recrawl "discovered, not indexed" posts.
  const blogUpdated = new Date("2026-05-19");
  const promoted = new Set([
    "iptv-vs-sky-comparison",
    "premier-league-streaming-guide",
  ]);
  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.filter((post) =>
    Boolean(post.slug)
  ).map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: blogUpdated,
    changeFrequency: "monthly",
    priority: promoted.has(post.slug) ? 0.6 : 0.5,
  }));

  return [...staticRoutes, ...blogRoutes];
}
