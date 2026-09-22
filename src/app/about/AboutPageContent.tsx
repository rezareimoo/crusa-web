"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PickupForm from "@/components/PickupForm";
import Header from "@/components/Header";
import ParticleBackground from "@/components/ParticleBackground";

export default function AboutPageContent() {
  const [showPickupForm, setShowPickupForm] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="about" />

      {/* Hero Section - SEO Optimized */}
      <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-16 sm:py-20 overflow-hidden">
        <ParticleBackground />
        <div className="relative z-[1] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              About{" "}
              <span className="text-primary-green">Computer Recyclers USA</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-6 sm:mb-8 px-2">
              <strong>
                Georgia and Southeast&apos;s Leading R2 Certified Responsible
                Electronics Recycling & Data Destruction Company Since 2004
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

      {/* Company History Section - SEO Optimized */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center animate-slide-up">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
                20+ Years of Excellence in Georgia Electronics Recycling
              </h2>
              <div className="space-y-6">
                <p className="text-lg sm:text-xl text-gray-600">
                  <strong>
                    Founded in 2004 in Georgia, Computer Recyclers USA has built
                    an unmatched reputation as Georgia and Southeast&apos;s most
                    trusted partner for secure data destruction, IT Asset
                    Disposition (ITAD), and responsible electronics recycling.
                  </strong>
                </p>
                <p className="text-base sm:text-lg text-gray-600">
                  What began as a local Suwanee, Georgia initiative to address
                  the growing need for secure IT equipment disposal has evolved
                  into a premier R2 v3 certified recycling facility. We serve
                  businesses of all sizes across Georgia, more than 700 since
                  2004.
                </p>
                <p className="text-base sm:text-lg text-gray-600">
                  Our deep Georgia roots give us unique insight into local
                  business needs. Whether you&apos;re in Atlanta, Marietta,
                  Augusta, Columbus, Macon, or elsewhere in the region, we
                  understand the regional business landscape. This local
                  expertise, combined with our industry-leading R2 v3, ISO
                  14001, ISO 9001, and ISO 45001 certifications, makes Computer
                  Recyclers USA the clear choice for secure responsible
                  electronics recycling and data destruction services in Georgia.
                </p>
                <p className="text-base sm:text-lg text-gray-600">
                  Our Suwanee facility, conveniently located at 3644 Burnette
                  Road (near I-85 and GA-316), serves as the hub for our
                  regional operations, offering free IT equipment pickup for
                  businesses throughout Georgia.
                </p>
              </div>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <div className="bg-gradient-to-br from-primary-green to-primary-green-dark rounded-2xl p-6 sm:p-8 text-white">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center lg:text-left">
                  Georgia&apos;s Trusted IT Recycling Leader
                </h3>
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">20+</div>
                    <div className="text-sm opacity-90">Years in Business</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">5M+</div>
                    <div className="text-sm opacity-90">Devices Processed</div>
                    <div className="text-xs opacity-75 mt-1">Since 2004</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">700+</div>
                    <div className="text-sm opacity-90">Businesses Served</div>
                    <div className="text-xs opacity-75 mt-1">Since 2004</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">100%</div>
                    {/* CONFIRM: zero-landfill scope */}
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
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Industry-Leading Certifications
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              Our certifications give customers independent assurance of data
              security, environmental responsibility, and operational quality.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group text-center">
              <div className="w-20 h-20 bg-primary-green rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-green-dark transition-colors">
                <span className="text-2xl font-bold text-white">R2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                R2 v3 Certified Facility
              </h3>
              <p className="text-gray-600">
                Independently audited standard for responsible electronics
                recycling, including Appendix B certification for both physical
                and logical data sanitization.
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
                Environmental management certification.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group text-center">
              <div className="w-20 h-20 bg-primary-green rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-green-dark transition-colors">
                <span className="text-lg font-bold text-white">ISO</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                ISO 9001:2015 Quality
              </h3>
              <p className="text-gray-600">Quality management certification.</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group text-center">
              <div className="w-20 h-20 bg-primary-green rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-green-dark transition-colors">
                <span className="text-lg font-bold text-white">ISO</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                ISO 45001:2018 Safety
              </h3>
              <p className="text-gray-600">
                Occupational health and safety certification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - SEO Optimized */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
                Sustainable Technology Lifecycle Management
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8">
                <strong>
                  Computer Recyclers USA empowers businesses to implement
                  sustainable technology lifecycle management. Beyond responsible
                  electronics recycling, we help organizations develop
                  comprehensive IT Asset Disposition (ITAD) strategies that
                  protect data and the environment.
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
                      follows strict environmental protocols.{" "}
                      {/* CONFIRM: zero-landfill scope */}
                      Our zero landfill policy ensures 100% of materials are
                      responsibly recycled, refurbished, or properly disposed of,
                      protecting the environment for future generations.
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
                      We help businesses meet corporate sustainability goals
                      while maintaining the highest data security standards. Our{" "}
                      <Link
                        href="/services/data-destruction"
                        className="text-primary-green hover:text-primary-green-dark font-semibold"
                      >
                        certified data destruction services
                      </Link>{" "}
                      support compliance with HIPAA, SOX, GLBA, and FACTA
                      requirements. We&apos;re certified for both{" "}
                      <Link
                        href="/services/hard-drive-shredding"
                        className="text-primary-green hover:text-primary-green-dark font-semibold"
                      >
                        hard drive shredding
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="/services/data-sanitization"
                        className="text-primary-green hover:text-primary-green-dark font-semibold"
                      >
                        logical data sanitization
                      </Link>{" "}
                      under R2v3 Appendix B.
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
                      Our IT Asset Disposition programs and consulting services
                      help businesses access sustainable technology solutions
                      while planning for responsible end-of-life management. We
                      make sustainable IT practices both practical and
                      profitable.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative hidden sm:block">
              <Image
                src="/empowering-ga.svg"
                alt="Empowering Georgia's Sustainable Technology Practices"
                width={600}
                height={650}
                className="w-full h-[325px] sm:h-[390px] md:h-[455px] lg:h-[520px] xl:h-[585px] 2xl:h-[650px] object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Speed and Service Section - SEO Optimized */}
      <section className="pt-8 pb-2 sm:pt-12 sm:pb-3 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative order-2 lg:order-1 hidden sm:block">
              <Image
                src="/US_19_in_Georgia_map.svg"
                alt="Georgia State Map with US 19"
                width={600}
                height={585}
                className="w-full h-[260px] sm:h-[325px] md:h-[390px] lg:h-[455px] xl:h-[520px] 2xl:h-[585px] object-cover object-top"
              />
            </div>

            <div className="animate-slide-up order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
                IT Equipment Pickup & Data Destruction
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8">
                <strong>
                  Computer Recyclers USA prides itself on rapid response times
                  throughout Georgia. When businesses need urgent data
                  destruction or IT equipment removal, we deliver secure
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
                      Flexible Pickup Times for Any Business
                    </h3>
                    <p className="text-gray-600">
                      Every business operates differently. We coordinate a
                      pickup window that fits your schedule and your location,
                      and early-morning pickups can be arranged on request. For
                      facilities with steady retirement volume, we can also set
                      up recurring pickups, monthly or quarterly for example.
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
                      Statewide Georgia Pickup
                    </h3>
                    <p className="text-gray-600">
                      Free IT equipment pickup is available for businesses
                      throughout Georgia, from Marietta to Columbus and Augusta
                      to Macon. Pickups are typically scheduled within 24–48
                      hours. Free pickup is subject to minimums based on
                      location, routing, and loading, and we&apos;ll confirm
                      yours when you call.
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
                      Serialized Certificates of Destruction
                    </h3>
                    <p className="text-gray-600">
                      Every pickup includes a serialized certificate of
                      destruction, recording make, model, serial number, method,
                      and date as applicable, plus an audit report for your
                      compliance records. Typical turnaround is 5–10 business
                      days from pickup.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section - SEO Optimized */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Visit Our Secure Suwanee, Georgia Facility
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              Located in Suwanee, Georgia, our R2 certified facility features
              state-of-the-art technology for secure data destruction and
              responsible electronics recycling. Convenient access from I-85 and
              GA-316 serves all of metro Atlanta and the surrounding region.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-start space-x-6">
                <a
                  href="https://maps.google.com/?q=3644+Burnette+Road,+Suwanee,+GA+30024"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-16 h-16 bg-primary-green rounded-lg flex items-center justify-center flex-shrink-0 hover:bg-primary-green-dark transition-colors duration-300 cursor-pointer">
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
                </a>
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
                    throughout metro Atlanta and the surrounding region. Easy
                    access from I-85, I-985, and GA-316. Just 30 minutes from
                    downtown Atlanta, serving Alpharetta, Duluth, Johns Creek,
                    Lawrenceville, and surrounding communities.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <a href="tel:770-840-0805">
                  <div className="w-16 h-16 bg-primary-green rounded-lg flex items-center justify-center flex-shrink-0 hover:bg-primary-green-dark transition-colors duration-300 cursor-pointer">
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
                </a>
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
                    Speak directly with our team of certified electronics
                    recycling specialists, Monday through Friday, 9:30AM to
                    4:30PM EST.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl h-96 overflow-hidden shadow-lg">
                {/* CONFIRM: replace with Google Business Profile embed code */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.1894273942803!2d-84.08023408833895!3d34.039011673049934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5a5f02b165f83%3A0xf418580180dd4f63!2sComputer%20Recyclers%20USA%2C%20LLC!5e0!3m2!1sen!2sus!4v1790096593210!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Computer Recyclers USA, 3644 Burnette Road, Suwanee, GA 30024"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

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
    </div>
  );
}
