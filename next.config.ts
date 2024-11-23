import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        // Facebook CDN for posted images
        protocol: "https",
        hostname: "**.fbcdn.net",
      },
      {
        // Facebook CDN for profile pictures
        protocol: "https",
        hostname: "platform-lookaside.fbsbx.com",
      },
    ],
  },
};

export default nextConfig;
