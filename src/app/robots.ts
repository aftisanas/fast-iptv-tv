import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

// Note: CCBot (Common Crawl) and Bytespider (ByteDance) are intentionally not
// listed. They are covered by the wildcard rule. Revisit if a data-sovereignty
// or crawl-budget decision changes.
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "PerplexityBot",
  "Google-Extended",
] as const;

export default function robots(): MetadataRoute.Robots {
  const disallow = ["/api/", "/_next/", "/admin/"];

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow,
      },
      ...AI_CRAWLERS.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow,
      })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
