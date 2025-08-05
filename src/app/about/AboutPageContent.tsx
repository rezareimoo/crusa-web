"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import PickupForm from "@/components/PickupForm";

export default function AboutPageContent() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showPickupForm, setShowPickupForm] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header
        className={`bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95 transition-all duration-300 ${
          isScrolled ? "py-2" : "py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex justify-between items-center transition-all duration-300 ${
              isScrolled ? "py-2" : "py-4"
            }`}
          >
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/">
                <Image
                  src="/logo2.png"
                  alt="Computer Recyclers USA - R2 Certified Electronics Recycling Georgia"
                  width={isScrolled ? 160 : 200}
                  height={isScrolled ? 64 : 80}
                  priority
                  className="hover:scale-105 transition-all duration-300 mix-blend-multiply cursor-pointer"
                  style={{ background: "transparent" }}
                />
              </Link>
            </div>

            {/* Certifications / Navigation Links when scrolled */}
            <div
              className={`hidden lg:flex items-center transition-all duration-500 ${
                isScrolled ? "space-x-6" : "space-x-6"
              } text-sm text-gray-600`}
            >
              {!isScrolled ? (
                // Certifications when at top
                <>
                  <div className="flex flex-col items-center p-2 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="font-semibold text-primary-green text-sm">
                      R2 v3
                    </div>
                    <div className="text-xs">Certified</div>
                  </div>
                  <div className="flex flex-col items-center p-2 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="font-semibold text-primary-green text-sm">
                      ISO 14001
                    </div>
                    <div className="text-xs">Environmental</div>
                  </div>
                  <div className="flex flex-col items-center p-2 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="font-semibold text-primary-green text-sm">
                      ISO 9001
                    </div>
                    <div className="text-xs">Quality</div>
                  </div>
                  <div className="flex flex-col items-center p-2 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="font-semibold text-primary-green text-sm">
                      ISO 45001
                    </div>
                    <div className="text-xs">Safety</div>
                  </div>
                </>
              ) : (
                // Navigation links when scrolled
                <>
                  <Link
                    href="/"
                    className="text-gray-900 hover:text-primary-green px-3 py-2 text-sm font-medium transition-colors relative group"
                  >
                    HOME
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-green transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                  <Link
                    href="/services"
                    className="text-gray-900 hover:text-primary-green px-3 py-2 text-sm font-medium transition-colors relative group"
                  >
                    SERVICES
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-green transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                  <Link
                    href="/about"
                    className="text-primary-green px-3 py-2 text-sm font-medium transition-colors relative group"
                  >
                    ABOUT US
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-green"></span>
                  </Link>
                  <Link
                    href="/#contact"
                    className="text-gray-900 hover:text-primary-green px-3 py-2 text-sm font-medium transition-colors relative group"
                  >
                    CONTACT
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-green transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                  <button
                    onClick={() => setShowPickupForm(true)}
                    className="bg-primary-green hover:bg-primary-green-dark text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    SCHEDULE FREE PICKUP
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Bar - disappears when scrolled */}
      <nav
        className={`bg-white border-b border-gray-200 shadow-sm transition-all duration-700 ease-in-out overflow-hidden ${
          isScrolled
            ? "max-h-0 opacity-0 -translate-y-2"
            : "max-h-20 opacity-100 translate-y-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex space-x-8">
              <Link
                href="/"
                className="text-gray-900 hover:text-primary-green px-3 py-2 text-sm font-medium transition-colors relative group"
              >
                HOME
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-green transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/services"
                className="text-gray-900 hover:text-primary-green px-3 py-2 text-sm font-medium transition-colors relative group"
              >
                SERVICES
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-green transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/about"
                className="text-primary-green px-3 py-2 text-sm font-medium transition-colors relative group"
              >
                ABOUT US
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-green"></span>
              </Link>
              <Link
                href="/#contact"
                className="text-gray-900 hover:text-primary-green px-3 py-2 text-sm font-medium transition-colors relative group"
              >
                CONTACT
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-green transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
            <button
              onClick={() => setShowPickupForm(true)}
              className="bg-primary-green hover:bg-primary-green-dark text-white px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              SCHEDULE FREE PICKUP
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section - SEO Optimized */}
      <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About{" "}
              <span className="text-primary-green">Computer Recyclers USA</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
              <strong>
                Georgia&apos;s Leading R2 Certified Electronics Recycling & Data
                Destruction Company Since 2004
              </strong>
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => setShowPickupForm(true)}
                className="bg-primary-green hover:bg-primary-green-dark text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                GET FREE CONSULTATION
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Company History Section - SEO Optimized */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center animate-slide-up">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                20+ Years of Excellence in Georgia Electronics Recycling
              </h2>
              <div className="space-y-6">
                <p className="text-xl text-gray-600">
                  <strong>
                    Founded in 2004 in Georgia, Computer Recyclers USA has built
                    an unmatched reputation as the Southeast&apos;s most trusted
                    partner for secure data destruction, IT asset disposition
                    (ITAD), and responsible electronics recycling.
                  </strong>
                </p>
                <p className="text-lg text-gray-600">
                  What began as a local Suwanee, Georgia initiative to address
                  the growing need for secure IT equipment disposal has evolved
                  into Georgia&apos;s premier R2 v3 certified recycling
                  facility. We serve businesses of all sizes - from Atlanta
                  startups to Fortune 500 companies - across the entire state of
                  Georgia.
                </p>
                <p className="text-lg text-gray-600">
                  Our deep Georgia roots give us unique insight into local
                  business needs. Whether you&apos;re in Atlanta, Savannah,
                  Augusta, Columbus, Macon, or anywhere in between, we
                  understand Georgia&apos;s business landscape. This local
                  expertise, combined with our industry-leading R2 v3, ISO
                  14001, ISO 9001, and ISO 45001 certifications, makes Computer
                  Recyclers USA the clear choice for secure electronics
                  recycling and data destruction services in Georgia.
                </p>
                <p className="text-lg text-gray-600">
                  Our Suwanee facility, conveniently located at 3644 Burnette
                  Road (near I-85 and GA-316), serves as the hub for our
                  statewide operations, offering free IT equipment pickup
                  services throughout Georgia.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-green to-primary-green-dark rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">
                  Georgia&apos;s Trusted IT Recycling Leader
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">20+</div>
                    <div className="text-sm opacity-90">
                      Years Serving Georgia
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">500K+</div>
                    <div className="text-sm opacity-90">Devices Recycled</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">1,000+</div>
                    <div className="text-sm opacity-90">Georgia Businesses</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">100%</div>
                    <div className="text-sm opacity-90">
                      Zero Landfill Policy
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section - SEO Optimized */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Industry-Leading Certifications for Georgia Businesses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive certifications ensure Georgia businesses receive
              the highest standards of data security, environmental
              responsibility, and operational excellence in electronics
              recycling and IT asset disposition.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group text-center">
              <div className="w-20 h-20 bg-primary-green rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-green-dark transition-colors">
                <span className="text-2xl font-bold text-white">R2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                R2 v3 Certified Facility
              </h3>
              <p className="text-gray-600">
                The gold standard for responsible electronics recycling. Our R2
                v3 certification guarantees secure data destruction and
                environmental compliance for all Georgia businesses.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group text-center">
              <div className="w-20 h-20 bg-primary-green rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-green-dark transition-colors">
                <span className="text-lg font-bold text-white">ISO</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                ISO 14001:2015 Environmental
              </h3>
              <p className="text-gray-600">
                Environmental management certification demonstrating our
                commitment to sustainable e-waste recycling practices throughout
                Georgia&apos;s communities.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group text-center">
              <div className="w-20 h-20 bg-primary-green rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-green-dark transition-colors">
                <span className="text-lg font-bold text-white">ISO</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                ISO 9001:2015 Quality
              </h3>
              <p className="text-gray-600">
                Quality management certification ensuring consistent, reliable
                IT equipment recycling and data destruction services for Atlanta
                and Georgia businesses.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group text-center">
              <div className="w-20 h-20 bg-primary-green rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-green-dark transition-colors">
                <span className="text-lg font-bold text-white">ISO</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                ISO 45001:2018 Safety
              </h3>
              <p className="text-gray-600">
                Occupational health and safety certification protecting our team
                and your business during electronics recycling and data
                destruction processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - SEO Optimized */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Empowering Georgia&apos;s Sustainable Technology Practices
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                <strong>
                  Computer Recyclers USA empowers Georgia businesses to
                  implement sustainable technology lifecycle management. Beyond
                  electronics recycling, we help Atlanta and Georgia
                  organizations develop comprehensive IT asset disposition
                  (ITAD) strategies that protect data and the environment.
                </strong>
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-white"
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
                      Environmental Stewardship in Georgia
                    </h3>
                    <p className="text-gray-600">
                      Every electronic device we process at our Suwanee facility
                      follows strict environmental protocols. Our zero landfill
                      policy ensures 100% of materials are responsibly recycled,
                      refurbished, or properly disposed of, protecting
                      Georgia&apos;s environment for future generations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-white"
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
                      Corporate Data Security & Compliance
                    </h3>
                    <p className="text-gray-600">
                      We help Georgia businesses meet corporate sustainability
                      goals while maintaining the highest data security
                      standards. Our certified data destruction services ensure
                      compliance with HIPAA, FACTA, SOX, and other regulatory
                      requirements critical to Georgia businesses.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-white"
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
                      Innovative IT Solutions for Georgia
                    </h3>
                    <p className="text-gray-600">
                      Our IT equipment leasing programs and consulting services
                      help Atlanta and Georgia businesses access the latest
                      technology while planning for responsible end-of-life
                      management. We make sustainable IT practices both
                      practical and profitable.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <svg
                    className="w-24 h-24 mx-auto mb-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-lg font-medium">
                    Sustainability in Action
                  </p>
                  <p className="text-sm">Georgia&apos;s Environmental Leader</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speed and Service Section - SEO Optimized */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <svg
                    className="w-24 h-24 mx-auto mb-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-lg font-medium">Rapid Response Service</p>
                  <p className="text-sm">Fast Georgia Pickup & Processing</p>
                </div>
              </div>
            </div>

            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Georgia&apos;s Fastest IT Equipment Pickup & Data Destruction
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                <strong>
                  Computer Recyclers USA prides itself on rapid response times
                  throughout Georgia. When Atlanta businesses need urgent data
                  destruction or IT equipment removal, we deliver fast, secure
                  solutions without compromising quality or compliance
                  standards.
                </strong>
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Same-Day Emergency Response in Atlanta
                    </h3>
                    <p className="text-gray-600">
                      Critical data destruction requests in the Atlanta metro
                      area are handled immediately. Our mobile shredding units
                      can be deployed within hours for emergency situations,
                      serving businesses from Buckhead to Decatur, Marietta to
                      Alpharetta.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      24-48 Hour Statewide Georgia Coverage
                    </h3>
                    <p className="text-gray-600">
                      Our logistics network enables rapid IT equipment pickup
                      and mobile data destruction services across all of
                      Georgia. From Savannah to Columbus, Augusta to Macon, we
                      guarantee pickup within 24-48 hours for scheduled
                      services.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Instant Digital Certificates of Destruction
                    </h3>
                    <p className="text-gray-600">
                      Certificates of data destruction and recycling compliance
                      documentation are provided immediately upon completion.
                      Digital copies are available within minutes via our secure
                      portal, ensuring Georgia businesses maintain complete
                      audit trails.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section - SEO Optimized */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Visit Our Secure Suwanee, Georgia Facility
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Located in Suwanee, Georgia, our R2 certified facility features
              state-of-the-art technology for secure data destruction and
              electronics recycling. Convenient access from I-85 and GA-316
              serves all of metro Atlanta and North Georgia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-primary-green rounded-lg flex items-center justify-center flex-shrink-0">
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
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Suwanee, Georgia Location
                  </h3>
                  <address className="not-italic">
                    <p className="text-xl text-gray-600 mb-2">
                      3644 Burnette Road
                    </p>
                    <p className="text-xl text-gray-600 mb-4">
                      Suwanee, GA 30024
                    </p>
                  </address>
                  <p className="text-gray-600">
                    Strategically located in Gwinnett County to serve businesses
                    throughout metro Atlanta and North Georgia. Easy access from
                    I-85, I-985, and GA-316. Just 30 minutes from downtown
                    Atlanta, serving Alpharetta, Duluth, Johns Creek,
                    Lawrenceville, and surrounding communities.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-primary-green rounded-lg flex items-center justify-center flex-shrink-0">
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
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Call for Free Georgia Pickup
                  </h3>
                  <p className="text-2xl font-bold text-primary-green mb-4">
                    <a href="tel:770-840-0805" className="hover:underline">
                      770-840-0805
                    </a>
                  </p>
                  <p className="text-gray-600">
                    Speak directly with our Georgia-based team of certified
                    electronics recycling experts. Available Monday through
                    Friday, 8AM to 5PM EST. Emergency data destruction services
                    available 24/7 throughout Georgia.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <svg
                    className="w-24 h-24 mx-auto mb-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-lg font-medium">Suwanee Facility Map</p>
                  <p className="text-sm">R2 Certified Georgia Location</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Get Started Section - SEO Optimized */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Partner with Georgia&apos;s Leading IT Recycler?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join over 1,000 Georgia businesses who trust Computer Recyclers
              USA for secure data destruction, IT equipment pickup, electronics
              recycling, and IT asset disposition services. Free pickup
              available throughout Georgia.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-green rounded-full flex items-center justify-center mx-auto mb-4">
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
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Call Our Georgia Team</h3>
              <p className="text-gray-300 mb-2">
                <a href="tel:770-840-0805" className="hover:text-primary-green">
                  770-840-0805
                </a>
              </p>
              <p className="text-sm text-gray-400">Mon-Fri 8AM-5PM EST</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-green rounded-full flex items-center justify-center mx-auto mb-4">
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
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-gray-300 mb-2">
                <a
                  href="mailto:info@crusallc.com"
                  className="hover:text-primary-green"
                >
                  info@crusallc.com
                </a>
              </p>
              <p className="text-sm text-gray-400">24/7 Response Time</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-green rounded-full flex items-center justify-center mx-auto mb-4">
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
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">
                Visit Our Suwanee Facility
              </h3>
              <address className="not-italic">
                <p className="text-gray-300 mb-2">3644 Burnette Road</p>
                <p className="text-gray-300 mb-2">Suwanee, GA 30024</p>
              </address>
              <p className="text-sm text-gray-400">
                Secure R2 Certified Facility
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => setShowPickupForm(true)}
              className="bg-primary-green hover:bg-primary-green-dark text-white px-12 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              SCHEDULE FREE GEORGIA PICKUP
            </button>
          </div>
        </div>
      </section>

      {/* Pickup Form Modal */}
      {showPickupForm && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm transition-all duration-200 ease-out"
          style={{ animation: "fadeIn 200ms ease-out forwards" }}
        >
          <div
            className="relative max-w-2xl w-full max-h-[85vh] overflow-y-auto transition-all duration-200 ease-out transform"
            style={{ animation: "scaleIn 200ms ease-out 50ms both" }}
          >
            <button
              onClick={() => setShowPickupForm(false)}
              className="absolute top-4 right-4 z-10 bg-gray-900 bg-opacity-80 text-white rounded-full p-2 shadow-lg hover:bg-opacity-100 transition-all duration-200"
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
            <PickupForm />
          </div>
        </div>
      )}
    </div>
  );
}
