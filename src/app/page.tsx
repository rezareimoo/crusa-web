"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, useCallback } from "react";
import PickupForm from "@/components/PickupForm";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showPickupForm, setShowPickupForm] = useState(false);
  const [navReady, setNavReady] = useState(true);
  const [dropdownEnabled, setDropdownEnabled] = useState(true);
  const [aboutOpen, setAboutOpen] = useState(false);
  const aboutHoverTimerRef = useRef<number | null>(null);
  const closeTimerRef = useRef<number | null>(null);
  const [isHoveringDropdown, setIsHoveringDropdown] = useState(false);

  const scheduleAboutOpen = () => {
    if (aboutHoverTimerRef.current) {
      window.clearTimeout(aboutHoverTimerRef.current);
    }
    aboutHoverTimerRef.current = window.setTimeout(() => {
      if (navReady && dropdownEnabled) {
        setAboutOpen(true);
      }
    }, 200);
  };

  const cancelClose = useCallback(() => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);

  const scheduleClose = () => {
    cancelClose();
    closeTimerRef.current = window.setTimeout(() => {
      if (!isHoveringDropdown) {
        setAboutOpen(false);
      }
    }, 180);
  };

  const closeAboutDropdown = useCallback(() => {
    if (aboutHoverTimerRef.current) {
      window.clearTimeout(aboutHoverTimerRef.current);
    }
    cancelClose();
    setAboutOpen(false);
  }, [cancelClose]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const next = scrollTop > 100;
      if (next !== isScrolled) {
        setNavReady(false);
        setDropdownEnabled(false);
        setIsScrolled(next);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);

  useEffect(() => {
    setNavReady(false);
    const timer = setTimeout(() => setNavReady(true), 250);
    return () => clearTimeout(timer);
  }, [isScrolled]);

  useEffect(() => {
    setDropdownEnabled(false);
    const enableOnMove = () => {
      setDropdownEnabled(true);
      window.removeEventListener("mousemove", enableOnMove);
    };
    window.addEventListener("mousemove", enableOnMove, { once: true });
    return () => {
      window.removeEventListener("mousemove", enableOnMove);
    };
  }, [isScrolled]);

  useEffect(() => {
    closeAboutDropdown();
  }, [isScrolled, closeAboutDropdown]);

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
              <Image
                src="/logo2.png"
                alt="Computer Recyclers USA Logo"
                width={isScrolled ? 160 : 200}
                height={isScrolled ? 64 : 80}
                priority
                className="hover:scale-105 transition-all duration-300 mix-blend-multiply"
                style={{ background: "transparent" }}
              />
            </div>

            {/* Certifications / Navigation Links when scrolled */}
            <div
              className={`hidden lg:flex items-center transition-all duration-500 ${
                isScrolled ? "space-x-6" : "space-x-6"
              } text-sm text-gray-600 ${
                !navReady ? "pointer-events-none" : ""
              }`}
            >
              {!isScrolled ? (
                // Certifications when at top
                <>
                  <div className="flex flex-col items-center p-2 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="font-semibold text-primary-green text-sm">
                      R2 v3
                    </div>
                    <div className="text-xs text-gray-900">Certified</div>
                  </div>
                  <div className="flex flex-col items-center p-2 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="font-semibold text-primary-green text-sm">
                      ISO 14001
                    </div>
                    <div className="text-xs text-gray-900">Environmental</div>
                  </div>
                  <div className="flex flex-col items-center p-2 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="font-semibold text-primary-green text-sm">
                      ISO 9001
                    </div>
                    <div className="text-xs text-gray-900">Quality</div>
                  </div>
                  <div className="flex flex-col items-center p-2 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="font-semibold text-primary-green text-sm">
                      ISO 45001
                    </div>
                    <div className="text-xs text-gray-900">Safety</div>
                  </div>
                </>
              ) : (
                // Navigation links when scrolled
                <>
                  <a
                    href="#home"
                    className="text-gray-900 hover:text-primary-green px-3 py-2 text-sm font-medium transition-colors relative group"
                  >
                    HOME
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-green transition-all duration-300 group-hover:w-full"></span>
                  </a>
                  <Link
                    href="/services"
                    className="text-gray-900 hover:text-primary-green px-3 py-2 text-sm font-medium transition-colors relative group"
                  >
                    SERVICES
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-green transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                  <div
                    className={`relative z-[9998] ${
                      !dropdownEnabled ? "pointer-events-none" : ""
                    }`}
                    onMouseEnter={() => {
                      scheduleAboutOpen();
                      cancelClose();
                    }}
                    onMouseLeave={scheduleClose}
                  >
                    <button className="text-gray-900 hover:text-primary-green px-3 py-2 text-sm font-medium transition-colors relative">
                      ABOUT US
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-green transition-all duration-300 group-hover:w-full"></span>
                      <svg
                        className="w-4 h-4 ml-1 inline-block"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {navReady && dropdownEnabled && aboutOpen && (
                      <div
                        className={`absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 transition-all duration-150 z-[9999]`}
                        onMouseEnter={() => {
                          setIsHoveringDropdown(true);
                          cancelClose();
                        }}
                        onMouseLeave={() => {
                          setIsHoveringDropdown(false);
                          scheduleClose();
                        }}
                      >
                        <Link
                          href="/about"
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-green transition-colors"
                        >
                          About Us
                        </Link>
                        <Link
                          href="/faq"
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-green transition-colors border-t border-gray-100"
                        >
                          FAQ
                        </Link>
                      </div>
                    )}
                  </div>
                  <a
                    href="#contact"
                    className="text-gray-900 hover:text-primary-green px-3 py-2 text-sm font-medium transition-colors relative group"
                  >
                    CONTACT
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-green transition-all duration-300 group-hover:w-full"></span>
                  </a>
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
        className={`bg-white border-b border-gray-200 shadow-sm transition-all duration-700 ease-in-out relative z-50 ${
          isScrolled
            ? "max-h-0 opacity-0 -translate-y-2"
            : "max-h-20 opacity-100 translate-y-0"
        } ${isScrolled ? "pointer-events-none" : "pointer-events-auto"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex space-x-8">
              <a
                href="#home"
                className="text-gray-900 hover:text-primary-green px-3 py-2 text-sm font-medium transition-colors relative group"
              >
                HOME
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-green transition-all duration-300 group-hover:w-full"></span>
              </a>
              <Link
                href="/services"
                className="text-gray-900 hover:text-primary-green px-3 py-2 text-sm font-medium transition-colors relative group"
              >
                SERVICES
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-green transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <div
                className="relative z-[9998]"
                onMouseEnter={() => {
                  scheduleAboutOpen();
                  cancelClose();
                }}
                onMouseLeave={scheduleClose}
              >
                <button className="text-gray-900 hover:text-primary-green px-3 py-2 text-sm font-medium transition-colors relative">
                  ABOUT US
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-green transition-all duration-300 group-hover:w-full"></span>
                  <svg
                    className="w-4 h-4 ml-1 inline-block"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {navReady && dropdownEnabled && aboutOpen && (
                  <div
                    className={`absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 transition-all duration-150 z-[9999]`}
                    onMouseEnter={() => {
                      setIsHoveringDropdown(true);
                      cancelClose();
                    }}
                    onMouseLeave={() => {
                      setIsHoveringDropdown(false);
                      scheduleClose();
                    }}
                  >
                    <Link
                      href="/about"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-green transition-colors"
                    >
                      About Us
                    </Link>
                    <Link
                      href="/faq"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-green transition-colors border-t border-gray-100"
                    >
                      FAQ
                    </Link>
                  </div>
                )}
              </div>
              <a
                href="#contact"
                className="text-gray-900 hover:text-primary-green px-3 py-2 text-sm font-medium transition-colors relative group"
              >
                CONTACT
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-green transition-all duration-300 group-hover:w-full"></span>
              </a>
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
      <section
        id="home"
        className="relative min-h-[600px] bg-[url('/bg1.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-hero-overlay z-10"></div>
        {/* Content */}
        <div className="relative z-20 max-w-4xl mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-2xl leading-tight">
            Secure Data Destruction &
            <span className="text-primary-green"> Electronic Recycling</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 drop-shadow-lg max-w-3xl mx-auto">
            Professional data destruction, electronics recycling, and IT
            equipment services for businesses across Georgia
          </p>
          <div className="flex justify-center items-center">
            <button
              onClick={() => setShowPickupForm(true)}
              className="bg-primary-green hover:bg-primary-green-dark text-white px-10 py-4 rounded-lg font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 text-lg"
            >
              SCHEDULE FREE PICKUP
            </button>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-primary-green text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-4">
              <Image
                src="/r2-logo.png"
                alt="R2 Logo"
                width={60}
                height={60}
                className="animate-pulse-gentle"
              />
              <div>
                <div className="text-lg font-bold">
                  R2v3 Certified Data Destruction
                </div>
                <div className="text-sm opacity-90">
                  Secure • Compliant • Reliable
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-8 text-sm">
              <div className="text-center">
                <div className="font-bold text-xl">10,000+</div>
                <div className="opacity-90">Devices Processed</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-xl">500+</div>
                <div className="opacity-90">Corporate Clients</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-xl">24/7</div>
                <div className="opacity-90">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional onsite data destruction, free equipment pickup,
              responsible recycling, and IT equipment leasing services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
              <div className="w-16 h-16 bg-primary-green rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-green-dark transition-colors">
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
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Onsite Data Destruction
              </h3>
              <p className="text-gray-600 mb-6">
                Secure, witnessed destruction of your sensitive data at your
                location for maximum security and peace of mind.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
              <div className="w-16 h-16 bg-primary-green rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-green-dark transition-colors">
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
                    d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Free IT Equipment Pickup
              </h3>
              <p className="text-gray-600 mb-6">
                We&apos;ll pick up your IT equipment at no cost throughout the
                state of Georgia, regardless of condition. Convenient scheduling
                for your business needs.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
              <div className="w-16 h-16 bg-primary-green rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-green-dark transition-colors">
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
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Responsible Recycling
              </h3>
              <p className="text-gray-600 mb-6">
                Environmentally responsible recycling of electronic equipment
                following industry best practices and regulations.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
              <div className="w-16 h-16 bg-primary-green rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-green-dark transition-colors">
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
                    d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                IT Equipment Leasing
              </h3>
              <p className="text-gray-600 mb-6">
                Flexible IT equipment leasing solutions to help your business
                access the technology it needs when it needs it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Computer Recyclers USA?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Serving Georgia businesses with reliable data destruction,
                electronics recycling, equipment pickup, and IT leasing services
                you can trust.
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
                      R2v3 Certified Facility
                    </h3>
                    <p className="text-gray-600">
                      Our facility meets the highest industry standards for
                      responsible recycling and data security.
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
                      Comprehensive Compliance
                    </h3>
                    <p className="text-gray-600">
                      HIPAA, SOX, GLBA, and FACTA compliant processes ensure
                      your regulatory requirements are met.
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
                      Enterprise Support
                    </h3>
                    <p className="text-gray-600">
                      Dedicated account managers and 24/7 support for
                      large-scale corporate clients.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-primary-green to-primary-green-dark rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Our Certifications</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold text-primary-green">
                        R2
                      </span>
                    </div>
                    <div className="font-semibold">R2v3 Certified</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-xl font-bold text-primary-green">
                        ISO
                      </span>
                    </div>
                    <div className="font-semibold">Multiple ISO Standards</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-xl font-bold text-primary-green">
                        EPA
                      </span>
                    </div>
                    <div className="font-semibold">EPA Compliant</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-xl font-bold text-primary-green">
                        DOD
                      </span>
                    </div>
                    <div className="font-semibold">DoD 5220.22-M</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Contact us today for a free consultation and quote for your data
              destruction, equipment pickup, recycling, and leasing needs.
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

          <div className="text-center mt-12">
            <button
              onClick={() => setShowPickupForm(true)}
              className="bg-primary-green hover:bg-primary-green-dark text-white px-12 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
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
