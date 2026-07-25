// Tutorial page content data — single source of truth for device setup guides.
// Each TUTORIAL_DEVICES entry drives one /tutorials/[slug] route AND its hub card.
// Edit text here without touching the component layer.

export { SUPPORT_WHATSAPP_NUMBER, SUPPORT_WHATSAPP_HREF } from "@/lib/whatsapp";

export interface TutorialStep {
  text: string;
  substeps?: string[];
}

export interface TutorialDevice {
  slug: string;                 // URL segment for /tutorials/[slug]
  displayName: string;          // human-facing device name
  emoji: string;
  subtitle: string;
  metaTitle: string;            // per-page <title>
  metaDescription: string;      // per-page meta description
  intro: string;                // 200-300 word opening block
  compatibility: string;        // 100-150 word compatibility block
  primaryApp: string;
  fallbackApps?: string;
  appImage?: string;            // optional icon of the primary app (e.g. X-OTT)
  videoEmbedUrl?: string;       // optional Vimeo embed
  steps: TutorialStep[];
  notes?: string[];
  troubleshooting: string[];    // 3-5 device-specific issues
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

export const TUTORIAL_DEVICES: TutorialDevice[] = [
  {
    slug: "firestick",
    displayName: "Amazon Fire Stick",
    emoji: "🔥",
    subtitle: "Fire Stick Lite, 4K, 4K Max & Cube",
    metaTitle: "IPTV Setup on Amazon Fire Stick — 3-Step Guide (2026)",
    metaDescription:
      "How to set up IPTV on Amazon Fire Stick in 2026. Three-step install using the Downloader app and IPTV Smarters Pro. Works on Fire Stick Lite, 4K, 4K Max and Cube.",
    intro:
      "Installing an IPTV service on an Amazon Fire Stick takes three steps and works on every Fire Stick generation from 2018 onward. The Fire Stick is one of the most common IPTV devices in UK households — inexpensive, sold everywhere, and running an Android-based Fire OS that accepts sideloaded apps. This guide covers the install method that works across the range (Fire Stick Lite, 4K, 4K Max, and Fire TV Cube), the two-minute activation flow, and the fixes for the peak-hour buffering that catches out most new Fire Stick households. The install uses the Downloader app plus IPTV Smarters Pro — both free, both available on every Fire OS generation from 2018 onward. You'll enter your Xtream Codes credentials (Server URL, Username, Password) from your activation email. The first channel plays within about five minutes of starting the install; the full channel list loads in roughly two minutes on a decent home connection.",
    compatibility:
      "Every Fire Stick generation from the 2018 refresh onward supports this install method: Fire Stick Lite (2020), Fire Stick 4K (2018, 2023), Fire Stick 4K Max (2021, 2023), Fire TV Cube (2019, 2022). Older second-gen Fire Sticks (pre-2018) can still install IPTV Smarters Pro but tend to struggle with 4K UHD content because the chipset can't decode HEVC efficiently. For 4K UHD streams specifically, the 4K Max is the most reliable current-generation option. The Fire Stick Lite is fine for HD but not recommended for 4K households — the lower RAM causes app switching to feel sluggish under load.",
    primaryApp: "IPTV Smarters Pro",
    fallbackApps: "TiviMate",
    videoEmbedUrl: "https://player.vimeo.com/video/901151892?h=a2b2700859",
    steps: [
      { text: "On the Firestick, open Settings → My Fire TV → Developer Options." },
      { text: "Turn on Apps from Unknown Sources (the warning is normal — this is required to sideload the player)." },
      { text: "Back on the home screen, use Find → Search, type Downloader and install it." },
      { text: "In Downloader, enter: https://www.iptvsmarters.com/download and press Go." },
      { text: "Let it download, then choose Install." },
      { text: "Open IPTV Smarters Pro, pick Login with Xtream Codes API and enter the username, password and server URL from your IPTV Providers UK welcome email." },
      { text: "Optional: pin the player to your Fire TV home row for one-tap access." },
    ],
    troubleshooting: [
      "Peak-hour buffering: the Fire Stick's chipset is capable but the wi-fi antenna is short-range. Move the Fire Stick within 3-4 metres of the router or use a wired adapter for reliable 4K UHD at 7-11pm.",
      "Downloader install fails: enable \"Apps from Unknown Sources\" under Settings → My Fire TV → Developer Options before running Downloader. This step is skipped in older setup guides and blocks the whole flow.",
      "Smarters Pro says \"invalid credentials\": check for accidental trailing spaces on Username or Password, and confirm you're entering credentials on the Xtream Codes API screen — not the M3U URL screen. The two look almost identical.",
      "Channel list loads but streams won't play: 90% of the time this is your ISP's peak-hour filter. Either enable the Secure Proxy add-on at checkout, or switch the router DNS to 1.1.1.1 / 1.0.0.1 to bypass DNS-level blocks.",
      "App keeps closing after 30 seconds: clear the Fire Stick cache (Settings → Applications → Manage Installed Applications → IPTV Smarters Pro → Clear Cache) and restart. Do NOT tap Clear Data — that wipes your login.",
    ],
  },
  {
    slug: "samsung-tv",
    displayName: "Samsung Smart TV",
    emoji: "📺",
    subtitle: "Tizen OS Smart TVs",
    metaTitle: "IPTV on Samsung Smart TV — MAC-Address Setup Guide (2026)",
    metaDescription:
      "IPTV setup on Samsung Smart TV in 2026 using X-OTT and the Tizen App Store. MAC-address activation via WhatsApp support. Fallback to IBO Player for older models.",
    intro:
      "Samsung Smart TVs run Tizen OS, which handles IPTV differently from a Fire Stick — there's no sideloading and no Google Play Store. Instead, you install X-OTT from the Samsung App Store, note the MAC Address the app displays, send it to our WhatsApp support team, and we register your line on the back-end. The channel list loads as soon as you restart the X-OTT app. This flow works on every Samsung Smart TV from 2018 onward that runs Tizen 4.0 or newer. Older Samsung TVs (2017 and earlier, running Tizen 3.0) don't get X-OTT in their app store — for those, IBO Player is the fallback and follows the same MAC-address-plus-Device-Key registration path. Because Samsung's app store is region-locked to Tizen, this is the only route: you cannot sideload Fire Stick apps onto a Samsung TV. Setup takes about five minutes from installing the app to first channel playing, most of which is waiting for the operator confirmation on WhatsApp.",
    compatibility:
      "Tizen 4.0+ Samsung Smart TVs (2018 model year onward) are the target: X-OTT installs directly from the Samsung App Store. Q-series QLEDs (Q60R, Q80T, Q90R and newer), Crystal UHD, The Frame, and Neo QLED all work. For 2017 and older Samsung Smart TVs on Tizen 3.0, the X-OTT app isn't available — install IBO Player from the app store instead and use the same MAC-address flow. Samsung TVs older than 2016 aren't recommended for IPTV; the chipset struggles with modern HEVC codecs used by 4K streams. Hisense Smart TVs running VIDAA OS follow this exact same install path — search X-OTT in your Hisense app store and follow the WhatsApp activation flow below.",
    primaryApp: "X-OTT (Samsung App Store)",
    appImage: "/iptv-providers-uk-xott.webp",
    fallbackApps: "IBO Player",
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
    troubleshooting: [
      "X-OTT won't appear in the App Store: your TV is likely on Tizen 3.0 (2017 or earlier). Install IBO Player instead and note both the MAC Address and the Device Key it displays. Send both to WhatsApp support — we register both fields on the back-end.",
      "App says \"Login Failed\" or \"Invalid Details\": power-cycle the TV properly by holding the physical power button for 10 seconds. Samsung's soft-reset via the remote is not enough to clear a bad session. Then restart X-OTT and try again.",
      "Streams crash even though the playlist loads: Samsung's Tizen OS sometimes struggles with specific IPTV apps. If X-OTT or Nanomid crash mid-stream, install IBO Player from the App Store and use the same MAC-address WhatsApp registration flow.",
      "Channel list is stale after a few weeks: X-OTT caches the guide aggressively. Force-close the app (from Samsung Settings → Applications → X-OTT → Force Stop), reopen, and the guide refreshes from server.",
      "4K UHD streams stutter but HD is fine: older Tizen firmware can throttle HEVC. Update to the latest firmware from Samsung Settings → Support → Software Update → Update Now.",
    ],
  },
  {
    slug: "lg-tv",
    displayName: "LG Smart TV",
    emoji: "📺",
    subtitle: "webOS Smart TVs",
    metaTitle: "IPTV on LG Smart TV — webOS Setup with X-OTT (2026)",
    metaDescription:
      "IPTV setup on LG Smart TV (webOS) in 2026 using X-OTT from the LG Content Store. MAC-address activation via WhatsApp. Hard-reset guide for stubborn logins.",
    intro:
      "LG Smart TVs run webOS, which — like Samsung's Tizen — has its own walled-garden app store and its own quirks. The install path is X-OTT from the LG Content Store: install it, note the MAC Address the app displays on screen, send it to our WhatsApp support team, and we register your line on the back-end. Restart X-OTT and your channels load. This works on every LG Smart TV from 2018 onward running webOS 4.0 or newer, which covers the OLED range (C-series, G-series, B-series and newer), NanoCell, and QNED. LG-specific note: the \"Login Failed\" error that catches out most new LG households isn't caused by the app or your credentials — it's caused by webOS holding a stale session that a soft reboot from the remote won't clear. There's a hard-reset trick further down that solves it in 60 seconds. Setup takes about five minutes end-to-end.",
    compatibility:
      "webOS 4.0+ LG Smart TVs (2018 model year onward) support X-OTT natively from the LG Content Store. OLED C8/C9/CX/C1/C2/C3/C4, G-series, B-series; NanoCell NANO90, NANO91, NANO95; QNED all work reliably. Older LG Smart TVs on webOS 3.0 or below (2016-2017) don't get X-OTT — install IBO Player from the LG Content Store instead, note the MAC Address and Device Key, and follow the same WhatsApp registration flow. LG plasma TVs and models older than 2016 aren't recommended. Other generic Smart TVs (older Hisense pre-VIDAA, Panasonic Firefox OS, Philips Saphi) follow the same install pattern with either X-OTT or IBO Player.",
    primaryApp: "X-OTT (LG Content Store)",
    appImage: "/iptv-providers-uk-xott.webp",
    fallbackApps: "IBO Player",
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
    troubleshooting: [
      "\"Login Failed\" error on X-OTT despite registered MAC: this is the LG-specific stale-session bug. Hold the physical TV power button for 10 seconds (not the remote — the button on the TV itself). Unplug the router for 30 seconds. Plug everything back in, wait 2 minutes for the router to fully boot, then reopen X-OTT.",
      "X-OTT missing from the LG Content Store: your TV is on webOS 3.0 or older. Install IBO Player from the LG Content Store, note the MAC Address AND the Device Key it shows, and send both to WhatsApp support.",
      "Channel list is empty after successful login: force-close X-OTT (LG Settings → Apps → X-OTT → Force Stop), reopen, and the channel list rebuilds. If it stays empty, our team can force a back-end refresh from the operator side.",
      "Streams stutter on 4K UHD channels but SD is fine: LG's WCG (Wide Colour Gamut) processing on older OLEDs can bottleneck HEVC decoding. Try the same channel at 1080p — if it plays, the 4K stutter is decoder-related, not connection-related.",
      "Remote won't wake the TV to X-OTT: LG's Magic Remote pairing can drift. Hold OK + Back for 5 seconds until the pairing indicator flashes.",
    ],
  },
  {
    slug: "apple-tv",
    displayName: "Apple TV",
    emoji: "🍎",
    subtitle: "tvOS — Apple TV 4K & HD",
    metaTitle: "IPTV on Apple TV — tvOS Setup Guide (2026)",
    metaDescription:
      "IPTV setup on Apple TV in 2026 using IPTV Smarters Pro for tvOS and Xtream Codes login. Works on Apple TV 4K (all generations) and Apple TV HD.",
    intro:
      "Apple TV is the most technically capable set-top box for IPTV in the UK: fast processor, native 4K UHD HDR support, and the cleanest interface in the category. Setup is straightforward once you know the flow, but different from Samsung, LG, or Fire Stick because tvOS uses direct Xtream Codes login rather than MAC-address registration. There's no MAC-address handoff — you enter Server URL, Username, and Password from your activation email directly in the app, and the channel list loads within about two minutes. The primary app is IPTV Smarters Pro for tvOS, free from the App Store. First channel plays within five minutes of starting the install. Apple TV is worth the higher device cost if you're comparing against Fire Stick 4K Max — the interface is faster, streams are more stable on flaky wi-fi thanks to a better antenna, and there's no advertising layer in the OS. The main trade-off is upfront cost: an Apple TV 4K is £150-£170 versus the £60 Fire Stick 4K Max.",
    compatibility:
      "Apple TV 4K (all three generations: 2017, 2021, 2022) is the target for 4K UHD content. Apple TV HD (4th gen, 2015) works fine for HD streams but caps at 1080p. Apple TV 3rd generation (2012) and earlier are not supported — they don't run tvOS with app installation. All tvOS versions from 12 onwards support IPTV Smarters Pro; keep tvOS updated (Settings → System → Software Updates) since the app requires a recent release.",
    primaryApp: "IPTV Smarters Pro (tvOS App Store)",
    steps: [
      { text: "From the Apple TV home screen, open the App Store → search for IPTV Smarters Pro → Get / install (free)." },
      { text: "Open IPTV Smarters Pro → tap Add User." },
      { text: "Choose \"Login with Xtream Codes API\" (do NOT choose \"Load Your Playlist or File/URL\" — that's M3U mode)." },
      {
        text: "Enter the credentials from your activation email:",
        substeps: [
          "Any Name: IPTV Providers UK (or whatever you prefer)",
          "Username: from your activation email",
          "Password: from your activation email",
          "URL: as supplied in your welcome email",
        ],
      },
      { text: "Tap Add User → wait about two minutes while the guide loads → your channels appear." },
    ],
    notes: [
      "Apple TV 4K (any generation) handles native 4K UHD HDR — enable Match Content in Settings → Video and Audio for the best picture quality.",
      "AirPlay from iPhone/iPad works if you have both — cast a channel from the mobile app to the Apple TV instead of installing separately.",
    ],
    troubleshooting: [
      "Smarters Pro reports \"Server not found\": check the Server URL field contains only the base host from your welcome email — nothing longer, no get.php?... query string, no /player_api.php. The M3U URL is different from the Xtream Codes server URL.",
      "Login accepts credentials but channel list is empty: force-quit the app (double-press the TV button on the remote → swipe up on Smarters Pro to close), reopen, and try again. tvOS occasionally caches an incomplete first-load response.",
      "Channels play but audio is out of sync: Apple TV audio handshake with older AV receivers takes a moment. On the current channel, press-and-hold the TV button, choose Audio Sync, and re-run the calibration.",
      "4K UHD channels look softer than expected: check Settings → Video and Audio → Match Content is enabled for Match Frame Rate AND Match Dynamic Range. Apple TV defaults to a fixed output which downgrades HDR streams to SDR unless matching is on.",
      "Home wi-fi drops during streaming: Apple TV 4K supports wi-fi 6 (2022 model) or wi-fi 5 (2017, 2021). Move to 5GHz band in the router config, or use the Ethernet port on the 2022 model for stable 4K UHD.",
    ],
  },
  {
    slug: "android-tv",
    displayName: "Android TV & Google TV",
    emoji: "🤖",
    subtitle: "Chromecast, Nvidia Shield, Sony Bravia",
    metaTitle: "IPTV on Android TV — Setup Guide for Chromecast, Nvidia Shield, Sony Bravia (2026)",
    metaDescription:
      "IPTV setup on Android TV in 2026 using IPTV Smarters Pro from the Play Store. Works on Chromecast with Google TV, Nvidia Shield, Sony Bravia and Android TV boxes.",
    intro:
      "Android TV — the operating system, not a specific device — runs on a range of set-top boxes and Smart TVs: Chromecast with Google TV, Nvidia Shield, Sony Bravia (2015 and newer), TCL, Xiaomi Mi Box, Formuler in Android mode. Setup is the most flexible of any category: install IPTV Smarters Pro from the Play Store, sign in with your Xtream Codes credentials from the activation email, done. No MAC-address handoff, no sideloading, no app store restrictions. The install takes about three minutes and the first channel plays within five. Because Android TV is a shared platform, the setup process here works identically across every device that runs it — the differences are in hardware capability (Nvidia Shield handles 4K UHD reliably; a £20 no-name Android box may not) rather than in the install steps. If you're setting up an Android TV box specifically (not a Smart TV), the Nvidia Shield or a current-generation Chromecast with Google TV are the two recommended options for 4K UHD households.",
    compatibility:
      "Android TV 9.0+ on any hardware. Nvidia Shield TV (2015 refresh, 2019 tube, 2019 Pro) is the reference implementation — 4K UHD HEVC decoding is rock-solid. Chromecast with Google TV (2020 and 2024 4K versions) is the value option and handles 4K well. Sony Bravia running Android TV from 2015 model year forward works reliably; check Settings → Device Preferences → About for the Android version. Xiaomi Mi Box S is fine for HD but struggles with high-bitrate 4K UHD. Avoid unbranded Android TV boxes under £30 — the chipsets aren't rated for HEVC 4K decoding.",
    primaryApp: "IPTV Smarters Pro",
    steps: [
      { text: "From Google Play, install the Downloader app (by AFTVnews)." },
      { text: "Open Downloader and enter: https://www.iptvsmarters.com/download then press Go." },
      { text: "In Settings → Device Preferences → Security, enable installs from Unknown Sources." },
      { text: "Launch IPTV Smarters Pro and pick Login with Xtream Codes API." },
      { text: "Type the username, password and server URL from your IPTV Providers UK welcome email." },
    ],
    troubleshooting: [
      "Smarters Pro shows \"invalid credentials\": paste the Server URL by hand rather than using auto-fill — Android TV's Gboard sometimes adds a trailing space that's invisible in the text field. Same for username and password.",
      "App loads but streams buffer immediately: on Nvidia Shield, disable \"AI HDR\" (Settings → Display → Advanced) — the AI upscaler consumes decoder headroom and starves the stream.",
      "Channel guide doesn't populate: force-close Smarters Pro (Settings → Apps → All Apps → IPTV Smarters Pro → Force Stop), then relaunch. The guide loads on second launch reliably.",
      "Chromecast with Google TV runs out of storage: the device ships with only 8GB. Uninstall unused apps (Settings → Apps → See All Apps) or move to a Nvidia Shield for large IPTV catalogues that cache guide data.",
      "Cheap Android TV box glitches on 4K UHD: the CPU is under-specced. Downgrade to 1080p in Smarters Pro settings, or upgrade the hardware — no software fix helps.",
    ],
  },
  {
    slug: "android-phone",
    displayName: "Android Phone & Tablet",
    emoji: "📱",
    subtitle: "Android phones & tablets",
    metaTitle: "IPTV on Android Phone or Tablet — Play Store Setup Guide (2026)",
    metaDescription:
      "IPTV setup on Android phones and tablets in 2026 using IPTV Smarters Pro from the Play Store. Xtream Codes login. Data usage guidance for mobile streaming.",
    intro:
      "Watching IPTV on your Android phone or tablet is a two-minute setup: install IPTV Smarters Pro from the Play Store, sign in with your Xtream Codes credentials from the activation email, done. No MAC-address handoff, no configuration — the app supports the standard Xtream Codes API directly. This works on every Android phone from Android 8.0 forward, and on Android tablets running the same version. Mobile IPTV has one consideration Smart TV IPTV doesn't: mobile data usage. A 1080p HD stream uses roughly 2GB per hour; a 4K UHD stream uses 7GB per hour. On a home wi-fi connection this doesn't matter; on 4G/5G with a metered plan, an evening of streaming can consume an entire month's data allowance. Most households stream to mobile only when travelling or when the main TV is occupied. If mobile is your primary viewing route, connect to home wi-fi first and consider a router that supports Chromecast for casting to a bigger screen.",
    compatibility:
      "Android 8.0+ on any phone or tablet. Samsung Galaxy S9 (2018) and newer, Pixel 3 (2018) and newer, and OnePlus 6 (2018) and newer all handle 4K UHD streams if the display supports it. Budget phones from 2019 onwards handle 1080p HD without issue. Android tablets: Samsung Galaxy Tab S4 and newer are reliable; Amazon Fire tablets require the Silk browser workaround because the Play Store isn't native (better to install IBO Player from Amazon's own app store on Fire tablets).",
    primaryApp: "IPTV Smarters Pro",
    steps: [
      { text: "Open the Google Play Store and search IPTV Smarters Pro." },
      { text: "Install it. If it's unavailable in your region, grab the APK from the official IPTV Smarters site (https://www.iptvsmarters.com/download)." },
      { text: "Open the app, accept permissions and tap Login with Xtream Codes API." },
      { text: "Enter the username, password and server URL from your IPTV Providers UK welcome email." },
    ],
    troubleshooting: [
      "Smarters Pro not in the Play Store: your Play region may be blocking it. Sign into a UK Google account, or install directly from the developer's website (iptvsmarters.com/download) via the Files app.",
      "Streaming works on wi-fi but fails on 4G/5G: some UK mobile carriers (particularly Three and Vodafone) throttle high-bandwidth streaming during peak hours. Test with the Secure Proxy add-on enabled — it also bypasses mobile carrier filtering.",
      "App drains battery aggressively: streaming with the screen on always drains fast. If you're casting to a Chromecast, the phone screen can go dark — battery drain drops by 60%.",
      "Chromecast option missing in Smarters Pro: make sure both the phone and Chromecast are on the same wi-fi network (not \"guest\" versus main). The app's cast button only appears when it detects a compatible device on the same subnet.",
      "Streams look pixelated on 4G: the app auto-adjusts bitrate. Force higher quality in Smarters Pro settings → Playback → Preferred Video Quality → Original.",
    ],
  },
  {
    slug: "iphone",
    displayName: "iPhone & iPad",
    emoji: "🍏",
    subtitle: "iPhone & iPad",
    metaTitle: "IPTV on iPhone and iPad — App Store Setup Guide (2026)",
    metaDescription:
      "IPTV setup on iPhone and iPad in 2026 using Smarters Player Lite from the App Store. Xtream Codes login. Works on iOS 14 and newer.",
    intro:
      "Setting up IPTV on iPhone or iPad is a three-minute install using Smarters Player Lite from the App Store — free, native, no sideloading. Sign in with your Xtream Codes credentials (Server URL, Username, Password) from your activation email and channels load within a couple of minutes. Apple's App Store is stricter than Google's Play Store about IPTV apps, so the app selection is narrower — but Smarters Player Lite has been the reliable primary option for years and handles both live channels and video-on-demand cleanly. The install works on iPhone (any model from iPhone 8 onward running iOS 14 or newer) and iPad (any model from 2018 forward). If Smarters Player Lite gets pulled from the App Store (which happens intermittently), the fallback is IPTV Smarters Pro when available, or GSE Smart IPTV as a longer-standing alternative. AirPlay to Apple TV works from the app if you want to watch on the big screen while controlling from your iPhone.",
    compatibility:
      "iOS 14.0+ on iPhone 8 (2017) or newer, iPad 6th generation (2018) or newer, iPad Pro all generations, iPad Mini 5 (2019) and newer. All handle 1080p HD streams. iPhone 11 and newer handle 4K UHD comfortably. iPad Pro is the strongest tablet in the category thanks to the larger display and faster chipset. Older iPhones (iPhone 6/7 and pre-2017 iPads) will run the app but may drop frames on high-bitrate 4K UHD.",
    primaryApp: "Smarters Player Lite (App Store)",
    fallbackApps: "IPTV Smarters Pro, GSE Smart IPTV",
    videoEmbedUrl: "https://player.vimeo.com/video/900296474?h=a964339035",
    steps: [
      { text: "Open the App Store and search IPTV Smarters Pro (or Smarters Player Lite)." },
      { text: "Install the app." },
      { text: "Open it, choose Login with Xtream Codes API and enter your username, password and server URL from the IPTV Providers UK welcome email." },
    ],
    notes: [
      "If you run a VPN or proxy app, or have iCloud Private Relay switched on, disable it before activation. Private Relay is on by default with iCloud+ — turn it off in Settings → [your name] → iCloud → Private Relay.",
    ],
    troubleshooting: [
      "Smarters Player Lite missing from the App Store: Apple periodically removes and re-lists these apps. Search for IPTV Smarters Pro, GSE Smart IPTV, or iPlayTV as fallback options — all support the same Xtream Codes login.",
      "Login accepts credentials but no channels appear: quit the app fully (swipe up from bottom, swipe up on Smarters Player Lite to close), reopen and try again. iOS occasionally caches an incomplete first-load response.",
      "AirPlay to Apple TV drops audio: the audio delay is caused by the AirPlay handshake. Under iPhone Settings → Music → Audio → Enable Dolby Atmos, disable it, and AirPlay to Apple TV becomes stable.",
      "App icon disappears after iOS update: it's still installed. Search for it via the App Library (swipe left past the last home screen page) and drag back to the home screen.",
      "Streaming drains battery on iPhone: streaming on cellular data hits the modem hard. Prefer wi-fi. If you must stream on 4G/5G, enable Low Power Mode from Settings → Battery to extend runtime.",
    ],
  },
  {
    slug: "windows-pc",
    displayName: "Windows PC",
    emoji: "🖥️",
    subtitle: "Windows 10 & 11",
    metaTitle: "IPTV on Windows PC — Smarters Pro, KODI and VLC Setup Guide (2026)",
    metaDescription:
      "IPTV setup on Windows PC in 2026 using IPTV Smarters Pro for Windows, KODI, or VLC. Xtream Codes and M3U formats. Works on Windows 10 and Windows 11.",
    intro:
      "Windows PC is the most flexible IPTV setup because it supports every playback method: IPTV Smarters Pro for Windows (Xtream Codes API), KODI with PVR IPTV Simple Client (M3U), or VLC media player (M3U). Most UK households use IPTV Smarters Pro for the friendliest interface — download from iptvsmarters.com/download, install, sign in with your Xtream Codes credentials from the activation email. Setup takes five minutes. If Smarters Pro isn't your preference, KODI is the enthusiast route with more customisation and add-on support, and VLC works fine for simple playback without an interface. All three methods work on Windows 10 and Windows 11. If you're planning to use the PC as a media centre connected to a TV, KODI is the strongest option because it's designed for a 10-foot interface. If you're watching on a monitor at the desk, Smarters Pro is faster to set up and less cluttered.",
    compatibility:
      "Windows 10 (any version from 20H2 onward) and Windows 11 (all versions). The apps need modest hardware — a Core i3 or Ryzen 3 from 2018 or newer handles 4K UHD without issue. Older Windows 7 and Windows 8.1 will run Smarters Pro but the app isn't updated for those releases; upgrade the OS if you're on either. Integrated graphics from Intel HD 620 (2016) or AMD Vega 8 (2018) onwards handle HEVC decoding hardware-accelerated; without hardware acceleration, older CPUs will hit 100% during 4K playback.",
    primaryApp: "IPTV Smarters Pro",
    fallbackApps: "KODI, VLC",
    videoEmbedUrl: "https://player.vimeo.com/video/900296864?h=6b4033c002",
    steps: [
      { text: "Option A — IPTV Smarters Pro (recommended): download IPTV Smarters Pro for Windows from https://www.iptvsmarters.com/download?download=windows_app, install and open it." },
      { text: "Sign in with the Xtream Codes username, password and server URL from your IPTV Providers UK welcome email." },
      { text: "Option B — KODI: download KODI from https://kodi.tv/download/, install it, then follow the video below to add the M3U link from your welcome email." },
    ],
    notes: [
      "Switch off any VPN or proxy app before activation.",
    ],
    troubleshooting: [
      "Smarters Pro download won't install — \"Windows Defender blocked\": right-click the downloaded installer, Properties, tick \"Unblock\" at the bottom, then run as administrator. Windows treats unsigned installers cautiously.",
      "KODI shows \"Failed to load add-on\": install the PVR IPTV Simple Client from Add-ons → My Add-ons → PVR Clients before configuring the M3U URL. It's not enabled by default.",
      "VLC won't play some channels: HEVC/H.265 codec might be missing. Install the HEVC extension from the Microsoft Store (£0.99) or use VLC 3.0.16 or newer which includes hardware HEVC support built-in.",
      "Choppy playback on 4K UHD despite fast hardware: Windows is offloading decoding to CPU instead of GPU. In Smarters Pro settings → Player, switch decoder from Software to Hardware.",
      "Audio out of sync in KODI: KODI's audio DSP defaults are conservative. Settings → System → Audio → Audio Output Configuration → set to Best Match rather than Fixed.",
    ],
  },
  {
    slug: "mac",
    displayName: "Mac (macOS)",
    emoji: "💻",
    subtitle: "macOS — Intel & Apple Silicon",
    metaTitle: "IPTV on Mac (macOS) — Setup Guide (2026)",
    metaDescription:
      "IPTV setup on Mac in 2026 using IPTV Smarters Pro, KODI or VLC on macOS. Xtream Codes and M3U formats. Works on macOS Big Sur through Sequoia.",
    intro:
      "Setting up IPTV on Mac is more constrained than Windows because Apple's App Store doesn't stock IPTV Smarters Pro directly — you download the DMG from iptvsmarters.com/download and install manually. Once installed, the flow is identical to Windows: sign in with your Xtream Codes credentials from the activation email and channels load in two minutes. Setup takes about five minutes end-to-end. Alternatives on Mac are KODI (which is the strongest option for a media-centre setup on a Mac Mini connected to a TV) and VLC media player (simple playback, no interface). Apple Silicon Macs (M1, M2, M3, M4) handle 4K UHD comfortably with hardware acceleration; Intel Macs from 2018 onward also work well thanks to the T2 chip's HEVC support. If you're using a Mac Mini as a permanent media centre, KODI with PVR IPTV Simple Client is the best long-term setup because it's more customisable.",
    compatibility:
      "macOS Big Sur (11.0) through Sequoia (15.x) supported by current IPTV Smarters Pro releases. Apple Silicon Macs (M1 from 2020 onward) are optimal — hardware HEVC decoding is included and 4K UHD streams play at low CPU. Intel Macs from 2018 (any model with T2 security chip) handle HEVC hardware-accelerated. Older Intel Macs (pre-2018) run the app fine at 1080p but hit high CPU on 4K UHD content.",
    primaryApp: "IPTV Smarters Pro",
    fallbackApps: "KODI, VLC",
    videoEmbedUrl: "https://player.vimeo.com/video/900296864?h=6b4033c002",
    steps: [
      { text: "Option A — IPTV Smarters Pro (recommended): download IPTV Smarters Pro for macOS from https://www.iptvsmarters.com/download?download=mac, then right-click the app → Open the first time to clear Gatekeeper." },
      { text: "Sign in with the Xtream Codes username, password and server URL from your IPTV Providers UK welcome email." },
      { text: "Option B — KODI: download KODI from https://kodi.tv/download/, install it, then follow the video below to add the M3U link from your welcome email." },
    ],
    notes: [
      "Switch off any VPN or proxy app before activation. On macOS, iCloud Private Relay must also be off.",
    ],
    troubleshooting: [
      "\"Cannot open Smarters Pro — unidentified developer\": right-click the app in Applications, choose Open (not double-click), then Open again in the security dialog. macOS Gatekeeper blocks unsigned first-run by default.",
      "App won't remember login between sessions: check System Settings → Privacy & Security → App Management — allow Smarters Pro to run and store data.",
      "KODI on Mac shows no channels after M3U setup: in KODI, disable and re-enable PVR IPTV Simple Client from Add-ons → My Add-ons → PVR Clients. macOS sometimes fails the first PVR handshake.",
      "Streams choppy on M1/M2 despite good connection: Metal renderer may not be enabled. In Smarters Pro settings → Player, switch from OpenGL to Metal — hardware decoding kicks in.",
      "Audio out to external speakers cuts out mid-stream: macOS puts USB audio devices to sleep after inactivity. System Settings → Sound → Output → your device → uncheck \"Allow this device to sleep\".",
    ],
  },
  {
    slug: "formuler",
    displayName: "Formuler & Dreamlink",
    emoji: "📦",
    subtitle: "Formuler Z & Dreamlink boxes",
    metaTitle: "IPTV on Formuler and Dreamlink — MyTVOnline Setup Guide (2026)",
    metaDescription:
      "IPTV setup on Formuler Z boxes and Dreamlink in 2026 using MyTVOnline 2/3 with Xtream Codes API. No MAC-address handoff. Best-in-class hardware for UK IPTV.",
    intro:
      "Formuler boxes are the enthusiast choice for UK IPTV: purpose-built for streaming, running a customised Android with the MyTVOnline app pre-installed. Setup is the simplest of any category — open MyTVOnline, add a new portal, enter your Xtream Codes credentials from the activation email, done. Two minutes from unboxing to first channel. No MAC-address handoff, no sideloading, no app store — everything you need is on the box already. The Formuler Z Nano, Z8, Z10, and Z11 all follow the same install flow with MyTVOnline 2 (older units) or MyTVOnline 3 (newer). Dreamlink boxes (T1, T2, T3 Air) use DOL2, which behaves identically. Formuler is more expensive than Fire Stick (£100-£180 depending on model versus £30-£60 for Fire Stick 4K Max) but the hardware is optimised specifically for IPTV — the interface is faster, the wi-fi antenna is stronger, and there's no advertising in the OS. It's the recommended option for households running multiple screens simultaneously or requiring rock-steady 4K UHD.",
    compatibility:
      "All current Formuler models: Z Nano, Z8, Z8 Pro, Z10 SE Max, Z11 Pro, Z11 Pro Max. Older Formuler F1, F3, F4 also supported via MyTVOnline 2. Dreamlink T1, T2, T3 Air, T3 Pro all supported via DOL2 (interface differs but the flow is identical). Both device families ship with the app pre-installed. Formuler CC and older CC-model receivers aren't supported — different OS lineage.",
    primaryApp: "MyTVOnline 2/3 (Formuler) / DOL2 (Dreamlink) — pre-installed",
    steps: [
      { text: "Open MyTVOnline 2 (or MyTVOnline 3 / DOL2 for Dreamlink)." },
      { text: "Go to Menu → Connections → Add Portal." },
      { text: "Portal Name: IPTV Providers UK" },
      { text: "Toggle 'Login Required' to ON." },
      {
        text: "Enter:",
        substeps: [
          "Portal URL: as supplied in your welcome email",
          "Username and Password from your activation email",
        ],
      },
      { text: "Tap Connect to load the channel list." },
    ],
    notes: [
      "Use Xtream Codes API (username/password). Do not use MAC-address connection on Formuler — we use API authentication exclusively.",
    ],
    troubleshooting: [
      "Portal shows \"Connecting…\" but never completes: check the Portal URL field contains only the base host from your welcome email — nothing longer, no get.php?... query string. Formuler MyTVOnline requires the Xtream Codes API URL, not the M3U URL.",
      "Channels load but 4K streams stutter: enable Hardware Decoding under MyTVOnline settings → Playback → Video Decoder. Formuler defaults some models to software decoding which starves the CPU on HEVC.",
      "App crashes at startup: clear MyTVOnline cache from Formuler home → Settings → Apps → MyTVOnline → Storage → Clear Cache. Do NOT clear data — that wipes your portal configuration.",
      "Portal login rejects credentials: Formuler distinguishes between Username/Password login and Login-Required toggle. Make sure the \"Login Required\" toggle is ON before entering credentials, or the app tries anonymous access and fails.",
      "HDMI-CEC controls stop working after Formuler firmware update: in Formuler system settings → HDMI-CEC, toggle CEC off, save, wait 10 seconds, toggle back on. The firmware update sometimes resets the handshake.",
    ],
  },
  {
    slug: "buzztv",
    displayName: "BuzzTV",
    emoji: "📟",
    subtitle: "All BuzzTV models",
    metaTitle: "IPTV on BuzzTV — XC API Setup Guide (2026)",
    metaDescription:
      "IPTV setup on BuzzTV boxes in 2026 using the built-in XC API Login. Xtream Codes credentials directly. Works on all BuzzTV models: XR, XPL, XRS.",
    intro:
      "BuzzTV boxes are dedicated IPTV set-top boxes with a built-in interface — no app installation required. Setup goes through the box's own Server Settings menu: choose XC API Login, enter your Xtream Codes credentials from the activation email, done. Two minutes from unboxing to first channel. No MAC-address handoff, no MyTVOnline-style third-party app, no Android app store — everything is native to the box's own OS. This install path works identically on every BuzzTV model: XR (older), XPL, XR4000, XRS, XRS Pro. Because BuzzTV is purpose-built for IPTV (like Formuler), the interface is faster and more streamlined than a Fire Stick or Android TV box, and there's no advertising layer. It sits in the same premium bracket as Formuler at £100-£200 depending on model. Key note for BuzzTV: use XC API Login, not \"MAC Server\" — the MAC-server option was for legacy MAG-style registration which our network doesn't support. XC API is the current, correct flow.",
    compatibility:
      "Current BuzzTV models — XR4000, XRS, XRS Pro, XPL — all support XC API Login natively. Older BuzzTV XR is supported but the interface is dated and doesn't handle 4K UHD reliably. BuzzTV Elite / Elite Pro / X Class supported. The pre-XR \"BuzzTV X-PL\" (very early) shipped with an older firmware that lacks XC API — a firmware update fixes it.",
    primaryApp: "Built-in XC API Login",
    steps: [
      { text: "From your BuzzTV home screen → Server Settings." },
      { text: "Select XC API Login (do not use MAC server)." },
      { text: "Portal Name: IPTV Providers UK" },
      {
        text: "Enter:",
        substeps: [
          "Portal URL: as supplied in your welcome email",
          "Username and Password from your activation email",
        ],
      },
      { text: "Press Connect to authenticate." },
    ],
    troubleshooting: [
      "XC API option missing from Server Settings: firmware may be out of date. From the BuzzTV home → Settings → About Device → Check for Updates. Install any pending firmware, restart, and XC API appears in Server Settings.",
      "Portal URL rejected: enter the URL exactly as supplied in your welcome email — nothing longer, no get.php?... at the end. BuzzTV's XC API expects the base host only.",
      "Interface freezes when opening the channel guide: BuzzTV's EPG can time out on large catalogues. Go to Settings → EPG → Timeout → increase to 90 seconds. The first load takes longer but subsequent guide views are cached.",
      "4K UHD channels drop to SD after 10-15 seconds: heat management. BuzzTV boxes throttle CPU when the enclosure warms up. Move to a well-ventilated shelf, or elevate the box on a small stand for airflow underneath.",
      "Remote loses pairing after firmware update: hold OK + Back for 10 seconds until the LED flashes, then it re-pairs with the box automatically.",
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
      "If you have an external VPN running, turn it off and test again. IPTV Providers UK's Secure Proxy add-on is the recommended option — it won't conflict.",
  },
  {
    title: "Server URL format",
    description:
      "Your Server URL comes from your welcome email — enter the base host only, NOT the long M3U link with get.php?... Use the Xtream Codes API login screen, not the M3U URL screen.",
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
      "Clear the Server field, paste only the base host from your welcome email.",
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
      "Recommended: enable IPTV Providers UK's Secure Proxy add-on (available at checkout) — it reduces ISP-side stream interference and won't conflict with your apps.",
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
      "Recommended: enable IPTV Providers UK Secure Proxy to bypass the ISP filter.",
      "Alternative: change your router's DNS to Cloudflare (1.1.1.1 and 1.0.0.1) to bypass DNS-level filtering.",
    ],
  },
];
