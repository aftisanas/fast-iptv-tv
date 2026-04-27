export const SITE_NAME = "IPTV Subscription UK 4K";
export const SITE_URL = "https://iptv-subscription-uk-4k.com";
export const CONTACT_EMAIL = "support@iptv-subscription-uk-4k.com";

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

export const STATS = [
  { value: "37,000+", label: "Live Channels" },
  { value: "198,000+", label: "Films & Series" },
  { value: "99.9%", label: "Uptime" },
  { value: "50,000+", label: "UK Subscribers" },
] as const;

export const FEATURES = [
  {
    title: "4K UHD IPTV UK Streaming",
    description:
      "Watch Premier League, films and news in crisp 4K UHD. Every channel adapts to your speed, so the picture never drops.",
    icon: "Monitor" as const,
  },
  {
    title: "37,000+ Channels From Top IPTV Providers",
    description:
      "Pull in sport, drama, news and kids from the best IPTV providers in one app. New channels land each week at no extra cost.",
    icon: "Tv" as const,
  },
  {
    title: "Anti-Freeze Fast IPTV Technology",
    description:
      "Our fast IPTV network uses smart load balancing across UK servers. The stream stays smooth during peak matches and primetime.",
    icon: "Zap" as const,
  },
  {
    title: "Built-In VPN For Strong IPTV Privacy",
    description:
      "A strong IPTV VPN runs inside the app and hides your IP. Your viewing stays private on any Wi-Fi or mobile network.",
    icon: "Shield" as const,
  },
  {
    title: "7-Day Catch-Up On British IPTV Channels",
    description:
      "Missed last night? Scroll back seven days on British IPTV favourites. Watch at your pace on any screen.",
    icon: "Clock" as const,
  },
  {
    title: "Electronic Programme Guide (EPG)",
    description:
      "A clean EPG shows what is on now and next. Tap once to record, remind or jump to live play.",
    icon: "LayoutGrid" as const,
  },
  {
    title: "Up To 5 Screens On One IPTV Service",
    description:
      "Share one IPTV service across five devices at home. Everyone watches their own show in HD or 4K at the same time.",
    icon: "Smartphone" as const,
  },
  {
    title: "Premium IPTV Uptime You Can Trust",
    description:
      "Our premium IPTV grid holds 99.9% uptime, checked every minute. If a server wobbles, your stream routes in seconds.",
    icon: "Film" as const,
  },
] as const;

