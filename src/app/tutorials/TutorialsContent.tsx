"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ChevronDown,
  ChevronRight,
  Play,
  MessageCircle,
  BookOpen,
  ArrowRight,
  Wrench,
  Ban,
} from "lucide-react";
import SectionLink from "@/components/SectionLink";
import { cn } from "@/lib/utils";
import {
  TUTORIAL_DEVICES,
  QUICK_FIX_CHECKLIST,
  TROUBLESHOOTING_ITEMS,
  SUPPORT_WHATSAPP_NUMBER,
  SUPPORT_WHATSAPP_HREF,
} from "@/lib/tutorial-content";

const FAQ_ITEMS: { question: string; answer: string }[] = [
  {
    question: "Where are my IPTV Providers UK username, password and server URL?",
    answer:
      "They are in the welcome email we send the moment your payment clears. Not in your inbox? Check spam, then message our UK team and we will resend your IPTV Providers UK line within minutes.",
  },
  {
    question: "Do I need a Secure Proxy to watch IPTV Providers UK?",
    answer:
      "No — IPTV Providers UK is delivered over standard HTTPS and works without one. Our optional Secure Proxy add-on is available at checkout if your ISP filters streaming traffic. If you run a third-party VPN or proxy app, switch it off during activation, and on iOS also disable iCloud Private Relay.",
  },
  {
    question: "My IPTV Providers UK channels will not load — what now?",
    answer:
      "Nine times out of ten it is the stream-format setting. Open your player's settings, set Stream Format to Default, save, and restart the app. Channels should load instantly after that.",
  },
  {
    question: "Can I watch IPTV Providers UK on more than one device?",
    answer:
      "Each line streams on one device at a time. Extra connection options are available as add-ons — contact us before purchase or upgrade from your dashboard after activation.",
  },
];

