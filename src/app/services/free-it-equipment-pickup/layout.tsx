import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free IT Equipment Pickup Georgia | Computer Recyclers USA",
  description:
    "Free IT equipment pickup throughout Georgia. No quantity limits, professional packing assistance, fully audited reports. Serving Atlanta, Savannah, Augusta & all Georgia.",
  keywords:
    "free IT equipment pickup Georgia, computer pickup Atlanta, electronics pickup service, IT disposal Georgia, equipment removal service, R2 certified",
  alternates: {
    canonical: "https://crusallc.com/services/free-it-equipment-pickup",
  },
  openGraph: {
    title: "Free IT Equipment Pickup Throughout Georgia",
    description: "Complimentary IT equipment pickup service with no quantity limits. Professional, convenient, and completely free throughout Georgia.",
    url: "https://crusallc.com/services/free-it-equipment-pickup",
    siteName: "Computer Recyclers USA",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://crusallc.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Computer Recyclers USA - Free IT Equipment Pickup Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free IT Equipment Pickup Georgia",
    description: "Complimentary IT equipment pickup service with no quantity limits. Professional and convenient throughout Georgia.",
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

export default function FreeITEquipmentPickupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}