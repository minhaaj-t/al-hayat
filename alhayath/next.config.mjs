import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

/** `alhayath/` (this app). */
const configDir = path.dirname(fileURLToPath(import.meta.url));
/**
 * npm workspaces hoist `next` to the repo root `node_modules/`.
 * Turbopack must use that root or it cannot resolve `next/package.json`.
 *
 * On Vercel with Root Directory = `alhayath`, install often runs only in that
 * folder, so `next` lives in `alhayath/node_modules` — pointing Turbopack at
 * the parent then breaks the build. Only set the workspace root when `next`
 * is actually installed there.
 */
const turbopackRoot = path.resolve(configDir, "..");
const workspaceNextPkg = path.join(
  turbopackRoot,
  "node_modules",
  "next",
  "package.json",
);
const turbopackWorkspaceRoot = fs.existsSync(workspaceNextPkg)
  ? { root: turbopackRoot }
  : undefined;

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(turbopackWorkspaceRoot ? { turbopack: turbopackWorkspaceRoot } : {}),
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
