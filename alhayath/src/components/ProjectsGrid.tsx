import { siteImages } from "@/lib/site-assets";
import Image from "next/image";
import Link from "next/link";

const [p1, p2, p3, p4, p5] = siteImages.projects;

type Tile = { image: string; title: string };

function ProjectBanner({
  tile,
  className,
  sizes,
  priority,
}: {
  tile: Tile;
  className?: string;
  sizes: string;
  /** Eager-load when this tile is likely LCP (above the fold). */
  priority?: boolean;
}) {
  return (
    <article
      className={`group relative min-h-[220px] w-full min-w-0 overflow-hidden border border-white/10 lg:min-h-0 ${className ?? ""}`}
    >
      <div className="relative h-full min-h-[220px] w-full min-w-0 lg:absolute lg:inset-0 lg:min-h-0">
        <Image
          src={tile.image}
          alt={tile.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes={sizes}
          priority={priority}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 z-[1] flex items-end justify-between p-4">
          <h3 className="font-serif text-xl">{tile.title}</h3>
          <span className="text-xs font-semibold uppercase tracking-wide text-white/80">
            View more
          </span>
        </div>
      </div>
    </article>
  );
}

/**
 * Elementor 620af5bb: four equal tracks — col1 (25%) two tiles, col2 (25%) one tall tile
 * (same width as col1), cols3–4 (50%) two wide tiles.
 */
export function ProjectsGrid() {
  const tiles: Tile[] = [
    { image: p1, title: "AL AIN" },
    { image: p2, title: "AL AIN" },
    { image: p3, title: "AL AIN" },
    { image: p4, title: "DUBAI DIP" },
    { image: p5, title: "DUBAI DIP" },
  ];

  const narrow = "(max-width: 1024px) 100vw, 25vw";
  const wide = "(max-width: 1024px) 100vw, 50vw";

  return (
    <section className="relative bg-zinc-950 py-16 text-white lg:py-24">
      <div className="absolute inset-0 bg-zinc-900/80" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-serif text-3xl sm:text-4xl">Our Projects</h2>
        <div className="mx-auto mt-4 h-px w-24 bg-amber-500" />
        <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-white/75">
          Who are in extremely love with eco friendly system
        </p>

        <div
          className="mt-14 flex min-w-0 flex-col gap-4 lg:grid lg:min-h-[560px] lg:grid-cols-4 lg:grid-rows-2 lg:auto-rows-fr lg:gap-4"
          data-section="projects-mosaic"
        >
          <ProjectBanner
            tile={tiles[0]}
            sizes={narrow}
            priority
            className="lg:col-span-1 lg:col-start-1 lg:row-start-1 lg:h-full"
          />
          <ProjectBanner
            tile={tiles[1]}
            sizes={narrow}
            className="lg:col-span-1 lg:col-start-1 lg:row-start-2 lg:h-full"
          />
          <ProjectBanner
            tile={tiles[2]}
            sizes={narrow}
            className="lg:col-span-1 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:h-full"
          />
          <ProjectBanner
            tile={tiles[3]}
            sizes={wide}
            priority
            className="lg:col-span-2 lg:col-start-3 lg:row-start-1 lg:h-full"
          />
          <ProjectBanner
            tile={tiles[4]}
            sizes={wide}
            className="lg:col-span-2 lg:col-start-3 lg:row-start-2 lg:h-full"
          />
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 border border-white/30 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-amber-400 hover:text-amber-300"
          >
            <svg
              className="h-4 w-4 shrink-0 opacity-90"
              viewBox="0 0 512 512"
              fill="currentColor"
              aria-hidden={true}
            >
              <path d="M464 0H144c-26.5 0-48 21.5-48 48v48H48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48v-48h48c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-96 464H48V256h320v208zm96-96h-48V144c0-26.5-21.5-48-48-48H144V48h320v320z" />
            </svg>
            Browse all Works
          </Link>
        </div>
      </div>
    </section>
  );
}
