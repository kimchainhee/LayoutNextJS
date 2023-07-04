/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.hahalolo.com',
        port: '',
        pathname: '/2023/**',
      },
    ],
  },
}

module.exports = nextConfig
