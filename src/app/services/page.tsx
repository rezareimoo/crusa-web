"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PickupForm from "@/components/PickupForm";
import Header from "@/components/Header";
import ParticleBackground from "@/components/ParticleBackground";

export default function Services() {
  const [showPickupForm, setShowPickupForm] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="services" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-16 sm:py-20 overflow-hidden">
        <ParticleBackground />
        <div className="relative z-[1] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              Our <span className="text-primary-green">Services</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-6 sm:mb-8 px-2">
              <strong>
                Comprehensive data destruction and responsible electronics
                recycling solutions designed for{" "}
                <Link
                  href="/service-area/georgia"
                  className="text-primary-green hover:text-primary-green-dark font-bold"
                >
                  Georgia
                </Link>{" "}
                and Southeast businesses of all sizes
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

      {/* Services Grid */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Service 1: Data Destruction & Sanitization */}
          <div className="mb-16 sm:mb-20 lg:mb-24 animate-slide-up">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4 sm:mb-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary-green rounded-lg flex items-center justify-center mb-4 sm:mb-0 sm:mr-4 lg:mr-6 flex-shrink-0">
                    <svg
                      className="w-7 h-7 sm:w-8 sm:h-8 text-white"
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
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                    Data Destruction & Sanitization
                  </h2>
                </div>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8">
                  <strong>
                    NIST SP 800-88 data destruction in Georgia under R2v3
                    Appendix B. Choose physical shredding or logical
                    sanitization based on media type, sensitivity, and whether
                    you need reuse value.
                  </strong>
                </p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-primary-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Hard Drive & SSD Shredding
                      </h3>
                      <p className="text-gray-600">
                        <strong>
                          Physical destruction at our Suwanee facility with
                          serialized certificates.{" "}
                          <Link
                            href="/services/hard-drive-shredding"
                            className="text-primary-green hover:text-primary-green-dark"
                          >
                            Hard drive shredding Atlanta
                          </Link>
                          .
                        </strong>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-primary-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Certified Data Sanitization
                      </h3>
                      <p className="text-gray-600">
                        <strong>
                          Logical erasure under Appendix B so drives retain
                          resale value.{" "}
                          <Link
                            href="/services/data-sanitization"
                            className="text-primary-green hover:text-primary-green-dark"
                          >
                            Data sanitization
                          </Link>{" "}
                          with independent verification sampling.
                        </strong>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-primary-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Regulatory Compliance
                      </h3>
                      <p className="text-gray-600">
                        <strong>
                          Processes align with HIPAA, SOX, GLBA, and FACTA.
                          Certificates of destruction and audit reports in 5–10
                          business days from pickup.
                        </strong>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/services/data-destruction"
                    className="inline-flex items-center bg-primary-green hover:bg-primary-green-dark text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Data Destruction Overview
                    <svg
                      className="w-4 h-4 ml-2"
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
                  </Link>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="hidden sm:flex rounded-2xl h-48 sm:h-64 md:h-80 lg:h-96 items-center justify-center overflow-hidden">
                  <Image
                    src="/shredder-nobg.png"
                    alt="R2 certified data destruction and sanitization equipment in Georgia"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover object-center transform scale-75 sm:scale-87 md:scale-100 lg:scale-112 xl:scale-75"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Service 2: Free IT Equipment Pickup */}
          <div className="mb-16 sm:mb-20 lg:mb-24 animate-slide-up">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="hidden sm:flex rounded-2xl h-48 sm:h-64 md:h-80 lg:h-96 items-center justify-center overflow-hidden">
                  <Image
                    src="/truck-nobg.png"
                    alt="Professional pickup truck for IT equipment collection"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4 sm:mb-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary-green rounded-lg flex items-center justify-center mb-4 sm:mb-0 sm:mr-4 lg:mr-6 flex-shrink-0">
                    <svg
                      className="w-7 h-7 sm:w-8 sm:h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                    Free IT Equipment Pickup
                  </h2>
                </div>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8">
                  <strong>
                    We provide complimentary pickup for businesses and corporate
                    organizations throughout Georgia and Southeast States for all
                    types of IT equipment, regardless of age or condition. Our
                    professional team handles the logistics so you can focus on
                    your business operations.
                  </strong>
                </p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-primary-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Statewide Coverage
                      </h3>
                      <p className="text-gray-600">
                        <strong>
                          Serving all cities and counties across Georgia and
                          Southeast States with reliable pickup scheduling that
                          works around your business hours and requirements.
                        </strong>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-primary-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        All Equipment Types
                      </h3>
                      <p className="text-gray-600">
                        <strong>
                          Computers, servers, laptops, monitors, printers,
                          networking equipment, and all other electronic devices
                          - working or non-working condition accepted.
                        </strong>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-primary-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Flexible Scheduling
                      </h3>
                      <p className="text-gray-600">
                        <strong>
                          Convenient appointment times including evenings and
                          weekends to minimize disruption to your business
                          operations.
                        </strong>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Link
                    href="/services/free-it-equipment-pickup"
                    className="inline-flex items-center bg-primary-green hover:bg-primary-green-dark text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Learn More About Free Pickup
                    <svg
                      className="w-4 h-4 ml-2"
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
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Service 3: Responsible Recycling */}
          <div className="mb-16 sm:mb-20 lg:mb-24 animate-slide-up">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4 sm:mb-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary-green rounded-lg flex items-center justify-center mb-4 sm:mb-0 sm:mr-4 lg:mr-6 flex-shrink-0">
                    <svg
                      className="w-7 h-7 sm:w-8 sm:h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                    Responsible Electronics Recycling
                  </h2>
                </div>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8">
                  <strong>
                    Our R2v3 certified facility ensures environmentally
                    responsible recycling of all electronic equipment using
                    industry-leading processes that minimize environmental
                    impact while maximizing material recovery.
                  </strong>
                </p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-primary-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Zero Landfill Guarantee
                      </h3>
                      <p className="text-gray-600">
                        <strong>
                          100% of materials are either refurbished for reuse or
                          broken down into raw materials for manufacturing -
                          nothing goes to landfills.
                        </strong>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-primary-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        EPA Compliance
                      </h3>
                      <p className="text-gray-600">
                        <strong>
                          All recycling processes meet or exceed EPA guidelines
                          and state environmental regulations for electronic
                          waste handling and processing.
                        </strong>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-primary-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Detailed Reporting
                      </h3>
                      <p className="text-gray-600">
                        <strong>
                          Comprehensive recycling reports showing exactly how
                          your equipment was processed, including weight
                          diverted from landfills and environmental impact
                          metrics.
                        </strong>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Link
                    href="/services/responsible-electronics-recycling"
                    className="inline-flex items-center bg-primary-green hover:bg-primary-green-dark text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Learn More About Responsible Recycling
                    <svg
                      className="w-4 h-4 ml-2"
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
                  </Link>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="hidden sm:flex rounded-2xl h-48 sm:h-64 md:h-80 lg:h-96 items-center justify-center overflow-hidden">
                  <Image
                    src="/upscale-c-2.svg"
                    alt="Responsible recycling facility and processes"
                    width={1200}
                    height={1200}
                    className="w-full h-full object-contain object-center transform scale-200 sm:scale-175 md:scale-200 lg:scale-175 xl:scale-150"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pickup Form Modal */}
      {showPickupForm && (
        <div
          className="fixed inset-0 z-[999999] bg-black bg-opacity-75 backdrop-blur-md transition-all duration-300 ease-out"
          style={{ animation: "fadeIn 300ms ease-out forwards" }}
        >
          {/* Mobile: Full screen, Desktop: Centered */}
          <div className="h-full w-full flex items-center justify-center p-0 sm:p-4">
            <div
              className="relative w-full h-full sm:max-w-4xl sm:max-h-[90vh] sm:rounded-2xl overflow-hidden bg-white shadow-2xl transition-all duration-200 ease-out transform"
              style={{ animation: "scaleIn 200ms ease-out 50ms both" }}
            >
              {/* Form container with integrated header */}
              <div className="h-full overflow-y-auto">
                <div className="pb-4 sm:pb-8">
                  <PickupForm onClose={() => setShowPickupForm(false)} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
