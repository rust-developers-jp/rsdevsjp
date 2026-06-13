import type { NextConfig } from "next";

export const urlPrefix = process.env.URL_PREFIX ? '/' + process.env.URL_PREFIX : ''

const nextConfig: NextConfig = {
  output: "export",
  assetPrefix: urlPrefix,
  basePath: urlPrefix,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
