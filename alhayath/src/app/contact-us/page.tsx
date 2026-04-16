import Link from "next/link";

export const metadata = {
  title: "Contact us — AL HAYATH TECHNICAL SERVICES LLC",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-24">
      <h1 className="font-serif text-3xl">Contact us</h1>
      <ul className="mt-6 space-y-2 text-zinc-700">
        <li>Business Bay, UAE — NEAR SOBHA CENTER, 393317</li>
        <li>
          <a href="tel:+971505189503" className="text-amber-700 hover:underline">
            +971 50 5189503
          </a>
        </li>
        <li>
          <a
            href="mailto:info@alhayatinteriors.com"
            className="text-amber-700 hover:underline"
          >
            info@alhayatinteriors.com
          </a>
        </li>
      </ul>
      <Link href="/" className="mt-8 inline-block text-amber-600 hover:underline">
        ← Back to home
      </Link>
    </div>
  );
}
