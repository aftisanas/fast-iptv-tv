export const SITE_NAME = "Fast IPTV";
export const SITE_URL = "https://fast-iptv.tv";
export const CONTACT_EMAIL = "contact@buy-iptv-uk.com";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Why Us", href: "/#features" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Reviews", href: "/#testimonials" },
  { label: "FAQ", href: "/#faq" },
] as const;

export const LEGAL_LINKS = [
  { label: "Terms of Service", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "DMCA Policy", href: "/dmca" },
  { label: "Refund Policy", href: "/refund" },
] as const;

export const GUIDES_LINKS = [
  { label: "4K IPTV UK", href: "/4k-iptv-uk" },
  { label: "IPTV for Firestick", href: "/iptv-for-firestick" },
  { label: "IPTV Buffering Fix", href: "/iptv-buffering-fix" },
  { label: "IPTV Smarters Pro Setup", href: "/iptv-smarters-pro-setup" },
  { label: "Is IPTV Legal in the UK?", href: "/is-iptv-legal-uk" },
] as const;

export const STATS = [
  { value: "37,000+", label: "Live Channels" },
  { value: "198,000+", label: "Films & Series" },
  { value: "99.9%", label: "Uptime" },
  { value: "50,000+", label: "UK Subscribers" },
] as const;

export const FEATURES = [
  {
    title: "Fast IPTV Activation — Credentials In Under 60 Seconds",
    description:
      "Pay and your login details arrive by email before the checkout page finishes loading. No human review, no activation queue. The fastest delivery window in the UK IPTV market — verified by independent timing tests.",
    icon: "Zap" as const,
  },
  {
    title: "Strong IPTV Servers — Zero-Buffer 4K On UK Infrastructure",
    description:
      "Every stream originates from high-capacity data centres on British soil. Low-latency routing means live football goals land on your screen in near real-time. The strong server backbone that keeps 4K running without a single stutter.",
    icon: "Monitor" as const,
  },
  {
    title: "37,000 Channels — The Widest Fast IPTV UK Library",
    description:
      "Access one of the largest IPTV selections available, with tens of thousands of options covering every category. Smooth navigation and ultra-fast switching ensure a seamless viewing experience across all supported devices.",
    icon: "Tv" as const,
  },
  {
    title: "Premium IPTV Quality — Native 4K UHD On Every Plan",
    description:
      "If the broadcaster sends 4K, you receive 4K. Adaptive bitrate holds the picture steady when broadband dips, but never throttles because the plan restricts it. Premium viewing without premium lag.",
    icon: "Film" as const,
  },
  {
    title: "Best IPTV UK For Live Sport — Near-Zero Delay",
    description:
      "Sport is where speed matters most. Our feeds run with sub-three-second delay on football, rugby, cricket and motorsport. Hear the roar as it happens, not thirty seconds after your neighbour texts the score.",
    icon: "LayoutGrid" as const,
  },
  {
    title: "High-Speed IPTV Subscription — Full Access From £4.17/Month",
    description:
      "Full access to 37,000 channels, 4K and the secure proxy option from £4.17/month on the annual plan. The fastest IPTV service in Britain, engineered for speed first. Compare that to traditional pay-TV at £75+ for fewer channels and slower EPG navigation.",
    icon: "Clock" as const,
  },
  {
    title: "Buy IPTV UK With A Secure Proxy Option — Fast And Private",
    description:
      "An optional secure proxy layer wraps every stream at zero extra cost. The encryption adds no measurable latency — tested and published monthly. Privacy at full speed, not as a paid add-on.",
    icon: "Shield" as const,
  },
  {
    title: "24/7 UK Support — The IPTV Service That Replies In Minutes",
    description:
      "A named British team answers live chat and email around the clock. Average first response: under four minutes. When something goes wrong, speed of resolution matters as much as speed of streaming.",
    icon: "Smartphone" as const,
  },
] as const;

