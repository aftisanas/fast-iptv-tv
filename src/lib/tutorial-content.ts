// Tutorial page content data.
// Edit text here without touching the component layer.
// NOTE: Only NEW device walkthroughs (X-OTT panel flow, Formuler, Roku, BuzzTV, MAG)
// and the troubleshooting section live here. The original 5 guides
// (Android TV/Phone, Firestick, iOS, PC) remain inline in TutorialsContent.tsx
// because they carry richer interactive UI (video embeds, custom notes).

export interface TutorialStep {
  text: string;
  substeps?: string[];
}

export interface TutorialDevice {
  id: string;
  emoji: string;
  name: string;
  subtitle: string;
  primaryApp: string;
  fallbackApps?: string;
  steps: TutorialStep[];
  notes?: string[];
  notSupported?: boolean;
}

export interface QuickFixItem {
  title: string;
  description: string;
}

export interface TroubleshootingItem {
  id: string;
  title: string;
  intro?: string;
  steps?: string[];
}

export const SERVER_URL = "http://line.trxdnscloud.ru";

export const TUTORIAL_DEVICES_EXTRA: TutorialDevice[] = [
  {
    id: "samsung-tv",
    emoji: "📺",
    name: "Smart TV — Samsung",
    subtitle: "Tizen OS",
    primaryApp: "X-OTT (Samsung App Store)",
    fallbackApps: "IBO Player, Hot Player",
    steps: [
      { text: "Open the Samsung TV App Store → search X-OTT → install → open." },
      { text: "The app will display a MAC Address on screen — write it down." },
      { text: "Send your MAC Address to our WhatsApp support team at +44 7878 757831 — we'll activate your line within minutes." },
      { text: "Wait for our confirmation message that activation is complete." },
      { text: "Restart the X-OTT app on your TV — your channel list will load." },
    ],
    notes: [
      "Fallback: if X-OTT isn't available on your model, install IBO Player from the Samsung App Store, note the MAC Address and Device Key shown, and send both to our WhatsApp support team — we'll register the device and load your line. You'll then enter your Xtream Codes details (Username and Password from your activation email) inside the app.",
    ],
  },
  {
    id: "lg-tv",
    emoji: "📺",
    name: "Smart TV — LG",
    subtitle: "webOS",
    primaryApp: "X-OTT (LG Content Store)",
    fallbackApps: "IBO Player, Set IPTV",
    steps: [
      { text: "From your LG home, open the LG Content Store → search X-OTT → install → open." },
      { text: "Note the MAC Address on screen." },
      { text: "Send your MAC Address to our WhatsApp support team at +44 7878 757831 — we'll activate your line within minutes." },
      { text: "Wait for our confirmation message that activation is complete." },
      { text: "Restart X-OTT on the TV — your channel list will load." },
    ],
    notes: [
      "If X-OTT isn't in the LG Content Store on your model: install IBO Player instead, note the MAC Address and Device Key, and send both to our WhatsApp support team — we'll register the device for you.",
      "LG-specific tip — if login keeps failing, power-cycle properly: hold the physical TV power button for 10 seconds OR unplug the TV for 30 seconds. Unplug your router for 30 seconds, plug back in, and wait 2 minutes before testing.",
    ],
  },
  {
    id: "hisense-other-tv",
    emoji: "📺",
    name: "Smart TV — Hisense & Others",
    subtitle: "VIDAA OS, generic Smart TV",
    primaryApp: "X-OTT (TV App Store)",
    fallbackApps: "IBO Player, Hot Player",
    steps: [
      { text: "Open your TV's App Store → search X-OTT → install → open." },
      { text: "Note the MAC Address shown." },
      { text: "Send your MAC Address to our WhatsApp support team at +44 7878 757831 — we'll activate your line within minutes." },
      { text: "Wait for our confirmation message that activation is complete." },
      { text: "Restart the X-OTT app on your TV — your channel list will load." },
    ],
    notes: [
      "Same flow as Samsung/LG. If X-OTT isn't available, use IBO Player and send the MAC Address and Device Key to our WhatsApp support team — we'll register your device.",
    ],
  },
  {
    id: "formuler",
    emoji: "🎛️",
    name: "Formuler / Dreamlink",
    subtitle: "Formuler Z, Dreamlink boxes",
    primaryApp: "MyTVOnline 2 or 3 (Formuler) / DOL2 (Dreamlink) — pre-installed",
    steps: [
      { text: "Open MyTVOnline 2 (or MyTVOnline 3 / DOL2 for Dreamlink)." },
      { text: "Go to Menu → Connections → Add Portal." },
      { text: "Portal Name: Fast IPTV" },
      { text: "Toggle 'Login Required' to ON." },
      {
        text: "Enter:",
        substeps: [
          "Portal URL: http://line.trxdnscloud.ru",
          "Username and Password from your activation email",
        ],
      },
      { text: "Tap Connect to load the channel list." },
    ],
    notes: [
      "Use Xtream Codes API (username/password). Do not use MAC-address connection on Formuler — we use API authentication exclusively.",
    ],
  },
  {
    id: "roku",
    emoji: "🟣",
    name: "Roku",
    subtitle: "Roku TV, Streaming Stick",
    primaryApp: "Hot Player (Roku Channel Store)",
    steps: [
      { text: "From your Roku home → Streaming Channels → search Hot Player → Add Channel." },
      { text: "Open Hot Player and note the MAC Address shown." },
      { text: "Send your MAC Address to our WhatsApp support team at +44 7878 757831 — we'll register your device and load your line." },
      { text: "Wait for our confirmation message that registration is complete." },
      { text: "Refresh Hot Player on Roku — channels load." },
    ],
  },
  {
    id: "buzztv",
    emoji: "📡",
    name: "BuzzTV Box",
    subtitle: "All BuzzTV models",
    primaryApp: "Built-in BuzzTV interface",
    steps: [
      { text: "From your BuzzTV home screen → Server Settings." },
      { text: "Select XC API Login (do not use MAC server)." },
      { text: "Portal Name: Fast IPTV" },
      {
        text: "Enter:",
        substeps: [
          "Portal URL: http://line.trxdnscloud.ru",
          "Username and Password from your activation email",
        ],
      },
      { text: "Press Connect to authenticate." },
    ],
  },
  {
    id: "mag-box",
    emoji: "📦",
    name: "MAG Box",
    subtitle: "Not Supported",
    primaryApp: "—",
    notSupported: true,
    steps: [
      {
        text: "We currently don't support legacy MAG boxes (MAC-address-only registration). For the best Fast IPTV experience, we recommend upgrading to:",
        substeps: [
          "Amazon Fire TV Stick 4K Max (most popular, easy setup)",
          "NVIDIA Shield TV (premium Android TV)",
          "Any modern Android TV box or Smart TV released in the last 4 years",
        ],
      },
      { text: "These give you full 4K UHD streaming and access to the full range of compatible apps." },
    ],
  },
];

