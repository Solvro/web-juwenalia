import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cms.juwenalia.solvro.pl',
        port: '',
        pathname: '/assets/**',
      },
    ],
  },
};

export default nextConfig;
