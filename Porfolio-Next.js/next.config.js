/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  eslint: {
    dirs: ['pages', 'utils', '.'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
  experimental: { esmExternals: true },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
        pathname: `/**`,
      },
    ],
  },
};

module.exports = nextConfig;
