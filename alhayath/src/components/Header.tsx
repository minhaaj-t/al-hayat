"use client";

import { siteImages } from "@/lib/site-assets";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about-us", label: "About us" },
  { href: "/contact-us", label: "Contact us" },
];

function HeaderContactStrip({ placement }: { placement: "top" | "drawer" }) {
  const inDrawer = placement === "drawer";
  return (
    <>
      <p
        className={
          inDrawer
            ? "text-center text-white"
            : "text-center text-white sm:text-left"
        }
      >
        <a href="tel:+971505189503" className="hover:text-amber-300">
          +971 50 518 9503
        </a>
        <span className="mx-2 opacity-60">||</span>
        <a
          href="mailto:info@alhayatinteriors.com"
          className="hover:text-amber-300"
        >
          info@alhayatinteriors.com
        </a>
      </p>
      <div
        className={
          inDrawer
            ? "flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs uppercase tracking-wide text-white/80"
            : "flex gap-3 text-xs uppercase tracking-wide text-white/80"
        }
      >
        <span className={inDrawer ? "text-white/50" : "hidden sm:inline"}>
          Follow
        </span>
        <a
          href="https://www.facebook.com/sharer/sharer.php?u=https://alhayatinteriors.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-amber-300"
        >
          Facebook
        </a>
        <a
          href="https://www.linkedin.com/shareArticle?mini=true&url=https://alhayatinteriors.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-amber-300"
        >
          LinkedIn
        </a>
        <a
          href="https://api.whatsapp.com/send?text=https%3A%2F%2Falhayatinteriors.com%2F"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-amber-300"
        >
          WhatsApp
        </a>
      </div>
    </>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="hidden bg-zinc-950 text-sm text-white md:block">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-2 sm:flex-row sm:px-6 lg:px-8">
          <HeaderContactStrip placement="top" />
        </div>
      </div>

      <div className="border-b border-white/10 bg-black/40 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="shrink-0">
            <Image
              src={siteImages.logo}
              alt="Al Hayath Technical Services"
              width={152}
              height={45}
              className="h-9 w-auto"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white/90 transition hover:text-amber-300"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            className="rounded-md border border-white/20 px-3 py-1.5 text-sm font-medium text-white md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
          >
            Menu
          </button>
        </div>

        {open ? (
          <div className="border-t border-white/10 bg-black/90 px-4 py-4 md:hidden">
            <nav className="flex flex-col gap-3">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white/90"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-6 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm">
              <HeaderContactStrip placement="drawer" />
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
