import type { Metadata } from "next";
import Link from "next/link";
import SubPageShell, {
  ArticleSection,
  FaqItem,
  RelatedLink,
} from "@/components/SubPageShell";

export const metadata: Metadata = {
  title: { absolute: "IPTV Smarters Pro Firestick Setup — UK Step-by-Step" },
  description:
    "Install IPTV Smarters Pro on Firestick and activate Fast IPTV in under 10 minutes. UK-tested setup steps, with anti-freeze playback tips.",
  alternates: { canonical: "https://fast-iptv.tv/iptv-smarters-pro-setup" },
};

const sections: ArticleSection[] = [
  {
    h2: "What IPTV Smarters Pro does (and why it pairs well with Fast IPTV)",
    paragraphs: [
      "IPTV Smarters Pro is a third-party media player designed specifically for streaming M3U and Xtream Codes IPTV feeds. It does not host or provide content of its own — it is a playback engine, and what plays through it depends entirely on the credentials you supply.",
      "The app has become the default choice for UK Fast IPTV subscribers for a small number of practical reasons. It is free, open and installed by tens of millions of users worldwide, which keeps it well-maintained. It supports the Xtream Codes API natively, which gives Fast IPTV accounts a richer electronic programme guide than M3U URL alone. And it has full hardware decoder access on Firestick, meaning 4K HEVC streams play without CPU strain.",
      "Smarters Pro also handles secondary features that matter for daily use: per-account favourites, parental controls, EPG-driven catch-up windows, multi-stream playback on devices that support it, and an external player handoff for users who prefer VLC or MX Player.",
      "For most Fast IPTV subscribers on Firestick hardware, IPTV Smarters Pro is the player the welcome email recommends. The rest of this guide assumes you are installing it specifically.",
    ],
  },
  {
    h2: "Firestick prerequisites and developer-options setup",
    paragraphs: [
      "Before installing IPTV Smarters Pro, two Firestick settings need to be in place. Both take 30 seconds.",
      "First, enable Developer Options. From the Firestick home screen, go to Settings → My Fire TV → About. Click on the device name (Fire TV Stick, or whichever model you have) seven times rapidly. After the seventh click, a \"Developer Options now enabled\" message appears at the bottom of the screen.",
      "Return to Settings → My Fire TV. A new \"Developer Options\" menu now appears. Open it. Enable both \"ADB Debugging\" and \"Apps from Unknown Sources\". The second setting is the one that allows the sideloaded Smarters Pro APK to install.",
      "If you are on a newer Fire OS release (post-2023), the second setting may be tied to a specific installer app rather than being a global toggle. In that case, install the Downloader app first from the Amazon app store, then under Apps from Unknown Sources you will see Downloader listed — enable it specifically.",
      <>
        Once both options are set, your Firestick is ready to accept the IPTV Smarters Pro installation. The settings persist across reboots; you only do this once per device. For the full Firestick-first install path, including 4K display tuning, our{" "}
        <Link href="/iptv-for-firestick" className="text-violet-600 hover:text-violet-700 underline underline-offset-2">
          IPTV for Firestick
        </Link>{" "}
        guide walks through every menu.
      </>,
    ],
  },
  {
    h2: "Downloading the player",
    paragraphs: [
      "With Developer Options enabled, install the Downloader app first if you do not already have it. From the Firestick home screen, choose Find → Search and type \"Downloader\". The orange app icon is the official version published by AFTVnews — install it.",
      "Open Downloader. The first screen has a URL field. Type the URL exactly as provided in your Fast IPTV welcome email — this is the direct APK link for the current IPTV Smarters Pro build. The URL is short, all lowercase, and case-sensitive on the Firestick keyboard.",
      "Press \"Go\". The Firestick downloads the APK file — typically 30-40 MB — in around 15 seconds on most UK broadband connections. When the download completes, the install prompt appears automatically. Choose \"Install\".",
      "Installation takes 20-30 seconds. When the \"App installed\" message appears, choose \"Done\" rather than \"Open\". From the Downloader settings, enable \"Delete APK after install\" to free up the 30 MB of storage you no longer need.",
      "The IPTV Smarters Pro icon now appears under \"Your Apps & Channels\" on the Firestick home screen. Long-press it and drag it to a front position for quick daily access.",
    ],
  },
  {
    h2: "Adding your Fast IPTV credentials",
    paragraphs: [
      "Launch IPTV Smarters Pro from the Firestick home screen. The first launch shows a \"Login Your Account\" splash with three method options: Xtream Codes API, M3U URL, and Login With Stalker.",
      "Choose Xtream Codes API. This is the recommended option for Fast IPTV accounts — it pulls a richer EPG and lets the player update the channel list automatically when Fast IPTV adds new feeds.",
      "The Xtream Codes screen has four fields. Enter any name you like for the label (for example \"Fast IPTV\"). Then paste in the username, password and server URL exactly as they appear in your Fast IPTV welcome email. The server URL is typically a short address ending in :80 or :8080.",
      "The Firestick keyboard is fiddly. If you have a phone with Amazon's Fire TV app installed, the in-app keyboard mirroring is much faster — open the app, connect to the Firestick on the same Wi-Fi, and type into the phone instead.",
      <>
        Press &ldquo;Add User&rdquo;. Smarters Pro fetches the channel list and EPG. On a first load this takes 30-60 seconds. Subsequent launches reuse the cached lists and open in under five seconds. Pricing and connection counts for every plan are on the{" "}
        <Link href="/" className="text-violet-600 hover:text-violet-700 underline underline-offset-2">
          Fast IPTV main page
        </Link>
        .
      </>,
    ],
  },
  {
    h2: "Choosing the right stream profile for 4K",
    paragraphs: [
      "The default IPTV Smarters Pro settings prioritise compatibility. For 4K viewing on Firestick 4K and 4K Max hardware, three adjustments unlock significantly better picture quality.",
      "First, open Settings → Player Settings inside Smarters Pro. The Live, Movie and Series sections each have a \"Default Player\" dropdown. Set all three to \"IPTV Smarters Player (Internal Player)\" rather than an external player like MX Player or VLC. The internal player has full hardware HEVC access on Firestick; external players sometimes do not.",
      "Second, inside Settings → Player Settings → Live Stream Format, choose \"HLS\" rather than \"M3U8 Direct\". HLS lets the adaptive bitrate logic switch quality tiers mid-stream when your line dips — the picture briefly softens, but it never freezes.",
      "Third, on the Firestick itself (outside Smarters), confirm display resolution is set to Auto in Settings → Display & Sounds → Display → Video Resolution. A Firestick locked manually to 4K can produce blank frames on TVs that only handle 4K at 60 Hz on specific HDMI ports.",
      "These three changes together produce visibly steadier 4K playback on the same hardware. Most \"soft-looking 4K\" complaints come from one of these three settings being misconfigured rather than from the stream source itself.",
    ],
  },
  {
    h2: "First-run playback checks",
    paragraphs: [
      "With credentials added and player profile set, work through a brief checklist before settling in for an evening's viewing.",
      "Open the Live TV category. The channel list should populate within five seconds. If it takes longer than 20 seconds, the EPG fetch is timing out — check that your Wi-Fi connection is stable and re-launch Smarters Pro.",
      "Pick a channel from a major category (news or sport). Playback should start in under three seconds on a stable broadband line. A first-launch may take slightly longer as the player negotiates the optimal stream tier.",
      "Use the player's stream-info overlay (long-press OK on the Firestick remote during playback) to check three details: stream format (should show HLS), decoder (should show HW or HW+), and resolution (should match what your TV supports). If any of the three shows an unexpected value, return to Player Settings and re-confirm.",
      <>
        Test a 4K-tagged channel specifically. The picture should look noticeably sharper than the 1080p version of the same channel. If they look identical, your TV is downscaling — re-check display settings on both Firestick and TV. If channels start playing but freeze repeatedly, the{" "}
        <Link href="/iptv-buffering-fix" className="text-violet-600 hover:text-violet-700 underline underline-offset-2">
          IPTV buffering fix
        </Link>{" "}
        guide covers every root cause.
      </>,
    ],
  },
  {
    h2: "Updating and re-activating after software updates",
    paragraphs: [
      "IPTV Smarters Pro releases updates every two to three months. Each update fixes bugs, adds player features, and occasionally adjusts compatibility with Fire OS changes from Amazon. Keeping the player current matters for stable playback.",
      "Smarters Pro does not auto-update — the Amazon app store does not host it, so updates are manual. The simplest method: when a new version is released, the player itself displays a \"Update available\" prompt on launch. Accept it, and the Downloader-style flow re-runs.",
      "If the prompt fails or you want to update preemptively, re-run the install flow from Section 3 with the same URL. The new APK installs over the existing one; your credentials and favourites carry through.",
      "Occasionally a Fire OS update from Amazon will disable sideloaded apps that were installed before the update. If Smarters Pro vanishes after a Firestick auto-update, re-enable Apps from Unknown Sources (Section 2) — the setting sometimes resets — and reinstall the player.",
      "If you ever change Fast IPTV plans or your account credentials change, Smarters Pro will need re-activation. Long-press the user profile on the splash screen, choose \"Edit Account\", and update the fields. The channel list refreshes automatically once new credentials validate. Smarters Pro plus current Fire OS keeps Fast IPTV running on Firestick with minimal maintenance.",
    ],
  },
];

