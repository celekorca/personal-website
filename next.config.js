/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  // Disable server-side rendering for static export
  trailingSlash: true,
  // Optional: Add basePath if you're deploying to a subdirectory
  // basePath: '/your-base-path',
  // Optional: Add assetPrefix if you're deploying to a custom domain
  // assetPrefix: '/',
};

// For production builds, we want to export static HTML
if (process.env.NODE_ENV === 'production') {
  nextConfig.output = 'export';
}

module.exports = nextConfig;
