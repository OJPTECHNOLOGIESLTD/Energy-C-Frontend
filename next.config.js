/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Enable React strict mode
  output: "export",
  images: {
    unoptimized: true, // Fix for images in static export
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.(js|ts)x?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

module.exports = nextConfig;