const faqs: FaqItem[] = [
  {
    question: "Is IPTV Smarters Pro free?",
    answer:
      "Yes. IPTV Smarters Pro is free to install and free to use. There is no in-app purchase, no subscription, and no premium tier. The app monetises through the white-label licensing it offers to IPTV providers, not through end users. Your Fast IPTV subscription pays for the streaming service; Smarters Pro is purely the playback engine.",
  },
  {
    question: "How do I install IPTV Smarters Pro on Firestick without a computer?",
    answer:
      "You do not need a computer. The entire installation flow runs on the Firestick itself — enable Developer Options, install Downloader from the Amazon app store, enter the IPTV Smarters Pro APK URL from your Fast IPTV welcome email, and the player installs in under two minutes. Sections 2 and 3 of this guide cover every step.",
  },
  {
    question: "Why does IPTV Smarters Pro say \"Invalid Username or Password\"?",
    answer:
      "Three common causes. First, the credentials were typed rather than pasted — the Firestick keyboard is error-prone. Second, the URL field is missing the port number (usually :80 or :8080) at the end. Third, the account has expired or been changed. Re-check the welcome email and the Fast IPTV account dashboard.",
  },
  {
    question: "Can I use IPTV Smarters Pro on devices other than Firestick?",
    answer:
      "Yes. IPTV Smarters Pro runs on Android phones and tablets, iOS devices, Android TV, Google TV, Smart TVs that support sideloading, and Windows or macOS via the Smarters Player desktop build. The same Fast IPTV credentials work across all devices, subject to your plan's connection count.",
  },
  {
    question: "Does IPTV Smarters Pro need the Downloader app permanently installed?",
    answer:
      "No. Once Smarters Pro is installed, you can uninstall Downloader to free up space. The only reason to keep it is for future Smarters Pro updates that require a new APK install. Most users keep Downloader for convenience.",
  },
];

const related: RelatedLink[] = [
  {
    href: "/iptv-for-firestick",
    label: "IPTV for Firestick — fast UK setup",
    blurb: "The wider device guide — every Firestick-specific setting Smarters Pro relies on.",
  },
  {
    href: "/iptv-buffering-fix",
    label: "IPTV buffering fix",
    blurb: "What to do when Smarters Pro is installed but channels still freeze mid-stream.",
  },
];

export default function IptvSmartersProSetupPage() {
  return (
    <SubPageShell
      slug="/iptv-smarters-pro-setup"
      eyebrow="Technical setup · Smarters Pro · Firestick"
      h1="IPTV Smarters Pro on Firestick — Fast Setup Guide"
      intro="Install and activate IPTV Smarters Pro on every Firestick model in under ten minutes. UK-tested step-by-step setup, with the player settings that actually keep 4K stable."
      bylineName="Fast IPTV Editorial"
      bylineRole="Device setup desk"
      updatedISO="2026-05-31"
      readMinutes={9}
      sections={sections}
      faqs={faqs}
      related={related}
      description="Install IPTV Smarters Pro on Firestick and activate Fast IPTV in under 10 minutes. UK-tested setup steps, with anti-freeze playback tips."
    />
  );
}
