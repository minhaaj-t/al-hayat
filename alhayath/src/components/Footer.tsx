import { siteImages } from "@/lib/site-assets";
import Image from "next/image";
import Link from "next/link";

const locations = ["Abu Dhabi", "Dubai", "Sharjah", "Ajman"];

const useful = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-conditions", label: "Terms & Conditions" },
  { href: "#", label: "Latest News" },
  { href: "#", label: "Our Sitemap" },
];

const connect = [
  { href: "#", label: "Instagram profile" },
  { href: "/projects", label: "Projects" },
  { href: "#", label: "Reviews" },
  { href: "/contact-us", label: "Contact Us" },
];

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <Image
            src={siteImages.logo}
            alt="Al Hayath"
            width={160}
            height={48}
            className="h-10 w-auto"
          />
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            Creative innovations, timely execution, and lasting impressions —
            that&apos;s the Al Hayat promise.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-white/80">
            <li>Business Bay, UAE — NEAR SOBHA CENTER, 393317</li>
            <li>
              Phone:{" "}
              <a href="tel:+971505189503" className="hover:text-amber-300">
                +971 50 5189503
              </a>
            </li>
            <li>
              Mail:{" "}
              <a
                href="mailto:info@alhayatinteriors.com"
                className="hover:text-amber-300"
              >
                info@alhayatinteriors.com
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="text-xs font-bold uppercase tracking-widest text-amber-500">
            Locations
          </h5>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {locations.map((c) => (
              <li key={c}>
                <a href="#" className="hover:text-amber-300">
                  {c}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="text-xs font-bold uppercase tracking-widest text-amber-500">
            Useful links
          </h5>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {useful.map((u) => (
              <li key={u.label}>
                <Link href={u.href} className="hover:text-amber-300">
                  {u.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="text-xs font-bold uppercase tracking-widest text-amber-500">
            Connect us
          </h5>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {connect.map((c) => (
              <li key={c.label}>
                <Link href={c.href} className="hover:text-amber-300">
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} AL HAYATH TECHNICAL SERVICES LLC ·{" "}
        <a
          href="https://alhayatinteriors.com/"
          className="hover:text-amber-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          alhayatinteriors.com
        </a>
      </div>
    </footer>
  );
}
