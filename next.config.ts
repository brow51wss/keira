import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Dev only: lets the dev server hydrate pages opened via 127.0.0.1.
  allowedDevOrigins: ["127.0.0.1"],
};

export default nextConfig;
