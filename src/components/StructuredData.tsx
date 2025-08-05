export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Computer Recyclers USA",
    description:
      "Professional electronics recycling and secure data destruction services in Georgia. R2 v3 certified, environmentally responsible e-waste disposal.",
    url: "https://crusa-web.vercel.app",
    telephone: "+1-404-555-0123", // Replace with actual phone number
    address: {
      "@type": "PostalAddress",
      addressLocality: "Georgia",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "33.7490", // Replace with actual coordinates
      longitude: "-84.3880", // Replace with actual coordinates
    },
    openingHours: "Mo-Fr 08:00-17:00",
    priceRange: "$$",
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Credit Card",
    areaServed: {
      "@type": "State",
      name: "Georgia",
    },
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: "33.7490",
        longitude: "-84.3880",
      },
      geoRadius: "50000",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Electronics Recycling Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Data Destruction",
            description:
              "Secure data destruction and hard drive shredding services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Electronics Recycling",
            description:
              "Environmentally responsible electronics recycling and disposal",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Computer Recycling",
            description:
              "Professional computer and IT equipment recycling services",
          },
        },
      ],
    },
    certification: [
      "R2 v3 Certified",
      "ISO 14001 Environmental Management",
      "ISO 9001 Quality Management",
      "ISO 45001 Occupational Health and Safety",
    ],
    sameAs: [
      // Add your social media URLs here
      // "https://www.facebook.com/computerrecyclersusa",
      // "https://www.linkedin.com/company/computer-recyclers-usa"
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
