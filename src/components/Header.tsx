"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import PickupForm from "@/components/PickupForm";

interface HeaderProps {
  currentPage?: string;
}

export default function Header({ currentPage }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showPickupForm, setShowPickupForm] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [dropdownTimer, setDropdownTimer] = useState<NodeJS.Timeout | null>(null);
  const [aboutDropdownTimer, setAboutDropdownTimer] = useState<NodeJS.Timeout | null>(null);

  // Improved hover functions with delays for Services
  const handleDropdownEnter = () => {
    if (dropdownTimer) {
      clearTimeout(dropdownTimer);
      setDropdownTimer(null);
    }
    setServicesDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    const timer = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 300); // 300ms delay before closing
    setDropdownTimer(timer);
  };

  const closeDropdown = () => {
    if (dropdownTimer) {
      clearTimeout(dropdownTimer);
      setDropdownTimer(null);
    }
    setServicesDropdownOpen(false);
  };

  // About dropdown handlers
  const handleAboutDropdownEnter = () => {
    if (aboutDropdownTimer) {
      clearTimeout(aboutDropdownTimer);
      setAboutDropdownTimer(null);
    }
    setAboutDropdownOpen(true);
  };

  const handleAboutDropdownLeave = () => {
    const timer = setTimeout(() => {
      setAboutDropdownOpen(false);
    }, 300); // 300ms delay before closing
    setAboutDropdownTimer(timer);
  };

  const closeAboutDropdown = () => {
    if (aboutDropdownTimer) {
      clearTimeout(aboutDropdownTimer);
      setAboutDropdownTimer(null);
    }
    setAboutDropdownOpen(false);
  };

  const services = [
    {
      name: "Onsite Data Destruction",
      href: "/services/onsite-data-destruction",
      description: "Secure, witnessed data destruction at your location"
    },
    {
      name: "Free IT Equipment Pickup",
      href: "/services/free-it-equipment-pickup", 
      description: "Complimentary pickup throughout Georgia"
    },
    {
      name: "Responsible Electronics Recycling",
      href: "/services/responsible-electronics-recycling",
      description: "R2 v3 certified environmental recycling"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (servicesDropdownOpen && !target.closest('.services-dropdown-container')) {
        setServicesDropdownOpen(false);
      }
      if (aboutDropdownOpen && !target.closest('.about-dropdown-container')) {
        setAboutDropdownOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (servicesDropdownOpen) {
          setServicesDropdownOpen(false);
        }
        if (aboutDropdownOpen) {
          setAboutDropdownOpen(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
      if (dropdownTimer) {
        clearTimeout(dropdownTimer);
      }
      if (aboutDropdownTimer) {
        clearTimeout(aboutDropdownTimer);
      }
    };
  }, [servicesDropdownOpen, aboutDropdownOpen, dropdownTimer, aboutDropdownTimer]);

  return (
    <>
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-[999990] backdrop-blur-sm bg-white/95">
        {/* First Row - Certifications or Navigation */}
        <div className="border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-3">
              {/* Logo */}
              <div className="flex items-center">
                <Link href="/">
                  <Image
                    src="/logo2.png"
                    alt="Computer Recyclers USA Logo"
                    width={120}
                    height={48}
                    priority
                    className="hover:scale-105 transition-transform duration-300 mix-blend-multiply sm:w-auto cursor-pointer"
                    style={{ background: "transparent" }}
                  />
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="lg:hidden">
              <button
                onClick={() => {
                  setMobileMenuOpen(!mobileMenuOpen);
                  if (mobileMenuOpen) {
                    setMobileServicesOpen(false);
                    setMobileAboutOpen(false);
                  }
                }}
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

              {/* Desktop Certifications - fade out when scrolled */}
              <div
                className={`hidden lg:flex items-center space-x-6 text-sm text-gray-600 transition-opacity duration-300 ${
                  isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
              >
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
              </div>

              {/* Desktop Compact Navigation - fade in when scrolled */}
              <div
                className={`hidden lg:flex items-center space-x-4 text-sm text-gray-600 transition-opacity duration-300 ${
                  isScrolled ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                <Link
                  href="/"
                  className={`hover:text-primary-green px-2 py-1 text-sm font-medium transition-colors ${
                    currentPage === "home"
                      ? "text-primary-green"
                      : "text-gray-900"
                  }`}
                >
                  HOME
                </Link>
                <div 
                  className="relative services-dropdown-container"
                  onMouseEnter={handleDropdownEnter}
                  onMouseLeave={handleDropdownLeave}
                >
                  <button
                    onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                    className={`hover:text-primary-green px-2 py-1 text-sm font-medium transition-colors flex items-center ${
                      currentPage === "services"
                        ? "text-primary-green"
                        : "text-gray-900"
                    }`}
                  >
                    SERVICES
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {servicesDropdownOpen && (
                    <div 
                      className="absolute top-full left-0 mt-1 w-80 bg-white rounded-md shadow-xl border border-gray-200 py-2"
                      style={{ 
                        zIndex: 9999999
                      }}
                    >
                      <Link
                        href="/services"
                        onClick={closeDropdown}
                        className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-50 hover:text-primary-green transition-colors border-b border-gray-100"
                      >
                        <div className="font-medium">All Services</div>
                        <div className="text-gray-600 text-xs">View our complete service offerings</div>
                      </Link>
                      {services.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          onClick={closeDropdown}
                          className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-50 hover:text-primary-green transition-colors"
                        >
                          <div className="font-medium">{service.name}</div>
                          <div className="text-gray-600 text-xs">{service.description}</div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                <div 
                  className="relative about-dropdown-container"
                  onMouseEnter={handleAboutDropdownEnter}
                  onMouseLeave={handleAboutDropdownLeave}
                >
                  <button
                    onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                    className={`hover:text-primary-green px-2 py-1 text-sm font-medium transition-colors flex items-center ${
                      currentPage === "about"
                        ? "text-primary-green"
                        : "text-gray-900"
                    }`}
                  >
                    ABOUT US
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {aboutDropdownOpen && (
                    <div 
                      className="absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-xl border border-gray-200 py-2"
                      style={{ 
                        zIndex: 9999999
                      }}
                    >
                      <Link
                        href="/about"
                        onClick={closeAboutDropdown}
                        className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-50 hover:text-primary-green transition-colors border-b border-gray-100"
                      >
                        <div className="font-medium">About Us</div>
                        <div className="text-gray-600 text-xs">Learn about our company</div>
                      </Link>
                      <Link
                        href="/certificates"
                        onClick={closeAboutDropdown}
                        className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-50 hover:text-primary-green transition-colors"
                      >
                        <div className="font-medium">Certificates</div>
                        <div className="text-gray-600 text-xs">View our certifications</div>
                      </Link>
                    </div>
                  )}
                </div>
                <Link
                  href="/#contact"
                  className="text-gray-900 hover:text-primary-green px-2 py-1 text-sm font-medium transition-colors"
                >
                  CONTACT
                </Link>
                <button
                  onClick={() => setShowPickupForm(true)}
                  className="bg-primary-green hover:bg-primary-green-dark text-white px-3 py-1 rounded text-sm font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  SCHEDULE PICKUP
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row - Full Navigation (only visible when NOT scrolled) */}
        <div
          className={`hidden lg:block transition-all duration-500 ease-out ${
            (servicesDropdownOpen || aboutDropdownOpen) && !isScrolled ? 'overflow-visible' : 'overflow-hidden'
          } ${
            isScrolled ? "max-h-0 opacity-0 py-0" : "max-h-20 opacity-100 py-4"
          }`}
          style={{ zIndex: (servicesDropdownOpen || aboutDropdownOpen) && !isScrolled ? 999998 : 1 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              <div className="flex space-x-8">
                <Link
                  href="/"
                  className={`px-3 py-2 text-sm font-medium transition-colors relative group ${
                    currentPage === "home"
                      ? "text-primary-green"
                      : "text-gray-900 hover:text-primary-green"
                  }`}
                >
                  HOME
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-primary-green transition-all duration-300 group-hover:w-full ${
                      currentPage === "home" ? "w-full" : "w-0"
                    }`}
                  ></span>
                </Link>
                <div 
                  className="relative services-dropdown-container"
                  onMouseEnter={handleDropdownEnter}
                  onMouseLeave={handleDropdownLeave}
                >
                  <button
                    onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                    className={`px-3 py-2 text-sm font-medium transition-colors relative group flex items-center ${
                      currentPage === "services"
                        ? "text-primary-green"
                        : "text-gray-900 hover:text-primary-green"
                    }`}
                  >
                    SERVICES
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-primary-green transition-all duration-300 group-hover:w-full ${
                        currentPage === "services" ? "w-full" : "w-0"
                      }`}
                    ></span>
                  </button>
                  
                  {servicesDropdownOpen && (
                    <div 
                      className="absolute top-full left-0 mt-2 w-80 bg-white rounded-md shadow-xl border border-gray-200 py-2"
                      style={{ 
                        zIndex: 9999999
                      }}
                    >
                      <Link
                        href="/services"
                        onClick={closeDropdown}
                        className="block px-4 py-3 text-sm text-gray-900 hover:bg-gray-50 hover:text-primary-green transition-colors border-b border-gray-100"
                      >
                        <div className="font-medium">All Services</div>
                        <div className="text-gray-600 text-xs mt-1">View our complete service offerings</div>
                      </Link>
                      {services.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          onClick={closeDropdown}
                          className="block px-4 py-3 text-sm text-gray-900 hover:bg-gray-50 hover:text-primary-green transition-colors"
                        >
                          <div className="font-medium">{service.name}</div>
                          <div className="text-gray-600 text-xs mt-1">{service.description}</div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                <div 
                  className="relative about-dropdown-container"
                  onMouseEnter={handleAboutDropdownEnter}
                  onMouseLeave={handleAboutDropdownLeave}
                >
                  <button
                    onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                    className={`px-3 py-2 text-sm font-medium transition-colors relative group flex items-center ${
                      currentPage === "about"
                        ? "text-primary-green"
                        : "text-gray-900 hover:text-primary-green"
                    }`}
                  >
                    ABOUT US
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-primary-green transition-all duration-300 group-hover:w-full ${
                        currentPage === "about" ? "w-full" : "w-0"
                      }`}
                    ></span>
                  </button>
                  
                  {aboutDropdownOpen && (
                    <div 
                      className="absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-xl border border-gray-200 py-2"
                      style={{ 
                        zIndex: 9999999
                      }}
                    >
                      <Link
                        href="/about"
                        onClick={closeAboutDropdown}
                        className="block px-4 py-3 text-sm text-gray-900 hover:bg-gray-50 hover:text-primary-green transition-colors border-b border-gray-100"
                      >
                        <div className="font-medium">About Us</div>
                        <div className="text-gray-600 text-xs mt-1">Learn about our company</div>
                      </Link>
                      <Link
                        href="/certificates"
                        onClick={closeAboutDropdown}
                        className="block px-4 py-3 text-sm text-gray-900 hover:bg-gray-50 hover:text-primary-green transition-colors"
                      >
                        <div className="font-medium">Certificates</div>
                        <div className="text-gray-600 text-xs mt-1">View our certifications</div>
                      </Link>
                    </div>
                  )}
                </div>
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
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed top-0 left-0 right-0 z-[999991] bg-white border-b border-gray-200 shadow-lg"
          style={{ marginTop: "88px" }}
        >
          <div className="px-4 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                currentPage === "home"
                  ? "text-primary-green bg-gray-50"
                  : "text-gray-900 hover:text-primary-green hover:bg-gray-50"
              }`}
            >
              HOME
            </Link>
            
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className={`w-full flex items-center justify-between px-3 py-2 text-base font-medium rounded-md transition-colors ${
                  currentPage === "services"
                    ? "text-primary-green bg-gray-50"
                    : "text-gray-900 hover:text-primary-green hover:bg-gray-50"
                }`}
              >
                SERVICES
                <svg 
                  className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {mobileServicesOpen && (
                <div className="ml-4 mt-2 space-y-1">
                  <Link
                    href="/services"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMobileServicesOpen(false);
                    }}
                    className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-green hover:bg-gray-50 rounded-md transition-colors"
                  >
                    All Services
                  </Link>
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setMobileServicesOpen(false);
                      }}
                      className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-green hover:bg-gray-50 rounded-md transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <div>
              <button
                onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                className={`w-full flex items-center justify-between px-3 py-2 text-base font-medium rounded-md transition-colors ${
                  currentPage === "about"
                    ? "text-primary-green bg-gray-50"
                    : "text-gray-900 hover:text-primary-green hover:bg-gray-50"
                }`}
              >
                ABOUT US
                <svg 
                  className={`w-4 h-4 transition-transform ${mobileAboutOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {mobileAboutOpen && (
                <div className="ml-4 mt-2 space-y-1">
                  <Link
                    href="/about"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMobileAboutOpen(false);
                    }}
                    className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-green hover:bg-gray-50 rounded-md transition-colors"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/certificates"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMobileAboutOpen(false);
                    }}
                    className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-green hover:bg-gray-50 rounded-md transition-colors"
                  >
                    Certificates
                  </Link>
                </div>
              )}
            </div>
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

      {/* Pickup Form Modal */}
      {showPickupForm && (
        <div
          className="fixed inset-0 z-[999999] flex items-center justify-center p-4 backdrop-blur-sm transition-all duration-200 ease-out"
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
    </>
  );
}
