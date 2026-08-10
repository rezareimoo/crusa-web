import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Electronics Recycling & Data Destruction Georgia | Computer Recyclers USA",
  description:
    "Statewide electronics recycling and data destruction for Georgia businesses. R2 certified, HIPAA-aligned. Onsite destruction, free pickup, responsible recycling across Georgia.",
  keywords:
    "electronics recycling Georgia, data destruction Georgia, IT equipment pickup Georgia, R2 certified, statewide service",
  alternates: {
    canonical: "https://www.crusallc.com/service-area/georgia",
  },
  openGraph: {
    title: "Electronics Recycling & Data Destruction Services in Georgia",
    description:
      "Statewide electronics recycling and data destruction for Georgia businesses. R2 certified, compliance-focused. Serving Atlanta metro, North, Central, and South Georgia.",
    url: "https://www.crusallc.com/service-area/georgia",
    siteName: "Computer Recyclers USA",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.crusallc.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Computer Recyclers USA - Electronics Recycling & Data Destruction in Georgia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Electronics Recycling & Data Destruction Services in Georgia",
    description:
      "Statewide electronics recycling and data destruction for Georgia businesses. R2 certified, compliance-focused.",
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

export default function GeorgiaServiceAreaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
