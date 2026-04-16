import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions — AL HAYATH TECHNICAL SERVICES LLC",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24">
      <h1 className="font-serif text-3xl">Terms &amp; Conditions</h1>
      <p className="mt-4 text-zinc-600">
        Placeholder page. Paste the terms from your legal team or from the
        WordPress page when ready.
      </p>
      <Link href="/" className="mt-8 inline-block text-amber-600 hover:underline">
        ← Back to home
      </Link>
    </div>
  );
}
