import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.aglty.io",
        port: "",
        pathname: "/rxrqpo5g/posts/**",
      },
    ],
  },
};

export default nextConfig;
