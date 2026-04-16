"use client";

import { siteImages } from "@/lib/site-assets";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const PORTFOLIO =
  "https://drive.google.com/file/d/1cf8HESHWCI3vNr1TI4ffaH_oFJU_x2k9/view";

const [hero1, hero2, hero3] = siteImages.hero;

const slides = [
  {
    image: hero2,
    kicker: "Creative Innovations in",
    title: "INTERIOR SOLUTIONS",
    subtitle: "Transforming visions into inspiring spaces across the UAE.",
  },
  {
    image: hero3,
    kicker: "Complete Turnkey",
    title: "Interior Solutions",
    subtitle: "Seamless execution from concept to completion.",
  },
  {
    image: hero1,
    kicker: "Building Spaces",
    title: "Elevating Experiences",
    subtitle: "Where precision, passion, and creativity meet.",
  },
];

export function HeroSlider() {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const t = setInterval(next, 8000);
    return () => clearInterval(t);
  }, [next]);

  const slide = slides[index];

  return (
    <section className="relative min-h-[720px] w-full lg:min-h-[900px]">
      {slides.map((s, i) => (
        <div
          key={s.image}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === index ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <Image
            src={s.image}
            alt=""
            fill
            priority={i === 0}
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-zinc-900/55" />
        </div>
      ))}

      <div className="relative flex min-h-[720px] flex-col items-center justify-center px-4 pt-40 text-center text-white lg:min-h-[900px] lg:pt-32">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/90">
          {slide.kicker}
        </p>
        <h1 className="mt-3 max-w-4xl font-serif text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
          {slide.title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-white/85">{slide.subtitle}</p>
        <a
          href={PORTFOLIO}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center bg-amber-500 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-zinc-950 transition hover:bg-amber-400"
        >
          Portfolio
        </a>

        <div className="mt-12 flex items-center gap-4">
          <button
            type="button"
            onClick={prev}
            className="rounded-full border border-white/30 px-4 py-2 text-sm hover:bg-white/10"
            aria-label="Previous slide"
          >
            ‹
          </button>
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2 w-2 rounded-full transition ${
                  i === index ? "bg-amber-400" : "bg-white/40"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={next}
            className="rounded-full border border-white/30 px-4 py-2 text-sm hover:bg-white/10"
            aria-label="Next slide"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
