export const SITE_NAME = "IPTV Providers UK";
export const SITE_URL = "https://iptv-providers-uk.com";
export const LOGO_PATH = "/iptv-providers-uk.webp";
export const CONTACT_EMAIL = "contact@buy-iptv-uk.com";

export const EXTRA_CONNECTION_PRICE = 7.25;
export const EXTRA_CONNECTIONS_MAX = 4;

export const CHECKOUT_COPY = {
  extraConnectionsLabel: "Extra Connections",
  extraConnectionsHelp:
    "Add additional simultaneous streams beyond the 5 included with every plan.",
  extraConnectionsPriceLabel: "+ £7.25 per extra connection",
  buttonLabelPrefix: "Confirm Order On WhatsApp",
  buttonSubtitle: "Opens WhatsApp · UK support replies during peak hours",
  footerNote: "Order details sent privately via WhatsApp",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Why Us", href: "/#features" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
] as const;

export const LEGAL_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Editorial Policy", href: "/editorial-policy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "DMCA Policy", href: "/dmca" },
  { label: "Refund Policy", href: "/refund" },
] as const;

export const STATS = [
  { value: "37,000+", label: "Live Channels" },
  { value: "198,000+", label: "Films & Series" },
  { value: "60s", label: "Activation" },
  { value: "30 Days", label: "Money-Back" },
] as const;

export const FEATURES = [
  {
    title: "37,000+ Live Channels Across Every UK Category",
    description:
      "Full UK terrestrial, premium entertainment, sport, news, kids, and 17,000+ international feeds across 40+ languages. One subscription, every category — no gated tiers or extra channel packs.",
    icon: "Tv" as const,
  },
  {
    title: "Premium 4K UHD — The Quality Bar For Top IPTV Providers",
    description:
      "When the broadcaster transmits 4K, subscribers receive 4K. The adaptive bitrate engine scales the picture only when broadband dips, never because the plan restricts it.",
    icon: "Monitor" as const,
  },
  {
    title: "Strong UK Servers — IPTV Providers With Real Infrastructure",
    description:
      "Every stream originates from infrastructure on British soil. Lower latency for weekend fixture kick-offs, EPG times locked to GMT and regional news that matches each postcode.",
    icon: "Zap" as const,
  },
  {
    title: "60-Second Activation — IPTV Providers That Deliver Instantly",
    description:
      "Credentials arrive by email before the checkout tab closes. No manual review, no activation queue — seconds, not hours, end-to-end.",
    icon: "Clock" as const,
  },
  {
    title: "Optional Secure Proxy Add-On — From £4.75/Term",
    description:
      "An optional Secure Proxy add-on encrypts your stream traffic and reduces ISP-side filtering. Priced from £4.75 per term at checkout — tiered by plan length.",
    icon: "Shield" as const,
  },
  {
    title: "Budget Plans From The Best IPTV Providers — From £4.99/Month",
    description:
      "Full access to 37,000 channels and 4K streaming from £4.99/month on the 12-month term. Traditional broadcast bundles start at £75+ — the value gap is immediate.",
    icon: "Film" as const,
  },
  {
    title: "Five Screens On One Subscription",
    description:
      "Every plan includes 5 simultaneous streams on one account — split across Firestick, Smart TV, phone, laptop in any combination. Add Extra Connections at checkout for £7.25 per additional stream.",
    icon: "LayoutGrid" as const,
  },
  {
    title: "24/7 UK Support — IPTV Providers That Actually Respond",
    description:
      "A named British team answers live chat, WhatsApp and email around the clock. Average first reply sits under four minutes, published weekly for anyone to verify.",
    icon: "Smartphone" as const,
  },
] as const;