// Inline-format URLs, hostnames and IPv4s as <code> so they read as copy-paste values.
function renderStepText(text: string): React.ReactNode {
  const RE =
    /(https?:\/\/[^\s,]+|\bfast\.com\b|\biptvsmarters\.com(?:\/[a-z0-9?=_-]*)?|\b\d+\.\d+\.\d+\.\d+\b)/g;
  const parts: React.ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = RE.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    parts.push(
      <code
        key={`${m.index}-${m[0]}`}
        className="font-mono text-xs sm:text-sm bg-violet-50 text-violet-700 px-1.5 py-0.5 rounded border border-violet-100 break-all"
      >
        {m[0]}
      </code>
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts.length > 0 ? parts : text;
}

function TroubleshootingSection() {
  return (
    <section id="troubleshooting" className="relative py-11 lg:py-16 scroll-mt-24">
      <div className="absolute inset-0 mesh-gradient" />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 lg:mb-14"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 border border-amber-200 px-4 py-1.5 text-sm font-medium text-amber-700 mb-4">
            <Wrench className="h-4 w-4" />
            Troubleshooting
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Something Not Working?{" "}
            <span className="gradient-text">Start Here</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Run through the quick-fix checklist first, then jump to your specific issue
            below.
          </p>
        </motion.div>

        <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-5">
          Quick-fix checklist
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14">
          {QUICK_FIX_CHECKLIST.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="rounded-xl border border-violet-100/60 bg-white p-5 premium-card"
            >
              <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
              <p className="text-sm text-muted leading-relaxed">
                {renderStepText(item.description)}
              </p>
            </motion.div>
          ))}
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-5">
          Common issues
        </h3>
        <div className="space-y-4">
          {TROUBLESHOOTING_ITEMS.map((item, i) => (
            <motion.div
              key={item.id}
              id={item.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: Math.min(i * 0.03, 0.18) }}
              className="rounded-xl border border-violet-100/60 bg-white p-5 sm:p-6 scroll-mt-24"
            >
              <h4 className="text-base sm:text-lg font-semibold text-foreground mb-3">
                {item.title}
              </h4>
              {item.intro && (
                <p className="text-sm text-muted leading-relaxed mb-3">
                  {renderStepText(item.intro)}
                </p>
              )}
              {item.steps && (
                <ol className="list-decimal pl-5 space-y-2">
                  {item.steps.map((step, j) => (
                    <li
                      key={j}
                      className="text-sm text-muted leading-relaxed marker:text-violet-600 marker:font-semibold"
                    >
                      {renderStepText(step)}
                    </li>
                  ))}
                </ol>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-cyan-200 bg-gradient-to-br from-cyan-50/80 to-violet-50/60 p-6 sm:p-8 text-center">
          <h4 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
            Still stuck?
          </h4>
          <p className="text-sm sm:text-base text-muted leading-relaxed mb-5 max-w-xl mx-auto">
            Message us with your device type and model, the exact error message, and which
            app you&apos;re using — our UK team will guide you through the fix
            step-by-step.
          </p>
          <a
            href={SUPPORT_WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-purple-900/30 transition-all hover:shadow-2xl hover:shadow-purple-500/30 active:scale-[0.98]"
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp us — {SUPPORT_WHATSAPP_NUMBER}
          </a>
        </div>
      </div>
    </section>
  );
}

export default function TutorialsContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0118] via-[#1a0a3e] to-[#0c1445]" />

        <div className="aurora-blob w-[600px] h-[600px] bg-purple-600/20 -top-32 -left-32" style={{ animationDelay: "0s" }} />
        <div className="aurora-blob w-[450px] h-[450px] bg-blue-500/15 top-1/4 right-[-8%]" style={{ animationDelay: "4s" }} />
        <div className="aurora-blob w-[400px] h-[400px] bg-cyan-500/15 bottom-[-15%] left-1/3" style={{ animationDelay: "8s" }} />
        <div className="aurora-blob w-[300px] h-[300px] bg-fuchsia-500/12 top-[30%] left-[55%]" style={{ animationDelay: "6s" }} />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(124,58,237,0.18),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(6,182,212,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.07),transparent_60%)]" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-white/[0.07] backdrop-blur-md px-5 py-2.5 text-sm text-purple-200 mb-8"
          >
            <BookOpen className="h-4 w-4 text-cyan-400" />
            <span className="font-medium">IPTV Setup Guides — 11 Devices Covered</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight leading-[1.1] mb-6 text-white"
          >
            IPTV Setup Guides — Activate Your Line On Any Device
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto max-w-2xl text-base sm:text-lg text-gray-300/90 leading-relaxed mb-10"
          >
            Plain-English walkthroughs for getting your subscription live on Fire Stick,
            Smart TV, Apple TV, Android, iPhone, Windows, Mac and dedicated IPTV boxes. No
            jargon, no tech skills — most customers are watching within a couple of
            minutes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <a
              href="#devices"
              className="group relative flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500 px-7 py-3.5 text-sm sm:text-base font-semibold text-white shadow-lg shadow-purple-900/40 transition-all hover:shadow-2xl hover:shadow-purple-500/40 active:scale-[0.98] w-full sm:w-auto justify-center"
            >
              <Play className="h-5 w-5 fill-current" />
              <span>Choose Your Device</span>
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
            <Link
              href="/contact"
              className="group flex items-center gap-2.5 rounded-2xl border border-white/15 bg-white/[0.06] backdrop-blur-sm px-7 py-3.5 text-sm sm:text-base font-semibold text-white transition-all hover:border-purple-400/30 hover:bg-white/10 w-full sm:w-auto justify-center"
            >
              <MessageCircle className="h-5 w-5 text-cyan-400" />
              <span>Stuck? Contact our UK team</span>
            </Link>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#fafbff] via-[#fafbff]/80 to-transparent" />
      </section>

      {/* ── Device Hub Grid ── */}
      <section id="devices" className="relative py-11 lg:py-16">
        <div className="absolute inset-0 section-gradient-2" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-16"
          >
            <span className="inline-block rounded-full bg-cyan-50 border border-cyan-200 px-4 py-1.5 text-sm font-medium text-cyan-700 mb-4">
              Pick Your Hardware
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Choose A Device For Its{" "}
              <span className="gradient-text">Step-By-Step Setup Guide</span>
            </h2>
            <p className="mx-auto max-w-xl text-lg text-muted">
              Eleven dedicated walkthroughs — tap the card that matches your screen and
              follow the guide end-to-end.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5">
            {TUTORIAL_DEVICES.map((device, i) => (
              <motion.div
                key={device.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(i * 0.04, 0.4) }}
              >
                <Link
                  href={`/tutorials/${device.slug}`}
                  className="group relative flex h-full flex-col rounded-2xl border border-violet-100/60 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-100/40 premium-card focus-visible:outline-2 focus-visible:outline-violet-600 focus-visible:outline-offset-2"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-50/50 to-cyan-50/20 opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative flex h-full flex-col">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-violet-100 to-cyan-50 text-2xl transition-all group-hover:from-violet-200/80 group-hover:to-cyan-100/50 group-hover:shadow-md group-hover:shadow-violet-200/30">
                      <span aria-hidden="true">{device.emoji}</span>
                    </div>
                    <h3 className="text-base font-semibold text-foreground mb-1">
                      {device.displayName}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed mb-4 flex-1">
                      {device.subtitle}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-violet-600 transition-all group-hover:gap-2.5">
                      View setup guide
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}

            {/* MAG — not supported, hub-only upgrade card (no route) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="relative flex h-full flex-col rounded-2xl border-2 border-dashed border-slate-200 bg-white/70 p-6"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-slate-100 text-2xl">
                <span aria-hidden="true">🚫</span>
              </div>
              <h3 className="inline-flex items-center gap-1.5 text-base font-semibold text-foreground mb-1">
                <Ban className="h-4 w-4 text-slate-400" />
                MAG Box (Not Supported)
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                Legacy MAG boxes use MAC-address-only registration, which our current
                network doesn&apos;t support. Recommended upgrades: Fire Stick 4K Max,
                Nvidia Shield, or Formuler Z11 Pro Max.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Troubleshooting ── */}
      <TroubleshootingSection />

      {/* ── FAQ ── */}
      <section id="faq" className="relative py-11 lg:py-16">
        <div className="absolute inset-0 mesh-gradient" />

        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-16"
          >
            <span className="inline-block rounded-full bg-violet-50 border border-violet-200 px-4 py-1.5 text-sm font-medium text-violet-700 mb-4">
              IPTV Providers UK Setup Help
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Activation Questions —{" "}
              <span className="gradient-text">Quick Answers</span>
            </h2>
            <p className="text-lg text-muted">
              The things customers ask most while getting IPTV Providers UK up and running.
            </p>
          </motion.div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`tut-faq-panel-${i}`}
                    id={`tut-faq-trigger-${i}`}
                    className={cn(
                      "w-full flex items-center justify-between gap-4 rounded-xl border p-5 text-left transition-all duration-300 focus-visible:outline-2 focus-visible:outline-violet-600 focus-visible:outline-offset-2",
                      isOpen
                        ? "border-violet-200 bg-violet-50/60 shadow-sm"
                        : "border-violet-100/50 bg-white hover:border-violet-200 hover:shadow-sm"
                    )}
                  >
                    <span className="text-sm sm:text-base font-medium text-foreground pr-4">
                      {item.question}
                    </span>
                    <ChevronDown
                      aria-hidden="true"
                      className={cn(
                        "h-5 w-5 shrink-0 text-muted transition-transform duration-300",
                        isOpen && "rotate-180 text-violet-600"
                      )}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        id={`tut-faq-panel-${i}`}
                        role="region"
                        aria-labelledby={`tut-faq-trigger-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 py-4 text-sm text-muted leading-relaxed">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="relative py-11 lg:py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f0524] via-[#1a0a3e] to-[#0c1445]" />

        <div className="aurora-blob w-[500px] h-[500px] bg-purple-600/20 -top-20 -left-20" style={{ animationDelay: "0s" }} />
        <div className="aurora-blob w-[400px] h-[400px] bg-cyan-500/15 bottom-[-10%] right-[-5%]" style={{ animationDelay: "5s" }} />
        <div className="aurora-blob w-[300px] h-[300px] bg-violet-500/15 top-1/2 left-1/2 -translate-x-1/2" style={{ animationDelay: "10s" }} />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(6,182,212,0.08),transparent_50%)]" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Not subscribed yet?{" "}
              <span className="gradient-text-hero">Get IPTV Providers UK in minutes</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-300/90 mb-10 leading-relaxed">
              Choose a plan, pay in seconds, and your login lands in your inbox before the
              first ad break. Every IPTV Providers UK order is backed by a 30-day money-back
              guarantee and live UK support.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <SectionLink
                href="/#pricing"
                className="group relative flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500 px-8 py-4 text-base font-semibold text-white transition-all hover:shadow-2xl hover:shadow-purple-500/30 active:scale-[0.98] w-full sm:w-auto justify-center"
              >
                <Play className="h-5 w-5 fill-current" />
                Browse IPTV Providers UK Plans
                <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 transition-opacity group-hover:opacity-100" />
              </SectionLink>
              <Link
                href="/contact"
                className="group flex items-center gap-2.5 rounded-2xl border border-white/15 bg-white/[0.06] backdrop-blur-sm px-8 py-4 text-base font-semibold text-white transition-all hover:border-purple-400/30 hover:bg-white/10 w-full sm:w-auto justify-center"
              >
                <MessageCircle className="h-5 w-5 text-cyan-400" />
                Talk To UK Support
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
