import type { Metadata } from "next";
import { FAQ_PAGE_DESCRIPTION } from "./faq-data";

export const metadata: Metadata = {
  title:
    "FAQs | Computer Recyclers USA | Data Destruction, Pickup & Recycling Georgia",
  description: FAQ_PAGE_DESCRIPTION,
  keywords:
    "electronics recycling FAQ, data destruction FAQ, NIST 800-88 Georgia, R2 certified recycler FAQ, free IT pickup Georgia, secure data destruction FAQ, HIPAA electronics recycling Georgia",
  alternates: {
    canonical: "https://crusallc.com/faq",
  },
  openGraph: {
    title: "FAQs | Computer Recyclers USA",
    description: FAQ_PAGE_DESCRIPTION,
    url: "https://crusallc.com/faq",
    siteName: "Computer Recyclers USA",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://crusallc.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Computer Recyclers USA, R2 Certified Electronics Recycling",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQs | Computer Recyclers USA",
    description: FAQ_PAGE_DESCRIPTION,
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

export default function FaqLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
