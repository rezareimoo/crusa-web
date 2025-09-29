import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Atlanta Computer Recycling | Computer Recyclers USA Georgia",
  description:
    "Atlanta computer recycling by trusted computer recyclers. R2 certified, free pickup, secure data destruction. Serving Atlanta metro & all Georgia.",
  keywords:
    "atlanta computer recycling, computer recyclers, recycle computers atlanta, electronics recycling, data destruction, e-waste, georgia, R2 certified",
  authors: [{ name: "Computer Recyclers USA" }],
  creator: "Computer Recyclers USA",
  publisher: "Computer Recyclers USA",
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
  openGraph: {
    title:
      "Atlanta Computer Recycling | Computer Recyclers USA",
    description:
      "Atlanta computer recycling by trusted computer recyclers. R2 certified, free pickup, secure data destruction. Serving Atlanta metro & all Georgia.",
    url: "https://crusallc.com",
    siteName: "Computer Recyclers USA",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://crusallc.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Computer Recyclers USA Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Atlanta Computer Recycling | Computer Recyclers USA",
    description:
      "Atlanta computer recycling by trusted computer recyclers. R2 certified, free pickup, secure data destruction. Serving Atlanta metro & all Georgia.",
    images: ["https://crusallc.com/logo.png"],
  },
  verification: {
    google: "your-google-verification-code", // Replace with your actual Google verification code
  },
  icons: {
    icon: "/favicon.png",
  },
  alternates: {
    canonical: "https://crusallc.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
