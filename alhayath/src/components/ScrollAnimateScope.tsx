"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

const TARGET = "scroll-animate-target";
const VISIBLE = "is-visible";

function inExcluded(el: Element) {
  return el.closest("[data-no-scroll-animate]") != null;
}

function inHeader(el: Element) {
  return el.closest("header") != null;
}

function isPageShell(el: HTMLElement) {
  return (
    el.tagName === "DIV" &&
    el.classList.contains("flex") &&
    el.classList.contains("flex-col") &&
    el.classList.contains("min-h-screen")
  );
}

function isGridLayout(el: HTMLElement) {
  return el.className.includes("grid");
}

function findSplittableGrid(section: HTMLElement): HTMLElement | null {
  const grids = section.querySelectorAll("div[class*='grid']");
  for (const g of grids) {
    if (!(g instanceof HTMLElement) || inExcluded(g)) continue;
    if (!isGridLayout(g)) continue;
    if (typeof window !== "undefined") {
      const style = window.getComputedStyle(g);
      if (style.display !== "grid") continue;
    }
    const kids = [...g.children].filter(
      (c): c is HTMLElement =>
        c instanceof HTMLElement && !["SCRIPT", "STYLE"].includes(c.tagName),
    );
    if (kids.length < 2) continue;
    if (kids.some((k) => k.matches("article") || k.querySelector(":scope article"))) continue;
    return g;
  }
  return null;
}

function collectScrollTargets(root: HTMLElement): HTMLElement[] {
  const set = new Set<HTMLElement>();

  root.querySelectorAll("section").forEach((el) => {
    if (!(el instanceof HTMLElement) || inExcluded(el) || inHeader(el)) return;
    if (el.querySelector("article")) return;
    const grid = findSplittableGrid(el);
    if (grid) {
      Array.from(grid.children).forEach((c) => {
        if (!(c instanceof HTMLElement) || inExcluded(c)) return;
        if (["SCRIPT", "STYLE"].includes(c.tagName)) return;
        set.add(c);
      });
      return;
    }
    set.add(el);
  });

  root.querySelectorAll("article").forEach((el) => {
    if (!(el instanceof HTMLElement) || inExcluded(el) || inHeader(el)) return;
    set.add(el);
  });

  root.querySelectorAll("aside").forEach((el) => {
    if (!(el instanceof HTMLElement) || inExcluded(el) || inHeader(el)) return;
    set.add(el);
  });

  root.querySelectorAll("main > div").forEach((wrapper) => {
    if (!(wrapper instanceof HTMLElement) || inExcluded(wrapper)) return;
    if (wrapper.querySelector("section")) return;

    const aside = wrapper.querySelector("aside");
    if (aside) {
      const parent = aside.parentElement;
      if (
        parent instanceof HTMLElement &&
        isGridLayout(parent) &&
        parent.parentElement === wrapper
      ) {
        Array.from(parent.children).forEach((c) => {
          if (c instanceof HTMLElement && !inExcluded(c)) set.add(c);
        });
        return;
      }
    }

    if (wrapper.querySelector(":scope article")) {
      Array.from(wrapper.children).forEach((child) => {
        if (!(child instanceof HTMLElement) || inExcluded(child)) return;
        if (child.tagName !== "DIV") return;
        if (child.querySelector("article")) return;
        set.add(child);
      });
      return;
    }

    set.add(wrapper);
  });

  root.querySelectorAll("footer .mx-auto.grid > div").forEach((el) => {
    if (!(el instanceof HTMLElement) || inExcluded(el)) return;
    set.add(el);
  });

  for (const child of root.children) {
    if (!(child instanceof HTMLElement)) continue;
    if (child.tagName !== "DIV" || isPageShell(child) || inExcluded(child)) continue;
    if (child.querySelector("main")) continue;
    set.add(child);
  }

  return [...set];
}

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function ScrollAnimateScope({ children, className }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const targets = collectScrollTargets(root);

    const reveal = (el: HTMLElement) => {
      el.classList.add(VISIBLE);
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          reveal(el);
          io.unobserve(el);
        }
      },
      { root: null, rootMargin: "0px 0px -10% 0px", threshold: 0.08 },
    );

    targets.forEach((el, i) => {
      el.classList.add(TARGET);
      if (reduceMotion) {
        reveal(el);
        return;
      }
      el.style.setProperty("--sa-stagger", String(Math.min(i, 14)));
    });

    const run = () => {
      if (reduceMotion) return;
      const vh = window.innerHeight || 1;
      for (const el of targets) {
        if (el.classList.contains(VISIBLE)) continue;
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.92 && r.bottom > vh * 0.04) {
          reveal(el);
          continue;
        }
        io.observe(el);
      }
    };

    requestAnimationFrame(run);

    return () => {
      io.disconnect();
      for (const el of targets) {
        el.classList.remove(TARGET, VISIBLE);
        el.style.removeProperty("--sa-stagger");
      }
    };
  }, [pathname]);

  return (
    <div ref={rootRef} data-scroll-animate-root className={className}>
      {children}
    </div>
  );
}
