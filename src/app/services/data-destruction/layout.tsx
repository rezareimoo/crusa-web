import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Destruction Georgia | Computer Recyclers USA",
  description:
    "Data destruction Georgia per NIST 800-88. R2v3 Appendix B physical shredding and logical sanitization. Free pickup, certificates in 5–10 days.",
  alternates: {
    canonical: "https://www.crusallc.com/services/data-destruction",
  },
  openGraph: {
    title: "Certified Data Destruction & Sanitization in Georgia",
    description:
      "Choose NIST 800-88 physical destruction or logical sanitization. R2v3 Appendix B certified for both. Serving Georgia and the Southeast.",
    url: "https://www.crusallc.com/services/data-destruction",
    siteName: "Computer Recyclers USA",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.crusallc.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Computer Recyclers USA - Data Destruction Georgia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Destruction Georgia | NIST 800-88",
    description:
      "R2v3 Appendix B certified physical shredding and logical sanitization. NIST 800-88. Certificates and audit reports in 5–10 business days.",
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

export default function DataDestructionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
