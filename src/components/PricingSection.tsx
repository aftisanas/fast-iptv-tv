import { Shield, CreditCard, Star, Gem } from "lucide-react";
import MotionReveal from "./MotionReveal";
import PricingPlansInteractive from "./PricingPlansInteractive";

export default function PricingSection() {
  return (
    <section id="pricing" className="relative py-11 lg:py-16">
      {/* Premium background */}
      <div className="absolute inset-0 section-gradient-1" />
      <div className="absolute inset-0 mesh-gradient" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <MotionReveal className="text-center mb-14">
          <span className="inline-flex items-center gap-2 rounded-full bg-violet-50 border border-violet-200 px-5 py-2 text-sm font-semibold text-violet-700 mb-5">
            <Gem className="h-4 w-4" />
            Transparent GBP Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5">
            IPTV Providers UK Pricing &mdash;{" "}
            <span className="gradient-text">Transparent Plans, No Hidden Fees</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted leading-relaxed">
            One service, four terms. Channels, 4K and VPN stay identical across every plan. The only variable is term length and savings — the fairest deal offered by UK IPTV providers.
          </p>
        </MotionReveal>

        {/* 4-plan grid + modal */}
        <PricingPlansInteractive />

        {/* Trust bar */}
        <MotionReveal className="mt-14 flex flex-wrap items-center justify-center gap-6 lg:gap-10">
          {[
            { icon: Shield, label: "Secure WhatsApp ordering · GBP pricing" },
            { icon: CreditCard, label: "30-day money-back guarantee" },
            { icon: Star, label: "Instant delivery" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-sm text-muted">
              <item.icon className="h-4 w-4 text-violet-500/60" />
              <span>{item.label}</span>
            </div>
          ))}
        </MotionReveal>
      </div>
    </section>
  );
}
