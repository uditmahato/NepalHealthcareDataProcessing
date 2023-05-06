/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts: true,
  images: {
    domains: ["iili.io"],
    unoptimized: true,

  },

  output: "export",
};

module.exports = nextConfig;
