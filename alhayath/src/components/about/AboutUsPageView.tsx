import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import {
  aboutBlockquote,
  aboutClosingParagraph,
  aboutHero,
  aboutIntroParagraphs,
  aboutKeyPersonnel,
  aboutShareUrl,
  aboutSignature,
  aboutTeam,
} from "@/lib/about-us-content";
import Image from "next/image";
import Link from "next/link";

function ShareLinks() {
  const u = encodeURIComponent(aboutShareUrl);
  return (
    <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-wide text-zinc-600">
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${u}`}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-amber-700"
      >
        Facebook
      </a>
      <span className="text-zinc-300">|</span>
      <a
        href={`mailto:?subject=${encodeURIComponent("About us")}&body=${u}`}
        className="hover:text-amber-700"
      >
        Email
      </a>
      <span className="text-zinc-300">|</span>
      <a
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${u}`}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-amber-700"
      >
        LinkedIn
      </a>
      <span className="text-zinc-300">|</span>
      <a
        href={`https://api.whatsapp.com/send?text=${u}`}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-amber-700"
      >
        WhatsApp
      </a>
    </div>
  );
}

export function AboutUsPageView() {
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
              <span className="text-white/90">About us</span>
            </nav>
            <h1 className="mt-6 max-w-4xl font-serif text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              {aboutHero.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-amber-200/90">{aboutHero.subtitle}</p>
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

      <main className="flex-1">
        <section className="border-b border-zinc-200 bg-zinc-50 py-14 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
              <div className="space-y-5 text-base leading-relaxed text-zinc-700">
                {aboutIntroParagraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                <p>{aboutClosingParagraph}</p>
                <div className="border-t border-zinc-200 pt-6">
                  <ShareLinks />
                  <p className="mt-6 font-serif text-lg font-semibold text-zinc-900">
                    {aboutSignature}
                  </p>
                </div>
              </div>
              <div className="mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
                <div className="overflow-hidden rounded border border-zinc-200 bg-white shadow-sm">
                  <Image
                    src="/site/about-side.jpg"
                    alt=""
                    width={500}
                    height={750}
                    className="h-auto w-full object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-12 lg:py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <blockquote className="rounded border border-amber-200/80 bg-amber-50/40 px-6 py-8 text-lg leading-relaxed text-zinc-800 shadow-sm sm:px-10 sm:py-10">
              <div
                className="about-blockquote [&_strong]:font-semibold [&_strong]:text-zinc-900"
                dangerouslySetInnerHTML={{ __html: aboutBlockquote.html }}
              />
            </blockquote>
          </div>
        </section>

        <section className="border-t border-zinc-200 bg-zinc-50 py-14 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center font-serif text-2xl font-semibold text-zinc-900 sm:text-3xl">
              {aboutKeyPersonnel.title}
            </h2>
            <div className="mx-auto mt-4 h-px w-24 bg-amber-500" />
            <p className="mx-auto mt-8 max-w-4xl text-center text-base leading-relaxed text-zinc-700 sm:text-lg">
              {aboutKeyPersonnel.intro}
            </p>

            <div className="mx-auto mt-16 max-w-5xl space-y-6">
              <p className="text-base leading-relaxed text-zinc-700 sm:text-lg">
                {aboutTeam.ashraf.bio}
              </p>
              <div className="flex flex-col gap-8 border-t border-zinc-200 pt-10 sm:flex-row sm:items-start">
                <div className="mx-auto shrink-0 overflow-hidden rounded border border-zinc-200 bg-white shadow-sm sm:mx-0">
                  <Image
                    src={aboutTeam.ashraf.image}
                    alt={aboutTeam.ashraf.imageAlt}
                    width={280}
                    height={280}
                    className="h-auto w-full max-w-[240px] object-cover object-top sm:max-w-[280px]"
                  />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <p className="font-serif text-xl font-semibold text-zinc-900">
                    {aboutTeam.ashraf.name}
                  </p>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-amber-800">
                    {aboutTeam.ashraf.role}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-zinc-200 bg-white py-14 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <p className="text-base leading-relaxed text-zinc-700 sm:text-lg">
                  {aboutTeam.sajid.bio}
                </p>
                <div className="mt-8 border-t border-zinc-100 pt-6">
                  <p className="font-serif text-lg font-semibold text-zinc-900">
                    {aboutTeam.sajid.name}
                  </p>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-amber-800">
                    {aboutTeam.sajid.role}
                  </p>
                </div>
              </div>
              <div>
                <p className="text-base leading-relaxed text-zinc-700 sm:text-lg">
                  {aboutTeam.vijil.bio}
                </p>
                <div className="mt-8 border-t border-zinc-100 pt-6">
                  <p className="font-serif text-lg font-semibold text-zinc-900">
                    {aboutTeam.vijil.name}
                  </p>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-amber-800">
                    {aboutTeam.vijil.role}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
