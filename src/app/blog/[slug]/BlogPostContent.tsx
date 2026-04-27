"use client";

import { motion } from "framer-motion";
import { Clock, ArrowLeft, Tag } from "lucide-react";
import Link from "next/link";
import SectionLink from "@/components/SectionLink";

interface BlogPostContentProps {
  post: {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    category: string;
  };
  content: string[];
}

export default function BlogPostContent({ post, content }: BlogPostContentProps) {
  return (
    <div className="pt-20">
      <article className="py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </motion.div>

          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 text-sm text-muted mb-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                <Tag className="h-3 w-3" />
                {post.category}
              </span>
              <span>
                {new Date(post.date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {post.readTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
              {post.title}
            </h1>

            <p className="text-lg text-muted leading-relaxed">
              {post.excerpt}
            </p>
          </motion.header>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose-custom"
          >
            {content.map((block, i) => {
              const lines = block.split("\n");
              return (
                <div key={i} className="mb-8">
                  {lines.map((line, j) => {
                    if (line.startsWith("## ")) {
                      return (
                        <h2
                          key={j}
                          className="text-2xl font-bold text-foreground mt-10 mb-4"
                        >
                          {line.replace("## ", "")}
                        </h2>
                      );
                    }
                    if (line.startsWith("- **")) {
                      const match = line.match(/- \*\*(.+?)\*\*(.+)/);
                      if (match) {
                        return (
                          <li
                            key={j}
                            className="text-sm text-gray-600 leading-relaxed ml-4 mb-2 list-disc"
                          >
                            <strong className="text-foreground">{match[1]}</strong>
                            {match[2]}
                          </li>
                        );
                      }
                    }
                    if (line.startsWith("- ")) {
                      return (
                        <li
                          key={j}
                          className="text-sm text-gray-600 leading-relaxed ml-4 mb-2 list-disc"
                        >
                          {line.replace("- ", "")}
                        </li>
                      );
                    }
                    if (line.trim() === "") return <br key={j} />;
                    return (
                      <p
                        key={j}
                        className="text-base text-gray-600 leading-relaxed mb-4"
                      >
                        {line}
                      </p>
                    );
                  })}
                </div>
              );
            })}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 rounded-2xl border border-primary/15 bg-blue-50 p-8 text-center"
          >
            <h3 className="text-xl font-bold text-foreground mb-3">
              Ready to Start Streaming?
            </h3>
            <p className="text-muted mb-6">
              Get started with IPTV Subscription UK 4K today. Plans from £12.99/month with a 30-day money-back guarantee.
            </p>
            <SectionLink
              href="/#pricing"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-primary/20"
            >
              View Subscription Plans
            </SectionLink>
          </motion.div>
        </div>
      </article>
    </div>
  );
}
