/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  // Optional: Add basePath if you're deploying to a subdirectory
  // basePath: '/your-base-path',
};

module.exports = nextConfig;
