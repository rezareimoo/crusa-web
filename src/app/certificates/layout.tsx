import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Certificates & Certifications | Computer Recyclers USA - R2v3 & ISO Certified",
  description:
    "View our certifications: R2v3, ISO 9001, ISO 14001, and ISO 45001. Computer Recyclers USA is a fully certified electronics recycling and data destruction facility in Suwanee, Georgia.",
  keywords:
    "R2v3 certified, ISO 9001, ISO 14001, ISO 45001, certifications, computer recyclers USA certificates, R2v3 certification, ISO certified recycler Georgia, certified electronics recycling facility",
  alternates: {
    canonical: "https://crusallc.com/certificates",
  },
  openGraph: {
    title: "Certificates & Certifications | Computer Recyclers USA",
    description:
      "View our R2v3, ISO 9001, ISO 14001, and ISO 45001 certifications. Fully certified electronics recycling and data destruction facility in Georgia.",
    url: "https://crusallc.com/certificates",
    siteName: "Computer Recyclers USA",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://crusallc.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Computer Recyclers USA - Certifications and Certificates",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Certificates & Certifications | Computer Recyclers USA",
    description:
      "R2v3, ISO 9001, ISO 14001, and ISO 45001 certified electronics recycling facility in Georgia.",
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

export default function CertificatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
