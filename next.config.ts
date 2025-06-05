import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Optional: Add basePath if you're deploying to a subdirectory
  // basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  // Optional: Enable React Strict Mode
  reactStrictMode: true,
};

export default nextConfig;
