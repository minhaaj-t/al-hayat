/** Copy of alhayatinteriors.com/services/ — flip titles, backs, and long sections. */

export const serviceBanners = [
  { href: "#fit-out", title: "Interior Fit-Out & Decoration" },
  { href: "#CARPENTRY", title: "Furnishing & Carpentry" },
  { href: "#mep", title: "Fire & MEP Systems" },
  { href: "#approval", title: "Formal Approvals" },
] as const;

export type FlipCard = { title: string; bullets: string[] };

export const serviceFlipCards: FlipCard[] = [
  {
    title: "Design & Planning",
    bullets: [
      "Designing",
      "Space Planning",
      "Project Planning",
      "All Kind of Authorities Approvals",
    ],
  },
  {
    title: "MEP & Safety Systems",
    bullets: [
      "All Kinds of Electrical Works",
      "Fire Fighting",
      "Fire Alarm & Voice Evacuation",
      "Heat Ventilation & Air Conditioning (HVAC)",
      "All Kinds of Plumbing Works",
    ],
  },
  {
    title: "Interior Fit-Out Works",
    bullets: [
      "Carpentry",
      "CNC – Mashrabiya Cutting",
      "Block Masonry",
      "Drywall & Gypsum Carpentry",
      "Plastering",
      "Painting",
      "Ceiling Works",
      "Water Proofing",
    ],
  },
  {
    title: "Façade & Structural Works",
    bullets: [
      "Aluminum Cladding Works",
      "Glass Fixing",
      "Welding & Lathe",
      "Structural Cabling",
    ],
  },
  {
    title: "Flooring & Finishes",
    bullets: ["Tiling Works", "Parquet Flooring"],
  },
  {
    title: "Security & Furnishing",
    bullets: ["Home & Office Security Systems", "Curtain Works", "Sofa Making"],
  },
  {
    title: "Specialized Services",
    bullets: ["Scaffolding", "Kiosks Designing"],
  },
  {
    title: "Project Management & Execution",
    bullets: ["We offer full-spectrum project management services"],
  },
];

export const fitOutOffers = [
  "Space Planning & 3d Designing",
  "Dry wall, Gypsum partition & False Ceiling Works",
  "Water Proofing Works",
  "All kinds of flooring works.",
  "Interior - Exterior Painting",
  "Aluminum & Glass Works",
  "Electrical, Lighting, Plumbing & HVAC & Fire Fighting Works",
  "Wall Paper & Sign Board Works.",
];

export const furnishingOffers = [
  "All Kind of Solid Wood Carpentry",
  "Joinery Works",
  "Wooden wall Paneling",
  "Wooden Parquet flooring",
  "Kiosk designing",
  "Floor Carpeting",
  "Curtain works etc.",
];

export const approvalOffers = [
  "Dubai Municipality Approvals",
  "Dubai Civil Defense Approvals",
  "Dubai Electricity & Water Authorities Approvals",
  "TECOM – Dubai Cluster Creative Authorities Approval",
  "Concordia Approval Etc.",
];
