/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  poweredByHeader: false,
  trailingSlash: true,
  basePath: '',
  // The starter code load resources from `public` folder with `router.basePath` in React components.
  // So, the source code is "basePath-ready".
  // You can remove `basePath` if you don't need it.
  reactStrictMode: true,
  images: {
    domains: ['storage.googleapis.com', 'cdn.discordapp.com'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/guild',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/guild',
      },
    ];
  },
  env: {
    WEBSITE_URL: process.env.WEBSITE_URL,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    DISCORD_CLIENT_ID: process.env.DISCORD_CLIENT_ID,
    DISCORD_CLIENT_SECRET: process.env.DISCORD_CLIENT_SECRET,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  },
});
