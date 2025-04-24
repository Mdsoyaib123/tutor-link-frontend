/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: true,
  },
  images: {
    domains: ['techcrunch.com', "github.com"], // Add your allowed image hostnames here
  },
}

module.exports = nextConfig
