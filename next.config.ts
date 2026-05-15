import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/takumi-castle",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
