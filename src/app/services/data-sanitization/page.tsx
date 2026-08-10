"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PickupForm from "@/components/PickupForm";
import Header from "@/components/Header";
import ParticleBackground from "@/components/ParticleBackground";
import StructuredData from "@/components/StructuredData";
import { Analytics } from "@vercel/analytics/react";

export default function DataSanitization() {
  const [showPickupForm, setShowPickupForm] = useState(false);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Certified Logical Data Sanitization",
    description:
      "R2v3 Appendix B logical data sanitization and hard drive wiping in Georgia. Software erasure between NIST Clear and Purge with independent verification sampling.",
    provider: {
      "@id": "https://www.crusallc.com/#organization",
    },
    areaServed: {
      "@type": "State",
      name: "Georgia",
    },
    serviceType: "Data Sanitization",
    offers: {
      "@type": "Offer",
      description:
        "Certified logical sanitization for device reuse with serialized certificates and physical destruction fallback",
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
        name: "Data Sanitization",
        item: "https://www.crusallc.com/services/data-sanitization",
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
              Certified Logical{" "}
              <span className="text-primary-green">Data Sanitization</span> —{" "}
              R2v3 Appendix B
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-6 sm:mb-8 px-2">
              <strong>
                Hard drive wiping in Georgia under R2v3 Appendix B—so devices
                can be reused with confidence that private data is not
                recoverable.
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
                Why Appendix B Logical Scope Matters
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Computer Recyclers USA is certified for logical data
                sanitization under R2v3 Appendix B—not only physical
                destruction. In R2v3, the only path for logically sanitizing
                data so a device can be reused is Appendix B. A recycler without
                that scope must physically destroy data-bearing drives.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                R2 facilities not certified to Appendix B can still physically
                destroy data devices per NIST guidelines—so &quot;R2
                certified&quot; alone does not mean a vendor can wipe your
                drives for reuse. Scope statements are published by SERI and can
                be verified. Compare paths on our{" "}
                <Link
                  href="/services/data-destruction"
                  className="text-primary-green hover:text-primary-green-dark font-bold"
                >
                  data destruction Georgia
                </Link>{" "}
                hub, or see{" "}
                <Link
                  href="/services/hard-drive-shredding"
                  className="text-primary-green hover:text-primary-green-dark font-bold"
                >
                  hard drive shredding
                </Link>{" "}
                when reuse is not the goal.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    Appendix B Logical
                  </h3>
                  <p className="text-gray-600">
                    Certified scope for reuse—not destruction-only
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    Verify on SERI
                  </h3>
                  <p className="text-gray-600">
                    Published scope statements confirm Appendix B coverage
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    Between Clear & Purge
                  </h3>
                  <p className="text-gray-600">
                    R2v3 sets logical sanitization between NIST levels
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    5% Verification
                  </h3>
                  <p className="text-gray-600">
                    Appendix B(13) independent sampling requirement
                  </p>
                </div>
              </div>
            </div>

            <div className="relative hidden md:block">
              <Image
                src="/shredder-nobg.png"
                alt="Certified data sanitization and hard drive wiping process in Georgia"
                width={600}
                height={400}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>

          <div className="mb-16 bg-primary-green rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-8 text-center">
              The Sanitization Process
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-3">Software, Not Manual Reset</h3>
                <p className="text-gray-100">
                  Media is sanitized using software rather than manually reset,
                  to ensure a level of rigor, transparency, and accountability
                  that can be relied on. A qualified technician performs the
                  process, and both the equipment and software used must be
                  specifically designed for the task.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">
                  Verification & Fallback
                </h3>
                <p className="text-gray-100">
                  Appendix B(13) requires a minimum of 5% of logically sanitized
                  storage media to be verified by a competent and independent
                  party, demonstrating that data is not recoverable using
                  commercial data recovery software. If logical sanitization
                  fails, the device is physically destroyed under physical
                  sanitization methods. A serialized certificate is issued per
                  device.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              The Commercial Case for Certified Erasure
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
              Sanitized drives retain resale value. Shredded drives return scrap
              value only. Certification is what makes responsible reuse possible.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Resale Value vs Scrap
                </h3>
                <p className="text-gray-600">
                  When drives are logically sanitized under Appendix B, they can
                  return to the reuse market. Physical destruction permanently
                  ends that asset&apos;s resale path—appropriate when Destroy is
                  the required NIST outcome, but costly when reuse would have
                  met your risk requirements.
                </p>
              </div>
              <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  SERI&apos;s Position on Confidence
                </h3>
                <p className="text-gray-600">
                  Without confidence that private or confidential data is
                  unrecoverable, devices will likely be physically destroyed to
                  protect that data. The certification—and the verification it
                  requires—is what makes reuse possible at all.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16 bg-gray-50 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Serving Georgia Businesses
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Certified data sanitization at{" "}
                <strong>3644 Burnette Road, Suwanee, GA 30024</strong>, with
                free business{" "}
                <Link
                  href="/services/free-it-equipment-pickup"
                  className="text-primary-green hover:text-primary-green-dark font-bold"
                >
                  IT equipment pickup
                </Link>{" "}
                throughout{" "}
                <Link
                  href="/service-area/georgia"
                  className="text-primary-green hover:text-primary-green-dark font-bold"
                >
                  Georgia
                </Link>{" "}
                and the Southeast. Also ISO 9001, ISO 14001, and ISO 45001
                certified; processes align with HIPAA, SOX, GLBA, and FACTA.
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
