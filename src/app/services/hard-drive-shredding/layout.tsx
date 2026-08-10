import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hard Drive Shredding Atlanta | Computer Recyclers USA",
  description:
    "Hard drive shredding Atlanta and Georgia. HDD & SSD physical destruction under R2v3 Appendix B. Serialized certificates, free business pickup. Schedule today.",
  keywords:
    "hard drive shredding Atlanta, SSD shredding Georgia, physical data destruction, R2v3 Appendix B, certificate of destruction, hard drive destruction Atlanta",
  alternates: {
    canonical: "https://www.crusallc.com/services/hard-drive-shredding",
  },
  openGraph: {
    title: "Hard Drive & SSD Shredding in Atlanta and Georgia",
    description:
      "Physical destruction of HDDs, SSDs, and storage media under R2v3 Appendix B. NIST 800-88 methods by media type. Serialized certificates of destruction.",
    url: "https://www.crusallc.com/services/hard-drive-shredding",
    siteName: "Computer Recyclers USA",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.crusallc.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Computer Recyclers USA - Hard Drive Shredding Atlanta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hard Drive Shredding Atlanta Georgia",
    description:
      "HDD & SSD shredding at our R2v3 Appendix B certified Suwanee facility. Chain of custody, serialized COD, free business pickup.",
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

export default function HardDriveShreddingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
