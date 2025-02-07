import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // swcMinify: true,
  output: "export", // Ensures static site export
  images: {
    unoptimized: true, // Next.js optimizes images via a server, so disable it for static export
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.(js|ts)x?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;
