"use client";

import { motion } from "framer-motion";
import { MessageCircle, ShieldCheck } from "lucide-react";
import { TRUST_PANELS, TRUST_PANELS_CONTENT as C } from "@/lib/trust-panels";
import { TRUST_COPY } from "@/lib/constants";

/**
 * Evidence, not testimonials. See src/lib/trust-panels.ts for why there is no
 * rating, score or review count anywhere in this section.
 *
 * The screenshots are shown in a fixed-height window with a feathered base so
 * the thread reads as running on past the card, rather than being cropped flat
 * into a tile — a guillotined screenshot looks staged, a continuing one does
 * not.
 */
export default function TrustPanels() {
  return (
    <section id="reviews" className="relative py-11 lg:py-16">
      <div className="absolute inset-0 section-gradient-1" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0, margin: "0px 0px 200px 0px" }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-5 py-2 text-sm font-semibold text-emerald-700 mb-5">
            <ShieldCheck className="h-4 w-4" />
            {C.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5">
            {C.headline}
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted leading-relaxed">
            {C.lede}
          </p>
        </motion.div>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TRUST_PANELS.map((panel, i) => (
            <motion.li
              key={panel.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0, margin: "0px 0px 200px 0px" }}
              transition={{ delay: i * 0.08 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-violet-100 bg-white shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="flex items-start gap-3 px-5 pt-5 pb-4">
                <span
                  className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-emerald-500"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-sm font-semibold text-foreground leading-snug">
                    {panel.label}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-muted">
                    {panel.caption}
                  </p>
                </div>
              </div>

              {/* Fixed window + feathered base: the conversation carries on
                  past the card instead of ending at a crop line. */}
              <div className="relative mt-auto h-72 overflow-hidden bg-[#0b141a]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={panel.image}
                  alt={`${panel.label}: ${panel.caption}`}
                  width={panel.w}
                  height={panel.h}
                  loading="lazy"
                  decoding="async"
                  className="w-full"
                />
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent"
                  aria-hidden="true"
                />
              </div>
            </motion.li>
          ))}
        </ul>

        <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-muted">
          {C.note}
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted">
          <span className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-emerald-600" />
            {TRUST_COPY.guarantee}
          </span>
          <span className="flex items-center gap-2">
            <MessageCircle className="h-4 w-4 text-violet-500" />
            {TRUST_COPY.oneTime}
          </span>
        </div>
      </div>
    </section>
  );
}
