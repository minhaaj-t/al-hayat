import { PortfolioDetailView } from "@/components/portfolio/PortfolioDetailView";
import {
  getPortfolioDetail,
  getPortfolioSlugs,
} from "@/lib/portfolio-detail";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getPortfolioSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const d = getPortfolioDetail(slug);
  if (!d) {
    return { title: "Portfolio — AL HAYATH TECHNICAL SERVICES LLC" };
  }
  return {
    title: `${d.heroTitle} — AL HAYATH TECHNICAL SERVICES LLC`,
    description: d.subtitle || d.heroTitle,
  };
}

export default async function PortfolioProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const d = getPortfolioDetail(slug);
  if (!d) notFound();

  const prevSlug =
    d.prevSlug && getPortfolioDetail(d.prevSlug) ? d.prevSlug : null;
  const nextSlug =
    d.nextSlug && getPortfolioDetail(d.nextSlug) ? d.nextSlug : null;

  return (
    <PortfolioDetailView detail={d} prevSlug={prevSlug} nextSlug={nextSlug} />
  );
}
