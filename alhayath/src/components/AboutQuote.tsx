import { siteImages } from "@/lib/site-assets";
import Image from "next/image";
import Link from "next/link";

export function AboutQuote() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="flex justify-center lg:justify-start">
          <Image
            src={siteImages.about}
            alt=""
            width={447}
            height={559}
            className="max-h-[420px] w-auto object-contain"
          />
        </div>
        <div>
          <blockquote className="font-serif text-2xl leading-snug text-zinc-900 lg:text-3xl">
            “We continue to work on even more projects that vary in complexity,
            size and value.”
          </blockquote>
          <p className="mt-4 text-lg italic text-zinc-600">-Mr. ASHRAF SHAHJAHAN</p>
          <p className="mt-6 max-w-xl text-zinc-600">
            Working closely with our clients, we pride ourselves on our ability to
            solve problems, find innovative solutions and deliver the most
            demanding standards of finishes.
          </p>
          <Link
            href="/contact-us"
            className="mt-8 inline-flex rounded-full border border-zinc-900 bg-zinc-900 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-zinc-800"
          >
            View more
          </Link>
        </div>
      </div>
    </section>
  );
}
