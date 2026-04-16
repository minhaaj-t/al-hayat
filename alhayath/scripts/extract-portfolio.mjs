import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const cacheDir = path.join(root, ".cache-portfolio");
const outFile = path.join(root, "src", "data", "portfolio-detail.json");

const IMG_RE =
  /https:\/\/alhayatinteriors\.com\/wp-content\/uploads\/[^"?\s]+\.(?:jpe?g|png|webp|gif)/gi;

function stripOgSuffix(raw) {
  return raw
    .replace(/\s*-\s*AL HAYATH TECHNICAL SERVICES LLC\s*$/i, "")
    .trim();
}

function extractMain(html) {
  const a = html.indexOf("portfolio-single-content");
  if (a === -1) return html;
  const b = html.indexOf("single-post-navigation", a);
  return b === -1 ? html.slice(a) : html.slice(a, b);
}

function extractGallery(main) {
  const start = main.indexOf("widget-wd_images_gallery");
  if (start === -1) return [];
  const end = main.indexOf("widget-wd_text_block", start);
  const block =
    end === -1 ? main.slice(start) : main.slice(start, end);
  const found = block.match(IMG_RE) ?? [];
  const normalized = found.map((u) => u.replace(/-\d+x\d+(?=\.(jpe?g|png|webp|gif)$)/i, ""));
  return [...new Set(normalized)];
}

function extractSidebar(main) {
  const m = main.match(
    /widget-wd_text_block[\s\S]*?wd-text-block reset-last-child text-left">\s*([\s\S]*?)\s*<\/div>\s*<\/div>\s*<\/div>\s*<section class="elementor-section elementor-inner-section/,
  );
  return m ? m[1].trim() : "";
}

function extractVideo(main) {
  const vid = main.match(
    /<a[^>]+href="(https:\/\/(?:www\.)?youtube\.com[^"]+)"[^>]*>[\s\S]{0,120}?View Video/s,
  );
  return vid ? vid[1] : null;
}

function extractNav(html, which) {
  const re =
    which === "prev"
      ? /prev-btn[\s\S]*?href="(https:\/\/alhayatinteriors\.com\/portfolio\/[^"]+)"/
      : /next-btn[\s\S]*?href="(https:\/\/alhayatinteriors\.com\/portfolio\/[^"]+)"/;
  const m = html.match(re);
  return m ? m[1] : null;
}

function slugFromPortfolioUrl(u) {
  if (!u) return null;
  try {
    const p = new URL(u).pathname.replace(/\/+$/, "");
    const parts = p.split("/").filter(Boolean);
    const i = parts.indexOf("portfolio");
    return i >= 0 && parts[i + 1] ? parts[i + 1] : null;
  } catch {
    return null;
  }
}

const files = fs.readdirSync(cacheDir).filter((f) => f.endsWith(".html"));

/** @type {Record<string, unknown>} */
const results = {};

for (const file of files) {
  const slug = file.replace(/\.html$/, "");
  const html = fs.readFileSync(path.join(cacheDir, file), "utf8");
  const main = extractMain(html);

  const og = html.match(
    /<meta\s+property="og:title"\s+content="([^"]*)"\s*\/?>/i,
  );
  const titleFromOg = og ? stripOgSuffix(og[1]) : "";

  const tm = main.match(
    /<h4 class="woodmart-title-container title[^"]*">\s*([^<]*?)\s*</,
  );
  const titleFromH4 = tm
    ? tm[1]
        .replace(/&amp;/g, "&")
        .replace(/&#8211;/g, "–")
        .trim()
    : "";

  const heroTitle = titleFromOg || titleFromH4 || slug;

  const sm = main.match(
    /class="title-after_title[^"]*"[^>]*>[\s\S]*?<p>\s*([^<]*?)\s*<\/p>/,
  );
  const subtitle = sm ? sm[1].trim() : "";

  const gallery = extractGallery(main);
  const videoUrl = extractVideo(main);
  const sidebarHtml = extractSidebar(main);
  const prevUrl = extractNav(html, "prev");
  const nextUrl = extractNav(html, "next");

  results[slug] = {
    slug,
    heroTitle,
    subtitle,
    gallery,
    videoUrl,
    sidebarHtml,
    prevSlug: slugFromPortfolioUrl(prevUrl),
    nextSlug: slugFromPortfolioUrl(nextUrl),
  };
}

fs.mkdirSync(path.dirname(outFile), { recursive: true });
fs.writeFileSync(outFile, JSON.stringify(results, null, 2), "utf8");
console.log("Wrote", outFile, "keys:", Object.keys(results).length);