export const PRICING_PLANS = [
  {
    id: "bronze",
    tier: "Quick Start",
    name: "3 Months",
    subtitle: "Three months of the fastest IPTV in the UK",
    price: 25.99,
    originalPrice: 39.99,
    perMonth: 8.66,
    period: "3 months",
    devices: 5,
    badge: "Quick Start",
    discount: "-35%",
    accentColor: "violet",
    features: [
      "37,000+ live channels with full UK coverage",
      "198,000+ films, series and documentaries on demand",
      "Full EPG with 7-day catch-up TV",
      "HD, Full HD and native 4K UHD streaming",
      "Extra connection options available as add-ons",
      "24/7 dedicated UK support",
      "Secure proxy option included at no extra cost",
      "30-day money-back guarantee",
      "60-second activation by email",
    ],
    popular: false,
    savings: null,
  },
  {
    id: "silver",
    tier: "Half-Year Value",
    name: "6 Months",
    subtitle: "Six months of uninterrupted high-speed streaming",
    price: 35.99,
    originalPrice: 59.99,
    perMonth: 6.0,
    period: "6 months",
    devices: 5,
    badge: "Half-Year Value",
    discount: "-40%",
    accentColor: "violet",
    features: [
      "37,000+ live channels with full UK coverage",
      "198,000+ films, series and documentaries on demand",
      "Full EPG with 7-day catch-up TV",
      "HD, Full HD and native 4K UHD streaming",
      "Extra connection options available as add-ons",
      "24/7 dedicated UK support",
      "Secure proxy option included at no extra cost",
      "30-day money-back guarantee",
      "60-second activation by email",
    ],
    popular: false,
    savings: "Save 40%",
  },
  {
    id: "gold",
    tier: "Annual",
    name: "12 Months",
    subtitle: "A full year of the best fast IPTV UK value",
    price: 49.99,
    originalPrice: 89.99,
    perMonth: 4.17,
    period: "year",
    devices: 5,
    badge: "Most Popular — Save 44%",
    discount: "-44%",
    accentColor: "blue",
    features: [
      "37,000+ live channels with full UK coverage",
      "198,000+ films, series and documentaries on demand",
      "Full EPG with 7-day catch-up TV",
      "HD, Full HD and native 4K UHD streaming",
      "Extra connection options available as add-ons",
      "24/7 dedicated UK support",
      "Secure proxy option included at no extra cost",
      "30-day money-back guarantee",
      "60-second activation by email",
    ],
    popular: true,
    savings: "Save 44%",
  },
  {
    id: "diamond",
    tier: "Elite",
    name: "24 Months",
    subtitle: "Two years locked at the lowest rate — full speed guaranteed",
    price: 79.99,
    originalPrice: 159.99,
    perMonth: 3.33,
    period: "2 years",
    devices: 5,
    badge: "Elite — Save 50%",
    discount: "-50%",
    accentColor: "violet",
    features: [
      "37,000+ live channels with full UK coverage",
      "198,000+ films, series and documentaries on demand",
      "Full EPG with 7-day catch-up TV",
      "HD, Full HD and native 4K UHD streaming",
      "Extra connection options available as add-ons",
      "24/7 dedicated UK support",
      "Secure proxy option included at no extra cost",
      "30-day money-back guarantee",
      "60-second activation by email",
    ],
    popular: false,
    savings: "Save 50%",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Jake R.",
    location: "London",
    text: "Paid at 7:58pm, email arrived at 7:58pm, first channel playing by 8:00pm. That is not an exaggeration. The fastest activation I have ever seen from an IPTV provider.",
    rating: 5,
    avatar: "JR",
    since: "January 2026",
  },
  {
    name: "Laura F.",
    location: "Oxford",
    text: "The live football feed is practically real-time. My neighbour on traditional pay-TV texted me about a goal and I had already seen it. That sub-three-second delay is genuine.",
    rating: 5,
    avatar: "LF",
    since: "February 2026",
  },
  {
    name: "Ryan M.",
    location: "Plymouth",
    text: "Channel switching is instant on TiviMate. My last service took four seconds per flip. Here it is under one. Makes browsing 37,000 channels actually enjoyable.",
    rating: 5,
    avatar: "RM",
    since: "November 2025",
  },
  {
    name: "Sarah T.",
    location: "Norwich",
    text: "Multiple connections running 4K at the same time and not a single buffer. The servers behind this are clearly built for speed. The most stable high-speed subscription I have found that does not lag.",
    rating: 5,
    avatar: "ST",
    since: "December 2025",
  },
  {
    name: "Marcus B.",
    location: "Sheffield",
    text: "Support replied on live chat in two minutes at midnight. The speed is not just in the streaming — the entire operation runs like clockwork. Best IPTV UK experience by far.",
    rating: 5,
    avatar: "MB",
    since: "March 2026",
  },
  {
    name: "Halima A.",
    location: "Bradford",
    text: "I wanted Arabic and British channels on one subscription. Setup was absurdly quick and the stream quality is better than my old satellite. Secure proxy included sealed the deal.",
    rating: 5,
    avatar: "HA",
    since: "October 2025",
  },
] as const;

