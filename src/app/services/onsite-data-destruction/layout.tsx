import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Onsite Data Destruction Services Georgia | Computer Recyclers USA",
  description:
    "Secure onsite data destruction in Georgia. NIST 800-88 compliant, witnessed shredding, certificates provided. R2 certified, serving Atlanta, Savannah, Augusta & all Georgia.",
  keywords:
    "onsite data destruction Georgia, secure data destruction, hard drive shredding Atlanta, NIST 800-88 compliant, data destruction certificates, R2 certified",
  alternates: {
    canonical: "https://crusallc.com/services/onsite-data-destruction",
  },
  openGraph: {
    title: "Onsite Data Destruction Services Georgia",
    description: "Secure onsite data destruction with witnessed shredding and certificates of destruction. NIST 800-88 compliant throughout Georgia.",
    url: "https://crusallc.com/services/onsite-data-destruction",
    siteName: "Computer Recyclers USA",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://crusallc.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Computer Recyclers USA - Onsite Data Destruction Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Onsite Data Destruction Services Georgia",
    description: "Secure onsite data destruction with witnessed shredding and certificates. NIST 800-88 compliant throughout Georgia.",
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

export default function OnsiteDataDestructionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}