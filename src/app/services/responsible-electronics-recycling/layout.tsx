import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Responsible Electronics Recycling Georgia | Computer Recyclers USA",
  description:
    "R2 v3 certified electronics recycling in Georgia. Zero landfill guarantee, EPA compliant, 95%+ material recovery. Serving Atlanta, Savannah, Augusta & all Georgia.",
  keywords:
    "responsible electronics recycling Georgia, R2 certified recycling Atlanta, eco-friendly e-waste disposal, electronics recycling Suwanee, EPA compliant recycling",
  alternates: {
    canonical: "https://crusallc.com/services/responsible-electronics-recycling",
  },
  openGraph: {
    title: "Responsible Electronics Recycling Georgia",
    description: "R2 v3 certified electronics recycling with zero landfill guarantee and 95%+ material recovery throughout Georgia.",
    url: "https://crusallc.com/services/responsible-electronics-recycling",
    siteName: "Computer Recyclers USA",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://crusallc.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Computer Recyclers USA - Responsible Electronics Recycling Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Responsible Electronics Recycling Georgia",
    description: "R2 v3 certified electronics recycling with zero landfill guarantee. Protect the environment throughout Georgia.",
    images: ["https://crusallc.com/logo.png"],
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

export default function ResponsibleElectronicsRecyclingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}