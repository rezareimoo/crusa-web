import type { Metadata } from "next";
import FAQPageContent from "./FAQPageContent";

export const metadata: Metadata = {
  title: "Electronics Recycling FAQ Georgia | Data Destruction Atlanta | CRUSA",
  description: "FAQ about R2v3 certified electronics recycling, secure data destruction, and free IT equipment pickup in Atlanta, Savannah, Augusta & all Georgia cities. DoD compliant.",
  keywords: "electronics recycling FAQ Georgia, data destruction FAQ Atlanta, R2v3 certification Georgia, IT equipment disposal questions, computer recycling FAQ Atlanta, secure data destruction Georgia, free electronics pickup FAQ, e-waste recycling Georgia, hard drive shredding Atlanta, IT asset disposal FAQ Georgia, electronics recycling near me, data destruction services FAQ, computer disposal Atlanta GA, electronics recycling Savannah GA, IT recycling Augusta GA",
  alternates: {
    canonical: "https://crusa-web.vercel.app/faq",
  },
  openGraph: {
    title: "Electronics Recycling FAQ Georgia | R2v3 Certified Data Destruction",
    description: "Answers about R2v3 certified electronics recycling, DoD 5220.22-M data destruction, free IT equipment pickup in Atlanta, Savannah, Augusta & all Georgia locations.",
    url: "https://crusa-web.vercel.app/faq",
    siteName: "Computer Recyclers USA",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://crusa-web.vercel.app/logo.png",
        width: 1200,
        height: 630,
        alt: "Computer Recyclers USA - FAQ About Electronics Recycling",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Electronics Recycling FAQ | Data Destruction Georgia | CRUSA",
    description: "FAQ: R2v3 certified electronics recycling, DoD compliant data destruction, free IT pickup Atlanta & all Georgia. ISO certified facility.",
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

export default function FAQ() {
  return (
    <>
      <FAQPageContent />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "@id": "https://crusa-web.vercel.app/faq",
              "url": "https://crusa-web.vercel.app/faq",
              "name": "Electronics Recycling FAQ Georgia - Computer Recyclers USA",
              "description": "FAQ about R2v3 certified electronics recycling, secure data destruction, and free IT equipment pickup services throughout Georgia including Atlanta, Savannah, Augusta, Columbus, and Macon.",
              "publisher": {
                "@type": "Organization",
                "name": "Computer Recyclers USA",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://crusa-web.vercel.app/logo.png"
                }
              },
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
                  "name": "FAQ",
                  "item": "https://crusa-web.vercel.app/faq"
                }
              ]
            },
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What does it mean to be R2v3 Certified for electronics recycling in Georgia?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "R2v3 (Responsible Recycling) certification is the gold standard for electronics recycling facilities in Georgia and nationwide. It means our Atlanta-based operations meet strict environmental, health, safety, and security standards. This certification ensures we handle electronic waste responsibly throughout Georgia, maintain proper chain of custody documentation, and follow best practices for data destruction and material recovery. Our R2v3 certification is audited annually by third-party organizations to ensure continued compliance at our Georgia facility."
                }
              },
              {
                "@type": "Question",
                "name": "Why is it important for electronics to be responsibly recycled in Georgia?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Electronics contain valuable materials like gold, silver, copper, and rare earth elements that can be recovered and reused. However, they also contain hazardous substances like lead, mercury, and cadmium that can harm Georgia's environment if not properly handled. Responsible recycling at our certified Atlanta facility ensures these toxic materials are safely managed while valuable resources are recovered for new products, reducing the need for mining and manufacturing new materials. This protects Georgia's natural resources and communities."
                }
              },
              {
                "@type": "Question",
                "name": "What types of electronics qualify for free pickup in Atlanta and Georgia?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We offer free pickup for all types of electronic equipment throughout Georgia, including computers, laptops, servers, monitors, printers, networking equipment, mobile devices, tablets, and other IT assets. Service areas include Atlanta, Savannah, Augusta, Columbus, Macon, and all surrounding areas. There are no restrictions on age, condition, or brand - we accept everything from working equipment to completely obsolete devices. Our free pickup service is available for businesses of all sizes across Georgia."
                }
              },
              {
                "@type": "Question",
                "name": "How does CRUSA handle secure data destruction in Georgia?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We provide comprehensive data destruction services throughout Georgia, including Atlanta metro area. Our services include physical hard drive shredding using industrial-grade equipment that renders data completely unrecoverable. Our secure data destruction can be performed onsite at your Georgia location for maximum security and compliance, or at our R2v3 certified Atlanta facility. All data destruction follows DoD 5220.22-M standards and includes detailed certificates of destruction for your records and compliance requirements."
                }
              },
              {
                "@type": "Question",
                "name": "What areas in Georgia does CRUSA provide electronics recycling services?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We provide comprehensive electronics recycling and IT asset disposal services throughout the entire state of Georgia. Our primary service areas include Atlanta, Savannah, Augusta, Columbus, Macon, Athens, Albany, Valdosta, Warner Robins, and all surrounding metropolitan areas. Whether you're in downtown Atlanta or rural Georgia, we offer the same professional, R2v3 certified recycling services with free pickup for qualifying volumes. Contact us to schedule service anywhere in Georgia."
                }
              },
              {
                "@type": "Question",
                "name": "How quickly can you pick up electronics in Atlanta and Georgia?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We typically schedule electronics pickups within 24-48 hours for Atlanta metro area businesses, and within 3-5 business days for other Georgia locations. For urgent data destruction needs in Atlanta, we offer same-day or next-day service. Our fleet covers all of Georgia efficiently, ensuring timely pickup of your IT equipment. Schedule is based on volume and location, with priority given to large volume pickups and time-sensitive data destruction requirements."
                }
              },
              {
                "@type": "Question",
                "name": "What compliance certificates do you provide for Georgia businesses?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We provide comprehensive documentation for all Georgia businesses including: Certificates of Recycling, Certificates of Data Destruction (meeting DoD 5220.22-M standards), detailed asset reports with serial numbers, and chain of custody documentation. These certificates help Georgia businesses meet compliance requirements for HIPAA, FACTA, SOX, and other regulations. Our R2v3 certification ensures your company meets all environmental and data security compliance standards required in Georgia."
                }
              },
              {
                "@type": "Question",
                "name": "Are there any fees for electronics recycling in Georgia?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We offer completely FREE pickup and recycling for most electronics throughout Georgia. There are no hidden fees for standard IT equipment including computers, servers, monitors, and networking equipment. Some items with special handling requirements (like CRT monitors or equipment containing refrigerants) may have minimal fees. We provide transparent pricing upfront, and for most Georgia businesses, our service is 100% free. Contact us for a free quote specific to your equipment."
                }
              }
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://crusa-web.vercel.app/#organization",
            "name": "Computer Recyclers USA",
            "alternateName": "CRUSA",
            "description": "R2v3 certified electronics recycling and secure data destruction services throughout Georgia. Free IT equipment pickup for businesses in Atlanta, Savannah, Augusta, Columbus, Macon and all Georgia locations.",
            "url": "https://crusa-web.vercel.app",
            "telephone": "+1-404-555-0100",
            "email": "info@computerrecyclersusa.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Recycling Way",
              "addressLocality": "Atlanta",
              "addressRegion": "GA",
              "postalCode": "30301",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "33.7490",
              "longitude": "-84.3880"
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
                  {"@type": "City", "name": "Athens"},
                  {"@type": "City", "name": "Albany"},
                  {"@type": "City", "name": "Valdosta"},
                  {"@type": "City", "name": "Warner Robins"}
                ]
              }
            ],
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "33.7490",
                "longitude": "-84.3880"
              },
              "geoRadius": "300 miles"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Electronics Recycling Services",
              "itemListElement": [
                {
                  "@type": "Service",
                  "name": "Electronics Recycling",
                  "description": "R2v3 certified electronics recycling for all IT equipment"
                },
                {
                  "@type": "Service",
                  "name": "Data Destruction",
                  "description": "DoD 5220.22-M compliant secure data destruction and hard drive shredding"
                },
                {
                  "@type": "Service",
                  "name": "Free IT Equipment Pickup",
                  "description": "Free pickup service for electronics throughout Georgia"
                },
                {
                  "@type": "Service",
                  "name": "IT Asset Disposal",
                  "description": "Complete IT asset disposition with certificates of recycling"
                }
              ]
            },
            "sameAs": [
              "https://www.facebook.com/computerrecyclersusa",
              "https://www.linkedin.com/company/computer-recyclers-usa",
              "https://twitter.com/crusa_recycling"
            ],
            "award": ["R2v3 Certified", "ISO 14001:2015", "ISO 9001:2015", "ISO 45001:2018"],
            "priceRange": "Free - $$"
          }
        ]),
        }}
      />
    </>
  );
}