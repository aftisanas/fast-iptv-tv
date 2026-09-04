"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Check, Shield, CreditCard, Star, Crown, Gem, Award, Medal } from "lucide-react";
import { CHECKOUT_MODE, PAYMENT_MARKS, PRICING_PLANS, TRUST_COPY } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { track } from "@/lib/analytics";
import { useCurrency } from "./CurrencyProvider";
import { formatMoney, priceIn } from "@/lib/pricing";
import OrderSummaryModal from "./OrderSummaryModal";

type PricingPlan = (typeof PRICING_PLANS)[number];

const tierMeta: Record<string, {
  icon: React.ElementType;
  gradient: string;
  badge: string;
  discount: string;
  border: string;
  hoverBorder: string;
  accent: string;
  accentLight: string;
  button: string;
  check: string;
  glow: string;
  iconBg: string;
}> = {
  amber: {
    icon: Medal,
    gradient: "from-amber-500 to-orange-500",
    badge: "bg-amber-50 text-amber-700 border-amber-200",
    discount: "bg-gradient-to-r from-amber-500 to-orange-500 text-white",
    border: "border-amber-100",
    hoverBorder: "hover:border-amber-300",
    accent: "text-amber-600",
    accentLight: "text-amber-500",
    button: "bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:shadow-lg hover:shadow-amber-500/20",
    check: "text-amber-500",
    glow: "group-hover:shadow-amber-100/50",
    iconBg: "from-amber-100 to-orange-50",
  },
  slate: {
    icon: Award,
    gradient: "from-slate-500 to-gray-600",
    badge: "bg-slate-50 text-slate-600 border-slate-200",
    discount: "bg-gradient-to-r from-slate-500 to-gray-600 text-white",
    border: "border-slate-100",
    hoverBorder: "hover:border-slate-300",
    accent: "text-slate-600",
    accentLight: "text-slate-500",
    button: "bg-gradient-to-r from-slate-600 to-gray-700 text-white hover:shadow-lg hover:shadow-slate-500/20",
    check: "text-slate-500",
    glow: "group-hover:shadow-slate-100/50",
    iconBg: "from-slate-100 to-gray-50",
  },
  blue: {
    icon: Crown,
    gradient: "from-violet-600 via-purple-600 to-cyan-500",
    badge: "bg-violet-50 text-violet-700 border-violet-200",
    discount: "bg-gradient-to-r from-emerald-500 to-teal-500 text-white",
    border: "border-violet-200",
    hoverBorder: "hover:border-violet-400",
    accent: "text-violet-600",
    accentLight: "text-violet-500",
    button: "bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500 text-white hover:shadow-xl hover:shadow-purple-500/25",
    check: "text-violet-500",
    glow: "group-hover:shadow-violet-100/50",
    iconBg: "from-violet-100 to-purple-50",
  },
  violet: {
    icon: Gem,
    gradient: "from-fuchsia-600 to-purple-600",
    badge: "bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200",
    discount: "bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white",
    border: "border-fuchsia-100",
    hoverBorder: "hover:border-fuchsia-300",
    accent: "text-fuchsia-600",
    accentLight: "text-fuchsia-500",
    button: "bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white hover:shadow-lg hover:shadow-fuchsia-500/20",
    check: "text-fuchsia-500",
    glow: "group-hover:shadow-fuchsia-100/50",
    iconBg: "from-fuchsia-100 to-purple-50",
  },
};

