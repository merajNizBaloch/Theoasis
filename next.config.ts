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
};

export default nextConfig;
