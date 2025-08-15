"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import PickupForm from "@/components/PickupForm";

const faqData = [
  {
    id: "r2v3-certification",
    question:
      "What does it mean to be R2v3 Certified for electronics recycling in Georgia?",
    answer:
      "R2v3 (Responsible Recycling) certification is the gold standard for electronics recycling facilities in Georgia and nationwide. It means our Atlanta-based operations meet strict environmental, health, safety, and security standards. This certification ensures we handle electronic waste responsibly throughout Georgia, maintain proper chain of custody documentation, and follow best practices for data destruction and material recovery. Our R2v3 certification is audited annually by third-party organizations to ensure continued compliance at our Georgia facility.",
  },
  {
    id: "responsible-recycling",
    question:
      "Why is it important for electronics to be responsibly recycled in Georgia?",
    answer:
      "Electronics contain valuable materials like gold, silver, copper, and rare earth elements that can be recovered and reused. However, they also contain hazardous substances like lead, mercury, and cadmium that can harm Georgia's environment if not properly handled. Responsible recycling at our certified Atlanta facility ensures these toxic materials are safely managed while valuable resources are recovered for new products, reducing the need for mining and manufacturing new materials. This protects Georgia's natural resources and communities.",
  },
  {
    id: "free-pickup-types",
    question:
      "What types of electronics qualify for free pickup in Atlanta and Georgia?",
    answer:
      "We offer free pickup for all types of electronic equipment throughout Georgia, including computers, laptops, servers, monitors, printers, networking equipment, mobile devices, tablets, and other IT assets. Service areas include Atlanta, Savannah, Augusta, Columbus, Macon, and all surrounding areas. There are no restrictions on age, condition, or brand - we accept everything from working equipment to completely obsolete devices. Our free pickup service is available for businesses of all sizes across Georgia.",
  },
  {
    id: "data-destruction",
    question: "How does CRUSA handle secure data destruction in Georgia?",
    answer:
      "We provide comprehensive data destruction services throughout Georgia, including Atlanta metro area. Our services include physical hard drive shredding using industrial-grade equipment that renders data completely unrecoverable. Our secure data destruction can be performed onsite at your Georgia location for maximum security and compliance, or at our R2v3 certified Atlanta facility. All data destruction follows DoD 5220.22-M standards and includes detailed certificates of destruction for your records and compliance requirements.",
  },
  {
    id: "service-areas",
    question:
      "What areas in Georgia does CRUSA provide electronics recycling services?",
    answer:
      "We provide comprehensive electronics recycling and IT asset disposal services throughout the entire state of Georgia. Our primary service areas include Atlanta, Savannah, Augusta, Columbus, Macon, Athens, Albany, Valdosta, Warner Robins, and all surrounding metropolitan areas. Whether you're in downtown Atlanta or rural Georgia, we offer the same professional, R2v3 certified recycling services with free pickup for qualifying volumes. Contact us to schedule service anywhere in Georgia.",
  },
  {
    id: "pickup-timeline",
    question: "How quickly can you pick up electronics in Atlanta and Georgia?",
    answer:
      "We typically schedule electronics pickups within 24-48 hours for Atlanta metro area businesses, and within 3-5 business days for other Georgia locations. For urgent data destruction needs in Atlanta, we offer same-day or next-day service. Our fleet covers all of Georgia efficiently, ensuring timely pickup of your IT equipment. Schedule is based on volume and location, with priority given to large volume pickups and time-sensitive data destruction requirements.",
  },
  {
    id: "certificates-compliance",
    question:
      "What compliance certificates do you provide for Georgia businesses?",
    answer:
      "We provide comprehensive documentation for all Georgia businesses including: Certificates of Recycling, Certificates of Data Destruction (meeting DoD 5220.22-M standards), detailed asset reports with serial numbers, and chain of custody documentation. These certificates help Georgia businesses meet compliance requirements for HIPAA, FACTA, SOX, and other regulations. Our R2v3 certification ensures your company meets all environmental and data security compliance standards required in Georgia.",
  },
  {
    id: "cost-fees",
    question: "Are there any fees for electronics recycling in Georgia?",
    answer:
      "We offer completely FREE pickup and recycling for most electronics throughout Georgia. There are no hidden fees for standard IT equipment including computers, servers, monitors, and networking equipment. Some items with special handling requirements (like CRT monitors or equipment containing refrigerants) may have minimal fees. We provide transparent pricing upfront, and for most Georgia businesses, our service is 100% free. Contact us for a free quote specific to your equipment.",
  },
];

