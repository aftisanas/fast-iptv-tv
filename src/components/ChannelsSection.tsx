import { Tv, Trophy, Film, Baby, Newspaper, Globe, ArrowRight } from "lucide-react";
import SectionLink from "./SectionLink";
import MotionReveal from "./MotionReveal";
import { CHANNEL_CATEGORIES } from "@/lib/constants";

const iconMap = { Tv, Trophy, Film, Baby, Newspaper, Globe } as const;

export default function ChannelsSection() {
  return (
    <section id="channels" className="relative py-11 lg:py-16">
      <div className="absolute inset-0 mesh-gradient" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionReveal className="text-center mb-16">
          <span className="inline-block rounded-full bg-violet-50 border border-violet-200 px-4 py-1.5 text-sm font-medium text-violet-700 mb-4">
            37,000 Live Channels
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Subscribers Get From The Top{" "}
            <span className="gradient-text">IPTV Providers UK — 37,000 Channels</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted">
            The channel lineup separates serious IPTV providers from the rest. Every category below ships with every{" "}
            <SectionLink href="/#pricing" className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline">
              IPTV subscription
            </SectionLink>{" "}— no add-ons, no bolt-ons, no hidden fees.
          </p>
        </MotionReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {CHANNEL_CATEGORIES.map((cat, i) => {
            const Icon = iconMap[cat.icon];
            return (
              <MotionReveal
                key={cat.name}
                delay={i * 0.05}
                className="group relative overflow-hidden rounded-2xl border border-violet-100/60 bg-white p-6 transition-all duration-500 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-100/40 premium-card flex flex-col"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-violet-50 to-transparent rounded-bl-full opacity-0 transition-opacity group-hover:opacity-100" />

                <div className="relative flex flex-col flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-100 to-cyan-50 transition-all group-hover:from-violet-200/80 group-hover:to-cyan-100/50">
                      <Icon className="h-6 w-6 text-violet-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{cat.name}</h3>
                      <p className="text-2xl font-bold gradient-text">{cat.count}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted leading-relaxed mb-4">
                    {cat.channels}
                  </p>
                  <SectionLink
                    href={cat.linkHref}
                    className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-violet-600 transition-all hover:text-violet-700 group-hover:gap-2"
                  >
                    {cat.linkLabel}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </SectionLink>
                </div>
              </MotionReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
