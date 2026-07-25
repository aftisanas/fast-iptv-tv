import type { Metadata } from "next";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: "IPTV Providers UK Blog — Guides, Tips & Streaming News",
  description:
    "Expert guides on IPTV providers UK setup, streaming tips, device compatibility, and the latest from British IPTV providers. The research layer behind every IPTV subscription decision.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return <BlogContent />;
}
