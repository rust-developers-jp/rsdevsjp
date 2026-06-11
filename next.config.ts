import type { NextConfig } from "next";

const urlPrefix = process.env.URL_PREFIX ? '/' + process.env.URL_PREFIX : ''

const nextConfig: NextConfig = {
  output: "export",
  assetPrefix: urlPrefix,
  basePath: urlPrefix,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/join",
        destination: "https://discord.gg/yrezWw4r9r",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
