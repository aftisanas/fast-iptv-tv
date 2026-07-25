import type { MetadataRoute } from "next";
import { BLOG_POSTS, SITE_URL } from "@/lib/constants";
import { TUTORIAL_DEVICES } from "@/lib/tutorial-content";

const SPRINT_A1_DATE = "2026-07-09";
const SPRINT_A2_DATE = "2026-07-11";
const SPRINT_A2_5_DATE = "2026-07-12";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: SPRINT_A2_5_DATE, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/blog`, lastModified: SPRINT_A2_5_DATE, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/tutorials`, lastModified: SPRINT_A2_5_DATE, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/about`, lastModified: SPRINT_A2_DATE, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/contact`, lastModified: SPRINT_A1_DATE, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/editorial-policy`, lastModified: SPRINT_A2_5_DATE, changeFrequency: "yearly", priority: 0.5 },
    { url: `${SITE_URL}/terms`, lastModified: SPRINT_A1_DATE, changeFrequency: "yearly", priority: 0.4 },
    { url: `${SITE_URL}/privacy`, lastModified: SPRINT_A1_DATE, changeFrequency: "yearly", priority: 0.4 },
    { url: `${SITE_URL}/dmca`, lastModified: SPRINT_A1_DATE, changeFrequency: "yearly", priority: 0.4 },
    { url: `${SITE_URL}/refund`, lastModified: SPRINT_A1_DATE, changeFrequency: "yearly", priority: 0.4 },
  ];

  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.filter((post) =>
    Boolean(post.slug)
  ).map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const tutorialRoutes: MetadataRoute.Sitemap = TUTORIAL_DEVICES.map((device) => ({
    url: `${SITE_URL}/tutorials/${device.slug}`,
    lastModified: SPRINT_A2_5_DATE,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes, ...tutorialRoutes];
}
