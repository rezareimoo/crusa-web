"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PickupForm from "@/components/PickupForm";
import Header from "@/components/Header";
import ParticleBackground from "@/components/ParticleBackground";
import StructuredData from "@/components/StructuredData";
import { Analytics } from "@vercel/analytics/react";

export default function DataDestructionHub() {
  const [showPickupForm, setShowPickupForm] = useState(false);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Certified Data Destruction & Sanitization",
    description:
      "NIST SP 800-88 data destruction in Georgia with R2v3 Appendix B physical shredding and logical sanitization. Certificates and audit reports in 5–10 business days.",
    provider: {
      "@id": "https://www.crusallc.com/#organization",
    },
    areaServed: {
      "@type": "State",
      name: "Georgia",
    },
    serviceType: "Data Destruction",
    offers: {
      "@type": "Offer",
      description:
        "Physical destruction and logical sanitization under R2v3 Appendix B with certificates of destruction and audit reporting",
    },
  };

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.crusallc.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://www.crusallc.com/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Data Destruction & Sanitization",
        item: "https://www.crusallc.com/services/data-destruction",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={structuredData} />
      <StructuredData data={breadcrumbStructuredData} />
      <Header currentPage="services" />

      <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-16 sm:py-20 overflow-hidden">
        <ParticleBackground />
        <div className="relative z-[1] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              Certified{" "}
              <span className="text-primary-green">
                Data Destruction & Sanitization
              </span>{" "}
              in Georgia
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-6 sm:mb-8 px-2">
              <strong>
                Choose the right NIST SP 800-88 path for your media—physical
                shredding or logical sanitization—under R2v3 Appendix B at our
                Suwanee facility.
              </strong>
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
              <Link
                href="/services/hard-drive-shredding"
                className="bg-primary-green hover:bg-primary-green-dark text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-center"
              >
                Hard Drive Shredding
              </Link>
              <Link
                href="/services/data-sanitization"
                className="bg-white hover:bg-gray-50 text-primary-green border-2 border-primary-green px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 shadow-lg text-center"
              >
                Data Sanitization
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                R2v3 Appendix B — Physical and Logical Sanitization
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Computer Recyclers USA is R2v3 certified under Appendix B—the
                R2v3 process requirement covering data sanitization. Facilities
                certified to Appendix B can be certified for physical
                sanitization, logical sanitization, or both. We hold both.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Method is selected by media type and data sensitivity per NIST
                SP 800-88 Rev. 1, not applied uniformly. NIST defines three
                levels: Clear, Purge, and Destroy. R2v3 sets the required level
                of logical sanitization between NIST Clear and Purge.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    NIST 800-88
                  </h3>
                  <p className="text-gray-600">
                    Clear, Purge, and Destroy—matched to media and sensitivity
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    Appendix B Both Paths
                  </h3>
                  <p className="text-gray-600">
                    Physical shredding and logical sanitization in scope
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    Certificates & Audit
                  </h3>
                  <p className="text-gray-600">
                    COD and audit report in 5–10 business days from pickup
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    Built-in Fallback
                  </h3>
                  <p className="text-gray-600">
                    Failed logical sanitization requires physical destruction
                  </p>
                </div>
              </div>
            </div>

            <div className="relative hidden md:block">
              <Image
                src="/shredder-nobg.png"
                alt="R2 certified data destruction equipment at Computer Recyclers USA in Suwanee Georgia"
                width={600}
                height={400}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Two Paths — Choose by Outcome
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
              Destroyed drives have scrap value only. Sanitized drives retain
              resale value and can return to reuse. Neither path is framed as
              inherently &quot;safer&quot;—the standard matches method to media
              and risk.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <Link
                href="/services/hard-drive-shredding"
                className="block bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-primary-green transition-all duration-300 group"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-green transition-colors">
                  Physical Destruction (Shredding)
                </h3>
                <p className="text-gray-600 mb-6">
                  Hard drive and SSD shredding under R2v3 Appendix B at our
                  Suwanee facility. NIST-approved physical methods by media
                  type. Serialized certificate of destruction and documented
                  chain of custody.
                </p>
                <span className="inline-flex items-center text-primary-green font-semibold">
                  Hard drive shredding Atlanta
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </Link>

              <Link
                href="/services/data-sanitization"
                className="block bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-primary-green transition-all duration-300 group"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-green transition-colors">
                  Logical Sanitization (Software Erasure)
                </h3>
                <p className="text-gray-600 mb-6">
                  Certified data sanitization under R2v3 Appendix B so devices
                  can be reused. Software erasure between NIST Clear and Purge,
                  with independent verification sampling required by the
                  standard.
                </p>
                <span className="inline-flex items-center text-primary-green font-semibold">
                  Certified data erasure
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>

          <div className="mb-16 bg-primary-green rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-8 text-center">
              What Every Pickup Includes
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-3">
                  Certificate of Destruction
                </h3>
                <p className="text-gray-100">
                  Serialized documentation for each pickup—make, model,
                  serial, method, and date as applicable.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-3">Audit Report</h3>
                <p className="text-gray-100">
                  Full reporting for compliance reviews. Typical turnaround is
                  5–10 business days from pickup.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-3">Standard Fallback</h3>
                <p className="text-gray-100">
                  If logical sanitization is unsuccessful, the device must be
                  physically destroyed—built into the standard.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16 bg-gray-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Certifications & Compliance
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-8">
              Beyond R2v3 Appendix B, Computer Recyclers USA maintains ISO
              9001:2015, ISO 14001:2015, and ISO 45001:2018. Our processes align
              with HIPAA, SOX, GLBA, and FACTA requirements for regulated
              industries.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold text-gray-900">
              {[
                "R2v3 Appendix B",
                "ISO 9001",
                "ISO 14001",
                "ISO 45001",
                "HIPAA",
                "SOX",
                "GLBA",
                "FACTA",
              ].map((item) => (
                <span
                  key={item}
                  className="bg-white border border-gray-200 rounded-lg px-4 py-2"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Suwanee Facility — Serving Georgia & the Southeast
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Processing at{" "}
                <strong>3644 Burnette Road, Suwanee, GA 30024</strong>. Free{" "}
                <Link
                  href="/services/free-it-equipment-pickup"
                  className="text-primary-green hover:text-primary-green-dark font-bold"
                >
                  IT equipment pickup
                </Link>{" "}
                for businesses throughout{" "}
                <Link
                  href="/service-area/georgia"
                  className="text-primary-green hover:text-primary-green-dark font-bold"
                >
                  Georgia
                </Link>{" "}
                and Southeast states, subject to logistics-based volume
                minimums.
              </p>
            </div>
            <div className="text-center">
              <button
                onClick={() => setShowPickupForm(true)}
                className="bg-primary-green hover:bg-primary-green-dark text-white px-8 sm:px-12 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                SCHEDULE FREE PICKUP
              </button>
            </div>
          </div>
        </div>
      </section>

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
