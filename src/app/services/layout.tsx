import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Electronics Recycling Georgia | Computer Recyclers USA",
  description:
    "Electronics recycling and secure data destruction services in Georgia, including free IT equipment pickup for Atlanta and statewide businesses. R2 v3 certified, environmentally responsible e-waste disposal.",
  keywords:
    "electronics recycling services, data destruction services, computer recycling Georgia, secure data destruction, IT equipment pickup Georgia, e-waste disposal services",
  openGraph: {
    title:
      "Electronics Recycling & Data Destruction Services in Georgia",
    description:
      "Professional electronics recycling, secure data destruction, and free IT equipment pickup services for businesses across Georgia and the Atlanta metro area.",
    url: "https://crusallc.com/services",
  },
  twitter: {
    title:
      "Electronics Recycling Georgia | Computer Recyclers USA",
    description:
      "Electronics recycling, secure data destruction, and free IT equipment pickup for Georgia businesses, including the Atlanta metro area.",
  },
  alternates: {
    canonical: "https://crusallc.com/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
