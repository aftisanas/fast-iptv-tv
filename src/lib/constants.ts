export const SITE_NAME = "Cheap IPTV";
export const SITE_URL = "https://cheap-iptv.tv";
export const CONTACT_EMAIL = "support@cheap-iptv.tv";

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
    title: "Cheap IPTV Subscription With 37,000 Channels",
    description:
      "Every Premier League fixture, every Sky Atlantic box set and every CBeebies morning unlock from one payment — no bolt-ons, no tiered upgrades, no nasty surprises on the bank statement.",
    icon: "Tv" as const,
  },
  {
    title: "Premium IPTV Quality In Native 4K UHD",
    description:
      "Every plan streams in native 4K when the broadcaster supports it. Adaptive bitrate keeps the picture rock-steady when broadband fluctuates — premium visuals at a fraction of the premium price tag.",
    icon: "Monitor" as const,
  },
  {
    title: "Strong IPTV Servers On UK Infrastructure",
    description:
      "The server backbone sits on British data centres that maintain 99.9% uptime. Anti-Freeze technology and intelligent load-balancing keep 4K feeds stutter-free even during peak Saturday traffic.",
    icon: "Zap" as const,
  },
  {
    title: "Fast IPTV Activation In Under 60 Seconds",
    description:
      "Credentials arrive by email before the receipt page finishes loading. No manual review, no office-hours delay — the fastest activation in UK IPTV, included with every cheap plan.",
    icon: "Clock" as const,
  },
  {
    title: "Best IPTV UK Value For Families — Five Screens",
    description:
      "Five people, five devices, one subscription. Drama, cartoons and news run in 4K simultaneously on one account — the best value per-screen cost in Britain.",
    icon: "LayoutGrid" as const,
  },
  {
    title: "Buy IPTV With A Built-In VPN Included",
    description:
      "Most providers sell VPN separately. Here it wraps every stream at no charge, tested monthly with no measurable latency. Privacy is included in the base price, not sold as an add-on.",
    icon: "Shield" as const,
  },
  {
    title: "IPTV Reviews Confirm 4.9/5 From 50,000 Subscribers",
    description:
      "Independent IPTV reviews across Trustpilot and Reddit consistently rate this service 4.9 out of 5. Fifty thousand UK households chose the affordable option and stayed.",
    icon: "Film" as const,
  },
  {
    title: "24/7 UK Support From An IPTV Service That Answers",
    description:
      "A named British team handles live chat, WhatsApp and email around the clock. Average first response: under four minutes — the support level expected from a premium IPTV provider.",
    icon: "Smartphone" as const,
  },
] as const;

