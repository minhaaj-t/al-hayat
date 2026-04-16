import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * When the repo is an npm workspace, `next build` runs with cwd = `alhayath/`.
   * Pinning Turbopack root avoids resolving the wrong directory (parent lockfiles / 404 deploys).
   */
  turbopack: {
    root: process.cwd(),
  },
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "alhayatinteriors.com",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "buildiyo.com",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "worldarchitecture.org",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.shutterstock.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "walkthru.ae",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.brrarch.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img2.10bestmedia.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "rpcgeneralcontractor.com",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "5.imimg.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "milo-designs.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
