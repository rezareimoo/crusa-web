export type ServiceLink = {
  name: string;
  href: string;
  description: string;
  children?: ServiceLink[];
};

/** Nav + footer service links (destruction hierarchy nested under parent). */
export const serviceNavLinks: ServiceLink[] = [
  {
    name: "Data Destruction & Sanitization",
    href: "/services/data-destruction",
    description: "NIST 800-88 paths for Georgia businesses",
    children: [
      {
        name: "Hard Drive & SSD Shredding",
        href: "/services/hard-drive-shredding",
        description: "Physical destruction at our Suwanee facility",
      },
      {
        name: "Data Sanitization",
        href: "/services/data-sanitization",
        description: "R2v3 Appendix B logical erasure for reuse",
      },
    ],
  },
  {
    name: "Free IT Equipment Pickup",
    href: "/services/free-it-equipment-pickup",
    description: "Complimentary pickup throughout Georgia",
  },
  {
    name: "Responsible Electronics Recycling",
    href: "/services/responsible-electronics-recycling",
    description: "R2 v3 certified environmental recycling",
  },
];

/** Flat list for footer and sitemap-style link columns. */
export const footerServiceLinks: { name: string; href: string }[] = [
  {
    name: "Data Destruction & Sanitization",
    href: "/services/data-destruction",
  },
  {
    name: "Hard Drive & SSD Shredding",
    href: "/services/hard-drive-shredding",
  },
  {
    name: "Data Sanitization",
    href: "/services/data-sanitization",
  },
  {
    name: "Free IT Equipment Pickup",
    href: "/services/free-it-equipment-pickup",
  },
  {
    name: "Responsible Electronics Recycling",
    href: "/services/responsible-electronics-recycling",
  },
];

export const companyLinks: { name: string; href: string }[] = [
  { name: "About", href: "/about" },
  { name: "FAQs", href: "/faq" },
  { name: "Certificates", href: "/certificates" },
];
