import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['framer-motion', 'react-icons'],
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
