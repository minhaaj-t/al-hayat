"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import {
  type ProjectCategory,
  portfolioFilterTabs,
  portfolioProjects,
} from "@/lib/projects-content";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

function matchesFilter(
  categories: ProjectCategory[],
  filter: "all" | ProjectCategory,
) {
  if (filter === "all") return true;
  return categories.includes(filter);
}

const SHARE_ORIGIN = "https://alhayatinteriors.com";

function ProjectCard({
  title,
  url,
  image,
  largeImage,
  categories,
}: (typeof portfolioProjects)[number]) {
  const full = largeImage ?? image;
  const internal = url.startsWith("/");
  const remoteThumb = image.startsWith("https://");
  const shareTarget = internal ? `${SHARE_ORIGIN}${url}` : url;

  const imageEl = (
    <Image
      src={image}
      alt=""
      fill
      className="object-cover transition duration-500 group-hover:scale-105"
      sizes="(max-width: 768px) 100vw, 50vw"
      unoptimized={remoteThumb}
    />
  );

  return (
    <article className="group flex flex-col overflow-hidden border border-zinc-200 bg-white shadow-sm transition hover:shadow-md">
      {internal ? (
        <Link
          href={url}
          className="relative block aspect-[4/3] w-full overflow-hidden bg-zinc-100"
        >
          {imageEl}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
        </Link>
      ) : (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block aspect-[4/3] w-full overflow-hidden bg-zinc-100"
        >
          {imageEl}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
        </a>
      )}
      <div className="flex flex-1 flex-col p-5">
        {categories.length > 0 ? (
          <ul className="mb-3 flex flex-wrap gap-2 text-[11px] font-medium uppercase tracking-wide text-amber-700/90">
            {categories.map((c) => (
              <li
                key={c}
                className="rounded border border-amber-200/80 bg-amber-50 px-2 py-0.5"
              >
                {portfolioFilterTabs.find((t) => t.id === c)?.label ?? c}
              </li>
            ))}
          </ul>
        ) : null}
        <h3 className="font-serif text-lg font-semibold text-zinc-900">
          {internal ? (
            <Link href={url} className="hover:text-amber-700">
              {title}
            </Link>
          ) : (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-700"
            >
              {title}
            </a>
          )}
        </h3>
        <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-zinc-100 pt-4 text-xs">
          <a
            href={full}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold uppercase tracking-wide text-zinc-600 hover:text-amber-700"
          >
            View large
          </a>
          <span className="text-zinc-300">|</span>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareTarget)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-amber-700"
          >
            Share
          </a>
        </div>
      </div>
    </article>
  );
}

export function ProjectsPageView() {
  const [filter, setFilter] = useState<"all" | ProjectCategory>("all");

  const visible = useMemo(
    () => portfolioProjects.filter((p) => matchesFilter(p.categories, filter)),
    [filter],
  );

  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-900">
      <div className="relative bg-zinc-900">
        <Header />
        <section className="relative overflow-hidden pb-16 pt-28 text-white lg:pb-24 lg:pt-32">
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-950" />
          <div
            className="absolute inset-0 opacity-60 [background-size:60px_60px] [background-repeat:repeat]"
            style={{ backgroundImage: "url(/site/hero-pattern.svg)" }}
            aria-hidden
          />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav className="text-sm text-white/60" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-amber-300">
                Home
              </Link>
              <span className="mx-2">»</span>
              <span className="text-white/90">Projects</span>
            </nav>
            <h1 className="mt-6 max-w-3xl font-serif text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              A Showcase of Our Interior Masterpieces
            </h1>
            <p className="mt-4 max-w-xl text-lg text-white/80">
              Defining Interiors Through Innovation and Detail
            </p>
          </div>
          <div
            className="pointer-events-none absolute bottom-0 left-0 right-0 h-12 text-white/10"
            aria-hidden
          >
            <svg
              className="h-full w-full"
              viewBox="0 0 1000 100"
              preserveAspectRatio="none"
            >
              <path fill="currentColor" d="M0,6V0h1000v100L0,6z" />
            </svg>
          </div>
        </section>
      </div>

      <main className="flex-1 bg-zinc-50 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 border-b border-zinc-200 pb-8 sm:gap-4">
            {portfolioFilterTabs.map((tab) => {
              const active = filter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setFilter(tab.id)}
                  className={`border-b-2 px-2 py-2 text-sm font-medium transition sm:px-3 ${
                    active
                      ? "border-amber-500 text-zinc-900"
                      : "border-transparent text-zinc-500 hover:text-zinc-800"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {visible.length === 0 ? (
            <p className="py-16 text-center text-zinc-600">
              No projects in this category.
            </p>
          ) : (
            <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
              {visible.map((p) => (
                <ProjectCard key={p.slug} {...p} />
              ))}
            </div>
          )}

          <p className="mt-12 text-center text-sm text-zinc-500">
            Each card links to a mirrored portfolio page on this site (content exported from
            the public portfolio singles).
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
