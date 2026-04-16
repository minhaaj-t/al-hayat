import Link from "next/link";

export const metadata = {
  title: "Privacy Policy — AL HAYATH TECHNICAL SERVICES LLC",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24">
      <h1 className="font-serif text-3xl">Privacy Policy</h1>
      <p className="mt-4 text-sm text-zinc-600">
        Company: Al Hayat Interiors L.L.C. / AL HAYATH TECHNICAL SERVICES LLC.
        Replace this summary with your full legal text from the original site.
      </p>
      <p className="mt-4 text-zinc-700">
        For questions:{" "}
        <a href="mailto:info@alhayatinteriors.com" className="text-amber-700">
          info@alhayatinteriors.com
        </a>
        , +971 50 5189503
      </p>
      <Link href="/" className="mt-8 inline-block text-amber-600 hover:underline">
        ← Back to home
      </Link>
    </div>
  );
}