export const DEVICES = [
  { name: "Amazon Fire Stick", icon: "Flame" as const },
  { name: "Smart TV", icon: "Tv" as const },
  { name: "Android / iOS", icon: "Smartphone" as const },
  { name: "Windows / Mac", icon: "Monitor" as const },
  { name: "MAG / Formuler", icon: "Box" as const },
  { name: "Apple TV", icon: "Airplay" as const },
] as const;

export const FAQ_ITEMS = [
  {
    question: "What makes this a fast IPTV service?",
    answer:
      "Three measurable speed benchmarks: 60-second activation after payment, sub-one-second channel switching on supported apps and sub-three-second live sport delay. Every metric is tested and published.",
  },
  {
    question: "How fast is activation after I buy IPTV?",
    answer:
      "Under 60 seconds. Your credentials arrive by email before the Stripe or PayPal confirmation page finishes loading.",
  },
  {
    question: "Is this the fastest IPTV in the UK?",
    answer:
      "Yes — independent timing tests place our activation, channel-switching and live-sport delay among the lowest of any UK-based IPTV service. Our status page publishes the numbers.",
  },
  {
    question: "Does fast IPTV sacrifice quality for speed?",
    answer:
      "No. Native 4K UHD is included on every plan with adaptive bitrate that protects the picture when broadband dips. Speed and quality run on the same infrastructure.",
  },
  {
    question: "Which devices give the fastest IPTV experience?",
    answer:
      "Amazon Fire TV Stick 4K Max, Apple TV 4K, Formuler Z11 Pro and modern Samsung/LG Smart TVs deliver the lowest channel-switch times. iOS, Android, Windows and macOS apps run at full speed on any 25 Mbps connection.",
  },
  {
    question: "Does the secure proxy option slow down fast IPTV streaming?",
    answer:
      "No. Our secure proxy adds no measurable latency. Channel switching, sport delay and 4K bitrate remain identical with the proxy on or off — tested monthly.",
  },
  {
    question: "What internet speed do I need?",
    answer:
      "25 Mbps for stable 4K UHD on a single device, 50 Mbps for multiple concurrent 4K streams. HD streams run comfortably on 10 Mbps.",
  },
  {
    question: "Can I stream on more than one device at the same time?",
    answer:
      "Yes — extra connection options are available as add-ons on every plan. Contact us before purchase or upgrade in your dashboard after activation.",
  },
  {
    question: "Is there a contract or cancellation fee?",
    answer:
      "No contract, no cancellation fee. Every plan is a one-time payment with a 30-day money-back guarantee — refunded same-day.",
  },
  {
    question: "How fast does support respond?",
    answer:
      "Average first response under four minutes on live chat and email, 24 hours a day, from a named British team.",
  },
  {
    question: "How does fast-iptv.tv compare to traditional pay-TV?",
    answer:
      "We deliver more channels (37,000+ vs a typical pay-TV line-up of ~270), native 4K on every plan and no equipment, dish or engineer visit — at a fraction of the monthly price of a flagship premium pay-TV bundle.",
  },
] as const;

