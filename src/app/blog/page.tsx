import type { Metadata } from "next";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: "IPTV Subscription UK Blog — Best IPTV UK Guides, Setup Tips & Reviews",
  description:
    "Expert guides on IPTV subscription setup, streaming optimisation, device compatibility and the latest in IPTV UK. Learn how to choose the best IPTV providers and unlock the full IPTV Subscription UK 4K experience.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return <BlogContent />;
}
