/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // You can replace this with actual domains
      },
    ],
  },
}

module.exports = nextConfig
