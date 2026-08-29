import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  productionBrowserSourceMaps: false,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  async redirects() {
    return [
      {
        source: '/blog/iptv-vs-sky-comparison',
        destination: '/blog/iptv-vs-traditional-tv',
        permanent: true,
      },
      {
        source: '/blog/premier-league-streaming-guide',
        destination: '/blog/live-uk-sports-streaming-guide',
        permanent: true,
      },
      // Both 404'd while "fast iptv login" sat at position 1.2 in search.
      {
        source: '/my-account',
        destination: '/login',
        permanent: true,
      },
      {
        source: '/account',
        destination: '/login',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