export const CHANNEL_CATEGORIES = [
  {
    name: "UK Sport — Fast IPTV Feeds With Near-Zero Delay",
    count: "5,500+",
    icon: "Trophy" as const,
    channels:
      "Watch live sports events in high definition with stable, low-latency streams. From major competitions to everyday fixtures, every moment is delivered with speed and clarity for real-time viewing.",
  },
  {
    name: "British Entertainment — Premium IPTV Channel Pack",
    count: "500+",
    icon: "Tv" as const,
    channels:
      "Enjoy a rich collection of British entertainment, including popular series, lifestyle shows, and daily programming. Regional coverage and time-shift features are included for flexible and convenient watching.",
  },
  {
    name: "On-Demand Cinema — 198,000 Titles, Instant Playback",
    count: "198,000+",
    icon: "Film" as const,
    channels:
      "Premium movie channels, mainstream platform originals and international premieres. Titles load in under three seconds on a 25 Mbps connection. The on-demand library that matches the speed of the live feeds.",
  },
  {
    name: "UK & International News On Fast IPTV",
    count: "1,200+",
    icon: "Newspaper" as const,
    channels:
      "Follow global and local news as it happens with continuous coverage and real-time updates. Stay connected to the latest developments with reliable streams available around the clock.",
  },
  {
    name: "Kids & Family Channels On Fast IPTV",
    count: "800+",
    icon: "Baby" as const,
    channels:
      "A dedicated space for children and families, offering entertaining and educational content in a secure environment. Parental controls make it easy to manage access and ensure safe viewing at all times.",
  },
  {
    name: "International — 40+ Languages, Bundled Free",
    count: "17,000+",
    icon: "Globe" as const,
    channels:
      "Arabic, Urdu, Hindi, Polish, Portuguese, Turkish, French and 36 more language packs bundled free. Filter by language or country from the sidebar in a single tap.",
  },
] as const;

export const BLOG_POSTS = [
  {
    slug: "best-iptv-uk-guide-2026",
    title: "Best IPTV UK 2026 — How To Choose A Trusted Fast IPTV Provider",
    excerpt:
      "Finding the best IPTV service in the UK means looking beyond flashy promises. This guide breaks down the 7 criteria that matter most for British viewers — from channel quality and reliability to support and genuine value.",
    date: "2026-04-01",
    readTime: "12 min read",
    category: "Guide",
  },
  {
    slug: "how-to-setup-iptv-firestick",
    title: "How To Set Up Fast IPTV On Amazon Fire Stick — Two-Minute Guide",
    excerpt:
      "A complete, beginner-friendly guide to installing and configuring a fast IPTV subscription on an Amazon Fire Stick. Stream 37,000 UK channels in 4K in under 10 minutes using the step-by-step instructions below.",
    date: "2026-03-20",
    readTime: "6 min read",
    category: "Tutorial",
  },
  {
    slug: "iptv-vs-traditional-tv",
    title: "Fast IPTV vs Traditional UK TV — Which Is Better For Viewers In 2026?",
    excerpt:
      "An honest comparison of fast IPTV and traditional UK TV packages. Speed, channel availability, picture quality, flexibility and value — everything needed to decide.",
    date: "2026-03-15",
    readTime: "8 min read",
    category: "Comparison",
  },
  {
    slug: "live-uk-sports-streaming-guide",
    title: "Watch Live UK Sports — Fast IPTV Streaming Guide",
    excerpt:
      "Top-tier UK football, domestic cup ties, European nights and combat sports — all in stunning HD and 4K quality through a single fast IPTV subscription with sub-3-second delay.",
    date: "2026-03-10",
    readTime: "5 min read",
    category: "Sports",
  },
] as const;
