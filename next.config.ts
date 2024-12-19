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
      {
        // Temporary: for PWr logo
        protocol: "https",
        hostname: "www.iskierkawroc.pl",
      },
      {
        // Temporary: for UWr logo
        protocol: "https",
        hostname: "www.ogrodbotaniczny.wroclaw.pl",
      },
      {
        // Temporary: for UMWr logo
        protocol: "https",
        hostname: "www.wroclaw.pl",
      },
    ],
  },
};

export default nextConfig;
