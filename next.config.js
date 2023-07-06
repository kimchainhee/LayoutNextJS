/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    forceSwcTransforms: true,
  },
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
