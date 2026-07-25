import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "The page you were looking for does not exist. Return to the editorial coverage or view current IPTV plans.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="pt-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
          Page Not Found
        </h1>
        <p className="text-gray-400 mb-10 leading-relaxed">
          The page you were looking for does not exist or has moved. Try the
          editorial coverage of the UK IPTV market, or view the current plans.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
          >
            Read the Blog
          </Link>
          <Link
            href="/#pricing"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition"
          >
            See Current Plans
          </Link>
        </div>
      </div>
    </div>
  );
}
