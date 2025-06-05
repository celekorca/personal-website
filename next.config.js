/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export configuration
  output: 'export',
  distDir: 'out',
  
  // Image optimization
  images: {
    unoptimized: true,
  },
  
  // React settings
  reactStrictMode: true,
  
  // Ensure static export works with client-side routing
  trailingSlash: true,
  
  // Optional: If you're deploying to a subdirectory
  // basePath: '/your-subdirectory',
  
  // Optional: For custom domains with path prefix
  // assetPrefix: '/',
};

module.exports = nextConfig;
