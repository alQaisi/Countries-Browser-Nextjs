/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

const withPWA = require('next-pwa')({
  dest: 'public',
});

module.exports = withPWA({
  experimental: {
    scrollRestoration: true,
  },
  images:{
    domains:["upload.wikimedia.org","flagcdn.com"]
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
});