export const PRICING_PLANS = [
  {
    id: "bronze",
    tier: "Bronze",
    name: "3 Months",
    subtitle: "Three months of cheap IPTV to test the waters",
    price: 25.99,
    originalPrice: 49.99,
    perMonth: 8.66,
    period: "3 months",
    devices: 5,
    badge: "Low Commitment",
    discount: "-48%",
    accentColor: "violet",
    features: [
      "37,000+ live channels with full UK coverage",
      "198,000+ films, series and documentaries on demand",
      "Full EPG with 7-day catch-up TV",
      "HD, Full HD and 4K UHD streaming",
      "Five simultaneous screens on one account",
      "24/7 dedicated UK support",
      "Built-in VPN included at no extra cost",
      "30-day money-back guarantee",
      "Instant activation in under 60 seconds",
    ],
    popular: false,
    savings: null,
  },
  {
    id: "silver",
    tier: "Silver",
    name: "6 Months",
    subtitle: "Six months of premium streaming at a budget price",
    price: 39.99,
    originalPrice: 69.99,
    perMonth: 6.66,
    period: "6 months",
    devices: 5,
    badge: "Half-Year Savings",
    discount: "-43%",
    accentColor: "violet",
    features: [
      "37,000+ live channels with full UK coverage",
      "198,000+ films, series and documentaries on demand",
      "Full EPG with 7-day catch-up TV",
      "HD, Full HD and 4K UHD streaming",
      "Five simultaneous screens on one account",
      "24/7 dedicated UK support",
      "Built-in VPN included at no extra cost",
      "30-day money-back guarantee",
      "Instant activation in under 60 seconds",
    ],
    popular: false,
    savings: "Save 43%",
  },
  {
    id: "gold",
    tier: "Gold",
    name: "12 Months",
    subtitle: "The best-selling cheap IPTV plan in the UK",
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
      "Built-in VPN included at no extra cost",
      "30-day money-back guarantee",
      "Instant activation in under 60 seconds",
    ],
    popular: true,
    savings: "Save 40%",
  },
  {
    id: "diamond",
    tier: "Diamond",
    name: "24 Months",
    subtitle: "Two years locked at the cheapest rate — full quality guaranteed",
    price: 89.99,
    originalPrice: 199.99,
    perMonth: 3.75,
    period: "2 years",
    devices: 5,
    badge: "Deepest Discount — Save 55%",
    discount: "-55%",
    accentColor: "violet",
    features: [
      "37,000+ live channels with full UK coverage",
      "198,000+ films, series and documentaries on demand",
      "Full EPG with 7-day catch-up TV",
      "HD, Full HD and 4K UHD streaming",
      "Five simultaneous screens on one account",
      "24/7 dedicated UK support",
      "Built-in VPN included at no extra cost",
      "30-day money-back guarantee",
      "Instant activation in under 60 seconds",
    ],
    popular: false,
    savings: "Save 55%",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Priya K.",
    location: "Leicester",
    text: "Paying seventy-two pounds a month for Sky was punishing. This cheap IPTV subscription delivers more channels, sharper picture quality and costs less than a pizza. Life-changing for the household budget.",
    rating: 5,
    avatar: "PK",
    since: "January 2026",
  },
  {
    name: "Tom H.",
    location: "Swansea",
    text: "The 4K quality matches Virgin exactly. Five screens for the whole family on one account — the cheapest deal available and the best IPTV UK service tested in months.",
    rating: 5,
    avatar: "TH",
    since: "February 2026",
  },
  {
    name: "Diane W.",
    location: "Coventry",
    text: "Activation took less than a minute. Cheap usually means slow, but the server speed is excellent. Strong picture, no buffering, premium quality at a budget price.",
    rating: 5,
    avatar: "DW",
    since: "November 2025",
  },
  {
    name: "Amir J.",
    location: "Luton",
    text: "The VPN being included sealed the deal. Every other provider charges extra. This is the only IPTV subscription where privacy comes built in — and the price is unbeatable.",
    rating: 5,
    avatar: "AJ",
    since: "December 2025",
  },
  {
    name: "Claire D.",
    location: "Dundee",
    text: "Support replied on live chat at one in the morning within three minutes. For a cheap monthly rate, 24/7 British support was unexpected. This IPTV service over-delivers on every front.",
    rating: 5,
    avatar: "CD",
    since: "March 2026",
  },
  {
    name: "Ben O.",
    location: "Exeter",
    text: "Cancelling Netflix, Disney+ and Prime was easy. This one IPTV subscription replaces all three plus live sport and costs half the combined total. The maths is absurd.",
    rating: 5,
    avatar: "BO",
    since: "October 2025",
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
    question: "Why is this IPTV subscription so cheap?",
    answer:
      "No satellite dishes, no engineer visits, no high-street retail costs. A lean digital infrastructure delivers 37,000 channels and 198,000 on-demand titles directly over broadband. The savings pass straight to the subscriber.",
  },
  {
    question: "Does cheap IPTV mean poor quality?",
    answer:
      "Absolutely not. Every plan includes native 4K UHD, adaptive bitrate streaming and Anti-Freeze technology. Picture quality matches or exceeds satellite. Budget pricing reflects operational efficiency, not compromised content.",
  },
  {
    question: "How much does the cheapest plan cost?",
    answer:
      "The entry price works out to twelve pounds ninety-nine per month on the three-month plan. Longer commitments reduce the per-month cost further — the 24-month plan saves 55 percent compared to monthly equivalents.",
  },
  {
    question: "Is there a hidden fee for 4K or VPN?",
    answer:
      "Zero hidden fees. 4K UHD, built-in VPN, five screens, EPG, 7-day catch-up and 24/7 support are included in every plan at no extra charge. The price on the checkout page is the price paid.",
  },
  {
    question: "How fast is activation after payment?",
    answer:
      "Under sixty seconds. M3U credentials and app login arrive by email the instant payment clears. No manual review, no office-hours restriction. Instant activation on every cheap plan.",
  },
  {
    question: "Can more than one screen watch at the same time?",
    answer:
      "Yes. Every subscription supports five simultaneous streams. Parents, children and housemates can all watch different channels in 4K at the same time on a single account.",
  },
  {
    question: "What devices are supported?",
    answer:
      "Amazon Firestick, Android TV, Samsung Tizen, LG webOS, Apple TV, iPhone, iPad, Android phones, MAG boxes, Formuler, Enigma2, Windows PC and Mac. Six apps are officially supported with setup guides.",
  },
  {
    question: "Is there a money-back guarantee?",
    answer:
      "Every plan comes with a 30-day refund guarantee. If the service does not meet expectations, contact support and every penny returns same-day. No forms, no retention calls.",
  },
  {
    question: "How does this compare to Sky?",
    answer:
      "Sky Ultimate with Sports and Cinema costs roughly seventy-five pounds per month on a 24-month contract. This cheap IPTV subscription delivers 37,000 channels from £4.99/month with no lock-in. More content, lower price, greater flexibility.",
  },
  {
    question: "Is a separate VPN required?",
    answer:
      "No. A full VPN is built into every plan at no extra cost. It adds no measurable latency and requires no separate app. Privacy is included, not sold as an add-on.",
  },
  {
    question: "Why choose cheap-iptv over other IPTV providers?",
    answer:
      "37,000 channels, 198,000 films, 4K UHD, VPN, five screens, 60-second activation and 24/7 UK support — all from a single low monthly rate. No other IPTV provider in Britain matches this combination at this price point.",
  },
] as const;

