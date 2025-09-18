import AboutPageContent from "./AboutPageContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Computer Recyclers USA | R2 Certified IT Recycling Georgia Since 2004",
  description: "Leading Georgia and Southeast's responsible electronics recycling industry for 20+ years. R2 v3, ISO certified facility in Suwanee, GA. Free IT equipment pickup, secure data destruction, and IT Asset Recovery throughout Georgia and Southeast States.",
  keywords: "Computer Recyclers USA about, IT recycling Georgia Southeast history, R2 certified facility Suwanee GA, responsible electronic waste recycling company Atlanta, data destruction services Georgia, computer recycling company history, ISO certified electronics recycler, Georgia Southeast IT asset recovery company, Suwanee computer recycling facility, Atlanta area e-waste management",
  alternates: {
    canonical: "https://crusa-web.vercel.app/about",
  },
  openGraph: {
    title: "About Computer Recyclers USA | Georgia and Southeast's Premier IT Recycling Company",
    description: "Trusted by Georgia and Southeast businesses for 20+ years. R2 v3 & ISO certified facility offering free IT equipment pickup, secure data destruction, and responsible electronics recycling.",
    url: "https://crusa-web.vercel.app/about",
    siteName: "Computer Recyclers USA",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://crusa-web.vercel.app/logo.png",
        width: 1200,
        height: 630,
        alt: "Computer Recyclers USA - R2 Certified Electronics Recycling",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Computer Recyclers USA | R2 Certified IT Recycling Georgia and Southeast",
    description: "20+ years serving Georgia and Southeast businesses with secure data destruction and responsible electronics recycling. Located in Suwanee, GA.",
    images: ["https://crusa-web.vercel.app/logo.png"],
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

export default function About() {
  return (
    <>
      <AboutPageContent />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "@id": "https://crusa-web.vercel.app/about",
            "url": "https://crusa-web.vercel.app/about",
            "name": "About Computer Recyclers USA",
            "description": "Learn about Computer Recyclers USA, Georgia's leading R2 certified electronics recycling and data destruction company with over 20 years of experience.",
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://crusa-web.vercel.app"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "About Us",
                  "item": "https://crusa-web.vercel.app/about"
                }
              ]
            },
            "mainEntity": {
              "@type": "Organization",
              "@id": "https://crusa-web.vercel.app/#organization",
              "name": "Computer Recyclers USA",
              "alternateName": "CRUSA",
              "url": "https://crusa-web.vercel.app",
              "logo": "https://crusa-web.vercel.app/logo.png",
              "description": "Georgia and Southeast's premier R2 v3 certified responsible electronics recycling and data destruction company, serving businesses throughout the region since 2004.",
              "foundingDate": "2004",
              "foundingLocation": {
                "@type": "Place",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Georgia",
                  "addressRegion": "GA",
                  "addressCountry": "US"
                }
              },
              "areaServed": [
                {
                  "@type": "State",
                  "name": "Georgia",
                  "containsPlace": [
                    {"@type": "City", "name": "Atlanta"},
                    {"@type": "City", "name": "Savannah"},
                    {"@type": "City", "name": "Augusta"},
                    {"@type": "City", "name": "Columbus"},
                    {"@type": "City", "name": "Macon"},
                    {"@type": "City", "name": "Suwanee"}
                  ]
                },
                {
                  "@type": "AdministrativeArea",
                  "name": "Southeast United States"
                }
              ],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "3644 Burnette Road",
                "addressLocality": "Suwanee",
                "addressRegion": "GA",
                "postalCode": "30024",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "34.0515",
                "longitude": "-84.0713"
              },
              "telephone": "+1-770-840-0805",
              "email": "info@crusallc.com",
              "numberOfEmployees": {
                "@type": "QuantitativeValue",
                "minValue": 10,
                "maxValue": 50
              },
              "hasCredential": [
                {
                  "@type": "EducationalOccupationalCredential",
                  "credentialCategory": "certification",
                  "name": "R2 v3 Certification",
                  "description": "Responsible Recycling certification for electronics recyclers"
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  "credentialCategory": "certification",
                  "name": "ISO 14001:2015",
                  "description": "Environmental management systems certification"
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  "credentialCategory": "certification",
                  "name": "ISO 9001:2015",
                  "description": "Quality management systems certification"
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  "credentialCategory": "certification",
                  "name": "ISO 45001:2018",
                  "description": "Occupational health and safety management certification"
                }
              ],
              "slogan": "Your Safe and Secure Solution for Responsible Electronics Recycling in Georgia and Southeast States",
              "knowsAbout": [
                "Responsible electronic waste recycling",
                "Data destruction services",
                "IT Asset Recovery",
                "Computer recycling",
                "Hard drive shredding",
                "Secure data wiping",
                "Environmental compliance",
                "R2 certification standards"
              ]
            }
          }),
        }}
      />
    </>
  );
}