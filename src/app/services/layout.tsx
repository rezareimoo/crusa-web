import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our ITAD Services | Computer Recyclers USA",
  description:
    "Professional electronics recycling and secure data destruction services in Georgia. R2 v3 certified, environmentally responsible e-waste disposal.",
  openGraph: {
    title: "Our ITAD Services | Computer Recyclers USA",
    description:
      "Professional electronics recycling and secure data destruction services in Georgia. R2 v3 certified, environmentally responsible e-waste disposal.",
    url: "https://www.crusallc.com/services",
  },
  twitter: {
    title: "Our ITAD Services | Computer Recyclers USA",
    description:
      "Professional electronics recycling and secure data destruction services in Georgia. R2 v3 certified, environmentally responsible e-waste disposal.",
  },
  alternates: {
    canonical: "https://www.crusallc.com/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
