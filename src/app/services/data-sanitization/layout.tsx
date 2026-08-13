import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Sanitization Georgia | Computer Recyclers USA",
  description:
    "Certified data sanitization and hard drive wiping Georgia. R2v3 Appendix B logical erasure between NIST Clear and Purge. Retain reuse value.",
  alternates: {
    canonical: "https://www.crusallc.com/services/data-sanitization",
  },
  openGraph: {
    title: "Certified Logical Data Sanitization — R2v3 Appendix B",
    description:
      "Software-based data sanitization certified under R2v3 Appendix B. Retain resale value. Independent verification required by the standard.",
    url: "https://www.crusallc.com/services/data-sanitization",
    siteName: "Computer Recyclers USA",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.crusallc.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Computer Recyclers USA - Certified Data Sanitization",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Certified Data Sanitization | Hard Drive Wiping Georgia",
    description:
      "R2v3 Appendix B logical sanitization. NIST 800-88 aligned. Serialized certificates. Failed wipes are physically destroyed.",
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

export default function DataSanitizationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