export const PRICING_PLANS = [
  {
    id: "bronze",
    tier: "Bronze",
    name: "3 Months",
    subtitle: "Three months to sample the top-rated IPTV providers UK",
    price: 25.99,
    originalPrice: 49.99,
    perMonth: 8.66,
    period: "3 months",
    devices: 5,
    badge: "Quick Start",
    discount: "-48%",
    accentColor: "violet",
    features: [
      "37,000+ live channels with full UK coverage",
      "198,000+ films, series and documentaries on demand",
      "Full EPG with 7-day catch-up TV",
      "HD, Full HD and 4K UHD streaming",
      "Five simultaneous screens on one account",
      "24/7 dedicated UK support",
      "Secure Proxy add-on available (from £4.75/term)",
      "30-day money-back guarantee",
      "Instant activation in under 60 seconds",
    ],
    popular: false,
    savings: null,
    proxyPrice: 4.75,
  },
  {
    id: "silver",
    tier: "Silver",
    name: "6 Months",
    subtitle: "Six months of uninterrupted streaming from reliable IPTV providers",
    price: 39.99,
    originalPrice: 69.99,
    perMonth: 6.66,
    period: "6 months",
    devices: 5,
    badge: "Half-Year Value",
    discount: "-43%",
    accentColor: "violet",
    features: [
      "37,000+ live channels with full UK coverage",
      "198,000+ films, series and documentaries on demand",
      "Full EPG with 7-day catch-up TV",
      "HD, Full HD and 4K UHD streaming",
      "Five simultaneous screens on one account",
      "24/7 dedicated UK support",
      "Secure Proxy add-on available (from £4.75/term)",
      "30-day money-back guarantee",
      "Instant activation in under 60 seconds",
    ],
    popular: false,
    savings: "Save 43%",
    proxyPrice: 9.5,
  },
  {
    id: "gold",
    tier: "Gold",
    name: "12 Months",
    subtitle: "A full year from the best IPTV providers UK at £4.99/month",
    price: 59.99,
    originalPrice: 99.99,
    perMonth: 4.99,
    period: "year",
    devices: 5,
    badge: "Most Popular — Save 40%",
    discount: "-40%",
    accentColor: "blue",
    features: [
      "37,000+ live channels with full UK coverage",
      "198,000+ films, series and documentaries on demand",
      "Full EPG with 7-day catch-up TV",
      "HD, Full HD and 4K UHD streaming",
      "Five simultaneous screens on one account",
      "24/7 dedicated UK support",
      "Secure Proxy add-on available (from £4.75/term)",
      "30-day money-back guarantee",
      "Instant activation in under 60 seconds",
    ],
    popular: true,
    savings: "Save 40%",
    proxyPrice: 19,
  },
  {
    id: "diamond",
    tier: "Diamond",
    name: "24 Months",
    subtitle: "Two years locked at the cheapest rate any IPTV providers UK offer",
    price: 89.99,
    originalPrice: 199.99,
    perMonth: 3.75,
    period: "2 years",
    devices: 5,
    badge: "Elite — Save 55%",
    discount: "-55%",
    accentColor: "violet",
    features: [
      "37,000+ live channels with full UK coverage",
      "198,000+ films, series and documentaries on demand",
      "Full EPG with 7-day catch-up TV",
      "HD, Full HD and 4K UHD streaming",
      "Five simultaneous screens on one account",
      "24/7 dedicated UK support",
      "Secure Proxy add-on available (from £4.75/term)",
      "30-day money-back guarantee",
      "Instant activation in under 60 seconds",
    ],
    popular: false,
    savings: "Save 55%",
    proxyPrice: 38,
  },
] as const;

export const DEVICES = [
  { name: "Amazon Fire Stick", icon: "Flame" as const },
  { name: "Smart TV", icon: "Tv" as const },
  { name: "Android / iOS", icon: "Smartphone" as const },
  { name: "Windows / Mac", icon: "Monitor" as const },
  { name: "IPTV Box / MAG", icon: "Box" as const },
  { name: "Apple TV", icon: "Airplay" as const },
] as const;

export const FAQ_ITEMS = [
  {
    question: "What should a subscriber look for in IPTV providers UK?",
    answer:
      "Check five things: published uptime data, verified reviews on Trustpilot or Reddit, GBP pricing with no hidden fees, UK-based support with response time guarantees and a refund policy that returns funds same-day. This service passes all five.",
  },
  {
    question: "How many channels do the best IPTV providers offer?",
    answer:
      "Top-tier providers carry 15,000 to 37,000 live channels. The library here sits at 37,000 across UK terrestrial, premium entertainment, sport, news, kids and 40+ international language packs — plus 198,000 on-demand films and series.",
  },
  {
    question: "Which devices do IPTV providers UK support?",
    answer:
      "Good IPTV providers support Firestick, smart TVs, Android TV, Apple TV, phones, tablets, MAG boxes and PCs. This service covers all of them on a single login with up to five concurrent streams.",
  },
  {
    question: "Do top IPTV providers include 4K?",
    answer:
      "The best ones do. Every plan here includes 4K UHD on channels that broadcast in the format. The stream adapts to HD on older devices or slower connections automatically.",
  },
  {
    question: "How fast should IPTV activation be?",
    answer:
      "Under sixty seconds is the gold standard. Credentials arrive by email the moment payment clears. Providers that take hours or days for activation are a warning sign.",
  },
  {
    question: "Does the Secure Proxy add-on slow down streaming?",
    answer:
      "No — the Secure Proxy add-on is engineered for IPTV streaming specifically, unlike general-purpose VPNs that route all traffic through a distant server. The proxy operates close to the streaming infrastructure and reduces ISP-side filtering rather than re-routing every packet. Available at checkout from £4.75 per term (tiered: £4.75 / £9.50 / £19 / £38 for 3 / 6 / 12 / 24 months). Customers without the add-on can use the service normally — the Secure Proxy is optional and recommended only for households that have experienced ISP-side filtering on previous IPTV services.",
  },
  {
    question: "What is a fair price for an IPTV subscription?",
    answer:
      "Expect to pay between five and fifteen pounds per month for a reputable service. Plans here start at £4.99/month on the 12-month term with full access to 37,000 channels and 4K UHD. Traditional broadcast bundles at £75+ typically deliver fewer channels for more money.",
  },
  {
    question: "Can an IPTV provider be tested before committing?",
    answer:
      "Instead of a limited free trial, every paid plan ships with a full 30-day money-back guarantee. Every feature can be tested risk-free and a full refund is available if the service falls short.",
  },
  {
    question: "How can IPTV reviews be verified as genuine?",
    answer:
      "Look for verified reviews on Trustpilot or Reddit where purchases are confirmed. Avoid providers that only show unverified customer quotes on their own site, use stock-photo avatars, or publish ratings without a link to the underlying review platform.",
  },
  {
    question: "What internet speed is needed for IPTV UK?",
    answer:
      "25 Mbps delivers clean 4K. 10 Mbps handles HD. Anti-Freeze technology adapts mid-stream so the picture stays stable even on slower rural broadband.",
  },
  {
    question: "How does a subscriber contact this IPTV provider?",
    answer:
      "Live chat, WhatsApp or email — answered by the UK team 24/7. Average first response sits under four minutes, measured and published each week.",
  },
] as const;