export default function FAQPageContent() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showPickupForm, setShowPickupForm] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);
  const [navReady, setNavReady] = useState(true);
  const [dropdownEnabled, setDropdownEnabled] = useState(true);
  const [aboutOpen, setAboutOpen] = useState(false);
  const aboutHoverTimerRef = useRef<number | null>(null);
  const closeTimerRef = useRef<number | null>(null);
  const [isHoveringDropdown, setIsHoveringDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const next = scrollTop > 100;
      if (next !== isScrolled) {
        setNavReady(false);
        setIsScrolled(next);
        setDropdownEnabled(false);
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
    return () => window.removeEventListener("mousemove", enableOnMove);
  }, [isScrolled]);

  const scheduleAboutOpen = () => {
    if (aboutHoverTimerRef.current)
      window.clearTimeout(aboutHoverTimerRef.current);
    aboutHoverTimerRef.current = window.setTimeout(() => {
      if (navReady && dropdownEnabled) setAboutOpen(true);
    }, 200);
  };
  const cancelClose = () => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };
  const scheduleClose = () => {
    cancelClose();
    closeTimerRef.current = window.setTimeout(() => {
      if (!isHoveringDropdown) setAboutOpen(false);
    }, 180);
  };

  const toggleFAQ = (id: string) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

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
                  width={isScrolled ? 160 : 200}
                  height={isScrolled ? 64 : 80}
                  priority
                  className="hover:scale-105 transition-all duration-300 mix-blend-multiply"
                  style={{ background: "transparent" }}
                />
              </Link>
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
        className={`bg-white border-b border-gray-200 shadow-sm transition-all duration-700 ease-in-out relative z-50 ${
          isScrolled
            ? "max-h-0 opacity-0 -translate-y-2"
            : "max-h-20 opacity-100 translate-y-0"
        } ${isScrolled ? "pointer-events-none" : "pointer-events-auto"}`}
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

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-600">
            <Link
              href="/"
              className="hover:text-primary-green transition-colors"
            >
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">FAQ</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Electronics Recycling FAQ - Georgia
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers about R2v3 certified electronics recycling, secure data
            destruction, and free IT equipment pickup services in Atlanta,
            Savannah, Augusta, and throughout Georgia.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {faqData.map((faq) => (
              <div
                key={faq.id}
                className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-primary-green focus:ring-offset-2 rounded-lg"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <svg
                      className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                        openFAQ === faq.id ? "transform rotate-180" : ""
                      }`}
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
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFAQ === faq.id
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Electronics Recycling in Georgia?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Our Georgia-based team provides free pickup and secure data
            destruction for businesses in Atlanta, Savannah, Augusta, Columbus,
            and all Georgia locations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowPickupForm(true)}
              className="bg-white text-primary-green hover:bg-gray-50 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              SCHEDULE FREE PICKUP
            </button>
            <Link
              href="/#contact"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-green px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Trusted Electronics Recycling Services Across Georgia
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-4">
              Computer Recyclers USA is Georgia&apos;s premier R2v3 certified
              electronics recycling provider, serving businesses throughout the
              state with secure, compliant IT asset disposal solutions. From our
              Atlanta headquarters, we coordinate free pickup services for
              companies in
              <strong>
                {" "}
                Atlanta, Savannah, Augusta, Columbus, Macon, Athens, Albany,
                Valdosta, Warner Robins
              </strong>
              , and all surrounding areas.
            </p>
            <p className="mb-4">
              Our comprehensive{" "}
              <Link
                href="/services"
                className="text-primary-green hover:text-primary-green-dark"
              >
                electronics recycling services
              </Link>{" "}
              include DoD 5220.22-M compliant data destruction, ensuring your
              sensitive information is completely unrecoverable. Whether you
              need onsite hard drive shredding in Atlanta or secure
              transportation to our certified facility, we provide complete
              chain of custody documentation and certificates of destruction for
              your compliance records.
            </p>
            <p className="mb-4">
              As an ISO 14001:2015, ISO 9001:2015, and ISO 45001:2018 certified
              facility, we maintain the highest standards for environmental
              management, quality, and workplace safety. Our commitment to
              responsible recycling means your electronic waste is processed
              according to strict environmental guidelines, preventing harmful
              materials from entering Georgia&apos;s landfills while recovering
              valuable resources for reuse.
            </p>
            <p className="mb-4">
              <Link
                href="/about"
                className="text-primary-green hover:text-primary-green-dark"
              >
                Learn more about our company
              </Link>{" "}
              and discover why thousands of Georgia businesses trust CRUSA for
              their electronics recycling and data destruction needs. From small
              offices in Savannah to large corporations in Atlanta, we provide
              tailored solutions that meet your specific requirements while
              ensuring complete regulatory compliance.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">
                Popular Services in Georgia
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Computer Recycling Atlanta</li>
                <li>• Data Destruction Services Savannah</li>
                <li>• IT Equipment Disposal Augusta</li>
                <li>• E-Waste Recycling Columbus GA</li>
                <li>• Server Recycling Macon</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">
                Industries We Serve
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Healthcare & Medical Facilities</li>
                <li>• Financial Services & Banking</li>
                <li>• Educational Institutions</li>
                <li>• Government Agencies</li>
                <li>• Corporate Offices</li>
              </ul>
            </div>
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