export const PRICING_PLANS = [
  {
    id: "bronze",
    tier: "Starter Pack",
    name: "3 Months",
    subtitle: "Try it risk-free for a full season",
    price: 38.97,
    originalPrice: 59.99,
    perMonth: 12.99,
    period: "3 months",
    devices: 5,
    badge: "Starter Pack",
    discount: "-35%",
    accentColor: "violet",
    features: [
      "37,000+ live channels with full UK coverage",
      "198,000+ films, series and documentaries on demand",
      "Full EPG with 7-day catch-up TV",
      "HD, Full HD and native 4K UHD streaming",
      "Five simultaneous screens on one account",
      "24/7 dedicated UK support",
      "Built-in VPN included at no extra cost",
      "30-day money-back guarantee",
      "Instant activation by email",
    ],
    popular: false,
    savings: null,
  },
  {
    id: "silver",
    tier: "Fan Favourite",
    name: "6 Months",
    subtitle: "Half-year of 4K football and films",
    price: 65.94,
    originalPrice: 119.99,
    perMonth: 10.99,
    period: "6 months",
    devices: 5,
    badge: "Fan Favourite",
    discount: "-45%",
    accentColor: "violet",
    features: [
      "37,000+ live channels with full UK coverage",
      "198,000+ films, series and documentaries on demand",
      "Full EPG with 7-day catch-up TV",
      "HD, Full HD and native 4K UHD streaming",
      "Five simultaneous screens on one account",
      "24/7 dedicated UK support",
      "Built-in VPN included at no extra cost",
      "30-day money-back guarantee",
      "Instant activation by email",
    ],
    popular: false,
    savings: "Save 45%",
  },
  {
    id: "gold",
    tier: "Annual",
    name: "12 Months",
    subtitle: "Best value for full-year UK sport and TV",
    price: 93.48,
    originalPrice: 155.88,
    perMonth: 7.79,
    period: "year",
    devices: 5,
    badge: "Most Popular — Save 40%",
    discount: "-40%",
    accentColor: "blue",
    features: [
      "37,000+ live channels with full UK coverage",
      "198,000+ films, series and documentaries on demand",
      "Full EPG with 7-day catch-up TV",
      "HD, Full HD and native 4K UHD streaming",
      "Five simultaneous screens on one account",
      "24/7 dedicated UK support",
      "Built-in VPN included at no extra cost",
      "30-day money-back guarantee",
      "Instant activation by email",
    ],
    popular: true,
    savings: "Save 40%",
  },
  {
    id: "diamond",
    tier: "Best Value",
    name: "24 Months",
    subtitle: "Two years of premium IPTV, locked low",
    price: 140.4,
    originalPrice: 311.76,
    perMonth: 5.85,
    period: "2 years",
    devices: 5,
    badge: "Best Value — Save 55%",
    discount: "-55%",
    accentColor: "violet",
    features: [
      "37,000+ live channels with full UK coverage",
      "198,000+ films, series and documentaries on demand",
      "Full EPG with 7-day catch-up TV",
      "HD, Full HD and native 4K UHD streaming",
      "Five simultaneous screens on one account",
      "24/7 dedicated UK support",
      "Built-in VPN included at no extra cost",
      "30-day money-back guarantee",
      "Instant activation by email",
    ],
    popular: false,
    savings: "Save 55%",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "James R.",
    location: "London",
    text: "I moved from Sky and kept every channel I watch. The 4K picture on Premier League nights is sharper than my old box.",
    rating: 5,
    avatar: "JR",
    since: "January 2026",
  },
  {
    name: "Sophie M.",
    location: "Manchester",
    text: "Best IPTV UK service I have tried. Setup on my Firestick took two minutes and it has not buffered once.",
    rating: 5,
    avatar: "SM",
    since: "February 2026",
  },
  {
    name: "David P.",
    location: "Birmingham",
    text: "Cheap IPTV subscription but the quality is premium. Support sorted my TiviMate login at midnight — top marks.",
    rating: 5,
    avatar: "DP",
    since: "November 2025",
  },
  {
    name: "Aisha K.",
    location: "Leeds",
    text: "The British IPTV line-up is complete. BBC, ITV, Sky Sports and BT Sport all live in crisp HD on my Samsung TV.",
    rating: 5,
    avatar: "AK",
    since: "December 2025",
  },
  {
    name: "Tom H.",
    location: "Glasgow",
    text: "A strong IPTV signal with a VPN baked in. My Virgin line is slow but the stream still holds 4K.",
    rating: 5,
    avatar: "TH",
    since: "March 2026",
  },
  {
    name: "Rachel W.",
    location: "Bristol",
    text: "I watch five screens at once on match day. Fast IPTV with zero freeze even when the whole house is live.",
    rating: 5,
    avatar: "RW",
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
    question: "What is an IPTV subscription?",
    answer:
      "An IPTV subscription is a service that streams live TV, films and sport over your internet line. You watch on a phone, TV box or smart TV without a satellite dish.",
  },
  {
    question: "How many devices can I use at once?",
    answer:
      "Every IPTV subscription plan covers up to five screens at the same time. Use any mix of TV, phone, tablet or PC.",
  },
  {
    question: "What internet speed do I need for 4K IPTV?",
    answer:
      "You need 25 Mbps for smooth 4K and 10 Mbps for HD. Our fast IPTV servers also adapt the bitrate if your speed dips.",
  },
  {
    question: "What UK channels are included?",
    answer:
      "You get every British IPTV favourite: BBC, ITV, Channel 4, Sky, BT Sport, TNT, Eurosport, CBBC, Disney and more. Full list sits on the Guide page.",
  },
  {
    question: "Do I need a VPN for IPTV in the UK?",
    answer:
      "A VPN is a smart add-on for privacy. Our premium IPTV app ships with a built-in VPN at no extra cost.",
  },
  {
    question: "Can I cancel my IPTV subscription?",
    answer:
      "Yes, you can cancel inside 30 days and we refund in full. No lock-in, no fees for cancelling.",
  },
  {
    question: "How do I buy IPTV from you?",
    answer:
      "Pick a plan, pay by card or PayPal and check your inbox. Your IPTV login lands in under a minute and you can buy IPTV with full confidence.",
  },
  {
    question: "Is your IPTV subscription good for sports?",
    answer:
      "Our best IPTV UK sport pack covers Sky Sports, TNT, Premier Sports and every Premier League match. Many fixtures stream in native 4K.",
  },
  {
    question: "Do you offer a cheap IPTV subscription?",
    answer:
      "Yes, our cheap IPTV subscription starts from £12.99 for Month. The 12 and 24-month plans drop that rate even lower.",
  },
  {
    question: "What makes this IPTV service different?",
    answer:
      "Other IPTV service brands oversell and then freeze on match night. Our UK server grid and anti-freeze tech hold a clean 4K stream.",
  },
] as const;

