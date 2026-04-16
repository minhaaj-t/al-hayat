"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import {
  contactFaq,
  contactFormSection,
  contactHero,
  contactIntro,
  contactMapEmbedSrc,
  contactReachUs,
  contactSocial,
} from "@/lib/contact-us-content";
import Link from "next/link";
import type { FormEvent } from "react";
import { useState } from "react";

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 384 512" aria-hidden>
      <path
        fill="currentColor"
        d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
      />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 512 512" aria-hidden>
      <path
        fill="currentColor"
        d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
      />
    </svg>
  );
}

function EnvelopeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 512 512" aria-hidden>
      <path
        fill="currentColor"
        d="M494.586 164.516c-4.697-3.883-111.723-89.95-135.251-108.657C337.231 38.191 299.437 0 256 0c-43.205 0-80.636 37.717-103.335 55.859-24.463 19.45-131.07 105.195-135.15 108.549A48.004 48.004 0 0 0 0 201.485V464c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V201.509a48 48 0 0 0-17.414-36.993zM464 458a6 6 0 0 1-6 6H54a6 6 0 0 1-6-6V204.347c0-1.813.816-3.526 2.226-4.665 15.87-12.814 108.793-87.554 132.364-106.293C200.755 78.88 232.398 48 256 48c23.693 0 55.857 31.369 73.41 45.389 23.573 18.741 116.503 93.493 132.366 106.316a5.99 5.99 0 0 1 2.224 4.663V458z"
      />
    </svg>
  );
}

function SocialIcon({
  kind,
  className,
}: {
  kind: (typeof contactSocial.items)[number]["icon"];
  className?: string;
}) {
  const c = className ?? "h-4 w-4 shrink-0 text-amber-800";
  if (kind === "facebook") {
    return (
      <svg className={c} viewBox="0 0 320 512" aria-hidden>
        <path
          fill="currentColor"
          d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
        />
      </svg>
    );
  }
  if (kind === "twitter") {
    return (
      <svg className={c} viewBox="0 0 512 512" aria-hidden>
        <path
          fill="currentColor"
          d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
        />
      </svg>
    );
  }
  if (kind === "instagram") {
    return (
      <svg className={c} viewBox="0 0 448 512" aria-hidden>
        <path
          fill="currentColor"
          d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
        />
      </svg>
    );
  }
  return (
    <svg className={c} viewBox="0 0 448 512" aria-hidden>
      <path
        fill="currentColor"
        d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
      />
    </svg>
  );
}

function ContactMessageForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const lines = [
      `Name: ${name}`,
      `Email: ${email}`,
      website ? `Website: ${website}` : null,
      "",
      message,
    ].filter(Boolean) as string[];
    const body = encodeURIComponent(lines.join("\n"));
    const subject = encodeURIComponent("Website contact");
    window.location.href = `mailto:info@alhayatinteriors.com?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="contact-name" className="sr-only">
          Your Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          className="w-full rounded border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600"
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="sr-only">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="someone@example.com"
          className="w-full rounded border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600"
        />
      </div>
      <div>
        <label htmlFor="contact-website" className="sr-only">
          Website
        </label>
        <input
          id="contact-website"
          name="website"
          type="url"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          placeholder="http://yourwebsite.com"
          className="w-full rounded border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600"
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="sr-only">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message"
          className="w-full rounded border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded border border-zinc-900 bg-zinc-900 px-4 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-zinc-800"
      >
        Send Message
      </button>
      <p className="text-xs text-zinc-500">
        This mirror opens your email app with a draft to{" "}
        <a href="mailto:info@alhayatinteriors.com" className="text-amber-800 underline">
          info@alhayatinteriors.com
        </a>
        . The live site uses an Elementor form backend.
      </p>
    </form>
  );
}

function FaqAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <div className="divide-y divide-zinc-200 rounded border border-zinc-200 bg-white">
      {contactFaq.items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left text-sm font-medium text-zinc-900 transition hover:bg-zinc-50 sm:px-6 sm:text-base"
              aria-expanded={isOpen}
            >
              <span>{item.q}</span>
              <span
                className={`shrink-0 text-amber-700 transition ${isOpen ? "rotate-180" : ""}`}
                aria-hidden
              >
                ▼
              </span>
            </button>
            {isOpen ? (
              <div
                className="contact-faq-answer border-t border-zinc-100 px-4 py-4 text-sm leading-relaxed text-zinc-700 sm:px-6"
                dangerouslySetInnerHTML={{ __html: item.aHtml }}
              />
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

export function ContactUsPageView() {
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
              <span className="text-white/90">Contact us</span>
            </nav>
            <h1 className="mt-6 max-w-4xl font-serif text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              {contactHero.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-amber-200/90">{contactHero.subtitle}</p>
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
        <section className="border-b border-zinc-200 bg-zinc-50 py-12 lg:py-16">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-zinc-900 sm:text-3xl">
              {contactIntro.heading}
            </h2>
            <div className="mx-auto mt-4 h-px w-24 bg-amber-500" />
            <p className="mx-auto mt-8 max-w-3xl text-base leading-relaxed text-zinc-700 sm:text-lg">
              {contactIntro.body}
            </p>
          </div>
        </section>

        <section className="py-14 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-10">
                <div className="overflow-hidden rounded border border-zinc-200 bg-zinc-100 shadow-sm">
                  <iframe
                    title="AL HAYAT INTERIORS L.L.C."
                    src={contactMapEmbedSrc}
                    className="aspect-[4/3] h-[min(420px,50vh)] w-full min-h-[280px] border-0 lg:aspect-auto lg:min-h-[360px]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                <div className="grid gap-10 sm:grid-cols-2">
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-zinc-900">
                      {contactReachUs.title}
                    </h3>
                    <ul className="mt-4 space-y-4 text-sm text-zinc-700">
                      {contactReachUs.lines.map((line) => (
                        <li key={line.text} className="flex gap-3">
                          <span className="mt-0.5 shrink-0 text-amber-800">
                            {line.kind === "address" ? (
                              <MapPinIcon className="h-4 w-4" />
                            ) : line.kind === "phone" ? (
                              <PhoneIcon className="h-4 w-4" />
                            ) : (
                              <EnvelopeIcon className="h-4 w-4" />
                            )}
                          </span>
                          <span>
                            {line.kind === "email" ? (
                              <a
                                href={line.href}
                                className="hover:text-amber-800 hover:underline"
                              >
                                {line.text}
                              </a>
                            ) : line.kind === "phone" ? (
                              <>
                                <a
                                  href="tel:+97142242006"
                                  className="hover:text-amber-800 hover:underline"
                                >
                                  +971 4224 2006
                                </a>
                                {" || "}
                                <a
                                  href="tel:+971505189503"
                                  className="hover:text-amber-800 hover:underline"
                                >
                                  0505189503
                                </a>
                              </>
                            ) : (
                              line.text
                            )}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-zinc-900">
                      {contactSocial.title}
                    </h3>
                    <ul className="mt-4 space-y-3 text-sm text-zinc-700">
                      {contactSocial.items.map((s) => (
                        <li key={s.label} className="flex items-center gap-3">
                          <SocialIcon kind={s.icon} />
                          <span>{s.label}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="rounded border border-zinc-200 bg-zinc-50/80 p-6 shadow-sm sm:p-8">
                <h2 className="font-serif text-xl font-semibold text-zinc-900 sm:text-2xl">
                  {contactFormSection.title}
                </h2>
                <div className="mt-4 h-px w-16 bg-amber-500" />
                <div className="mt-8">
                  <ContactMessageForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-zinc-200 bg-zinc-50 py-14 lg:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <p className="text-center text-xs font-semibold uppercase tracking-widest text-amber-800">
              {contactFaq.eyebrow}
            </p>
            <h2 className="mt-2 text-center font-serif text-2xl font-semibold text-zinc-900 sm:text-3xl">
              {contactFaq.title}
            </h2>
            <div className="mx-auto mt-6 max-w-3xl">
              <FaqAccordion />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
