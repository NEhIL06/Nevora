import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Explicitly opt into Turbopack (default in Next.js 16) with no custom config.
  // This silences the "webpack config with no turbopack config" error.
  turbopack: {},
};

export default nextConfig;


