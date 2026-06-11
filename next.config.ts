import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
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
