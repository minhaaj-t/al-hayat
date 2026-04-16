import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import type { ReactNode } from "react";
import {
  approvalOffers,
  fitOutOffers,
  furnishingOffers,
  serviceBanners,
  serviceFlipCards,
} from "@/lib/services-content";
import { siteImages } from "@/lib/site-assets";
import Image from "next/image";
import Link from "next/link";

const [bFit, bFurn, bMep, bAppr] = siteImages.servicesBanners;

const bannerTiles = [
  { image: bFit, ...serviceBanners[0] },
  { image: bFurn, ...serviceBanners[1] },
  { image: bMep, ...serviceBanners[2] },
  { image: bAppr, ...serviceBanners[3] },
];

function FlipCapabilityCard({ title, bullets }: (typeof serviceFlipCards)[number]) {
  return (
    <article className="group relative h-56 w-full min-w-0 [perspective:1200px]">
      <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="absolute inset-0 flex flex-col items-center justify-center border border-white/10 bg-zinc-800/95 px-4 text-center [backface-visibility:hidden]">
          <h3 className="font-serif text-lg font-semibold text-white">{title}</h3>
          <p className="mt-2 text-xs text-white/50">Hover for details</p>
        </div>
        <div className="absolute inset-0 flex flex-col justify-center overflow-y-auto border border-amber-500/30 bg-zinc-900 px-4 py-3 text-left [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <ul className="list-inside list-disc space-y-1 text-xs leading-snug text-white/90">
            {bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

function SectionDivider() {
  return (
    <div className="mx-auto flex max-w-md items-center gap-4 py-2">
      <div className="h-px flex-1 bg-amber-500/40" />
      <span className="text-xs font-bold uppercase tracking-[0.35em] text-amber-500">
        Services
      </span>
      <div className="h-px flex-1 bg-amber-500/40" />
    </div>
  );
}

function DetailSection({
  id,
  num,
  title,
  children,
}: {
  id: string;
  num: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-28 border-t border-white/5 bg-zinc-950 py-16 text-white lg:scroll-mt-32 lg:py-20"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <p className="font-serif text-2xl text-amber-500">{num}</p>
        <h2 className="mt-2 font-serif text-2xl font-semibold uppercase tracking-wide text-white sm:text-3xl">
          {title}
        </h2>
        <div className="mt-4 h-px w-24 bg-amber-500" />
        <div className="mt-8 text-zinc-300">{children}</div>
      </div>
    </section>
  );
}

export function ServicesPageView() {
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
              <span className="text-white/90">Services</span>
            </nav>
            <h1 className="mt-6 max-w-2xl font-serif text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              The Al Hayat Advantage: Interior &amp; Contracting Services
            </h1>
            <p className="mt-4 max-w-xl text-lg text-white/80">
              Transparent processes, timely execution, and competitive pricing.
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

      <main className="flex-1">
        <section className="bg-white py-10 lg:py-12">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
            {bannerTiles.map((b) => (
              <Link
                key={b.href}
                href={b.href}
                className="group relative block aspect-[5/3] overflow-hidden border border-zinc-200 shadow-sm transition hover:shadow-md"
              >
                <Image
                  src={b.image}
                  alt=""
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
                  <h2 className="font-serif text-lg font-semibold text-white drop-shadow sm:text-xl">
                    {b.title}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="bg-zinc-900 py-12 text-white lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionDivider />
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {serviceFlipCards.map((c) => (
                <FlipCapabilityCard key={c.title} {...c} />
              ))}
            </div>
          </div>
        </section>

        <DetailSection id="fit-out" num="(1)" title="INTERIOR DECORATION - FIT OUT DIVISION">
          <div className="space-y-6 text-base leading-relaxed">
            <p>
              Al Hayat Interiors provides a bespoke specialist interiors fit out service as
              an integral part of the overall business. We started our journey with Introducing
              complete fit outs &amp; renovation for retail shops all over Abu Dhabi &amp; Al Ain
              (The Baqala Project) as per the Regulatory Act by government of Abu Dhabi to bring
              up high standards and facilities for Retail shops. We have achieved the successful
              completion of more than 500 Retail shops all across Abu Dhabi &amp; Al Ain. We are
              specialist in Interior Designing for Hotels, Restaurants, Cafeterias, Corporate
              offices, and Residential (villas / palaces) sectors. With over a number years of
              experience in the region we have built an enviable reputation for our extensive
              portfolio of turnkey fit out, Joinery works and furnishings projects, where the
              highest quality delivery and client satisfaction is at the forefront of our service
              at all times.
            </p>
            <p>
              Working closely with our clients, we pride ourselves on our ability to solve
              problems, find innovative solutions and deliver the most demanding standards of
              finishes.
            </p>
            <p>
              We directly employ a workforce comprising in-house specialists in Interior
              Designing, Acoustic Wall Cladding, Fabric Acoustic Cladding, Fire Resistance Doors,
              Gypsum, specialist moldings and finishing, tiling, marble to interior fit out
              carpenters, masons, decorators and a management team who understand high quality
              finishes.
            </p>
            <p className="font-semibold text-white">Key Fit–Out Offers:</p>
            <ul className="list-inside list-disc space-y-2 text-zinc-300">
              {fitOutOffers.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        </DetailSection>

        <DetailSection
          id="CARPENTRY"
          num="(2)"
          title="INTERIOR FURNISHING & CARPENTRY DIVISION"
        >
          <div className="space-y-6 text-base leading-relaxed">
            <p>
              We are specialist in Home &amp; Commercial Furnishing. We manufacture custom made
              office, retail shop &amp; home furniture. We have our furniture manufacturing unit
              in Dubai. Having highly skilled and Experienced In-house carpenters.
            </p>
            <p className="font-semibold text-white">Key Home Furnishing Offers:</p>
            <ul className="list-inside list-disc space-y-2 text-zinc-300">
              {furnishingOffers.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        </DetailSection>

        <DetailSection id="mep" num="(3)" title="MEP CONTRACTING">
          <div className="space-y-6 text-base leading-relaxed">
            <p>
              <strong className="text-white">Electrical Works:</strong> Our Electrical Division
              handles all aspects of Electrical Works and the services. Including all Internal and
              External Power &amp; Lighting Works, Installation of dressing of main and sub main
              Distribution board etc.
            </p>
            <p>
              <strong className="text-white">Mechanical HVAC Works:</strong> We have our HVAC
              Division highly equipped to handle all aspects coming under the Air Conditioning and
              Ventilation Industry. This includes Closed Control Air Conditioning, Ventilation
              Systems, Heating Systems, Extract Systems. Installation of Water Cooled or Air Cooled
              Condenser, Air Handling &amp; Fan Coil Units, Chilled Water Piping, Multi Split DX
              Units, Duct Works including Grilles &amp; Diffusers, VAV Systems, Precision Units);
              Hot Water System (Electric water heaters, pumps, Booster pump &amp; piping)
            </p>
            <p>
              <strong className="text-white">Plumbing Works:</strong> The services consist of
              complete Supply &amp; Installation of PVC UPVC, PPR, HDPE, Steel, GI and Copper Pipe
              works; All Sanitary works; Water Supply Network; Drainage Network; Pipe Lines; Pumps;
              Central Water Filtration System; Entire Fire Fighting System including Fire Fighting
              Pump, Piping and Sprinkler Systems.
            </p>
            <p>
              <strong className="text-white">Fire Fighting Works:</strong> We cover entire Fire
              Fighting System including Fire Fighting Pump, Piping and Sprinkler Systems.
            </p>
          </div>
        </DetailSection>

        <DetailSection id="approval" num="(4)" title="APPROVALS & DRAWINGS DIVISION">
          <div className="space-y-6 text-base leading-relaxed">
            <p>
              Approval processes can be a mine field if you don&apos;t have someone to project
              manage the process. Al Hayat is a fully experienced team who already have
              relationships with authorities and facility management companies. We discuss project
              requirements with the appropriate local authority departments and take their comments
              and views into account during the early design phase. By engaging the relevant
              authorities in the preliminary stages, we are then fully informed and prepared, thus
              ensuring final design approval is secured.
            </p>
            <p>
              We are specialized in taking APPROVALS from all authorities in Dubai including but
              not limited to Dubai Municipality, Dubai Civil Defense, Dubai Electricity &amp;
              Water Authority Etc.
            </p>
            <p>
              We take approvals from authorities on your behalf and you can focus on the completion
              of fit out work. We have our own in-house team of expert designers and engineers with
              years of experience. We prepare all the required full set of drawings to the
              authorities and take approval on behalf of your company.
            </p>
            <p className="font-semibold text-white">Key Offers:</p>
            <ul className="list-inside list-disc space-y-2 text-zinc-300">
              {approvalOffers.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        </DetailSection>
      </main>

      <Footer />
    </div>
  );
}
