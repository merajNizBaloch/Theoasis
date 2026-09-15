import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "oasis3academy.wordpress.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
