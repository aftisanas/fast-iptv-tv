"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

function getOrCreateEndTime(): number {
  if (typeof window === "undefined") return Date.now() + 18 * 60 * 60 * 1000;

  const stored = window.localStorage.getItem("promoEndTime");
  const now = Date.now();

  if (stored) {
    const endTime = parseInt(stored, 10);
    if (!Number.isNaN(endTime) && endTime > now) {
      return endTime;
    }
  }

  const minMs = 14 * 60 * 60 * 1000;
  const maxMs = 24 * 60 * 60 * 1000 - 60 * 1000;
  const randomMs = minMs + Math.floor(Math.random() * (maxMs - minMs));
  const newEndTime = now + randomMs;

  window.localStorage.setItem("promoEndTime", newEndTime.toString());
  return newEndTime;
}

function calculateTimeLeft(endTime: number): TimeLeft {
  const diff = Math.max(0, endTime - Date.now());
  return {
    hours: Math.floor(diff / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
  };
}

export default function PromoBanner() {
  const [endTime, setEndTime] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const end = getOrCreateEndTime();

    const timeoutId = window.setTimeout(() => {
      setEndTime(end);
      setTimeLeft(calculateTimeLeft(end));
      setMounted(true);
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (!mounted || endTime === 0) return;

    const interval = setInterval(() => {
      const left = calculateTimeLeft(endTime);

      if (left.hours === 0 && left.minutes === 0 && left.seconds === 0) {
        if (typeof window !== "undefined") {
          window.localStorage.removeItem("promoEndTime");
        }
        const newEnd = getOrCreateEndTime();
        setEndTime(newEnd);
        setTimeLeft(calculateTimeLeft(newEnd));
      } else {
        setTimeLeft(left);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [endTime, mounted]);

  const pad = (n: number) => n.toString().padStart(2, "0");

  if (!mounted) {
    return (
      <div className="w-full max-w-2xl mx-auto h-[240px] rounded-2xl opacity-0" aria-hidden />
    );
  }

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

      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-5 py-4 sm:py-5 gap-2 sm:gap-2.5">
        <div className="flex items-center gap-2">
          <span aria-hidden="true" className="text-yellow-400 text-base drop-shadow-[0_0_10px_rgba(250,204,21,0.6)]">⚡</span>
          <span
            className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase"
            style={{
              color: "rgba(196, 181, 253, 0.95)",
              textShadow: "0 0 14px rgba(139, 92, 246, 0.6)",
            }}
          >
            Limited Time Reduction
          </span>
          <span aria-hidden="true" className="text-yellow-400 text-base drop-shadow-[0_0_10px_rgba(250,204,21,0.6)]">⚡</span>
        </div>

        <h2
          className="text-lg sm:text-xl md:text-2xl font-extrabold text-white leading-tight"
          style={{ textShadow: "0 0 30px rgba(139, 92, 246, 0.55)" }}
        >
          <span aria-hidden="true">🔥 </span>Claim Your Discount Before It Ends<span aria-hidden="true"> 🔥</span>
        </h2>

        <p
          className="text-xs sm:text-sm font-medium"
          style={{ color: "rgba(196, 181, 253, 0.9)" }}
        >
          <span aria-hidden="true" className="text-emerald-400">✅</span>{" "}
          30-Day Money Back Guarantee — Zero Risk. Cancel Anytime.
        </p>

        <div className="flex items-start gap-1.5 sm:gap-2.5 mt-0.5">
          <div className="countdown-block">
            <div className="countdown-number">{pad(timeLeft.hours)}</div>
            <div className="countdown-label">HOURS</div>
          </div>
          <span className="countdown-separator">:</span>
          <div className="countdown-block">
            <div className="countdown-number">{pad(timeLeft.minutes)}</div>
            <div className="countdown-label">MINUTES</div>
          </div>
          <span className="countdown-separator">:</span>
          <div className="countdown-block" key={`s-${timeLeft.seconds}`}>
            <div className="countdown-number countdown-tick">{pad(timeLeft.seconds)}</div>
            <div className="countdown-label">SECONDS</div>
          </div>
        </div>

        <p
          className="text-[10px] sm:text-[11px] mt-0.5"
          style={{ color: "rgba(226, 232, 240, 0.9)" }}
        >
          <span aria-hidden="true">🔒</span> Secure Payment &nbsp;·&nbsp; <span aria-hidden="true">⚡</span> Instant Activation &nbsp;·&nbsp; 30-Day Money-Back
        </p>
      </div>
    </div>
  );
}
