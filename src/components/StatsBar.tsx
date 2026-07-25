"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { STATS } from "@/lib/constants";

function AnimatedNumber({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0, margin: "0px 0px 200px 0px" });
  const reduceMotion = useReducedMotion();
  const numericMatch = value.match(/[\d,]+/);
  const numericStr = numericMatch ? numericMatch[0] : "";
  const prefix = numericStr ? value.slice(0, value.indexOf(numericStr)) : "";
  const suffix = numericStr ? value.slice(value.indexOf(numericStr) + numericStr.length) : "";
  // SSR and first client render show the real final value (so it is in the
  // static HTML for SEO and no-JS users). The count-up below is cosmetic only.
  const [displayed, setDisplayed] = useState(value);

  useEffect(() => {
    // Reduced-motion users (common on phones) keep the final value outright.
    if (!inView || !numericStr || reduceMotion) return;

    const target = parseInt(numericStr.replace(/,/g, ""), 10);
    const duration = 900;
    let frame = 0;
    let startTime: number | null = null;

    // rAF instead of setInterval: the count-up stays on the browser's frame
    // budget and yields to the compositor, so scrolling on mobile stays smooth.
    const tick = (now: number) => {
      if (startTime === null) startTime = now;
      const progress = Math.min((now - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(target * easeOut);
      setDisplayed(`${prefix}${current.toLocaleString()}${suffix}`);

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setDisplayed(value);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, numericStr, prefix, suffix, reduceMotion]);

  // The final value is rendered as a hidden twin so the box keeps its full
  // width for the whole count-up — the digits never reflow the line and the
  // surrounding layout never shifts while the user is scrolling.
  return (
    <span ref={ref} className="inline-grid tabular-nums">
      <span aria-hidden="true" className="invisible col-start-1 row-start-1">
        {value}
      </span>
      <span className="col-start-1 row-start-1 justify-self-center">
        {displayed}
      </span>
    </span>
  );
}

export default function StatsBar() {
  return (
    <section className="relative lg:py-16 py-11 bg-[#fafbff]">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet-50/50 via-white to-cyan-50/30" />
      <div className="absolute inset-0 border-y border-violet-100/50" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0, margin: "0px 0px 200px 0px" }}
              transition={{ delay: i * 0.04, duration: 0.35 }}
              className="relative text-center"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-2">
                <AnimatedNumber value={stat.value} />
              </div>
              <div className="text-sm sm:text-base text-muted font-medium">
                {stat.label}
              </div>
              {i < STATS.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-12 w-px bg-gradient-to-b from-transparent via-violet-200 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
