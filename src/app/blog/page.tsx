import type { Metadata } from "next";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: "Fast IPTV Blog — Best IPTV UK Guides, Setup Tips & Reviews",
  description:
    "Expert guides on fast IPTV setup, streaming optimisation, device compatibility and the latest in IPTV UK. Learn how to choose the best IPTV providers and unlock the full Fast IPTV experience.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return <BlogContent />;
}
