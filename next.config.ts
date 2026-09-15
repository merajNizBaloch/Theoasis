import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 86400,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "oasis3academy.wordpress.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
  poweredByHeader: false,
  compress: true,
  async headers() {
    const longCache = [
      {
        key: "Cache-Control",
        value: "public, max-age=31536000, immutable",
      },
    ];

    return [
      {
        source: "/gallery/:path*",
        headers: longCache,
      },
      {
        source: "/oasis-logo-v2.webp",
        headers: longCache,
      },
    ];
  },
};

export default nextConfig;
