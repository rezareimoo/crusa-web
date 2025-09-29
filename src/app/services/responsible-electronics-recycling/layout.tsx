import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recycle Electronics & E-Waste Georgia | Computer Recyclers USA",
  description:
    "Recycle electronics and e-waste responsibly in Georgia. R2 certified facility, zero landfill, free pickup. Serving Atlanta metro & Southeast.",
  keywords:
    "recycle electronics, e-waste, electronics recycling georgia, recycle electronics atlanta, e-waste disposal, responsible electronics recycling, R2 certified",
  alternates: {
    canonical: "https://crusallc.com/services/responsible-electronics-recycling",
  },
  openGraph: {
    title: "Recycle Electronics & E-Waste Georgia",
    description: "Recycle electronics and e-waste responsibly in Georgia. R2 certified facility, zero landfill guarantee, free pickup throughout Georgia.",
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
    title: "Recycle Electronics & E-Waste Georgia",
    description: "Recycle electronics and e-waste responsibly. R2 certified, zero landfill guarantee throughout Georgia.",
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