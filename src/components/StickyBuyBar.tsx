"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { PRICING_PLANS } from "@/lib/constants";
import { track } from "@/lib/analytics";
import { useCurrency } from "./CurrencyProvider";
import { cheapestPerMonth, formatMoney } from "@/lib/pricing";

/**
 * Mobile only. Pricing is the fifth section down, and 72% of this traffic
 * arrives on a phone having searched a term this domain matches — it came to
 * see plans and had to scroll for them. This keeps the way there one tap away
 * once the hero has been read.
 *
 * Hidden from `lg` up, where the nav already carries a Pricing link, and
 * hidden while the pricing section itself is on screen — a button that scrolls
 * you to what you are already looking at is just clutter.
 */
export default function StickyBuyBar() {
  const { currency, table } = useCurrency();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const pricing = document.getElementById("pricing");

    // Show once the hero is behind us.
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.6);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // ...but not while pricing is in view.
    let observer: IntersectionObserver | undefined;
    if (pricing) {
      observer = new IntersectionObserver(
        ([entry]) => setVisible((v) => (entry.isIntersecting ? false : v)),
        { threshold: 0 }
      );
      observer.observe(pricing);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer?.disconnect();
    };
  }, []);

  const cheapest = cheapestPerMonth(table, PRICING_PLANS, currency);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-violet-100 bg-white/95 px-4 py-3 shadow-[0_-4px_20px_rgba(76,29,149,0.10)] backdrop-blur transition-transform duration-300 lg:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!visible}
    >
      <a
        href="#pricing"
        tabIndex={visible ? undefined : -1}
        onClick={() => track("plan_selected", { source: "sticky_bar", currency })}
        className="flex items-center justify-between gap-3 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-5 py-3.5 text-white focus-visible:outline-2 focus-visible:outline-violet-700 focus-visible:outline-offset-2"
      >
        <span className="flex flex-col leading-tight">
          <span className="text-sm font-bold">See plans &amp; pricing</span>
          <span className="text-[11px] font-medium text-white/85">
            From {formatMoney(cheapest.amount, cheapest.currency)}/month · 30-day money-back
          </span>
        </span>
        <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
      </a>
    </div>
  );
}
