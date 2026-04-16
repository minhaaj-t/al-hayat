import raw from "@/data/portfolio-detail.json";

export type PortfolioDetail = {
  slug: string;
  heroTitle: string;
  subtitle: string;
  gallery: string[];
  videoUrl: string | null;
  sidebarHtml: string;
  prevSlug: string | null;
  nextSlug: string | null;
};

export const portfolioDetails = raw as Record<string, PortfolioDetail>;

export function getPortfolioSlugs(): string[] {
  return Object.keys(portfolioDetails);
}

export function getPortfolioDetail(slug: string): PortfolioDetail | undefined {
  return portfolioDetails[slug];
}
