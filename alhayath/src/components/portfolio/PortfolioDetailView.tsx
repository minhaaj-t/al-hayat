import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import type { PortfolioDetail } from "@/lib/portfolio-detail";
import { getPortfolioDetail } from "@/lib/portfolio-detail";
import Image from "next/image";
import Link from "next/link";

type Props = {
  detail: PortfolioDetail;
  /** Neighbour slugs that exist in our mirrored set (omit broken WP links). */
  prevSlug: string | null;
  nextSlug: string | null;
};

export function PortfolioDetailView({ detail, prevSlug, nextSlug }: Props) {
  const { heroTitle, subtitle, gallery, videoUrl, sidebarHtml } = detail;

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
              <Link href="/projects" className="hover:text-amber-300">
                Portfolio
              </Link>
              <span className="mx-2">»</span>
              <span className="text-white/90">{heroTitle}</span>
            </nav>
            <h1 className="mt-6 max-w-4xl font-serif text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              {heroTitle}
            </h1>
            {subtitle ? (
              <p className="mt-4 text-lg font-medium text-amber-200/90">{subtitle}</p>
            ) : null}
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

      <main className="flex-1 bg-zinc-50 py-10 lg:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-8">
              {gallery.length === 0 ? (
                <p className="rounded border border-dashed border-zinc-300 bg-white p-8 text-center text-zinc-500">
                  No gallery images were found in the exported page markup for this
                  project.
                </p>
              ) : (
                <div className="flex flex-col gap-6">
                  {gallery.map((src, i) => (
                    <a
                      key={`${src}-${i}`}
                      href={src}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block overflow-hidden rounded border border-zinc-200 bg-white shadow-sm transition hover:shadow-md"
                    >
                      <Image
                        src={src}
                        alt=""
                        width={1280}
                        height={960}
                        className="h-auto w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                        sizes="(max-width: 1024px) 100vw, 66vw"
                        unoptimized
                      />
                    </a>
                  ))}
                </div>
              )}
            </div>

            <aside className="lg:col-span-4">
              <div className="sticky top-28 space-y-6 rounded border border-zinc-200 bg-white p-6 shadow-sm">
                {sidebarHtml ? (
                  <div
                    className="portfolio-sidebar text-sm text-zinc-700"
                    dangerouslySetInnerHTML={{ __html: sidebarHtml }}
                  />
                ) : (
                  <p className="text-sm text-zinc-500">
                    Project details were not present in the exported markup for this
                    page.
                  </p>
                )}

                {videoUrl ? (
                  <a
                    href={videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center rounded border border-zinc-900 bg-zinc-900 px-4 py-3 text-center text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-zinc-800"
                  >
                    View video
                  </a>
                ) : null}

                <Link
                  href="/projects"
                  className="block text-center text-sm font-semibold text-amber-800 underline-offset-4 hover:underline"
                >
                  Back to portfolio list
                </Link>
              </div>
            </aside>
          </div>

          {(prevSlug || nextSlug) && (
            <nav
              className="mt-12 flex flex-col gap-4 border-t border-zinc-200 pt-10 sm:flex-row sm:justify-between"
              aria-label="Project navigation"
            >
              {prevSlug ? (
                <Link
                  href={`/portfolio/${prevSlug}`}
                  className="text-sm font-medium text-zinc-700 hover:text-amber-800"
                >
                  <span className="block text-xs uppercase tracking-wide text-zinc-400">
                    Previous
                  </span>
                  {getPortfolioDetail(prevSlug)?.heroTitle ?? prevSlug}
                </Link>
              ) : (
                <span />
              )}
              {nextSlug ? (
                <Link
                  href={`/portfolio/${nextSlug}`}
                  className="text-right text-sm font-medium text-zinc-700 hover:text-amber-800 sm:ml-auto"
                >
                  <span className="block text-xs uppercase tracking-wide text-zinc-400">
                    Next
                  </span>
                  {getPortfolioDetail(nextSlug)?.heroTitle ?? nextSlug}
                </Link>
              ) : null}
            </nav>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
