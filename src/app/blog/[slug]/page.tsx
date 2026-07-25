import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BLOG_POSTS, SITE_URL, SITE_NAME } from "@/lib/constants";
import BlogPostContent from "./BlogPostContent";

const blogContent: Record<string, { content: string[] }> = {
  "best-iptv-uk-guide-2026": {
    content: [
      "Finding the best IPTV service in the UK means looking beyond flashy promises and inflated channel counts. With dozens of IPTV providers competing for your subscription, the challenge is not finding an option — it is finding one that actually delivers reliable streaming, genuine UK channel coverage, responsive customer support, and fair pricing without hidden catches.",
      "## What Makes an IPTV Service \"The Best\" in the UK?\n\nThe best IPTV service for a UK household is not necessarily the one with the most channels. It is the one that consistently delivers the channels you actually watch, in the quality you expect, on the devices you own, with support available when something goes wrong — all at a price that represents genuine value compared to traditional TV.",
      "## The 7 Criteria UK Viewers Should Evaluate\n\n- **UK Channel Lineup Quality** — comprehensive coverage of all major UK broadcasters and premium pay-TV networks\n- **Streaming Stability** — anti-buffering technology and consistent performance during peak hours like Saturday 3pm football kickoffs\n- **Streaming Quality** — HD as baseline, Full HD (1080p) for premium content, 4K where supported\n- **EPG & Catch-Up** — full electronic programme guide with 7-day catch-up functionality\n- **Device Compatibility** — works on Firestick, Smart TVs, phones, tablets, MAG boxes and computers\n- **Customer Support** — accessible, responsive, competent support available via multiple channels\n- **Pricing & True Value** — fair monthly cost with genuine money-back guarantee",
      "## Red Flags to Watch Out For\n\nNot every IPTV service delivers what it promises. Watch for unverifiable channel count claims, no money-back guarantee, WhatsApp-only communication, fake reviews with stock photo avatars, missing legal pages, and pressure tactics like fake countdown timers or \"only 3 subscriptions left\" messaging.",
      "## IPTV vs Traditional TV in the UK\n\nTraditional premium TV packages cost between £40 and £120 per month. A comparable IPTV subscription typically costs £5–£15 per month — a savings of £300–£1,200 per year. IPTV provides much broader channel selection with no long-term contracts, and modern providers deliver quality comparable to satellite when you have stable broadband of at least 10 Mbps.",
      "## Our Recommendation\n\nFast IPTV was built specifically to address the problems UK viewers encounter with other IPTV providers. With 37,000+ channels (comprehensive UK broadcaster coverage), HD/4K quality with adaptive streaming, full EPG and 7-day catch-up, support for every major device platform, and plans from £4.17/month with a 30-day money-back guarantee, it measures up against every criterion that matters.",
    ],
  },
  "how-to-setup-iptv-firestick": {
    content: [
      "Setting up IPTV on your Amazon Fire Stick is surprisingly simple and takes just a few minutes. This step-by-step guide walks you through the entire process from start to finish.",
      "## What You'll Need\n\n- An Amazon Fire Stick (any generation)\n- A stable internet connection (10 Mbps minimum for HD, 25 Mbps for 4K)\n- An active IPTV subscription with login credentials\n- 5-10 minutes of your time",
      "## Step 1: Enable Apps from Unknown Sources\n\nGo to Settings → My Fire TV → Developer Options → Install unknown apps. Find the Downloader app and toggle it ON. This allows you to install IPTV apps that aren't available on the Amazon App Store.",
      "## Step 2: Install the Downloader App\n\nFrom the Fire Stick home screen, search for \"Downloader\" and install it. This free app lets you download IPTV applications directly to your Fire Stick.",
      "## Step 3: Download Your IPTV App\n\nOpen the Downloader app and enter the URL provided by your IPTV service for the app download. Popular IPTV apps include IPTV Smarters Pro, TiviMate, and Smart IPTV. Fast IPTV recommends IPTV Smarters Pro for the best experience.",
      "## Step 4: Enter Your Credentials\n\nOpen the installed IPTV app and enter the login details provided by your IPTV service — typically a server URL, username, and password. Fast IPTV sends these by email within minutes of purchase.",
      "## Step 5: Start Watching!\n\nThat's it! Your channels should now load, and you can start browsing the EPG, explore the VOD library, and enjoy live TV. If you need any help during setup, our support team is standing by to walk you through it.",
    ],
  },
  "iptv-vs-traditional-tv": {
    content: [
      "Many UK viewers considering IPTV are currently paying for traditional pay-TV packages. Here is a realistic, honest comparison to help you decide whether switching makes sense for your household.",
      "## Cost Comparison\n\nA traditional pay-TV package with sports and cinema typically costs £60–£100+ per month, often with an 18-month minimum contract. A comparable IPTV subscription with Fast IPTV starts from £25.99 for 3 months (or as low as £3.33/month on the 24-month plan) — with no contract and cancel-anytime flexibility. That represents annual savings of £600–£1,200.",
      "## Channel Selection\n\nTraditional pay-TV offers curated channel bundles where you pay for channels you may never watch. IPTV provides a much broader selection — 37,000+ channels including all the same premium channels alongside thousands of additional options from UK and international broadcasters. Nothing is locked behind a higher tier.",
      "## Flexibility & Contracts\n\nTraditional pay-TV typically requires a 12–18 month contract with early termination fees. Fast IPTV offers monthly subscriptions with no long-term commitment. You can cancel anytime, upgrade or downgrade your plan, and you're protected by a 30-day money-back guarantee.",
      "## Streaming Quality\n\nTraditional pay-TV delivers excellent picture quality via satellite. Fast IPTV delivers HD, Full HD, and 4K quality via your broadband connection. With a stable connection of 10+ Mbps, the quality is genuinely comparable. Our adaptive streaming technology adjusts to your internet speed to prevent buffering.",
      "## The Verdict\n\nIPTV is worth switching to if you choose a reliable provider with genuine UK channel coverage and you have a stable broadband connection of at least 10 Mbps. The cost savings alone make it compelling — but only if the service quality meets your expectations, which is why a money-back guarantee is so important.",
    ],
  },
  "live-uk-sports-streaming-guide": {
    content: [
      "For football fans in the UK, watching every top-tier UK football match live is the dream. Traditional TV packages split matches across multiple broadcasters — costing well over £100/month combined. IPTV offers a much better way.",
      "## The Problem with Traditional Sports Packages\n\nTop-tier UK football rights are split across multiple pay-TV broadcasters and a major streaming service. To watch every televised match, you'd need all three — potentially £77+ per month just for football, before you add any entertainment or cinema channels.",
      "## How IPTV Changes the Game\n\nWith Fast IPTV, you get access to ALL sports channels — every main event channel, top-tier football channels, additional football channels, motorsport channels, and all relevant backup channels for concurrent matches — all included in one subscription from £4.17/month.",
      "## Beyond Domestic Football\n\nFast IPTV's 5,500+ sports channels cover:\n\n- **European football competitions** on dedicated continental channels\n- **European top-flight football** on international sports channels\n- **Top-tier rugby and cricket** on traditional UK sports broadcasters\n- **Motorsport** on dedicated motorsport channels\n- **Tennis grand slams** on traditional UK broadcasters\n- **Boxing, combat sports, golf** and much more",
      "## Reliability During Peak Matches\n\nA reliable IPTV service for top-tier UK football coverage must maintain stability during peak matchday demand. Saturday 3pm kickoffs are the ultimate reliability test. Fast IPTV uses sports-optimised infrastructure designed to keep streams stable during peak match windows.",
      "## Getting Started\n\nFast IPTV includes full top-tier UK football coverage across all relevant channels, with plans starting from £4.17/month and a 30-day money-back guarantee. Test the sports channels during a Saturday afternoon kickoff — if it performs well during peak sport, it will perform well at any time.",
    ],
  },
};

type PageParams = { slug: string };

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<PageParams> }): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      url: `${SITE_URL}/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<PageParams> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  const content = blogContent[slug];

  if (!post || !content) {
    notFound();
  }

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== slug);
  const LAST_UPDATED = "2026-05-19";

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: LAST_UPDATED,
    author: { "@type": "Organization", name: SITE_NAME },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/fast-iptv.webp`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
  };

  return (
    <>
      <BlogPostContent
        post={post}
        content={content.content}
        relatedPosts={relatedPosts}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
    </>
  );
}
