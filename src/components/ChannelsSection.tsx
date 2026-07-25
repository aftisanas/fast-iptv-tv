"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Tv, Trophy, Film, Baby, Newspaper, Globe } from "lucide-react";
import SectionLink from "./SectionLink";
import { CHANNEL_CATEGORIES } from "@/lib/constants";

const iconMap = { Tv, Trophy, Film, Baby, Newspaper, Globe } as const;

export default function ChannelsSection() {
  return (
    <section id="channels" className="relative py-11 lg:py-16">
      <div className="absolute inset-0 mesh-gradient" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0, margin: "0px 0px 200px 0px" }}
          className="text-center mb-16"
        >
          <span className="inline-block rounded-full bg-violet-50 border border-violet-200 px-4 py-1.5 text-sm font-medium text-violet-700 mb-4">
            37,000 Feeds · Instant Playback
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Inside the{" "}
            <span className="gradient-text">Fast IPTV Channel Library</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted">
            Speed without content is pointless. Here is what loads the moment you press play — every category included in every{" "}
            <SectionLink href="/#pricing" className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline">
              fast IPTV plan
            </SectionLink>. For native UHD playback and bandwidth requirements, read our guide to{" "}
            <Link href="/4k-iptv-uk" className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline">
              4K IPTV UK streams
            </Link>.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {CHANNEL_CATEGORIES.map((cat, i) => {
            const Icon = iconMap[cat.icon];
            return (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0, margin: "0px 0px 200px 0px" }}
                transition={{ delay: i * 0.05 }}
                className="group relative overflow-hidden rounded-2xl border border-violet-100/60 bg-white p-6 transition-all duration-500 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-100/40 premium-card"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-violet-50 to-transparent rounded-bl-full opacity-0 transition-opacity group-hover:opacity-100" />

                <div className="relative">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-100 to-cyan-50 transition-all group-hover:from-violet-200/80 group-hover:to-cyan-100/50">
                      <Icon className="h-6 w-6 text-violet-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{cat.name}</h3>
                      <p className="text-2xl font-bold gradient-text">{cat.count}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted leading-relaxed">
                    {cat.channels}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
