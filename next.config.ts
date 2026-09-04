import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    // Enable modern image formats for better performance
    formats: ["image/avif", "image/webp"],
  },
  // Compress responses for faster delivery
  compress: true,
  // Optimize imports from large packages — reduces first load JS
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;
