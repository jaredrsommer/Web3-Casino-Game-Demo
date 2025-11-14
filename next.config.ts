import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* CozyCasino Configuration */
  images: {
    domains: ['images.unsplash.com'], // For background images
  },
  // Enable React strict mode for better development
  reactStrictMode: true,
  // Optimize production builds
  swcMinify: true,
  // PWA and manifest support
  headers: async () => [
    {
      source: '/site.webmanifest',
      headers: [
        {
          key: 'Content-Type',
          value: 'application/manifest+json',
        },
      ],
    },
  ],
};

export default nextConfig;
