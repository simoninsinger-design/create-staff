import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    formats: ['image/avif', 'image/webp'],
    unoptimized: true,
  },
  transpilePackages: ['three'],
}

export default nextConfig
