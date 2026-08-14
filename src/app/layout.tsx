import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import StructuredData from "@/components/StructuredData";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Atlanta Computer Recycling & ITAD | Computer Recyclers USA",
  description:
    "R2v3-certified computer recycling and ITAD in Atlanta. Hard drive shredding, logical data sanitization, free business pickup across Georgia.",
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
    title: "Atlanta Computer Recycling & ITAD | Computer Recyclers USA",
    description:
      "R2v3-certified computer recycling and ITAD in Atlanta. Hard drive shredding, logical data sanitization, free business pickup across Georgia.",
    url: "https://www.crusallc.com",
    siteName: "Computer Recyclers USA",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.crusallc.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Computer Recyclers USA Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Atlanta Computer Recycling & ITAD | Computer Recyclers USA",
    description:
      "R2v3-certified computer recycling and ITAD in Atlanta. Hard drive shredding, logical data sanitization, free business pickup across Georgia.",
    images: ["https://www.crusallc.com/logo.png"],
  },
  verification: {
    google: "JiKOXJYrJJWNtg2WkJWblr86VJX17wf6fnkkMMw5MUo", // Replace with your actual Google verification code
  },
  icons: {
    icon: "/favicon.png",
  },
  alternates: {
    canonical: "https://www.crusallc.com",
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
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17836566328"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17836566328');
          `}
        </Script>
        {children}
        <Footer />
      </body>
    </html>
  );
}
