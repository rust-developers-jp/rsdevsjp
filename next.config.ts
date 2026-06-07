import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/rsdevsjp",
  assetPrefix: "/rsdevsjp",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
