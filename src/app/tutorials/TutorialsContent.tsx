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
  Tv,
  Smartphone,
  Monitor,
  Flame,
  Apple,
  MonitorPlay,
  ArrowRight,
} from "lucide-react";
import SectionLink from "@/components/SectionLink";
import { cn } from "@/lib/utils";

type DeviceCard = {
  id: string;
  name: string;
  icon: typeof Tv;
  blurb: string;
};

const DEVICE_CARDS: DeviceCard[] = [
  {
    id: "android-tv",
    name: "Android TV, Box & Google TV",
    icon: Tv,
    blurb: "Sideload IPTV Smarters Pro with Downloader, then sign in with your Fast IPTV Xtream codes.",
  },
  {
    id: "android-phone",
    name: "Android Phone & Tablet",
    icon: Smartphone,
    blurb: "Install the player from Google Play and drop in the Fast IPTV credentials we email you.",
  },
  {
    id: "firestick",
    name: "Amazon Firestick & Fire TV",
    icon: Flame,
    blurb: "Allow unknown apps, sideload the player and activate your Fast IPTV line in two minutes.",
  },
  {
    id: "ios",
    name: "iPhone, iPad & Apple TV",
    icon: Apple,
    blurb: "Grab the player from the App Store and turn off Private Relay before you connect.",
  },
  {
    id: "pc",
    name: "Windows & macOS",
    icon: Monitor,
    blurb: "Use IPTV Smarters Pro (easiest) or KODI with the M3U link from your Fast IPTV welcome email.",
  },
  {
    id: "smart-tv",
    name: "Samsung, LG & Other Smart TVs",
    icon: MonitorPlay,
    blurb: "Pick IPTV Smarters Pro, Smart IPTV, SMARTONE or NET IPTV — full walkthrough for each.",
  },
];

const FAQ_ITEMS: { question: string; answer: string }[] = [
  {
    question: "Where are my Fast IPTV username, password and server URL?",
    answer:
      "They are in the welcome email we send the moment your payment clears. Not in your inbox? Check spam, then message our UK team and we will resend your Fast IPTV line within minutes.",
  },
  {
    question: "Do I need a VPN or proxy to watch Fast IPTV?",
    answer:
      "No — Fast IPTV is delivered over standard HTTPS and works without one. We also include an optional secure proxy option at no extra cost. If you run your own VPN or proxy app, switch it off during activation, and on iOS also disable iCloud Private Relay.",
  },
  {
    question: "My Fast IPTV channels will not load — what now?",
    answer:
      "Nine times out of ten it is the stream-format setting. Open your player's settings, set Stream Format to Default, save, and restart the app. Channels should load instantly after that.",
  },
  {
    question: "Can I watch Fast IPTV on more than one device?",
    answer:
      "Each line streams on one device at a time. Extra connection options are available as add-ons — contact us before purchase or upgrade from your dashboard after activation.",
  },
];

function VideoEmbed({ title, src }: { title: string; src: string }) {
  return (
    <div className="mt-6">
      <div className="aspect-video w-full max-w-2xl mx-auto rounded-xl overflow-hidden border border-violet-100/60 bg-white shadow-sm shadow-violet-100/30">
        <iframe
          className="w-full h-full"
          src={src}
          title={title}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          allowFullScreen
        />
      </div>
    </div>
  );
}

function TutorialStep({ children }: { children: React.ReactNode }) {
  return (
    <li className="text-sm sm:text-base text-muted leading-relaxed marker:text-violet-600 marker:font-semibold">
      {children}
    </li>
  );
}

function SectionHeading({
  eyebrow,
  children,
}: {
  eyebrow?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-6">
      {eyebrow && (
        <span className="inline-block rounded-full bg-violet-50 border border-violet-200 px-3 py-1 text-xs font-medium text-violet-700 mb-3 uppercase tracking-wider">
          {eyebrow}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
        {children}
      </h2>
    </div>
  );
}

function AppHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-lg sm:text-xl font-semibold text-foreground mt-8 mb-3">
      {children}
    </h3>
  );
}

