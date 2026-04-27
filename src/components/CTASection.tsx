"use client";

import { motion } from "framer-motion";
import { Play, MessageCircle, Sparkles } from "lucide-react";
import Link from "next/link";
import SectionLink from "./SectionLink";

export default function CTASection() {
  return (
    <section className="relative py-11 lg:py-16 overflow-hidden">
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f0524] via-[#1a0a3e] to-[#0c1445]" />

      {/* Aurora blobs */}
      <div
        className="aurora-blob w-[500px] h-[500px] bg-purple-600/20 -top-20 -left-20"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="aurora-blob w-[400px] h-[400px] bg-cyan-500/15 bottom-[-10%] right-[-5%]"
        style={{ animationDelay: "5s" }}
      />
      <div
        className="aurora-blob w-[300px] h-[300px] bg-violet-500/15 top-1/2 left-1/2 -translate-x-1/2"
        style={{ animationDelay: "10s" }}
      />

      {/* Radial overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.12),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(6,182,212,0.08),transparent_50%)]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0, margin: "0px 0px 200px 0px" }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0, margin: "0px 0px 200px 0px" }}
            className="inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-white/[0.07] backdrop-blur-md px-5 py-2 text-sm text-purple-300 mb-8"
          >
            <Sparkles className="h-4 w-4 text-cyan-400" />
            <span className="font-medium">Join 50,000+ UK Households</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Buy IPTV Today &mdash; Start Your IPTV Subscription{" "}
            <span className="gradient-text-hero">In 60 Seconds</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-300/90 mb-10 leading-relaxed">
            Over 50,000 UK viewers already switched. Lock in a 4K{" "}
            <SectionLink href="/#pricing" className="text-cyan-300 hover:text-cyan-200 underline-offset-2 hover:underline">
              IPTV subscription
            </SectionLink>{" "}
            today and save up to 55% on the 24-month plan. Your plan ships with 37,000 channels, 198,000 films and UK support, backed by a{" "}
            <Link href="/refund" className="text-cyan-300 hover:text-cyan-200 underline-offset-2 hover:underline">
              30-day guarantee
            </Link>{" "}
            and{" "}
            <Link href="/contact" className="text-cyan-300 hover:text-cyan-200 underline-offset-2 hover:underline">
              UK support
            </Link>.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <SectionLink
              href="/#pricing"
              className="group relative flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500 px-8 py-4 text-base font-semibold text-white transition-all hover:shadow-2xl hover:shadow-purple-500/30 active:scale-[0.98] w-full sm:w-auto justify-center"
            >
              <Play className="h-5 w-5 fill-current" />
              Buy IPTV Now — From 12.99
              <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 transition-opacity group-hover:opacity-100" />
            </SectionLink>
            <SectionLink
              href="/#pricing"
              className="group flex items-center gap-2.5 rounded-2xl border border-white/15 bg-white/[0.06] backdrop-blur-sm px-8 py-4 text-base font-semibold text-white transition-all hover:border-purple-400/30 hover:bg-white/10 w-full sm:w-auto justify-center"
            >
              <MessageCircle className="h-5 w-5 text-cyan-400" />
              Chat With UK Support
            </SectionLink>
          </div>

          <p className="mt-8 text-sm text-gray-400">
            Need help? WhatsApp +44 20 0000 0000 or email support@iptv-subscription-uk-4k.com — we reply in minutes.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