export default function PricingSection() {
  const router = useRouter();
  const { currency, table } = useCurrency();
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);

  const handleChoosePlan = (plan: PricingPlan) => {
    const live = priceIn(table.plans[plan.id]?.price ?? { GBP: plan.price }, currency);
    track("plan_selected", {
      plan: plan.name,
      planId: plan.id,
      price: live.amount,
      currency: live.currency,
      source: "pricing_section",
    });
    if (CHECKOUT_MODE === "hub") {
      router.push(`/checkout?plan=${plan.id}`);
      return;
    }
    setSelectedPlan(plan);
  };

  return (
    <section id="pricing" className="relative py-11 lg:py-16">
      {/* Premium background */}
      <div className="absolute inset-0 section-gradient-1" />
      <div className="absolute inset-0 mesh-gradient" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0, margin: "0px 0px 200px 0px" }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-violet-50 border border-violet-200 px-5 py-2 text-sm font-semibold text-violet-700 mb-5">
            <Gem className="h-4 w-4" />
            Same Speed · Four Price Points
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5">
            Fast IPTV Plans &mdash;{" "}
            <span className="gradient-text">Same Speed, Four Price Points</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted leading-relaxed">
            One service, four terms. Every plan runs on the same infrastructure at the same speed. The only variable is commitment length and savings.
          </p>
        </motion.div>

        {/* 4-plan grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 items-start">
          {PRICING_PLANS.map((plan, i) => {
            const isPopular = plan.popular;
            const isHovered = hoveredPlan === plan.id;
            const meta = tierMeta[plan.accentColor] || tierMeta.blue;
            const TierIcon = meta.icon;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0, margin: "0px 0px 200px 0px" }}
                transition={{ delay: i * 0.08 }}
                onMouseEnter={() => setHoveredPlan(plan.id)}
                onMouseLeave={() => setHoveredPlan(null)}
                className={cn(
                  "group relative rounded-2xl border bg-white transition-all duration-500",
                  meta.border,
                  meta.hoverBorder,
                  isPopular
                    ? "border-violet-300 shadow-xl shadow-violet-100/60 lg:scale-[1.04] z-10"
                    : "shadow-sm",
                  !isPopular && isHovered && "-translate-y-2 shadow-lg",
                  isPopular && isHovered && "-translate-y-3",
                  meta.glow
                )}
              >
                {/* Popular ribbon effect */}
                {isPopular && (
                  <>
                    <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-violet-400/30 via-transparent to-cyan-400/20 pointer-events-none" />
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                      <div className="badge-shimmer rounded-full bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500 px-5 py-2 text-xs font-bold tracking-wider text-white shadow-lg shadow-purple-500/30 whitespace-nowrap flex items-center gap-1.5">
                        <Star className="h-3 w-3 fill-current" />
                        {plan.badge}
                      </div>
                    </div>
                  </>
                )}

                {/* Non-popular badge */}
                {plan.badge && !isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <div className="badge-shimmer rounded-full bg-gradient-to-r from-fuchsia-600 to-purple-600 px-5 py-2 text-xs font-bold tracking-wider text-white shadow-lg shadow-fuchsia-500/20 whitespace-nowrap flex items-center gap-1.5">
                      <Gem className="h-3 w-3" />
                      {plan.badge}
                    </div>
                  </div>
                )}

                <div className="relative p-6">
                  {/* Tier icon + discount row */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={cn(
                      "flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br",
                      meta.iconBg
                    )}>
                      <TierIcon className={cn("h-5 w-5", meta.accent)} />
                    </div>
                    <span className={cn(
                      "inline-block rounded-lg px-3 py-1.5 text-xs font-bold",
                      meta.discount
                    )}>
                      {plan.discount}
                    </span>
                  </div>

                  {/* Tier name + duration */}
                  <div className="mb-5">
                    <h3 className="text-xl font-bold text-foreground">{plan.tier}</h3>
                    <p className="text-sm text-muted">{plan.name}</p>
                  </div>

                  {/* Price — in the visitor's currency, with the struck-through
                      "was" scaled from the same ratio so a euro price never sits
                      beside a sterling one. */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-sm text-muted/60 line-through tabular-nums">
                        {(() => {
                          const live = priceIn(table.plans[plan.id]?.price ?? { GBP: plan.price }, currency);
                          const ratio = plan.originalPrice / plan.price;
                          return formatMoney(live.amount * ratio, live.currency);
                        })()}
                      </span>
                    </div>
                    <div className="flex items-baseline gap-1 mt-1">
                      <span className="text-4xl font-extrabold text-foreground tabular-nums">
                        {(() => {
                          const live = priceIn(table.plans[plan.id]?.price ?? { GBP: plan.price }, currency);
                          return formatMoney(live.amount, live.currency);
                        })()}
                      </span>
                    </div>
                    <p className="text-xs text-muted mt-1.5">One-time payment · {plan.subtitle}</p>
                  </div>

                  {/* Divider */}
                  <div className={cn(
                    "h-px mb-5",
                    isPopular
                      ? "bg-gradient-to-r from-transparent via-violet-200 to-transparent"
                      : "bg-gray-100"
                  )} />

                  {/* Features */}
                  <ul className="space-y-2.5 mb-6">
                    {plan.features.map((rawFeature) => {
                      // The proxy bullet carries a {proxyFrom} token so the
                      // add-on price inside the card follows the same currency
                      // as the headline price above it.
                      const proxy = priceIn(
                        table.plans[plan.id]?.proxyPrice ?? { GBP: plan.proxyPrice },
                        currency
                      );
                      const feature = rawFeature.replace(
                        "{proxyFrom}",
                        formatMoney(proxy.amount, proxy.currency)
                      );
                      return (
                      <li key={feature} className="flex items-start gap-2.5">
                        <div className={cn(
                          "mt-0.5 flex h-4.5 w-4.5 items-center justify-center rounded-full shrink-0",
                          isPopular ? "bg-violet-100" : "bg-gray-50"
                        )}>
                          <Check className={cn("h-3 w-3", meta.check)} />
                        </div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                      );
                    })}
                  </ul>

                  {/* CTA Button */}
                  <button
                    type="button"
                    onClick={() => handleChoosePlan(plan)}
                    aria-label={`Choose ${plan.tier} plan — ${plan.name}`}
                    className={cn(
                      "flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-bold transition-all active:scale-[0.98] w-full",
                      isPopular ? meta.button : "bg-cyan-500 hover:bg-accent text-white hover:shadow-xl hover:shadow-purple-500/25",
                    )}
                  >
                    Choose Plan
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0, margin: "0px 0px 200px 0px" }}
          className="mt-14 flex flex-wrap items-center justify-center gap-6 lg:gap-10"
        >
          {[
            // Was "Secure WhatsApp ordering · GBP pricing" — hardcoded, never
            // gated on CHECKOUT_MODE, and left in place when the Shopify
            // checkout went live. It advertised friction that no longer exists,
            // directly above the button that opens a real card checkout.
            { icon: CreditCard, label: "Secure card checkout" },
            { icon: Shield, label: TRUST_COPY.guarantee },
            { icon: Star, label: "60-second activation" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-sm text-muted">
              <item.icon className="h-4 w-4 text-violet-500/60" />
              <span>{item.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Payment marks + the handoff, named before it happens.
            Checkout is hosted by Shopify on another domain; saying so here is
            what turns an alarming redirect into an expected one. */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0, margin: "0px 0px 200px 0px" }}
          className="mt-8 flex flex-col items-center gap-3"
        >
          <ul className="flex flex-wrap items-center justify-center gap-2.5">
            {PAYMENT_MARKS.map((mark) => (
              /* The marks are white artwork on transparency, so they need a
                 dark chip to sit on — on the section's white ground they are
                 invisible. */
              <li
                key={mark.id}
                className="flex h-8 items-center justify-center rounded-md border border-slate-700/50 bg-slate-800 px-2.5"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/trust/${mark.id}.webp`}
                  alt={mark.name}
                  width={48}
                  height={32}
                  loading="lazy"
                  decoding="async"
                  className="h-4 w-auto"
                />
              </li>
            ))}
          </ul>
          <p className="max-w-md text-center text-xs leading-relaxed text-muted">
            {TRUST_COPY.handoff}
          </p>
          <p className="text-center text-xs font-medium text-muted">
            {TRUST_COPY.oneTime} {TRUST_COPY.currencyNote(currency)}
          </p>
        </motion.div>
      </div>

      <OrderSummaryModal
        open={selectedPlan !== null}
        onClose={() => setSelectedPlan(null)}
        planName={selectedPlan?.name ?? ""}
        planPrice={selectedPlan?.price ?? 0}
        proxyPrice={selectedPlan?.proxyPrice ?? 0}
        extraConnectionPrice={selectedPlan?.extraConnectionPrice ?? 0}
      />
    </section>
  );
}
