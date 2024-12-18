import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cms.juwenalia.solvro.pl",
        port: "",
        pathname: "/assets/**",
      },
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