export default function TutorialsContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0118] via-[#1a0a3e] to-[#0c1445]" />

        <div
          className="aurora-blob w-[600px] h-[600px] bg-purple-600/20 -top-32 -left-32"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="aurora-blob w-[450px] h-[450px] bg-blue-500/15 top-1/4 right-[-8%]"
          style={{ animationDelay: "4s" }}
        />
        <div
          className="aurora-blob w-[400px] h-[400px] bg-cyan-500/15 bottom-[-15%] left-1/3"
          style={{ animationDelay: "8s" }}
        />
        <div
          className="aurora-blob w-[300px] h-[300px] bg-fuchsia-500/12 top-[30%] left-[55%]"
          style={{ animationDelay: "6s" }}
        />

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
            <span className="font-medium">Fast IPTV Activation Centre</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight leading-[1.1] mb-6 text-white"
          >
            Fast IPTV Setup Guides — Activate Your Line On Any Device
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto max-w-2xl text-base sm:text-lg text-gray-300/90 leading-relaxed mb-10"
          >
            Plain-English walkthroughs for getting your Fast IPTV subscription live on
            Firestick, Smart TV, Android, iPhone, PC and more. No jargon, no tech skills —
            most customers are watching within a couple of minutes.
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

      {/* ── Device Grid ── */}
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
              Tap A Device To Jump{" "}
              <span className="gradient-text">Straight To Its Fast IPTV Guide</span>
            </h2>
            <p className="mx-auto max-w-xl text-lg text-muted">
              Six step-by-step Fast IPTV install guides — choose the card that matches your
              screen.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {DEVICE_CARDS.map((device, i) => {
              const Icon = device.icon;
              return (
                <motion.a
                  key={device.id}
                  href={`#${device.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -4 }}
                  className="group relative rounded-2xl border border-violet-100/60 bg-white p-6 transition-all duration-500 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-100/40 premium-card focus-visible:outline-2 focus-visible:outline-violet-600 focus-visible:outline-offset-2"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-50/50 to-cyan-50/20 opacity-0 transition-opacity group-hover:opacity-100" />

                  <div className="relative">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-violet-100 to-cyan-50 transition-all group-hover:from-violet-200/80 group-hover:to-cyan-100/50 group-hover:shadow-md group-hover:shadow-violet-200/30">
                      <Icon className="h-7 w-7 text-violet-600 transition-colors group-hover:text-purple-600" />
                    </div>
                    <h3 className="text-base font-semibold text-foreground mb-2">
                      {device.name}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed mb-4">
                      {device.blurb}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-violet-600 transition-all group-hover:gap-2.5">
                      Open guide
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Android TV ── */}
      <section id="android-tv" className="relative py-11 lg:py-16 scroll-mt-24">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Guide 1 of 6">
            Android TV, Box &amp;{" "}
            <span className="gradient-text">Google TV</span>
          </SectionHeading>
          <p className="text-base text-muted leading-relaxed">
            Recommended player:{" "}
            <strong className="text-foreground">IPTV Smarters Pro</strong>.
          </p>

          <AppHeading>IPTV Smarters Pro</AppHeading>
          <ol className="list-decimal pl-6 space-y-3">
            <TutorialStep>
              From Google Play, install the <strong>Downloader</strong> app (by AFTVnews).
            </TutorialStep>
            <TutorialStep>
              Open Downloader and enter:{" "}
              <code className="font-mono text-xs sm:text-sm bg-violet-50 text-violet-700 px-1.5 py-0.5 rounded border border-violet-100">
                https://www.iptvsmarters.com/download
              </code>{" "}
              then press Go.
            </TutorialStep>
            <TutorialStep>
              In <strong>Settings → Device Preferences → Security</strong>, enable
              installs from <strong>Unknown Sources</strong>.
            </TutorialStep>
            <TutorialStep>
              Launch IPTV Smarters Pro and pick &ldquo;Login with Xtream Codes API&rdquo;.
            </TutorialStep>
            <TutorialStep>
              Type the <strong>username, password and server URL</strong> from your Fast
              IPTV welcome email.
            </TutorialStep>
          </ol>
        </div>
      </section>

      {/* ── Android Phone ── */}
      <section id="android-phone" className="relative py-11 lg:py-16 scroll-mt-24">
        <div className="absolute inset-0 section-gradient-2" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Guide 2 of 6">
            Android Phone &amp;{" "}
            <span className="gradient-text">Tablet</span>
          </SectionHeading>
          <p className="text-base text-muted leading-relaxed">
            Recommended player:{" "}
            <strong className="text-foreground">IPTV Smarters Pro</strong>.
          </p>

          <AppHeading>IPTV Smarters Pro</AppHeading>
          <ol className="list-decimal pl-6 space-y-3">
            <TutorialStep>
              Open the <strong>Google Play Store</strong> and search
              &ldquo;IPTV Smarters Pro&rdquo;.
            </TutorialStep>
            <TutorialStep>
              Install it. If it is unavailable in your region, grab the APK from the
              official{" "}
              <a
                href="https://www.iptvsmarters.com/download"
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline"
              >
                IPTV Smarters site
              </a>
              .
            </TutorialStep>
            <TutorialStep>
              Open the app, accept permissions and tap
              &ldquo;Login with Xtream Codes API&rdquo;.
            </TutorialStep>
            <TutorialStep>
              Enter the <strong>username, password and server URL</strong> from your Fast
              IPTV welcome email.
            </TutorialStep>
          </ol>
        </div>
      </section>

      {/* ── Firestick ── */}
      <section id="firestick" className="relative py-11 lg:py-16 scroll-mt-24">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Guide 3 of 6">
            Amazon Firestick &amp;{" "}
            <span className="gradient-text">Fire TV</span>
          </SectionHeading>
          <p className="text-base text-muted leading-relaxed">
            Recommended player:{" "}
            <strong className="text-foreground">IPTV Smarters Pro</strong>.
          </p>

          <AppHeading>IPTV Smarters Pro</AppHeading>
          <ol className="list-decimal pl-6 space-y-3">
            <TutorialStep>
              On the Firestick, open{" "}
              <strong>Settings → My Fire TV → Developer Options</strong>.
            </TutorialStep>
            <TutorialStep>
              Turn on <strong>Apps from Unknown Sources</strong> (the warning is normal —
              this is required to sideload the player).
            </TutorialStep>
            <TutorialStep>
              Back on the home screen, use <strong>Find → Search</strong>, type{" "}
              <strong>Downloader</strong> and install it.
            </TutorialStep>
            <TutorialStep>
              In Downloader, enter:{" "}
              <code className="font-mono text-xs sm:text-sm bg-violet-50 text-violet-700 px-1.5 py-0.5 rounded border border-violet-100">
                https://www.iptvsmarters.com/download
              </code>{" "}
              and press Go.
            </TutorialStep>
            <TutorialStep>Let it download, then choose Install.</TutorialStep>
            <TutorialStep>
              Open IPTV Smarters Pro, pick{" "}
              <strong>Login with Xtream Codes API</strong> and enter the{" "}
              <strong>username, password and server URL</strong> from your Fast IPTV
              welcome email.
            </TutorialStep>
            <TutorialStep>
              Optional: pin the player to your Fire TV home row for one-tap access.
            </TutorialStep>
          </ol>

          <VideoEmbed
            title="Fast IPTV — IPTV Smarters Pro on Firestick"
            src="https://player.vimeo.com/video/901151892?h=a2b2700859"
          />
        </div>
      </section>

      {/* ── iOS ── */}
      <section id="ios" className="relative py-11 lg:py-16 scroll-mt-24">
        <div className="absolute inset-0 section-gradient-2" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Guide 4 of 6">
            iPhone, iPad &amp;{" "}
            <span className="gradient-text">Apple TV</span>
          </SectionHeading>
          <p className="text-base text-muted leading-relaxed">
            Recommended player:{" "}
            <strong className="text-foreground">IPTV Smarters Pro</strong> (also on iOS).
          </p>

          <AppHeading>IPTV Smarters Pro</AppHeading>
          <ol className="list-decimal pl-6 space-y-3">
            <TutorialStep>
              Open the <strong>App Store</strong> and search{" "}
              <strong>IPTV Smarters Pro</strong>.
            </TutorialStep>
            <TutorialStep>Install the app.</TutorialStep>
            <TutorialStep>
              Open it, choose <strong>Login with Xtream Codes API</strong> and enter your{" "}
              <strong>username, password and server URL</strong> from the Fast IPTV
              welcome email.
            </TutorialStep>
          </ol>

          <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50/60 p-4">
            <p className="text-sm text-amber-900 leading-relaxed">
              <strong>Important:</strong> If you run a VPN or proxy app, or have{" "}
              <strong>iCloud Private Relay</strong> switched on, disable it before
              activation. Private Relay is on by default with iCloud+ — turn it off in
              Settings → [your name] → iCloud → Private Relay.
            </p>
          </div>

          <VideoEmbed
            title="Fast IPTV — Smarters Player Lite on iOS"
            src="https://player.vimeo.com/video/900296474?h=a964339035"
          />
        </div>
      </section>

      {/* ── PC ── */}
      <section id="pc" className="relative py-11 lg:py-16 scroll-mt-24">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Guide 5 of 6">
            Windows PC &amp;{" "}
            <span className="gradient-text">Mac</span>
          </SectionHeading>

          <AppHeading>Option A — IPTV Smarters Pro (recommended)</AppHeading>
          <ol className="list-decimal pl-6 space-y-3">
            <TutorialStep>
              Download IPTV Smarters Pro for{" "}
              <a
                href="https://www.iptvsmarters.com/download?download=windows_app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline"
              >
                Windows
              </a>{" "}
              or{" "}
              <a
                href="https://www.iptvsmarters.com/download?download=mac"
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline"
              >
                macOS
              </a>
              .
            </TutorialStep>
            <TutorialStep>Install and open the app.</TutorialStep>
            <TutorialStep>
              Sign in with the <strong>Xtream Codes</strong> username, password and server
              URL from your Fast IPTV welcome email.
            </TutorialStep>
          </ol>

          <AppHeading>Option B — KODI</AppHeading>
          <ol className="list-decimal pl-6 space-y-3">
            <TutorialStep>
              Download KODI from the{" "}
              <a
                href="https://kodi.tv/download/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline"
              >
                official site
              </a>
              .
            </TutorialStep>
            <TutorialStep>
              After installing, follow the video below to add the M3U link from your Fast
              IPTV welcome email.
            </TutorialStep>
          </ol>

          <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50/60 p-4">
            <p className="text-sm text-amber-900 leading-relaxed">
              <strong>Note:</strong> Switch off any VPN or proxy app before activation. On
              macOS, iCloud Private Relay must also be off.
            </p>
          </div>

          <VideoEmbed
            title="Fast IPTV — KODI M3U setup"
            src="https://player.vimeo.com/video/900296864?h=6b4033c002"
          />
        </div>
      </section>

      {/* ── Smart TV ── */}
      <section id="smart-tv" className="relative py-11 lg:py-16 scroll-mt-24">
        <div className="absolute inset-0 section-gradient-2" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Guide 6 of 6">
            Samsung, LG &amp;{" "}
            <span className="gradient-text">Other Smart TVs</span>
          </SectionHeading>
          <p className="text-base text-muted leading-relaxed mb-3">
            <strong className="text-foreground">
              Recommended players, easiest first:
            </strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-muted leading-relaxed marker:text-violet-600">
            <li>
              <strong className="text-foreground">IPTV Smarters Pro</strong> — free, ideal
              for Android-based Smart TVs.
            </li>
            <li>
              <strong className="text-foreground">Smart IPTV</strong> — €5.49 lifetime,
              works on Samsung/LG.
            </li>
            <li>
              <strong className="text-foreground">SMARTONE IPTV</strong> — €2.50/year or
              €12.99 lifetime.
            </li>
            <li>
              <strong className="text-foreground">Net IPTV</strong> — €6.79 for 2 years or
              €13.99 lifetime.
            </li>
          </ul>
          <p className="mt-3 text-sm text-muted leading-relaxed">
            The paid apps include a short trial period so you can confirm everything works
            before activating long-term.
          </p>

          <AppHeading>IPTV Smarters Pro on Smart TV</AppHeading>
          <ol className="list-decimal pl-6 space-y-3">
            <TutorialStep>
              Open your TV&apos;s app store and search{" "}
              <strong>IPTV Smarters Pro</strong> (developer: WHMCS SMARTERS). It may show
              as &ldquo;IPTV Smarters Player&rdquo; — always check the developer name to
              avoid fakes.
            </TutorialStep>
            <TutorialStep>Install and open the app.</TutorialStep>
            <TutorialStep>
              Enter the Xtream username, password and server URL from your Fast IPTV
              welcome email.
            </TutorialStep>
          </ol>
          <div className="mt-4 rounded-xl border border-cyan-200 bg-cyan-50/60 p-4">
            <p className="text-sm text-cyan-900 leading-relaxed">
              <strong>Tip:</strong> If channels stall, open the app&apos;s settings, set{" "}
              <strong>Stream Format</strong> to <strong>Default</strong> and save.
            </p>
          </div>

          <AppHeading>Smart IPTV (Samsung / LG)</AppHeading>
          <ol className="list-decimal pl-6 space-y-3">
            <TutorialStep>
              Install <strong>Smart IPTV</strong> from your TV&apos;s app store.
            </TutorialStep>
            <TutorialStep>
              Open it and note the <strong>MAC address</strong> shown on screen.
            </TutorialStep>
            <TutorialStep>
              On a computer, visit{" "}
              <a
                href="https://siptv.eu/mylist/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline"
              >
                siptv.eu/mylist
              </a>{" "}
              and upload the M3U link from your Fast IPTV welcome email using that MAC
              address.
            </TutorialStep>
            <TutorialStep>
              To keep the app active long-term, complete the small one-off payment at{" "}
              <a
                href="https://siptv.app/activation"
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline"
              >
                siptv.app/activation
              </a>{" "}
              with the same MAC address.
            </TutorialStep>
          </ol>
          <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50/60 p-4">
            <p className="text-sm text-amber-900 leading-relaxed">
              <strong>Note:</strong> Samsung restricts this app on some models. If it is
              missing from your store, use the USB install —{" "}
              <a
                href="https://siptv.app/howto/sammy/files/siptv_tizen.zip"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-900 underline underline-offset-2 hover:text-amber-700"
              >
                follow the official Tizen guide
              </a>
              .
            </p>
          </div>

          <VideoEmbed
            title="Fast IPTV — Smart IPTV on Samsung"
            src="https://player.vimeo.com/video/900297180?h=dcd2a1a9a1"
          />

          <AppHeading>SMARTONE IPTV</AppHeading>
          <ol className="list-decimal pl-6 space-y-3">
            <TutorialStep>Install SMARTONE IPTV from your TV&apos;s app store.</TutorialStep>
            <TutorialStep>Open it and note the MAC address.</TutorialStep>
            <TutorialStep>
              On a computer, upload your M3U link at{" "}
              <a
                href="https://smartone-iptv.com/fr/plugin/smart_one/main_generate"
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline break-all"
              >
                smartone-iptv.com/fr/plugin/smart_one/main_generate
              </a>
              .
            </TutorialStep>
            <TutorialStep>
              Activate at{" "}
              <a
                href="https://smartone-iptv.com/fr/plugin/smart_one/main_activate"
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline break-all"
              >
                smartone-iptv.com/fr/plugin/smart_one/main_activate
              </a>{" "}
              using your MAC address.
            </TutorialStep>
          </ol>

          <AppHeading>NET IPTV</AppHeading>
          <ol className="list-decimal pl-6 space-y-3">
            <TutorialStep>Install NET IPTV from your TV&apos;s app store.</TutorialStep>
            <TutorialStep>Open it and note the MAC address.</TutorialStep>
            <TutorialStep>
              Upload your M3U link at{" "}
              <a
                href="https://netiptv.eu/Upload"
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline"
              >
                netiptv.eu/Upload
              </a>
              .
            </TutorialStep>
            <TutorialStep>
              Activate at{" "}
              <a
                href="https://netiptv.eu/Payment"
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline"
              >
                netiptv.eu/Payment
              </a>{" "}
              using your MAC.
            </TutorialStep>
          </ol>
        </div>
      </section>

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
              Fast IPTV Setup Help
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Activation Questions —{" "}
              <span className="gradient-text">Quick Answers</span>
            </h2>
            <p className="text-lg text-muted">
              The things customers ask most while getting Fast IPTV up and running.
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

        <div
          className="aurora-blob w-[500px] h-[500px] bg-purple-600/20 -top-20 -left-20"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="aurora-blob w-[400px] h-[400px] bg-cyan-500/15 bottom-[-10%] right-[-5%]"
          style={{ animationDelay: "5s" }}
        />
        <div
          className="aurora-blob w-[300px] h-[300px] bg-violet-500/15 top-1/2 left-1/2 -translate-x-1/2"
          style={{ animationDelay: "10s" }}
        />

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
              <span className="gradient-text-hero">Get Fast IPTV in minutes</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-300/90 mb-10 leading-relaxed">
              Choose a plan, pay in seconds, and your login lands in your inbox before the
              first ad break. Every Fast IPTV order is backed by a 30-day money-back
              guarantee and live UK support.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <SectionLink
                href="/#pricing"
                className="group relative flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500 px-8 py-4 text-base font-semibold text-white transition-all hover:shadow-2xl hover:shadow-purple-500/30 active:scale-[0.98] w-full sm:w-auto justify-center"
              >
                <Play className="h-5 w-5 fill-current" />
                Browse Fast IPTV Plans
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