export const CHANNEL_CATEGORIES = [
  {
    name: "UK Sport — Top Fixtures From The Leading IPTV Providers",
    count: "5,500+",
    icon: "Trophy" as const,
    channels:
      "Every major UK sports network streams live in HD or 4K, with full coverage of domestic leagues, cup fixtures, European competitions, international tournaments and premium racing — all the big matches and marquee events under one subscription, with nothing held back behind extra add-ons.",
    linkHref: "/blog/premier-league-streaming-guide",
    linkLabel: "UK football streaming guide",
  },
  {
    name: "British Entertainment — The IPTV Providers UK Standard",
    count: "500+",
    icon: "Tv" as const,
    channels:
      "Every flagship British broadcaster is in the lineup, covering drama, comedy, reality, lifestyle and primetime entertainment. Regional variants and +1 timeshift feeds are bundled as standard — the full UK viewing experience on one subscription.",
    linkHref: "/#pricing",
    linkLabel: "Compare IPTV providers UK plans",
  },
  {
    name: "On-Demand Cinema — 198,000 Titles From Top IPTV Providers",
    count: "198,000+",
    icon: "Film" as const,
    channels:
      "A vast on-demand library covering the latest blockbusters, award winners, original series and international premieres, backed by a back-catalogue that stretches decades. New releases land the day they hit digital — ready to stream whenever it suits.",
    linkHref: "/blog/best-iptv-uk-guide-2026",
    linkLabel: "How to choose the best IPTV providers UK",
  },
  {
    name: "Kids & Family — Safe Coverage From Trusted IPTV Providers",
    count: "800+",
    icon: "Baby" as const,
    channels:
      "A full range of trusted kids and family channels streams in HD, covering every age group from toddlers to teens with cartoons, shows and family films. A four-digit PIN locks any channel from the parental control tab for safe household viewing.",
    linkHref: "/#features",
    linkLabel: "See parental safety features",
  },
  {
    name: "Rolling News — Live Streams From Verified IPTV Providers UK",
    count: "1,200+",
    icon: "Newspaper" as const,
    channels:
      "Every major UK and international news network runs live in a dedicated news category, spanning rolling coverage, business, world affairs and regional bulletins. Every story, as it breaks, under a single feed — 24/7, from any perspective.",
    linkHref: "/#faq",
    linkLabel: "Read the IPTV providers FAQ",
  },
  {
    name: "International — IPTV Providers With 40+ Language Packs",
    count: "17,000+",
    icon: "Globe" as const,
    channels:
      "More than 40 international language packs stream in full HD, covering every major region and community served across the UK. Country filters sit in the sidebar — switch languages in one tap, all bundled at no extra fee.",
    linkHref: "/#faq",
    linkLabel: "See channel category FAQ",
  },
] as const;

export const BLOG_POSTS = [
  {
    slug: "best-iptv-uk-guide-2026",
    title: "Best IPTV Providers UK 2026 — How To Choose The Right Service",
    excerpt:
      "Finding the best IPTV providers in the UK means looking beyond flashy promises. This guide breaks down the seven criteria that matter most for British viewers — from channel quality and reliability to support and genuine value.",
    date: "2026-04-01",
    readTime: "12 min read",
    category: "Guide",
  },
  {
    slug: "how-to-setup-iptv-firestick",
    title: "How To Set Up IPTV Providers On Amazon Fire Stick",
    excerpt:
      "A complete, beginner-friendly guide to installing and configuring top IPTV providers on an Amazon Fire Stick. Streaming ready in under ten minutes using the step-by-step instructions below.",
    date: "2026-03-20",
    readTime: "6 min read",
    category: "Tutorial",
  },
  {
    slug: "premier-league-streaming-guide",
    title: "Watch UK Football Fixtures — IPTV Providers Streaming Guide",
    excerpt:
      "Domestic UK football fixtures, plus Championship, European leagues and more — all in HD and 4K through the top UK IPTV providers.",
    date: "2026-03-10",
    readTime: "5 min read",
    category: "Sports",
  },
] as const;

export const AUTHOR_BYLINE = {
  name: "IPTV Providers UK Editorial",
  role: "Editorial Team",
  description: "Editorial coverage of the UK IPTV provider landscape since 2023.",
  publishedDate: "2023-11-01",
  updatedDate: "2026-07-11",
} as const;
