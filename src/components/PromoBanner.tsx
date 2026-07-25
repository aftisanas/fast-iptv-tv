"use client";

import { Zap, Tv, Clock } from "lucide-react";

export default function PromoBanner() {
  return (
    <div
      className="promo-banner relative w-full max-w-2xl mx-auto rounded-2xl overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, rgba(88, 28, 135, 0.55) 0%, rgba(30, 27, 75, 0.75) 50%, rgba(14, 23, 90, 0.55) 100%)",
        border: "1px solid rgba(139, 92, 246, 0.4)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none promo-banner-shimmer"
        style={{
          background:
            "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.05) 50%, transparent 60%)",
          backgroundSize: "200% 100%",
        }}
      />

      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top left, rgba(168,85,247,0.18), transparent 55%), radial-gradient(ellipse at bottom right, rgba(34,211,238,0.14), transparent 55%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 py-5 sm:py-6 gap-3">
        <div className="flex items-center gap-2">
          <span aria-hidden="true" className="text-yellow-400 text-base drop-shadow-[0_0_10px_rgba(250,204,21,0.6)]">⚡</span>
          <span
            className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase"
            style={{
              color: "rgba(196, 181, 253, 0.95)",
              textShadow: "0 0 14px rgba(139, 92, 246, 0.6)",
            }}
          >
            What You Get With Fast IPTV
          </span>
          <span aria-hidden="true" className="text-yellow-400 text-base drop-shadow-[0_0_10px_rgba(250,204,21,0.6)]">⚡</span>
        </div>

        <h2
          className="text-lg sm:text-xl md:text-2xl font-extrabold text-white leading-tight"
          style={{ textShadow: "0 0 30px rgba(139, 92, 246, 0.55)" }}
        >
          Three Things That Define Fast IPTV
        </h2>

        <div className="grid grid-cols-3 gap-3 sm:gap-5 w-full mt-1">
          <div className="flex flex-col items-center gap-1.5">
            <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-violet-500/20 border border-violet-400/30">
              <Tv className="h-4 w-4 sm:h-5 sm:w-5 text-violet-200" />
            </div>
            <div className="text-sm sm:text-base font-bold text-white leading-none">37,000+</div>
            <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-violet-200/80">Live Channels</div>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-cyan-500/20 border border-cyan-400/30">
              <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-200" />
            </div>
            <div className="text-sm sm:text-base font-bold text-white leading-none">60 Seconds</div>
            <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-cyan-200/80">Activation</div>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-emerald-500/20 border border-emerald-400/30">
              <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-200" />
            </div>
            <div className="text-sm sm:text-base font-bold text-white leading-none">30 Days</div>
            <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-emerald-200/80">Money-Back</div>
          </div>
        </div>

        <p
          className="text-[10px] sm:text-[11px] mt-1"
          style={{ color: "rgba(226, 232, 240, 0.9)" }}
        >
          <span aria-hidden="true">🔒</span> Secure Payment &nbsp;·&nbsp; <span aria-hidden="true">⚡</span> Instant Activation &nbsp;·&nbsp; 30-Day Money-Back
        </p>
      </div>
    </div>
  );
}