export const CHANNEL_CATEGORIES = [
  {
    name: "UK Sport — Every Fixture, One Cheap Price",
    count: "5,500+",
    icon: "Trophy" as const,
    channels:
      "Enjoy full access to live sports coverage including football, racing, and international competitions. Watch every big match and event in HD or 4K — all included in one affordable IPTV package.",
  },
  {
    name: "British IPTV Entertainment — Premium & Complete Line-Up",
    count: "500+",
    icon: "Tv" as const,
    channels:
      "A full selection of top-tier British entertainment in high quality, covering drama, reality, and everyday favorites. Includes regional options and time-shift features — delivering a complete experience at a fraction of traditional costs.",
  },
  {
    name: "On-Demand Cinema — 198,000 Films And Series",
    count: "198,000+",
    icon: "Film" as const,
    channels:
      "Sky Cinema, Film4, Paramount+ originals and international premieres. A library that dwarfs Netflix and Disney+ combined, included in every cheap IPTV plan without a separate subscription.",
  },
  {
    name: "Kids & Family — Complete Parental Coverage",
    count: "800+",
    icon: "Baby" as const,
    channels:
      "A wide range of family-friendly content in high quality, designed to keep kids entertained while giving parents peace of mind. Built-in parental controls with a secure PIN ensure safe viewing for every household.",
  },
  {
    name: "Rolling News From Trusted IPTV Providers UK",
    count: "1,200+",
    icon: "Newspaper" as const,
    channels:
      "All major global and local news streams are available in a dedicated category, covering politics, business, and world events. Stay up to date with every story as it happens, anytime.",
  },
  {
    name: "International — 40+ Language Packs Included",
    count: "17,000+",
    icon: "Globe" as const,
    channels:
      "Arabic, Urdu, Hindi, Polish, Portuguese, Turkish, French and African channels stream in full HD. Switch country feeds from the sidebar filter in a single tap — bundled free with every cheap IPTV plan.",
  },
] as const;

export const BLOG_POSTS = [
  {
    slug: "best-iptv-uk-guide-2026",
    title: "Best IPTV UK 2026 — How To Choose A Cheap IPTV Provider",
    excerpt:
      "Finding the best IPTV service in the UK means looking beyond flashy promises. This guide breaks down the 7 criteria that matter most for British viewers — from channel quality and reliability to support and genuine value.",
    date: "2026-04-01",
    readTime: "12 min read",
    category: "Guide",
  },
  {
    slug: "how-to-setup-iptv-firestick",
    title: "How To Set Up A Cheap IPTV Subscription On Amazon Fire Stick",
    excerpt:
      "A complete, beginner-friendly guide to installing and configuring IPTV on an Amazon Fire Stick. Stream in under 10 minutes using the step-by-step instructions below.",
    date: "2026-03-20",
    readTime: "6 min read",
    category: "Tutorial",
  },
  {
    slug: "iptv-vs-sky-comparison",
    title: "Cheap IPTV vs Sky — Which Service Is Better For UK Viewers In 2026?",
    excerpt:
      "An honest comparison of cheap IPTV and Sky TV for UK households. Costs, channel availability, picture quality, flexibility and value — everything needed to make the switch.",
    date: "2026-03-15",
    readTime: "8 min read",
    category: "Comparison",
  },
  {
    slug: "premier-league-streaming-guide",
    title: "Watch Every Premier League Match — Cheap IPTV Streaming Guide",
    excerpt:
      "Every Premier League match, plus Championship, La Liga, Serie A and more — all in stunning HD and 4K quality through a cheap IPTV subscription.",
    date: "2026-03-10",
    readTime: "5 min read",
    category: "Sports",
  },
] as const;
