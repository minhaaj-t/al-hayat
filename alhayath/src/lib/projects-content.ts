/** Portfolio listing — mirrors slugs exported from alhayatinteriors.com portfolio singles. */

import { portfolioDetails } from "@/lib/portfolio-detail";

export type ProjectCategory = "civil" | "fit-out" | "joinery" | "kitchen";

export const portfolioFilterTabs: { id: "all" | ProjectCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "civil", label: "Civil & Paint Works" },
  { id: "fit-out", label: "Fit-Out Works" },
  { id: "joinery", label: "Joinery & Furnishing" },
  { id: "kitchen", label: "Kitchen & Equipment" },
];

export type PortfolioProject = {
  slug: string;
  title: string;
  url: string;
  image: string;
  largeImage?: string;
  categories: ProjectCategory[];
};

/** Display order aligned with the mirrored portfolio pages. */
const PORTFOLIO_SLUG_ORDER = [
  "wadi-luqaimat-and-chebab-restaurant",
  "deira-glass-shop",
  "charcoal-chowk-restaurant",
  "sharjah-muweila-loundry",
  "mra-hotel-deira",
  "complete-civil-worksfor-mall",
  "green-chilli-restaurant-interior-design",
  "emirates-transport-villas-rennovation",
  "sher-sha-shai-traditional-cafeteria",
  "naif-view-cafeteria",
  "city-view-cafeteria",
  "majilis-renovation-al-rawabi",
  "logton-ibn-battutha-mall",
  "mini-mart-damac-properties",
  "al-madina-super-market-academic-city",
  "al-burj-super-market",
  "imdadiya-super-market",
  "a-lacus-bibendum-pulvinar",
  "restaurant-happy-way",
] as const;

type Slug = (typeof PORTFOLIO_SLUG_ORDER)[number];

type ProjectOverride = {
  image?: string;
  largeImage?: string;
  categories?: ProjectCategory[];
};

const OVERRIDES: Partial<Record<Slug, ProjectOverride>> = {
  "deira-glass-shop": { image: "/site/proj-01.jpeg" },
  "sharjah-muweila-loundry": { image: "/site/proj-03.jpeg" },
  "charcoal-chowk-restaurant": { image: "/site/proj-04.jpeg" },
  "mra-hotel-deira": {
    image: "/site/portfolio-mra.jpeg",
    largeImage: "/site/portfolio-mra.jpeg",
  },
  "wadi-luqaimat-and-chebab-restaurant": {
    image: "/site/proj-02.jpeg",
    largeImage: "/site/proj-02.jpeg",
    categories: ["civil", "fit-out", "joinery", "kitchen"],
  },
  "green-chilli-restaurant-interior-design": {
    image: "/site/proj-05.jpeg",
    largeImage: "/site/proj-05.jpeg",
    categories: ["civil", "fit-out", "joinery", "kitchen"],
  },
  "complete-civil-worksfor-mall": {
    image:
      "https://buildiyo.com/wp-content/uploads/2025/03/retail_mall_under_construction.png",
    categories: ["civil"],
  },
  "emirates-transport-villas-rennovation": {
    image:
      "https://i.pinimg.com/736x/1e/08/2d/1e082d0f6c10bbbcf9fea3d63fc97f0c.jpg",
    categories: ["civil"],
  },
  "sher-sha-shai-traditional-cafeteria": {
    image:
      "https://worldarchitecture.org/imgcache/bin-563daea586c20eca4e6debfefbae7e58.jpg",
    categories: ["kitchen"],
  },
  "naif-view-cafeteria": {
    image: "/site/portfolio-thumb-641.jpeg",
    largeImage: "/site/portfolio-thumb-641.jpeg",
    categories: ["fit-out"],
  },
  "majilis-renovation-al-rawabi": {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk7IJ7ELpDFV94CxWLp7iJpTNz9XBiO1yZkg&s",
  },
  "logton-ibn-battutha-mall": {
    image:
      "https://www.shutterstock.com/image-photo/samarinda-indonesia-march-26-2025-600nw-2603309655.jpg",
  },
  "mini-mart-damac-properties": {
    image:
      "https://walkthru.ae/wp-content/uploads/2021/05/CONSTRUCION-SUBPAGE-1200x795.jpg",
  },
  "al-madina-super-market-academic-city": {
    image:
      "https://www.brrarch.com/wp-content/uploads/WFMlakeview_Interior_09_website.jpg",
  },
  "al-burj-super-market": {
    image:
      "https://img2.10bestmedia.com/Images/Photos/425201/Gelsons-Markets_54_990x660.jpg?auto=webp&width=3840&quality=75",
  },
  "imdadiya-super-market": {
    image:
      "https://5.imimg.com/data5/SELLER/Default/2023/3/296527734/NR/IN/WH/6828991/restaurant-construction-service.jpg",
  },
  "a-lacus-bibendum-pulvinar": {
    image: "https://milo-designs.com/2007-coffee-in/baustelle1.jpg",
  },
  "restaurant-happy-way": {
    image:
      "https://rpcgeneralcontractor.com/wp-content/uploads/2025/07/complete-restaurant-construction-checklist.jpg",
  },
};

function buildPortfolioProjects(): PortfolioProject[] {
  return PORTFOLIO_SLUG_ORDER.map((slug) => {
    const d = portfolioDetails[slug];
    if (!d) {
      throw new Error(`Missing portfolio detail for slug: ${slug}`);
    }
    const o = OVERRIDES[slug] ?? {};
    const remoteThumb = d.gallery[0];
    const fallback = "/site/portfolio-thumb-641.jpeg";
    const image = o.image ?? remoteThumb ?? fallback;
    const largeImage = o.largeImage ?? remoteThumb ?? image;

    return {
      slug,
      title: d.heroTitle,
      url: `/portfolio/${slug}/`,
      image,
      largeImage: largeImage === image ? undefined : largeImage,
      categories: o.categories ?? [],
    };
  });
}

export const portfolioProjects: PortfolioProject[] = buildPortfolioProjects();
