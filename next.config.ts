import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Suppress ESLint during builds — run `npm run lint` separately
  eslint: {
    ignoreDuringBuilds: true,
  },
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
  // Allow the static rocket-lms.html preview to load external CSS/JS/fonts
  async headers() {
    return [
      {
        source: "/rocket-lms.html",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "default-src * 'unsafe-inline' 'unsafe-eval' data: blob:; img-src * data: blob:; font-src *; script-src * 'unsafe-inline' 'unsafe-eval'; style-src * 'unsafe-inline';",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

