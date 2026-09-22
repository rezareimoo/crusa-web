import type { Metadata } from "next";

// CONFIRM: URL may change to /service-area/atlanta if owner prefers that pattern
const PAGE_DESCRIPTION =
  "R2v3-certified computer recycling and IT disposal for Atlanta businesses. Free business pickup, certified data destruction, serialized certificates.";

export const metadata: Metadata = {
  title: "Computer Recycling Atlanta, GA | Computer Recyclers USA",
  description: PAGE_DESCRIPTION,
  keywords:
    "computer recycling Atlanta, Atlanta computer recycling, computer disposal Atlanta GA, recycle computers Atlanta, laptop recycling Atlanta, IT asset disposal Atlanta",
  alternates: {
    canonical: "https://www.crusallc.com/computer-recycling-atlanta",
  },
  openGraph: {
    title: "Computer Recycling in Atlanta, GA",
    description:
      "R2v3-certified computer recycling, data destruction, and free business pickup across metro Atlanta. Suwanee facility, 30 minutes from downtown.",
    url: "https://www.crusallc.com/computer-recycling-atlanta",
    siteName: "Computer Recyclers USA",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.crusallc.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Computer Recyclers USA - Computer Recycling Atlanta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Computer Recycling Atlanta | R2v3 Certified",
    description:
      "Free business pickup, certified data destruction, and responsible recycling for metro Atlanta.",
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

export default function ComputerRecyclingAtlantaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
