import type { Metadata } from "next";
import {
  FAQ_PAGE_DESCRIPTION,
  faqSections,
} from "./faq-data";

export const metadata: Metadata = {
  title:
    "FAQs | Computer Recyclers USA | Data Destruction, Pickup & Recycling Georgia",
  description: FAQ_PAGE_DESCRIPTION,
  keywords:
    "electronics recycling FAQ, data destruction FAQ, NIST 800-88 Georgia, R2 certified recycler FAQ, free IT pickup Georgia, secure data destruction FAQ, HIPAA electronics recycling Georgia",
  alternates: {
    canonical: "https://www.crusallc.com/faq",
  },
  openGraph: {
    title: "FAQs | Computer Recyclers USA",
    description: FAQ_PAGE_DESCRIPTION,
    url: "https://www.crusallc.com/faq",
    siteName: "Computer Recyclers USA",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.crusallc.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Computer Recyclers USA, R2 Certified Electronics Recycling",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQs | Computer Recyclers USA",
    description: FAQ_PAGE_DESCRIPTION,
    images: ["https://www.crusallc.com/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const ORGANIZATION_ID = "https://www.crusallc.com/#organization";

const faqStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": "https://www.crusallc.com/faq#faqpage",
      url: "https://www.crusallc.com/faq",
      mainEntity: faqSections.flatMap((section) =>
        section.items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        }))
      ),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.crusallc.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "About Us",
          item: "https://www.crusallc.com/about",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "FAQs",
          item: "https://www.crusallc.com/faq",
        },
      ],
    },
    {
      "@type": "Service",
      name: "Onsite Data Destruction Services",
      description:
        "Secure, witnessed data destruction at your location in Georgia. NIST 800-88 compliant with certificates of destruction and zero data recoverability guarantee.",
      url: "https://www.crusallc.com/services/onsite-data-destruction",
      areaServed: {
        "@type": "State",
        name: "Georgia",
      },
      provider: { "@id": ORGANIZATION_ID },
    },
    {
      "@type": "Service",
      name: "Free IT Equipment Pickup Services",
      description:
        "Complimentary B2B IT equipment pickup for businesses and corporate organizations throughout Georgia. Professional packing assistance and fully audited reports provided.",
      url: "https://www.crusallc.com/services/free-it-equipment-pickup",
      areaServed: {
        "@type": "State",
        name: "Georgia",
      },
      provider: { "@id": ORGANIZATION_ID },
    },
    {
      "@type": "Service",
      name: "Responsible Electronics Recycling Services",
      description:
        "R2 v3 certified electronics recycling in Georgia. Zero landfill guarantee, EPA compliant processes, detailed environmental impact reporting.",
      url: "https://www.crusallc.com/services/responsible-electronics-recycling",
      areaServed: {
        "@type": "State",
        name: "Georgia",
      },
      provider: { "@id": ORGANIZATION_ID },
    },
  ],
};

export default function FaqLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />
      {children}
    </>
  );
}
