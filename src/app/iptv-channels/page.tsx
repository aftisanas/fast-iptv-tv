import type { Metadata } from "next";
import Link from "next/link";
import SubPageShell, { ArticleSection, FaqItem, RelatedLink } from "@/components/SubPageShell";

export const metadata: Metadata = {
  title: { absolute: "IPTV Channels UK 2026 — Full 37,000 Channel List | Fast IPTV" },
  description:
    "The complete IPTV channels list included with every Fast IPTV subscription — 37,000 UK and international channels covering sport, entertainment, news, kids, cinema. From £3.75/month.",
  alternates: { canonical: "https://fast-iptv.tv/iptv-channels" },
  openGraph: {
    title: "IPTV Channels UK 2026 — Full 37,000 Channel List",
    description: "37,000 UK and international IPTV channels. Sport, entertainment, news, kids, cinema, international language packs.",
    url: "https://fast-iptv.tv/iptv-channels", type: "article", locale: "en_GB", siteName: "Fast IPTV",
    images: ["/fast-iptv-og-image.webp"],
  },
  twitter: { card: "summary_large_image" },
};

const sections: ArticleSection[] = [
  {
    h2: "What 37,000 IPTV channels actually looks like",
    paragraphs: [
      <>The <strong>IPTV channels</strong> included with every Fast IPTV subscription in 2026 total 37,000 live feeds across six major categories. That number is intentionally verified — not inflated. Some UK IPTV services quote 100,000+ channels by counting duplicates, offline streams and low-quality reseller feeds. Fast IPTV counts only genuine unique live channels currently online.</>,
      "The breakdown below explains what those 37,000 channels cover, why the category mix matters, and how UK subscribers navigate the line-up in day-to-day use.",
    ],
  },
  {
    h2: "UK sport channels — 5,500+ live feeds",
    paragraphs: [
      "The largest single category. Domestic top-flight football (every available UK rights holder match), cup competitions (midweek and weekend), European fixtures (Champions and Europa competitions on UK rights holders), lower divisions and EFL coverage.",
      "Rugby union (Premiership, Six Nations, autumn internationals) and rugby league (Super League). Cricket (domestic county, international home internationals, Ashes, T20 tournaments, the Hundred). Motorsport (F1 full season, MotoGP, BTCC, Le Mans). Tennis (Wimbledon, US Open, French Open, Australian Open, plus ATP and WTA tours). Golf (Masters, Open, US Open, PGA Tour). Boxing and combat sports. Horse racing (every UK festival — Cheltenham, Aintree, Royal Ascot, Epsom).",
    ],
  },
  {
    h2: "UK entertainment and drama — 500+ channels",
    paragraphs: [
      "Every flagship UK network channel with regional variants (English, Scottish, Welsh, Northern Irish feeds) and +1 timeshift feeds. Reality, drama, comedy, lifestyle, primetime entertainment. This is the UK viewing baseline most households care about most — and it's included on every Fast IPTV tier without add-ons.",
    ],
  },
  {
    h2: "On-demand cinema and film — 198,000+ titles",
    paragraphs: [
      "800+ live cinema channels plus a 198,000-title on-demand library covering the latest blockbusters, award winners, original series and international premieres. New releases typically land in the on-demand library on the day they hit digital streaming.",
      "The library stretches back decades — perfect for classic film catalogues, older TV series and international releases that mainstream UK streaming services do not carry.",
    ],
  },
  {
    h2: "Live news, kids and international channels",
    paragraphs: [
      "News: 1,200+ UK and international rolling news channels covering breaking coverage, business, world affairs, regional bulletins — every major story under a single feed at any time.",
      "Kids and family: 800+ curated safe channels covering every age group from toddlers to teens. Parental controls with a four-digit PIN lock any channel from the parental control tab.",
      "International: 17,000+ channels across 40+ language packs (Arabic, Turkish, Polish, Urdu, Bengali, Punjabi, Portuguese, Spanish, French, German, Italian, Greek, Russian and more) — perfect for UK subscribers wanting content in their native language.",
    ],
  },
  {
    h2: "Catch-up TV and EPG guide across all channels",
    paragraphs: [
      "Full 7-day catch-up TV on every UK terrestrial channel where the broadcaster provides catch-up rights. Full EPG (electronic programme guide) with UK GMT/BST times, synopsis, cast lists and recording capability where the IPTV app supports it (IPTV Smarters Pro, TiViMate).",
      <>Combined with true 4K UHD on every channel that broadcasts in 4K, this is the complete UK IPTV viewing experience. <Link href="/#pricing" className="text-violet-600 hover:text-violet-700 underline underline-offset-2">Subscribe to Fast IPTV</Link> from £3.75/month to access the full line-up.</>,
    ],
  },
];

const faqs: FaqItem[] = [
  { question: "How many IPTV channels are included with Fast IPTV?", answer: "37,000 live IPTV channels are included with every Fast IPTV subscription. The count is verified unique channels currently online, not inflated by counting duplicates or offline feeds. Every tier from 3-month to 24-month plan ships the same 37,000 channels." },
  { question: "Are UK IPTV channels included in every plan?", answer: "Yes. Every Fast IPTV plan tier includes the full UK terrestrial line-up with regional variants (English, Scottish, Welsh, Northern Irish feeds) and +1 timeshift feeds. No premium UK channels are locked behind a higher tier." },
  { question: "How many sport channels are included?", answer: "5,500+ live UK sport channels covering domestic top-flight football, cup competitions, European fixtures, rugby union and league, cricket, motorsport, tennis, golf, boxing and horse racing. All UK rights holder coverage — no add-ons required." },
  { question: "Are international IPTV channels included?", answer: "Yes. 17,000+ international channels across 40+ language packs — Arabic, Turkish, Polish, Urdu, Bengali, Punjabi, Portuguese, Spanish, French, German, Italian, Greek, Russian and more. Included on every plan tier at no extra cost." },
  { question: "Do all IPTV channels include catch-up TV?", answer: "Full 7-day catch-up is available on every UK terrestrial channel where the broadcaster provides catch-up rights, plus most premium channels. EPG (programme guide) with UK GMT/BST times is included on every channel." },
];

const related: RelatedLink[] = [
  { href: "/best-iptv-provider-uk", label: "Best IPTV Provider UK 2026 — Ranked & Compared", blurb: "The UK IPTV provider ranking that goes with this channel list." },
  { href: "/4k-iptv-uk", label: "4K IPTV UK", blurb: "UHD streaming and bandwidth requirements for stable playback." },
  { href: "/iptv-buffering-fix", label: "IPTV buffering fix", blurb: "Diagnostic flow when channels freeze mid-stream." },
  { href: "/is-iptv-legal-uk", label: "Is IPTV Legal in the UK?", blurb: "The 2026 UK legal framework explained." },
];

export default function IPTVChannelsPage() {
  return (
    <SubPageShell
      slug="/iptv-channels"
      eyebrow="IPTV Channels UK"
      h1="IPTV Channels — 37,000 UK & International Feeds Included"
      intro="The complete IPTV channels line-up on every Fast IPTV subscription in 2026: 37,000 live channels covering UK sport, entertainment, news, kids, cinema and 40+ international language packs. Included on every plan from £3.75/month."
      bylineName="Fast IPTV Editorial"
      bylineRole="UK IPTV channels team"
      updatedISO="2026-07-26"
      readMinutes={7}
      sections={sections}
      faqs={faqs}
      related={related}
      description={metadata.description as string}
    />
  );
}
