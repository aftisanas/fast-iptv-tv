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
            <span className="text-white">IPTV UK Guides &</span>
            <br />
            <span className="gradient-text-hero">Streaming Tips</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg text-gray-300/90 leading-relaxed"
          >
            Expert articles on IPTV setup, streaming optimisation, device guides,
            and the latest in UK television — essential reading for informed{" "}
            <Link href="/#pricing" className="text-cyan-300 hover:text-cyan-200 underline-offset-2 hover:underline">
              IPTV subscription
            </Link>{" "}
            decisions.
          </motion.p>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#fafbff] via-[#fafbff]/80 to-transparent" />
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
