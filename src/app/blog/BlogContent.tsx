"use client";

import { motion } from "framer-motion";
import { Clock, ArrowRight, Tag, BookOpen, Star } from "lucide-react";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/constants";

const categoryColors: Record<string, string> = {
  Guide: "bg-primary/10 text-primary border border-primary/10",
  Tutorial: "bg-accent/10 text-accent border border-accent/10",
  Comparison: "bg-amber-50 text-amber-700 border border-amber-200",
  Sports: "bg-emerald-50 text-emerald-700 border border-emerald-200",
};

export default function BlogContent() {
  return (
    <div>
      {/* ── Premium Hero Section ── */}
      <section className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-24">
        {/* Deep premium gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0118] via-[#1a0a3e] to-[#0c1445]" />

        {/* Aurora blobs */}
        <div
          className="aurora-blob w-[600px] h-[600px] bg-purple-600/20 -top-32 -left-32"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="aurora-blob w-[450px] h-[450px] bg-blue-500/15 top-1/4 right-[-8%]"
          style={{ animationDelay: "4s" }}
        />
        <div
          className="aurora-blob w-[400px] h-[400px] bg-cyan-500/15 bottom-[-15%] left-1/3"
          style={{ animationDelay: "8s" }}
        />
        <div
          className="aurora-blob w-[300px] h-[300px] bg-fuchsia-500/12 top-[30%] left-[55%]"
          style={{ animationDelay: "6s" }}
        />

        {/* Radial overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(124,58,237,0.18),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(6,182,212,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.07),transparent_60%)]" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Floating orbs */}
        <div className="absolute top-[20%] left-[12%] w-2 h-2 rounded-full bg-purple-400/50 animate-float" />
        <div className="absolute top-[40%] right-[10%] w-1.5 h-1.5 rounded-full bg-cyan-400/40 animate-float" style={{ animationDelay: "3s" }} />
        <div className="absolute bottom-[20%] left-[25%] w-1 h-1 rounded-full bg-blue-400/50 animate-float" style={{ animationDelay: "5s" }} />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-white/[0.07] backdrop-blur-md px-5 py-2.5 text-sm text-purple-200 mb-8"
          >
            <BookOpen className="h-4 w-4 text-cyan-400" />
            <span className="font-medium">Expert Guides & Streaming Tips</span>
            <span className="flex gap-0.5 text-amber-400">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-3 w-3 fill-current" />)}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6"
          >
            <span className="text-white">IPTV Providers UK —</span>
            <br />
            <span className="gradient-text-hero">Guides & Streaming Tips</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg text-gray-300/90 leading-relaxed"
          >
            Expert articles on setup, streaming optimisation, device support and the current state of British television — essential reading before choosing between{" "}
            <Link href="/#pricing" className="text-cyan-300 hover:text-cyan-200 underline-offset-2 hover:underline">
              IPTV providers
            </Link>.
          </motion.p>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#fafbff] via-[#fafbff]/80 to-transparent" />
      </section>

      {/* Editorial intro */}
      <section className="bg-[#fafbff] pt-6 pb-12 lg:pt-8 lg:pb-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-5 text-base leading-relaxed text-gray-700">
            <p>
              The guides here exist because a UK subscriber choosing an IPTV
              service is asked to make a purchase decision without the tools a
              good decision needs. Marketing pages compress the important
              trade-offs; independent guidance tends to sit in threads that
              assume prior knowledge. This hub is the middle layer: the
              questions a first-time buyer actually asks, answered against a
              consistent framework — including when the service being examined
              is the one operated by the same team.
            </p>
            <p>
              Coverage sits in three areas that a UK buyer needs to research
              before committing. The first is evaluation — a shared vocabulary
              for what &ldquo;good&rdquo; means when comparing options. The
              seven-criteria framework used for{" "}
              <Link
                href="/blog/best-iptv-uk-guide-2026"
                className="text-primary hover:underline"
              >
                evaluating an IPTV service against a consistent set of criteria
              </Link>{" "}
              is the anchor: channel-lineup quality, streaming stability,
              quality settings, catch-up support, device compatibility, customer
              support, and pricing against the value actually delivered. Every
              guide on this site applies the same seven criteria to whichever
              service is being examined.
            </p>
            <p>
              The second is compatibility — which devices already in the home
              will run an IPTV subscription without friction. Many UK households
              already own a streaming stick, so the practical mechanics of{" "}
              <Link
                href="/blog/how-to-setup-iptv-firestick"
                className="text-primary hover:underline"
              >
                setting up an IPTV subscription on a streaming stick
              </Link>{" "}
              is the walkthrough written first. The same principles carry over
              to smart televisions, Android boxes, and desktop players; the
              streaming-stick guide is the reference setup.
            </p>
            <p>
              The third is category-specific reliability, because a service that
              streams a documentary cleanly may still stumble on a live sporting
              fixture at peak load. The practical piece on{" "}
              <Link
                href="/blog/premier-league-streaming-guide"
                className="text-primary hover:underline"
              >
                UK football fixtures
              </Link>{" "}
              explains what the matchday-reliability question actually tests,
              and what a subscriber can check before committing.
            </p>
            <p>
              The tone throughout is editorial rather than promotional. Where
              the recommended service is mentioned, the relationship is
              disclosed in-line rather than hidden. The criteria applied to the
              recommendation are the same criteria applied everywhere else on
              the site, so a reader can re-apply the framework to any service
              the guides do not cover.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {BLOG_POSTS.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block rounded-2xl border border-gray-100 bg-white overflow-hidden transition-all duration-500 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
                >
                  {/* Gradient header area */}
                  <div className="relative h-48 bg-gradient-to-br from-primary/10 via-accent/5 to-blue-50 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.08),transparent_70%)]" />
                    <div className="relative text-6xl font-bold text-primary/10 select-none">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    {/* Category tag */}
                    <div className="absolute top-4 left-4">
                      <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${categoryColors[post.category] || "bg-primary/10 text-primary"}`}>
                        <Tag className="h-3 w-3" />
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-muted mb-3">
                      <span>{new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="text-lg font-semibold text-foreground mb-3 transition-colors group-hover:text-primary line-clamp-2">
                      {post.title}
                    </h2>

                    <p className="text-sm text-muted leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-all group-hover:gap-2.5">
                      Read Article
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