export const CHANNEL_CATEGORIES = [
  {
    name: "premium IPTV Entertainment Channels",
    count: "500+",
    icon: "Tv" as const,
    channels:
      "Enjoy a complete range of British entertainment in HD, from popular shows and series to documentaries and lifestyle content. Regional variations and +1 timeshift options are included for full viewing flexibility.",
  },
  {
    name: "IPTV Sports & Premier League",
    count: "5,500+",
    icon: "Trophy" as const,
    channels:
      "Stream live sports across all major competitions and events, including football, motorsports, combat sports, and more. Every key match and tournament is available in high quality within one package.",
  },
  {
    name: "best iptv Movies & Cinema In 4K",
    count: "198,000+",
    icon: "Film" as const,
    channels:
      "Open Sky Cinema, Film4 and global premium movie feeds. Browse 198,000 films in the VOD library, updated each day.",
  },
  {
    name: "iptv UK Kids & Family Channels",
    count: "800+",
    icon: "Baby" as const,
    channels:
      "A wide selection of family-friendly content keeps children entertained at all times. Secure parental controls with PIN protection ensure safe and controlled viewing in just a few taps.",
  },
  {
    name: "premium iptv News & Documentary",
    count: "1,200+",
    icon: "Newspaper" as const,
    channels:
      "Stay informed with continuous coverage of global and local events, alongside a rich library of documentary content. Explore history, nature, and real-world stories anytime in high quality.",
  },
  {
    name: "strong iptv International & Ethnic Channels",
    count: "17,000+",
    icon: "Globe" as const,
    channels:
      "Enjoy Arabic, Asian, Turkish, Polish and African channels in full HD. Switch feeds by country from the sidebar in one tap.",
  },
] as const;

export const BLOG_POSTS = [
  {
    slug: "best-iptv-uk-guide-2026",
    title: "Best IPTV UK 2026 — How To Choose A Trusted IPTV Provider",
    excerpt:
      "Finding the best IPTV service in the UK means looking beyond flashy promises. This guide breaks down the 7 criteria that matter most for British viewers — from channel quality and reliability to support and genuine value.",
    date: "2026-04-01",
    readTime: "12 min read",
    category: "Guide",
  },
  {
    slug: "how-to-setup-iptv-firestick",
    title: "How To Set Up An IPTV Subscription On Amazon Fire Stick",
    excerpt:
      "A complete, beginner-friendly guide to installing and configuring an IPTV subscription on an Amazon Fire Stick. Stream 37,000 UK channels in 4K in under 10 minutes using the step-by-step instructions below.",
    date: "2026-03-20",
    readTime: "6 min read",
    category: "Tutorial",
  },
  {
    slug: "iptv-vs-sky-comparison",
    title: "IPTV Subscription vs Sky — Which Is Better For UK Viewers In 2026?",
    excerpt:
      "An honest comparison of an IPTV subscription and Sky TV for UK households. Costs, channel availability, picture quality, flexibility and value — everything needed to make the switch.",
    date: "2026-03-15",
    readTime: "8 min read",
    category: "Comparison",
  },
  {
    slug: "premier-league-streaming-guide",
    title: "Watch Every Premier League Match — IPTV Subscription Streaming Guide",
    excerpt:
      "Every Premier League match, plus Championship, La Liga, Serie A and more — all in stunning HD and 4K quality through a single IPTV subscription.",
    date: "2026-03-10",
    readTime: "5 min read",
    category: "Sports",
  },
] as const;
