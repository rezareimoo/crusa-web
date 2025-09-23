export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Computer Recyclers USA",
    alternateName: "CRUSA",
    description:
      "Georgia's premier R2 v3 certified electronics recycling and secure data destruction company. Serving Atlanta and all of Georgia since 2004 with free IT equipment pickup, ITAD services, and responsible e-waste disposal.",
    url: "https://crusallc.com",
    foundingDate: "2004",
    slogan:
      "Your Safe and Secure Solution for Electronics Recycling in Georgia",
    telephone: "+1-770-840-0805",
    email: "info@crusallc.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "3644 Burnette Road",
      addressLocality: "Suwanee",
      addressRegion: "GA",
      postalCode: "30024",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "34.0515", // Suwanee, GA coordinates
      longitude: "-84.0713",
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
        latitude: "34.0515",
        longitude: "-84.0713",
      },
      geoRadius: "80467", // 50 miles in meters to cover all of Georgia
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
      "ISO 14001:2015 Environmental Management",
      "ISO 9001:2015 Quality Management",
      "ISO 45001:2018 Occupational Health and Safety",
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
