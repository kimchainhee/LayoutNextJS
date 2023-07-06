/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.hahalolo.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
