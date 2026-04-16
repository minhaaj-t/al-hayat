import { siteImages } from "@/lib/site-assets";
import Image from "next/image";
import Link from "next/link";

const [imgFitout, imgFurnish, imgMep, imgApprovals] = siteImages.services;

const services = [
  {
    title: "Fit-Out Solutions",
    body: "Expert interior fit-outs for commercial, residential, and retail spaces including partitions, ceilings, and finishes.",
    image: imgFitout,
  },
  {
    title: "Furnishing & Carpentry",
    body: "Custom-built furniture and joinery with precision — including wooden flooring, wall paneling, and décor.",
    image: imgFurnish,
  },
  {
    title: "Fire & MEP Systems",
    body: "Comprehensive Electrical, HVAC, Plumbing, and Fire Fighting services for safe and efficient environments.",
    image: imgMep,
  },
  {
    title: "Formal Approvals",
    body: "Complete support for authority approvals including Dubai Municipality, DEWA, and Civil Defense.",
    image: imgApprovals,
  },
];

export function ServicesGrid() {
  return (
    <section className="relative bg-zinc-900 py-16 text-white lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-zinc-900 to-zinc-950" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-serif text-3xl sm:text-4xl">Our Services</h2>
        <div className="mx-auto mt-4 h-px w-24 bg-amber-500" />
        <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-white/80">
          Transparent processes, timely execution, and competitive pricing.
        </p>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <article
              key={s.title}
              className="flex flex-col border border-white/10 bg-black/20 transition hover:border-amber-500/50"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={s.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-serif text-xl">{s.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-white/75">
                  {s.body}
                </p>
                <Link
                  href="/services"
                  className="mt-4 inline-block text-sm font-semibold uppercase tracking-wide text-amber-400 hover:text-amber-300"
                >
                  Learn More →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
