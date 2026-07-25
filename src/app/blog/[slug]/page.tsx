import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BLOG_POSTS, SITE_URL } from "@/lib/constants";
import BlogPostContent from "./BlogPostContent";

const blogContent: Record<string, { content: string[] }> = {
  "best-iptv-uk-guide-2026": {
    content: [
      "Finding the best IPTV providers in the UK means looking beyond flashy promises and inflated channel counts. With dozens of services competing for every subscription, the real challenge is not finding an option — it is finding one that actually delivers reliable streaming, genuine UK channel coverage, responsive customer support, and fair pricing without hidden catches.",
      "## What Separates The Best IPTV Providers UK From The Rest\n\nThe best option for a British household is not necessarily the one with the most channels. It is the one that consistently delivers the channels viewers actually watch, in the quality expected, on the devices already in the home, with support available when something goes wrong — all at a price that represents genuine value compared to traditional TV.",
      "## The 7 Criteria For Evaluating IPTV Providers UK\n\n- **UK Channel Lineup Quality** — comprehensive coverage of BBC, ITV, Channel 4, Channel 5, Sky, TNT Sports, and all major British networks\n- **Streaming Stability** — anti-buffering technology and consistent performance during peak hours like Saturday 3pm Premier League kickoffs\n- **Streaming Quality** — HD as baseline, Full HD (1080p) for premium content, 4K where supported\n- **EPG & Catch-Up** — full electronic programme guide with 7-day catch-up functionality\n- **Device Compatibility** — works on Firestick, Smart TVs, phones, tablets, MAG boxes and computers\n- **Customer Support** — accessible, responsive, competent support available via multiple channels\n- **Pricing & True Value** — fair monthly cost with a genuine money-back guarantee",
      "## Red Flags When Comparing IPTV Providers UK\n\nNot every service delivers what it promises. Watch for unverifiable channel count claims, no money-back guarantee, WhatsApp-only communication, fake reviews with stock photo avatars, missing legal pages, and pressure tactics like fake countdown timers or \"only 3 subscriptions left\" messaging.",
      "## IPTV Providers Vs Traditional TV In The UK\n\nTraditional premium TV packages cost between £40 and £120 per month. A comparable subscription from a reputable IPTV provider typically costs £5–£15 per month — a saving of £300–£1,200 per year. IPTV offers much broader channel selection with no long-term contracts, and modern providers deliver quality comparable to satellite on a stable broadband connection of at least 10 Mbps.",
      "## The IPTV Providers UK Recommendation\n\nThis service was built specifically to address the problems British viewers encounter elsewhere. With 37,000+ channels (comprehensive UK broadcaster coverage), HD/4K quality with adaptive streaming, full EPG and 7-day catch-up, support for every major device platform, and plans from £4.99/month with a 30-day money-back guarantee, it measures up against every criterion that matters.",
    ],
  },
  "how-to-setup-iptv-firestick": {
    content: [
      "Setting up a subscription from top IPTV providers on an Amazon Fire Stick is surprisingly simple and takes just a few minutes. This step-by-step guide walks through the entire process from start to finish.",
      "## IPTV Providers Setup — Equipment Required\n\n- An Amazon Fire Stick (any generation)\n- A stable internet connection (10 Mbps minimum for HD, 25 Mbps for 4K)\n- An active IPTV subscription with login credentials\n- 5–10 minutes of hands-on time",
      "## Step 1 — Enable Apps From Unknown Sources For IPTV Providers\n\nGo to Settings → My Fire TV → Developer Options → Install unknown apps. Find the Downloader app and toggle it ON. This allows installation of IPTV apps that are not available on the Amazon App Store.",
      "## Step 2 — Install The Downloader App For IPTV Providers\n\nFrom the Fire Stick home screen, search for \"Downloader\" and install it. This free app downloads IPTV applications directly to the Fire Stick.",
      "## Step 3 — Download The App From Selected IPTV Providers\n\nOpen the Downloader app and enter the URL provided by the chosen service for the app download. Popular options include IPTV Smarters Pro, TiviMate, and Smart IPTV. Most UK IPTV providers recommend IPTV Smarters Pro as the default.",
      "## Step 4 — Enter Credentials From Chosen IPTV Providers\n\nOpen the installed app and enter the login details supplied by the service — typically a server URL, username, and password. Reputable IPTV providers send these by both email and WhatsApp within minutes of purchase.",
      "## Step 5 — Start Watching From Top IPTV Providers\n\nThat is it. Channels load, the EPG populates, and the VOD library becomes available. If anything stalls during setup, the support team from the best IPTV providers walks subscribers through it in real time.",
    ],
  },
  "premier-league-streaming-guide": {
    content: [
      "For football fans in the UK, watching every Premier League match live is the dream. Traditional TV packages split matches across multiple broadcasters — costing well over £100/month combined. The right IPTV providers offer a much better way.",
      "## The Problem With Traditional Sports Packages Vs IPTV Providers\n\nPremier League rights are split between Sky Sports, TNT Sports (formerly BT Sport), and Amazon Prime Video. Watching every televised match means paying all three — potentially £77+ per month just for football, before any entertainment or cinema channels enter the equation.",
      "## How The Best IPTV Providers Change The Game\n\nTop UK IPTV providers supply access to every sports channel — Sky Sports Main Event, Sky Sports Premier League, Sky Sports Football, Sky Sports F1, TNT Sports 1–4, BT Sport, and every relevant backup channel for concurrent matches — all included in one subscription from £4.99/month.\n\n",
      "## Beyond The Premier League With UK IPTV Providers\n\nThe 5,500+ sports channels shipped by leading IPTV providers cover:\n\n- **Champions League & Europa League** on TNT Sports\n- **La Liga, Serie A, Bundesliga** on international sports channels\n- **Six Nations Rugby, The Ashes Cricket** on BBC Sport and Sky Sports\n- **Formula 1** on Sky Sports F1\n- **Wimbledon Tennis** on BBC\n- **Boxing, UFC, Golf** and much more",
      "## Reliability During Peak Matches — IPTV Providers Stress Test\n\nThe best IPTV providers for Premier League coverage must maintain stability during peak matchday demand. Saturday 3pm kickoffs are the ultimate reliability test. Dedicated sports-optimised servers and anti-freeze technology keep streams buffer-free even during the biggest fixtures.",
      "## Getting Started With Top IPTV Providers\n\nThis service covers the full Premier League schedule across every relevant channel, with plans starting from £4.99/month and a 30-day money-back guarantee. Test the sports channels during a Saturday afternoon kickoff — the verdict from peak traffic predicts performance at every other time of the week.",
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

  const canonicalUrl = `${SITE_URL}/blog/${post.slug}`;
  const organizationId = `${SITE_URL}/#organization`;

  const blogGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${canonicalUrl}#blogposting`,
        headline: post.title,
        description: post.excerpt,
        datePublished: post.date,
        dateModified: post.date,
        inLanguage: "en-GB",
        author: { "@id": organizationId },
        publisher: { "@id": organizationId },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": canonicalUrl,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${SITE_URL}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: `${SITE_URL}/blog`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: canonicalUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <BlogPostContent post={post} content={content.content} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogGraph) }}
      />
    </>
  );
}
