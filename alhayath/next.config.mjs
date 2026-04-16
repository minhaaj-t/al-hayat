import path from "node:path";
import { fileURLToPath } from "node:url";

/** `alhayath/` (this app). */
const configDir = path.dirname(fileURLToPath(import.meta.url));
/**
 * npm workspaces hoist `next` to the repo root `node_modules/`.
 * Turbopack must use that root or it cannot resolve `next/package.json`.
 */
const turbopackRoot = path.resolve(configDir, "..");

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: turbopackRoot,
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
