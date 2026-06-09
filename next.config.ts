import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    imageSizes: [160, 200, 240, 320, 384, 480, 640],
    deviceSizes: [640, 828, 1080, 1200, 1920],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.clinicadermos.com.br' }],
        destination: 'https://clinicadermos.com.br/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
