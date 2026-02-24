import type { NextConfig } from "next"

const isProd = process.env.NODE_ENV === 'production'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? '/create-staff' : '',
  images: {
    formats: ['image/avif', 'image/webp'],
    unoptimized: true,
  },
  transpilePackages: ['three'],
}

export default nextConfig
