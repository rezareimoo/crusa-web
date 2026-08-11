"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PickupForm from "@/components/PickupForm";
import Header from "@/components/Header";
import ParticleBackground from "@/components/ParticleBackground";
import StructuredData from "@/components/StructuredData";
import { Analytics } from "@vercel/analytics/react";

export default function HardDriveShredding() {
  const [showPickupForm, setShowPickupForm] = useState(false);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Hard Drive & SSD Shredding",
    description:
      "Hard drive shredding in Atlanta and Georgia. Physical destruction of HDDs, SSDs, and storage media under R2v3 Appendix B with serialized certificates of destruction.",
    provider: {
      "@id": "https://www.crusallc.com/#organization",
    },
    areaServed: [
      { "@type": "City", name: "Atlanta" },
      { "@type": "State", name: "Georgia" },
    ],
    serviceType: "Hard Drive Shredding",
    offers: {
      "@type": "Offer",
      description:
        "Physical data destruction with serialized COD and audit reporting",
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
      {
        "@type": "ListItem",
        position: 4,
        name: "Hard Drive & SSD Shredding",
        item: "https://www.crusallc.com/services/hard-drive-shredding",
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
              <span className="text-primary-green">
                Hard Drive & SSD Shredding
              </span>{" "}
              in Atlanta and Georgia
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-6 sm:mb-8 px-2">
              <strong>
                Physical destruction of HDDs, SSDs, and storage media under R2v3
                Appendix B at our Suwanee facility—with serialized certificates
                of destruction.
              </strong>
            </p>
            <div className="flex justify-center px-4">
              <button
                onClick={() => setShowPickupForm(true)}
                className="bg-primary-green hover:bg-primary-green-dark text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto max-w-sm sm:max-w-none"
              >
                SCHEDULE FREE PICKUP
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Physical Destruction Under R2v3 Appendix B
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Hard drive shredding in Atlanta and across Georgia is performed
                at our certified Suwanee facility under R2v3 Appendix B scope.
                Destruction methods follow NIST SP 800-88. The standard
                specifies distinct approved methods per media type—magnetic hard
                disk, solid state, optical, and magnetic tape are not treated
                identically.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Equipment is accepted in any condition, including units that do
                not power on. Need reuse value instead? See our{" "}
                <Link
                  href="/services/data-sanitization"
                  className="text-primary-green hover:text-primary-green-dark font-bold"
                >
                  certified data sanitization
                </Link>{" "}
                path, or return to the{" "}
                <Link
                  href="/services/data-destruction"
                  className="text-primary-green hover:text-primary-green-dark font-bold"
                >
                  data destruction overview
                </Link>
                .
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    Serialized COD
                  </h3>
                  <p className="text-gray-600">
                    Make, model, serial number, method, and date
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    Free Business Pickup
                  </h3>
                  <p className="text-gray-600">
                    Throughout Georgia, subject to volume minimums
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    Any Condition
                  </h3>
                  <p className="text-gray-600">
                    Including non-functional drives and media
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    5–10 Business Days
                  </h3>
                  <p className="text-gray-600">
                    Audit report and certificate of destruction
                  </p>
                </div>
              </div>
            </div>

            <div className="relative hidden md:block">
              <Image
                src="/shredder-nobg.png"
                alt="Hard drive shredding equipment for physical data destruction in Atlanta Georgia"
                width={600}
                height={400}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>

          <div className="mb-16 bg-primary-green rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-8 text-center">
              NIST Methods Differ by Media Type
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-3">
                  Magnetic HDDs & Tape
                </h3>
                <p className="text-gray-100">
                  Magnetic hard disk drives and magnetic tape may include
                  degaussing as an approved NIST method for that media class.
                  Degaussing affects magnetic domains; it is not a universal
                  step for every storage device.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">SSDs & Flash Media</h3>
                <p className="text-gray-100">
                  Solid-state drives store data in NAND flash, not magnetic
                  media. NIST SP 800-88 is explicit that degaussing is
                  ineffective on flash. SSDs and similar flash media require
                  physical destruction methods appropriate to solid-state
                  storage—not degaussing.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              What You Receive
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-primary-green transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Serialized Certificate of Destruction
                </h3>
                <p className="text-gray-600">
                  Each certificate records make, model, serial number,
                  destruction method, and date for audit-ready documentation.
                </p>
              </div>
              <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-primary-green transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Facility Processing
                </h3>
                <p className="text-gray-600">
                  Destruction at our R2v3 certified Suwanee facility after{" "}
                  <Link
                    href="/services/free-it-equipment-pickup"
                    className="text-primary-green hover:text-primary-green-dark font-semibold"
                  >
                    free business pickup
                  </Link>{" "}
                  or individual drop-off.
                </p>
              </div>
              <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-primary-green transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Audit Report
                </h3>
                <p className="text-gray-600">
                  Comprehensive reporting typically delivered within 5–10
                  business days from pickup.
                </p>
              </div>
            </div>
          </div>

          <div
            id="onsite-witnessed-destruction"
            className="mb-16 bg-gray-50 rounded-2xl p-8 scroll-mt-28"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Onsite witnessed destruction
            </h2>
            <p className="text-lg text-gray-600 mb-3">
              Onsite witnessed destruction is available on request for
              organizations with witness requirements.
            </p>
            <p className="text-lg text-gray-600">
              The default and recommended path is processing at our certified
              Suwanee facility, where R2v3 Appendix B controls, serialization,
              and reporting are performed under a consistent, audited process.
            </p>
          </div>

          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Pickup & Drop-Off Across Georgia
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Free business pickup throughout{" "}
                <Link
                  href="/service-area/georgia"
                  className="text-primary-green hover:text-primary-green-dark font-bold"
                >
                  Georgia
                </Link>
                , subject to logistics-based volume minimums. Individuals may
                drop off at our Suwanee facility, 3644 Burnette Road, during
                business hours (Mon–Fri 9:30AM–4:30PM EST).
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center mb-8">
              {[
                "Atlanta",
                "Marietta",
                "Augusta",
                "Columbus",
                "Macon",
                "Suwanee",
                "Decatur",
                "Roswell",
                "Sandy Springs",
                "Lawrenceville",
                "Johns Creek",
                "Alpharetta",
              ].map((city) => (
                <div key={city} className="bg-gray-50 rounded-lg p-4">
                  <p className="font-semibold text-gray-900">{city}</p>
                </div>
              ))}
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
