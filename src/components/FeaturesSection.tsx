"use client";

import { motion } from "framer-motion";
import {
  Tv, Monitor, Clock, Film, Smartphone, LayoutGrid, Zap, Shield,
} from "lucide-react";
import SectionLink from "./SectionLink";
import { FEATURES } from "@/lib/constants";

const iconMap = {
  Tv, Monitor, Clock, Film, Smartphone, LayoutGrid, Zap, Shield,
} as const;

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-12 lg:py-14">
      {/* Subtle mesh gradient */}
      <div className="absolute inset-0 mesh-gradient" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0, margin: "0px 0px 200px 0px" }}
          className="text-center lg:mb-12 mb-10"
        >
          <span className="inline-block rounded-full bg-violet-50 border border-violet-200 px-4 py-1.5 text-sm font-medium text-violet-700 mb-4">
            Speed-First · Measured · Published
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Our Fast IPTV UK Subscription {" "}
            <span className="gradient-text">Beats Every Competitor</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted">
            Every feature below is built around one principle: speed. Activation runs in around 60 seconds, channel switching is fast on standard player apps, and the infrastructure is tuned for low-latency playback during peak evening hours. The same speed runs on every{" "}
            <SectionLink href="/#pricing" className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline">
              Fast IPTV plan
            </SectionLink>{" "}
            — what changes is the term length, not the experience.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {FEATURES.map((feature, i) => {
            const Icon = iconMap[feature.icon];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0, margin: "0px 0px 200px 0px" }}
                transition={{ delay: i * 0.05 }}
                className="group relative rounded-2xl border border-violet-100/60 bg-white p-6 transition-all duration-500 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-100/40 premium-card"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-50/50 to-cyan-50/20 opacity-0 transition-opacity group-hover:opacity-100" />

                <div className="relative">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-100 to-cyan-50 transition-all group-hover:from-violet-200/80 group-hover:to-cyan-100/50 group-hover:shadow-md group-hover:shadow-violet-200/30">
                    <Icon className="h-6 w-6 text-violet-600 transition-colors group-hover:text-purple-600" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {feature.description}
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
