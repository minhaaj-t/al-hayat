/** Local copies under /public/site — avoids remote image fetch in dev/production. */

export const siteImages = {
  logo: "/site/logo.png",
  about: "/site/about.png",
  hero: ["/site/hero-1.png", "/site/hero-2.png", "/site/hero-3.png"] as const,
  services: [
    "/site/svc-fitout.jpg",
    "/site/svc-furnish.jpg",
    "/site/svc-mep.jpg",
    "/site/svc-approvals.jpg",
  ] as const,
  projects: [
    "/site/proj-01.jpeg",
    "/site/proj-02.jpeg",
    "/site/proj-03.jpeg",
    "/site/proj-04.jpeg",
    "/site/proj-05.jpeg",
  ] as const,
  /** Services page hero row (compressed JPEGs). */
  servicesBanners: [
    "/site/svc-banner-fitout.jpg",
    "/site/svc-banner-furnish.jpg",
    "/site/svc-banner-mep.jpg",
    "/site/svc-banner-approval.jpg",
  ] as const,
};
