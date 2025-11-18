"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import ParticleBackground from "@/components/ParticleBackground";
import StructuredData from "@/components/StructuredData";
import { Analytics } from "@vercel/analytics/react";

export default function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState<number | null>(null);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://crusallc.com/certificates",
    url: "https://crusallc.com/certificates",
    name: "Certificates & Certifications | Computer Recyclers USA",
    description:
      "View certifications for Computer Recyclers USA including R2 v3, ISO 9001, ISO 14001, and ISO 45001.",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://crusallc.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Certificates",
          item: "https://crusallc.com/certificates",
        },
      ],
    },
    mainEntity: {
      "@type": "Organization",
      "@id": "https://crusallc.com/#organization",
      name: "Computer Recyclers USA",
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "certification",
          name: "R2 v3 Certification",
          description:
            "Responsible Recycling certification for electronics recyclers",
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "certification",
          name: "ISO 14001:2015",
          description: "Environmental management systems certification",
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "certification",
          name: "ISO 9001:2015",
          description: "Quality management systems certification",
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "certification",
          name: "ISO 45001:2018",
          description:
            "Occupational health and safety management certification",
        },
      ],
    },
  };

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && selectedCertificate !== null) {
        setSelectedCertificate(null);
      }
    };

    if (selectedCertificate !== null) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [selectedCertificate]);

  const certificates = [
    {
      name: "R2 v3 Certification",
      image: "/R2v3 Final Cert.png",
      description:
        "Responsible Recycling (R2) v3 certification for electronics recyclers, ensuring responsible handling and processing of electronic equipment.",
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      name: "ISO 9001:2015",
      image: "/9001 Final Cert.png",
      description:
        "Quality Management Systems certification ensuring consistent quality in our operations and customer service.",
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      name: "ISO 14001:2015",
      image: "/14001 Final Cert.png",
      description:
        "Environmental Management Systems certification demonstrating our commitment to environmental responsibility and sustainability.",
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      name: "ISO 45001:2018",
      image: "/45001 Final Cert.png",
      description:
        "Occupational Health and Safety Management Systems certification ensuring safe working conditions for our employees and partners.",
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={structuredData} />
      <Header currentPage="about" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-16 sm:py-20 overflow-hidden">
        <ParticleBackground />
        <div className="relative z-[1] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              Our <span className="text-primary-green">Certifications</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-6 sm:mb-8 px-2">
              <strong>
                Computer Recyclers USA is fully certified and compliant with
                industry-leading standards for quality, environmental
                responsibility, and occupational safety.
              </strong>
            </p>
          </div>
        </div>
      </section>

      {/* Certificates Grid */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {certificates.map((cert, index) => (
              <div
                key={cert.name}
                className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-primary-green transition-all duration-300 hover:shadow-xl animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start space-x-6 mb-6">
                  <div className="w-16 h-16 bg-primary-green rounded-lg flex items-center justify-center flex-shrink-0">
                    {cert.icon}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      {cert.name}
                    </h2>
                    <p className="text-gray-600">{cert.description}</p>
                  </div>
                </div>
                <div className="mt-6">
                  <div 
                    className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] bg-gray-50 rounded-lg overflow-hidden border border-gray-200 cursor-pointer hover:border-primary-green transition-all duration-300"
                    onClick={() => setSelectedCertificate(index)}
                  >
                    <Image
                      src={cert.image}
                      alt={`${cert.name} certificate`}
                      fill
                      className="object-contain p-4"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Logos Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-2xl mx-auto">
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-[200px] aspect-square bg-white rounded-lg overflow-hidden">
                <Image
                  src="/r2v3.jpg"
                  alt="R2 v3 Certified"
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 200px, 200px"
                />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-[200px] aspect-square bg-white rounded-lg overflow-hidden">
                <Image
                  src="/PJR.jpg"
                  alt="Perry Johnson Registrars"
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 200px, 200px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Our Certifications Mean
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our certifications demonstrate our commitment to excellence,
              environmental responsibility, and the highest standards of quality
              and safety in electronics recycling and data destruction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">R2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Responsible Recycling
              </h3>
              <p className="text-gray-600">
                Ensures responsible handling and processing of electronic
                equipment with environmental protection and data security.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-white">ISO</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Quality Management
              </h3>
              <p className="text-gray-600">
                ISO 9001 ensures consistent quality in our operations and
                customer service delivery.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-white">ISO</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Environmental Care
              </h3>
              <p className="text-gray-600">
                ISO 14001 demonstrates our commitment to environmental
                responsibility and sustainability.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-white">ISO</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Safety First
              </h3>
              <p className="text-gray-600">
                ISO 45001 ensures safe working conditions for our employees and
                partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 sm:py-20 bg-primary-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Trusted Certified Services
          </h2>
          <p className="text-xl mb-8 text-gray-100 max-w-3xl mx-auto">
            Work with a fully certified and compliant electronics recycling and
            data destruction partner. Contact us today to learn more about our
            services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:770-840-0805"
              className="bg-white text-primary-green hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              770-840-0805
            </a>
            <a
              href="mailto:info@crusallc.com"
              className="bg-white text-primary-green hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              info@crusallc.com
            </a>
          </div>
        </div>
      </section>

      {/* Certificate Modal/Lightbox */}
      {selectedCertificate !== null && (
        <div
          className="fixed inset-0 z-[999999] flex items-center justify-center p-4 bg-black bg-opacity-75 backdrop-blur-sm transition-all duration-300 ease-out"
          onClick={() => setSelectedCertificate(null)}
          style={{ animation: "fadeIn 200ms ease-out forwards" }}
        >
          <div
            className="relative max-w-6xl w-full max-h-[90vh] bg-white rounded-lg shadow-2xl overflow-hidden transition-all duration-300 ease-out transform"
            onClick={(e) => e.stopPropagation()}
            style={{ animation: "scaleIn 200ms ease-out 50ms both" }}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCertificate(null)}
              className="absolute top-4 right-4 z-10 bg-gray-900 bg-opacity-80 text-white rounded-full p-2 shadow-lg hover:bg-opacity-100 transition-all duration-200"
              aria-label="Close certificate view"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Certificate Content */}
            <div className="p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 pr-12">
                {certificates[selectedCertificate].name}
              </h2>
              <div className="relative w-full bg-gray-50 rounded-lg overflow-hidden border border-gray-200" style={{ minHeight: "60vh" }}>
                <Image
                  src={certificates[selectedCertificate].image}
                  alt={`${certificates[selectedCertificate].name} certificate`}
                  fill
                  className="object-contain p-4"
                  sizes="100vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      )}

      <Analytics />
    </div>
  );
}

