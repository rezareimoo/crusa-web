"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import ParticleBackground from "@/components/ParticleBackground";
import PickupForm from "@/components/PickupForm";
import NAPBlock from "@/components/NAPBlock";
import StructuredData from "@/components/StructuredData";
import { Analytics } from "@vercel/analytics/react";

export default function GeorgiaServiceArea() {
  const [showPickupForm, setShowPickupForm] = useState(false);

  const pageStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://crusallc.com/service-area/georgia",
    url: "https://crusallc.com/service-area/georgia",
    name: "Electronics Recycling & Data Destruction Services in Georgia",
    description:
      "Statewide electronics recycling and data destruction for Georgia businesses. R2 certified, compliance-focused. Serving Atlanta metro, North, Central, and South Georgia.",
    isPartOf: {
      "@type": "WebSite",
      name: "Computer Recyclers USA",
      url: "https://crusallc.com",
    },
    about: {
      "@type": "Service",
      name: "Electronics Recycling & Data Destruction",
      provider: {
        "@type": "LocalBusiness",
        name: "Computer Recyclers USA",
      },
      areaServed: {
        "@type": "State",
        name: "Georgia",
      },
    },
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you offer electronics recycling and data destruction across all of Georgia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We provide onsite data destruction, free IT equipment pickup, and responsible electronics recycling statewide in Georgia, including Atlanta metro, North Georgia, Central Georgia, and South Georgia. No city or county is excluded from our service area.",
        },
      },
      {
        "@type": "Question",
        name: "What regions of Georgia do you serve?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We serve all regions of Georgia: Atlanta metro and surrounding counties, North Georgia, Central Georgia, and South Georgia. Scheduling and pickup are available wherever your business is located in the state.",
        },
      },
      {
        "@type": "Question",
        name: "Are your data destruction and recycling practices compliant with industry standards?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Our processes align with HIPAA, FACTA, and NIST 800-88 guidelines where applicable. We maintain chain-of-custody documentation and provide certificates of destruction. Our facility is R2 v3 certified. For full certification details, see our certificates page.",
        },
      },
      {
        "@type": "Question",
        name: "Is pickup available for businesses outside the Atlanta area?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Free IT equipment pickup is available statewide in Georgia. We schedule pickups across all regions; contact us or submit a pickup request to arrange service at your location.",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={pageStructuredData} />
      <StructuredData data={faqStructuredData} />
      <Header currentPage="services" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-16 sm:py-20 overflow-hidden">
        <ParticleBackground />
        <div className="relative z-[1] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              Electronics Recycling & Data Destruction Services in Georgia
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-6 sm:mb-8 px-2">
              Statewide service for Georgia-based businesses. R2 certified
              facility, compliance-focused processes, and consistent coverage
              from Atlanta metro through North, Central, and South Georgia.
            </p>
            <div className="flex justify-center px-4">
              <button
                onClick={() => setShowPickupForm(true)}
                className="bg-primary-green hover:bg-primary-green-dark text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto max-w-sm sm:max-w-none"
              >
                REQUEST SERVICE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Who we serve in Georgia */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Who We Serve in Georgia
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We work with organizations across the state—from small and
              midsize businesses to enterprises and institutions who need{" "}
              <Link
                href="/services/responsible-electronics-recycling"
                className="text-primary-green hover:text-primary-green-dark font-bold"
              >
                electronics recycling
              </Link>{" "}
              and{" "}
              <Link
                href="/services/onsite-data-destruction"
                className="text-primary-green hover:text-primary-green-dark font-bold"
              >
                data destruction
              </Link>{" "}
              services in Georgia.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <div className="w-12 h-12 bg-primary-green rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Healthcare</h3>
              <p className="text-gray-600 text-sm">Providers and facilities with HIPAA-sensitive equipment and data</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <div className="w-12 h-12 bg-primary-green rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Finance & professional</h3>
              <p className="text-gray-600 text-sm">Banks, advisory firms, and professional services</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <div className="w-12 h-12 bg-primary-green rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Education & government</h3>
              <p className="text-gray-600 text-sm">Schools, universities, and government entities</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <div className="w-12 h-12 bg-primary-green rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Enterprise & SMB</h3>
              <p className="text-gray-600 text-sm">Manufacturing, retail, and businesses of all sizes</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="font-bold text-lg text-gray-900 mb-4">Common asset types we handle</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
              {["Desktops, laptops, servers", "Storage devices and networking equipment", "Monitors, printers, and peripherals", "End-of-life or surplus IT and electronics"].map((item) => (
                <div key={item} className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-primary-green rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-600 mt-6">
              One provider across all of Georgia simplifies logistics and keeps chain of custody and compliance documentation consistent—whether you have a single pallet or ongoing volume.
            </p>
          </div>
        </div>
      </section>

      {/* Services available across Georgia */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Services Available Across Georgia
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Onsite destruction, free pickup, and responsible recycling—statewide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <Link
              href="/services/onsite-data-destruction"
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group cursor-pointer border border-gray-100"
            >
              <div className="w-16 h-16 bg-primary-green rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-green-dark transition-colors">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary-green-darker group-hover:text-primary-green-dark transition-colors">
                On-site data destruction
              </h3>
              <p className="text-gray-600 mb-6">
                Mobile shredding at your location. NIST 800-88 guidelines and certificates of destruction. Available statewide.
              </p>
              <span className="inline-flex items-center text-primary-green-darker font-semibold group-hover:translate-x-1 transition-transform">
                Learn more
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>

            <Link
              href="/services/free-it-equipment-pickup"
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group cursor-pointer border border-gray-100"
            >
              <div className="w-16 h-16 bg-primary-green rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-green-dark transition-colors">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary-green-darker group-hover:text-primary-green-dark transition-colors">
                Free IT equipment pickup
              </h3>
              <p className="text-gray-600 mb-6">
                Complimentary pickup throughout Georgia. No minimum quantity; we handle packing and logistics. Processed at our R2 facility.
              </p>
              <span className="inline-flex items-center text-primary-green-darker font-semibold group-hover:translate-x-1 transition-transform">
                Learn more
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>

            <Link
              href="/services/responsible-electronics-recycling"
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group cursor-pointer border border-gray-100"
            >
              <div className="w-16 h-16 bg-primary-green rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-green-dark transition-colors">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary-green-darker group-hover:text-primary-green-dark transition-colors">
                Responsible electronics recycling
              </h3>
              <p className="text-gray-600 mb-6">
                R2 v3 certified facility. Maximized reuse and material recovery; no landfill. Reporting available for sustainability tracking.
              </p>
              <span className="inline-flex items-center text-primary-green-darker font-semibold group-hover:translate-x-1 transition-transform">
                Learn more
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Compliance & security */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Compliance & Security
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
              Our practices are designed to support compliance with common regulatory and standards frameworks. Your legal or compliance team should confirm fit for your specific obligations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <div className="w-12 h-12 bg-primary-green rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">HIPAA, FACTA, NIST 800-88</h3>
              <p className="text-gray-600 text-sm">We address requirements relevant to health and consumer information and follow NIST 800-88 guidelines for media sanitization.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <div className="w-12 h-12 bg-primary-green rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Chain of custody</h3>
              <p className="text-gray-600 text-sm">Clear chain of custody from pickup or onsite destruction through final processing. Auditable records for compliance.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <div className="w-12 h-12 bg-primary-green rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Certificates of destruction</h3>
              <p className="text-gray-600 text-sm">Documentation includes certificates with serial numbers and destruction method for due diligence.</p>
            </div>
          </div>

          <p className="text-lg text-gray-600 text-center">
            For facility and program certifications—R2 v3, ISO 14001, ISO 9001, ISO 45001—see our{" "}
            <Link href="/certificates" className="text-primary-green-darker hover:text-primary-green-dark font-bold">
              certificates
            </Link>{" "}
            page.
          </p>
        </div>
      </section>

      {/* Coverage across Georgia */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Coverage Across Georgia
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
              We serve the entire state. One vendor, one process, everywhere you operate.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {[
              { name: "Atlanta metro", desc: "Metro Atlanta and surrounding counties" },
              { name: "North Georgia", desc: "North Georgia regions" },
              { name: "Central Georgia", desc: "Central Georgia regions" },
              { name: "South Georgia", desc: "South Georgia regions" },
            ].map((region) => (
              <div key={region.name} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary-green rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{region.name}</h3>
                  <p className="text-gray-600 text-sm">{region.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto">
            Onsite data destruction, free pickup, and recycling are available wherever your business or facilities are located. Outside the metro area, we coordinate scheduling and routing so service remains practical and efficient.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            To schedule pickup, arrange onsite data destruction, or discuss
            volume and compliance requirements, contact us or request service
            below.
          </p>
          <button
            onClick={() => setShowPickupForm(true)}
            className="bg-primary-green hover:bg-primary-green-dark text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
          >
            REQUEST SERVICE
          </button>
        </div>
      </section>

      {/* Local Business Info (NAP) */}
      <section className="bg-gray-50 py-6 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <NAPBlock />
        </div>
      </section>

      {/* Pickup Form Modal */}
      {showPickupForm && (
        <div
          className="fixed inset-0 z-[999999] bg-black bg-opacity-75 backdrop-blur-md transition-all duration-300 ease-out"
          style={{ animation: "fadeIn 300ms ease-out forwards" }}
        >
          <div className="h-full w-full flex items-center justify-center p-0 sm:p-4">
            <div
              className="relative w-full h-full sm:max-w-4xl sm:max-h-[90vh] sm:rounded-2xl overflow-hidden bg-white shadow-2xl transition-all duration-200 ease-out transform"
              style={{ animation: "scaleIn 200ms ease-out 50ms both" }}
            >
              <div className="h-full overflow-y-auto">
                <div className="pb-4 sm:pb-8">
                  <PickupForm onClose={() => setShowPickupForm(false)} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Analytics />
    </div>
  );
}