export const QUICK_FIX_CHECKLIST: QuickFixItem[] = [
  {
    title: "Internet speed",
    description: "At least 25 Mbps for HD, 50 Mbps for 4K UHD. Test at fast.com.",
  },
  {
    title: "Reboot devices",
    description:
      "Unplug your TV/streaming box AND your router for 60 seconds each, then power back on.",
  },
  {
    title: "Third-party VPN check",
    description:
      "If you have an external VPN running, turn it off and test again. Fast IPTV's Secure Proxy add-on is the recommended option — it won't conflict.",
  },
  {
    title: "Server URL format",
    description:
      "Your Server URL is http://line.trxdnscloud.ru exactly (base host only, NOT a long M3U link with get.php?...). Use the Xtream Codes API login screen, not the M3U URL screen.",
  },
];

export const TROUBLESHOOTING_ITEMS: TroubleshootingItem[] = [
  {
    id: "invalid-details-smart-tv",
    title: "'Invalid details' or 'Login Failed' on Smart TV",
    steps: [
      "Make sure you're entering credentials on the Xtream Codes API screen, not the M3U URL screen.",
      "Check for accidental spaces at the start or end of any field.",
      "LG users: hard reset before retrying — hold the physical TV power button for 10 seconds, then reboot your router (unplug 30s).",
    ],
  },
  {
    id: "playlist-not-found",
    title: "'Playlist not found' error in Televizo or similar apps",
    intro:
      "This almost always means you pasted the full M3U URL (the long one containing get.php?username=...) directly into the Server field.",
    steps: [
      "Clear the Server field, paste only the base host: http://line.trxdnscloud.ru",
      "Put your Username and Password in their own separate fields below.",
    ],
  },
  {
    id: "app-crashing",
    title: "App keeps crashing or playlist takes forever to load",
    steps: [
      "Open the IPTV app → playlist settings → tap Update Playlist.",
      "If that fails: delete the playlist entirely, re-add it with your original details.",
      "Turn off any third-party VPN during the refresh.",
      "Restart the device once before testing.",
    ],
  },
  {
    id: "vod-not-loading",
    title: "VOD (Movies & Series) not loading, but Live TV works",
    intro: "VOD content needs more bandwidth than Live TV.",
    steps: [
      "Wait 2–5 minutes on the first open of any movie or series — the app builds a local cache.",
      "Hard close the IPTV app from device settings, then reopen.",
      "Confirm your internet is hitting at least 25 Mbps.",
      "Force an Update Playlist to re-index the VOD library.",
    ],
  },
  {
    id: "implayer-stopped",
    title: "iMPlayer (Firestick): suddenly stopped working",
    steps: [
      "iMPlayer → Settings → Playlists → select your playlist → tap Refresh Playlist.",
      "If that fails: Firestick Settings → Applications → Manage Installed Applications → iMPlayer → tap Clear Cache (do NOT tap Clear Data — that wipes your login).",
      "Reopen and test.",
    ],
  },
  {
    id: "televizo-parse-fail",
    title: "Televizo: refuses to parse playlist (but it works on other apps)",
    steps: [
      "Delete the playlist profile inside Televizo entirely — don't just edit it.",
      "Device Settings → Apps → Televizo → Clear Cache → force close the app.",
      "Make sure Televizo is updated to the latest version in the Play Store.",
      "Re-open and add your Xtream Codes details from scratch.",
      "If still failing: switch to IPTV Smarters Pro — it handles the server data structure more reliably.",
    ],
  },
  {
    id: "samsung-crash",
    title: "Samsung TV: streams crash even though playlist loads (Nanomid / Hot IPTV)",
    intro:
      "Samsung's Tizen OS sometimes struggles with specific apps. If Nanomid or Hot IPTV crash on individual channels:",
    steps: [
      "Install IBO Player from the Samsung App Store.",
      "Note the MAC Address and Device Key shown.",
      "Send the MAC Address and Device Key to our WhatsApp support team at +44 7878 757831 — we'll register your device.",
      "Once we confirm registration, open IBO Player and enter your Xtream Codes (Username and Password from your activation email) inside the app.",
      "Restart IBO Player on the TV — channels load.",
    ],
  },
  {
    id: "channels-blocked",
    title: "Channels look blocked or streams fail despite working playlist",
    intro: "This typically means your ISP is filtering streaming traffic.",
    steps: [
      "Recommended: enable Fast IPTV's Secure Proxy add-on (available at checkout) — it reduces ISP-side stream interference and won't conflict with your apps.",
      "Alternative: connect a premium third-party VPN to a different server location.",
      "Also try testing standard (non-4K) channels first — if those work but 4K HEVC streams don't, your device hardware may be struggling with the higher decoder load.",
    ],
  },
  {
    id: "stopped-after-48h",
    title: "Subscription worked for 24–48 hours, then suddenly stopped",
    intro:
      "UK ISPs sometimes flag new high-bandwidth streaming endpoints after a short window — this is a network-layer block, not an account issue.",
    steps: [
      "Recommended: enable Fast IPTV Secure Proxy to bypass the ISP filter.",
      "Alternative: change your router's DNS to Cloudflare (1.1.1.1 and 1.0.0.1) to bypass DNS-level filtering.",
    ],
  },
];

export const SUPPORT_WHATSAPP_NUMBER = "+44 7878 757831";
export const SUPPORT_WHATSAPP_HREF = "https://wa.me/447878757831";
