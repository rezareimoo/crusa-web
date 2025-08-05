import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Our Services - Computer Recyclers USA | Data Destruction & Electronics Recycling",
  description:
    "Professional electronics recycling and secure data destruction services in Georgia. R2 v3 certified, environmentally responsible e-waste disposal.",
  keywords:
    "electronics recycling services, data destruction services, computer recycling Georgia, secure data destruction, e-waste disposal services",
  openGraph: {
    title:
      "Our Services - Computer Recyclers USA | Data Destruction & Electronics Recycling",
    description:
      "Professional electronics recycling and secure data destruction services in Georgia. R2 v3 certified, environmentally responsible e-waste disposal.",
    url: "https://crusa-web.vercel.app/services",
  },
  twitter: {
    title:
      "Our Services - Computer Recyclers USA | Data Destruction & Electronics Recycling",
    description:
      "Professional electronics recycling and secure data destruction services in Georgia. R2 v3 certified, environmentally responsible e-waste disposal.",
  },
  alternates: {
    canonical: "https://crusa-web.vercel.app/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
