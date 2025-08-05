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
    "Computer Recyclers USA - Data Destruction and Electronic Recycling in Georgia",
  description:
    "Your Safe and Secure Solution for Electronics Recycling in Georgia. R2 v3 Certified data destruction and electronic recycling services.",
  keywords:
    "electronics recycling, data destruction, computer recycling, Georgia, R2 certified, e-waste disposal, secure data destruction",
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
      "Computer Recyclers USA - Data Destruction and Electronic Recycling in Georgia",
    description:
      "Your Safe and Secure Solution for Electronics Recycling in Georgia. R2 v3 Certified data destruction and electronic recycling services.",
    url: "https://crusa-web.vercel.app",
    siteName: "Computer Recyclers USA",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://crusa-web.vercel.app/logo.png",
        width: 1200,
        height: 630,
        alt: "Computer Recyclers USA Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Computer Recyclers USA - Data Destruction and Electronic Recycling in Georgia",
    description:
      "Your Safe and Secure Solution for Electronics Recycling in Georgia. R2 v3 Certified data destruction and electronic recycling services.",
    images: ["https://crusa-web.vercel.app/logo.png"],
  },
  verification: {
    google: "your-google-verification-code", // Replace with your actual Google verification code
  },
  icons: {
    icon: "/favicon.png",
  },
  alternates: {
    canonical: "https://crusa-web.vercel.app",
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
