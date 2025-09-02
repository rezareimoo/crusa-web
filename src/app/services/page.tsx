"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import PickupForm from "@/components/PickupForm";

export default function Services() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showPickupForm, setShowPickupForm] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
                  alt="Computer Recyclers USA Logo"
                  width={isScrolled ? 120 : 140}
                  height={isScrolled ? 48 : 56}
                  priority
                  className="hover:scale-105 transition-all duration-300 mix-blend-multiply cursor-pointer sm:w-auto"
                  style={{ background: "transparent" }}
                />
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 hover:text-primary-green focus:outline-none focus:text-primary-green transition-colors p-2"
                aria-label="Toggle mobile menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {mobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>

            {/* Desktop Certifications / Navigation Links when scrolled */}
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
                    className="text-primary-green px-3 py-2 text-sm font-medium transition-colors relative group"
                  >
                    SERVICES
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-green"></span>
                  </Link>
                  <Link
                    href="/about"
                    className="text-gray-900 hover:text-primary-green px-3 py-2 text-sm font-medium transition-colors relative group"
                  >
                    ABOUT US
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-green transition-all duration-300 group-hover:w-full"></span>
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

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-lg" style={{ marginTop: isScrolled ? '72px' : '88px' }}>
          <div className="px-4 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-primary-green hover:bg-gray-50 rounded-md transition-colors"
            >
              HOME
            </Link>
            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-primary-green bg-gray-50 rounded-md"
            >
              SERVICES
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-primary-green hover:bg-gray-50 rounded-md transition-colors"
            >
              ABOUT US
            </Link>
            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-primary-green hover:bg-gray-50 rounded-md transition-colors"
            >
              CONTACT
            </Link>
            <button
              onClick={() => {
                setShowPickupForm(true);
                setMobileMenuOpen(false);
              }}
              className="w-full mt-3 bg-primary-green hover:bg-primary-green-dark text-white px-4 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              SCHEDULE FREE PICKUP
            </button>
          </div>
        </div>
      )}

      {/* Navigation Bar - disappears when scrolled (hidden on mobile) */}
      <nav
        className={`hidden lg:block bg-white border-b border-gray-200 shadow-sm transition-all duration-700 ease-in-out overflow-hidden ${
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
                className="text-primary-green px-3 py-2 text-sm font-medium transition-colors relative group"
              >
                SERVICES
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-green"></span>
              </Link>
              <Link
                href="/about"
                className="text-gray-900 hover:text-primary-green px-3 py-2 text-sm font-medium transition-colors relative group"
              >
                ABOUT US
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-green transition-all duration-300 group-hover:w-full"></span>
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

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              Our <span className="text-primary-green">Services</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-6 sm:mb-8 px-2">
              <strong>
                Comprehensive data destruction and electronics recycling
                solutions designed for Georgia businesses of all sizes
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
          {/* Service 1: Onsite Data Destruction */}
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
                    Onsite Data Destruction
                  </h2>
                </div>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8">
                  <strong>
                    Witness the complete destruction of your sensitive data at
                    your location with our state-of-the-art mobile shredding
                    units. Our certified technicians ensure your confidential
                    information is permanently destroyed according to the
                    highest industry standards.
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
                        Complete Hard Drive Shredding
                      </h3>
                      <p className="text-gray-600">
                        <strong>
                          Physical destruction of hard drives, SSDs, and storage
                          media using industrial-grade shredders that render
                          data completely unrecoverable.
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
                        Certified Documentation
                      </h3>
                      <p className="text-gray-600">
                        <strong>
                          Receive detailed certificates of destruction for
                          compliance and audit requirements, including serial
                          numbers and destruction methods used.
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
                          Full compliance with HIPAA, SOX, GLBA, and FACTA
                          regulations ensuring your business meets all legal
                          requirements for data destruction.
                        </strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <svg
                      className="w-24 h-24 mx-auto mb-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-lg font-medium">
                      Onsite Data Destruction Image
                    </p>
                    <p className="text-sm">Mobile shredding unit in action</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service 2: Free IT Equipment Pickup */}
          <div className="mb-16 sm:mb-20 lg:mb-24 animate-slide-up">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-gray-200 rounded-2xl h-64 sm:h-80 lg:h-96 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <svg
                      className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto mb-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                      <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1V8a1 1 0 00-1-1h-3z" />
                    </svg>
                    <p className="text-base sm:text-lg font-medium">Pickup Service Image</p>
                    <p className="text-sm">Professional pickup truck</p>
                  </div>
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
                    We provide complimentary pickup services throughout the
                    state of Georgia for all types of IT equipment, regardless
                    of age, condition, or quantity. Our professional team
                    handles the logistics so you can focus on your business.
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
                          Serving all cities and counties across Georgia with
                          reliable pickup scheduling that works around your
                          business hours and requirements.
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
                    Responsible Recycling
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
              </div>

              <div className="order-1 lg:order-2">
                <div className="bg-gray-200 rounded-2xl h-64 sm:h-80 lg:h-96 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <svg
                      className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto mb-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-base sm:text-lg font-medium">
                      Recycling Facility Image
                    </p>
                    <p className="text-sm">Clean recycling operation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service 4: IT Equipment Leasing */}
          <div className="mb-16 sm:mb-20 lg:mb-24 animate-slide-up">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-gray-200 rounded-2xl h-64 sm:h-80 lg:h-96 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <svg
                      className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto mb-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15.586 13H14a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-base sm:text-lg font-medium">IT Leasing Image</p>
                    <p className="text-sm">Modern office equipment</p>
                  </div>
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
                        d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                    IT Equipment Leasing
                  </h2>
                </div>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8">
                  <strong>
                    Access the latest technology without the capital expenditure
                    through our flexible IT equipment leasing programs. Perfect
                    for businesses looking to maintain modern systems while
                    preserving cash flow.
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
                        Flexible Terms
                      </h3>
                      <p className="text-gray-600">
                        <strong>
                          Choose from 12, 24, 36, or 48-month lease terms with
                          options to purchase, upgrade, or return equipment at
                          lease end.
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
                        Latest Technology
                      </h3>
                      <p className="text-gray-600">
                        <strong>
                          Access to current-generation computers, servers,
                          networking equipment, and peripherals from leading
                          manufacturers like Dell, HP, and Cisco.
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
                        Full Support
                      </h3>
                      <p className="text-gray-600">
                        <strong>
                          Comprehensive warranty coverage, technical support,
                          and maintenance services included throughout the
                          entire lease period.
                        </strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-2">
              Contact us today for a free consultation and quote for your data
              destruction, equipment pickup, recycling, and leasing needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="text-gray-300 mb-2">770-840-0805</p>
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
              <p className="text-gray-300 mb-2">info@crusallc.com</p>
              <p className="text-sm text-gray-400">24/7 Response</p>
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
              <h3 className="text-xl font-bold mb-2">Visit Us</h3>
              <p className="text-gray-300 mb-2">3644 Burnette Rd</p>
              <p className="text-gray-300 mb-2">Suwanee, GA 30024</p>
              <p className="text-sm text-gray-400">Secure Facility</p>
            </div>
          </div>

          <div className="text-center mt-8 sm:mt-12 px-4">
            <button
              onClick={() => setShowPickupForm(true)}
              className="bg-primary-green hover:bg-primary-green-dark text-white px-8 sm:px-12 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto max-w-sm sm:max-w-none"
            >
              SCHEDULE FREE PICKUP
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
