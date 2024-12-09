import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
  },
  publicRuntimeConfig: {
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  },
};

export default nextConfig;
