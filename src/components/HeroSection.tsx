import { Play, MessageCircle, ChevronRight } from "lucide-react";
import ParticleBackground from "./ParticleBackground";
import PromoBanner from "./PromoBanner";
import SectionLink from "./SectionLink";
import MotionFadeIn from "./MotionFadeIn";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative h-[104vh] min-h-[640px] flex flex-col overflow-hidden"
    >
      {/* ── Deep premium gradient background ── */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0118] via-[#1a0a3e] to-[#0c1445]" />

      {/* ── Vivid aurora blobs ── */}
      <div
        className="aurora-blob w-[700px] h-[700px] bg-purple-600/25 -top-32 -left-32"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="aurora-blob w-[500px] h-[500px] bg-blue-500/20 top-1/4 right-[-8%]"
        style={{ animationDelay: "4s" }}
      />
      <div
        className="aurora-blob w-[600px] h-[600px] bg-violet-500/15 bottom-[-15%] left-1/3"
        style={{ animationDelay: "8s" }}
      />
      <div
        className="aurora-blob w-[400px] h-[400px] bg-cyan-500/20 top-[60%] left-[-5%]"
        style={{ animationDelay: "12s" }}
      />
      <div
        className="aurora-blob w-[350px] h-[350px] bg-fuchsia-500/15 top-[10%] left-[55%]"
        style={{ animationDelay: "6s" }}
      />

      {/* ── Layered radial overlays for depth ── */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(124,58,237,0.2),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(6,182,212,0.12),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.08),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(59,130,246,0.1),transparent_40%)]" />

      {/* ── Subtle mesh grid ── */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Decorative floating orbs ── */}
      <div className="absolute top-[15%] left-[10%] w-2 h-2 rounded-full bg-purple-400/60 animate-float" />
      <div className="absolute top-[35%] right-[15%] w-1.5 h-1.5 rounded-full bg-cyan-400/50 animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-[25%] left-[20%] w-1 h-1 rounded-full bg-blue-400/60 animate-float" style={{ animationDelay: "4s" }} />
      <div className="absolute top-[50%] right-[8%] w-2.5 h-2.5 rounded-full bg-violet-400/40 animate-float" style={{ animationDelay: "1s" }} />

      {/* ── Particles ── */}
      <ParticleBackground />

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-[7.5rem] lg:pt-32 pb-2 flex flex-col items-center text-center">
        {/* Headline — plain H1 for LCP, no motion wrapper */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight leading-[1.1] mb-2">
          <span className="text-white">IPTV Providers UK — </span>
          <br />
          <span className="text-white">The Guide To The #1 Rated </span>
          <span className="gradient-text-hero">IPTV Service</span>
        </h1>

        {/* Subtitle */}
        <MotionFadeIn
          as="p"
          y={20}
          duration={0.7}
          delay={0.18}
          className="text-base sm:text-lg text-gray-300/90 max-w-3xl mb-3 px-2 sm:px-0"
        >
          Compare 37,000+ live channels, 198,000+ films and series, and 4K UHD across five simultaneous screens — with 60-second activation and a 30-day money-back on every plan. UK-focused infrastructure and 24/7 support built for British households.
        </MotionFadeIn>

        {/* Promo banner — replaces hero device image */}
        <MotionFadeIn
          y={30}
          duration={0.7}
          delay={0.25}
          className="relative w-full mt-6 sm:mt-8"
        >
          <PromoBanner />
        </MotionFadeIn>

        {/* CTA Buttons — directly under image */}
        <MotionFadeIn
          y={30}
          duration={0.7}
          delay={0.35}
          className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <SectionLink
            href="/#pricing"
            className="group relative flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500 px-7 py-3.5 text-sm sm:text-base font-semibold text-white shadow-lg shadow-purple-900/40 transition-all hover:shadow-2xl hover:shadow-purple-500/40 active:scale-[0.98] w-full sm:w-auto justify-center"
          >
            <Play className="h-5 w-5 fill-current" />
            <span>Choose An IPTV Plan — From £4.99/mo</span>
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 transition-opacity group-hover:opacity-100" />
          </SectionLink>
          <SectionLink
            href="/#pricing"
            className="group flex items-center gap-2.5 rounded-2xl border border-white/15 bg-white/[0.06] backdrop-blur-sm px-7 py-3.5 text-sm sm:text-base font-semibold text-white transition-all hover:border-purple-400/30 hover:bg-white/10 w-full sm:w-auto justify-center"
          >
            <MessageCircle className="h-5 w-5 text-cyan-400" />
            <span>Compare All Plans</span>
          </SectionLink>
        </MotionFadeIn>
      </div>


      {/* Bottom gradient fade to site background */}
      <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-[#fafbff] to-transparent pointer-events-none" />
    </section>
  );
}

