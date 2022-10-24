/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images:{
    domains:["upload.wikimedia.org","flagcdn.com"]
  }
}

module.exports = nextConfig
