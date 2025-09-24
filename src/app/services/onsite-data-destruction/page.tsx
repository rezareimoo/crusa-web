"use client";

import { useState } from "react";
import Image from "next/image";
import PickupForm from "@/components/PickupForm";
import Header from "@/components/Header";
import ParticleBackground from "@/components/ParticleBackground";
import StructuredData from "@/components/StructuredData";

export default function OnsiteDataDestruction() {
  const [showPickupForm, setShowPickupForm] = useState(false);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Onsite Data Destruction Services",
    "description": "Secure, witnessed data destruction at your location in Georgia. NIST 800-88 compliant with certificates of destruction and zero data recoverability guarantee.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Computer Recyclers USA",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "3644 Burnette Road",
        "addressLocality": "Suwanee",
        "addressRegion": "GA",
        "postalCode": "30024",
        "addressCountry": "US"
      },
      "telephone": "770-840-0805",
      "email": "info@crusallc.com"
    },
    "areaServed": {
      "@type": "State",
      "name": "Georgia"
    },
    "serviceType": "Data Destruction",
    "offers": {
      "@type": "Offer",
      "description": "Complete onsite data destruction with certificates and compliance reporting"
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={structuredData} />
      <Header currentPage="services" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-16 sm:py-20 overflow-hidden">
        <ParticleBackground />
        <div className="relative z-[1] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              <span className="text-primary-green">Onsite Data Destruction</span> Services Georgia
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-6 sm:mb-8 px-2">
              <strong>
                Secure, witnessed data destruction at your location in Georgia. 
                NIST 800-88 compliant with total transparency and zero data recoverability guarantee.
              </strong>
            </p>
            <div className="flex justify-center px-4">
              <button
                onClick={() => setShowPickupForm(true)}
                className="bg-primary-green hover:bg-primary-green-dark text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto max-w-sm sm:max-w-none"
              >
                SCHEDULE ONSITE DESTRUCTION
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Maximum Security Data Destruction in Georgia
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                <strong>
                  Witness the complete destruction of your sensitive data at your location 
                  with our state-of-the-art mobile shredding units. Our R2 v3 certified 
                  technicians ensure your confidential information is permanently destroyed 
                  according to the highest industry standards, serving businesses across 
                  Georgia and Southeast States.
                </strong>
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">NIST 800-88 Compliant</h3>
                  <p className="text-gray-600">Industry-standard data sanitization protocols</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Zero Data Recovery</h3>
                  <p className="text-gray-600">Guaranteed complete data destruction</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Total Transparency</h3>
                  <p className="text-gray-600">Certificates and detailed reports provided</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">2-Step Process</h3>
                  <p className="text-gray-600">Degaussing + complete shredding</p>
                </div>
              </div>
            </div>

            <div className="relative hidden md:block">
              <Image
                src="/shredder-nobg.png"
                alt="Mobile shredding unit for onsite data destruction in Georgia"
                width={600}
                height={400}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>

          {/* Two-Step Process Section */}
          <div className="mb-16 bg-primary-green rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-8 text-center">Our 2-Step Maximum Security Process</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-primary-green">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Degaussing</h3>
                  <p className="text-gray-100">
                    First, we use powerful degaussing equipment to completely scramble 
                    magnetic data on hard drives, making it unreadable and unrecoverable.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-primary-green">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Complete Physical Shredding</h3>
                  <p className="text-gray-100">
                    Next, drives are physically shredded into small particles, 
                    ensuring absolute data destruction and maximum guarantee of security.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Complete Data Destruction Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-primary-green transition-all duration-300">
                <div className="w-16 h-16 bg-primary-green rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Complete Hard Drive Shredding</h3>
                <p className="text-gray-600">
                  Physical destruction of hard drives, SSDs, and storage media using 
                  industrial-grade shredders that render data completely unrecoverable.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-primary-green transition-all duration-300">
                <div className="w-16 h-16 bg-primary-green rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2a4 4 0 00-4-4H2m13 6a4 4 0 014-4v2" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 3l18 18" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Certificates of Destruction</h3>
                <p className="text-gray-600">
                  Receive detailed certificates of destruction for compliance and audit 
                  requirements, including serial numbers, destruction methods, and witness signatures.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-primary-green transition-all duration-300">
                <div className="w-16 h-16 bg-primary-green rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Regulatory Compliance</h3>
                <p className="text-gray-600">
                  Full compliance with HIPAA, SOX, GLBA, and FACTA regulations ensuring 
                  your business meets all legal requirements for data destruction.
                </p>
              </div>
            </div>
          </div>

          {/* Transparency & Reporting */}
          <div className="mb-16 bg-gray-50 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Total Transparency & Comprehensive Reporting
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We believe in complete transparency throughout the data destruction process. 
                Every step is documented and verified for your peace of mind.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Witnessed Destruction</h3>
                    <p className="text-gray-600">Watch your data being destroyed in real-time at your location</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Detailed Certificates</h3>
                    <p className="text-gray-600">Official certificates with serial numbers, dates, and methods used</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Comprehensive Reports</h3>
                    <p className="text-gray-600">Full documentation for compliance audits and regulatory requirements</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Chain of Custody</h3>
                    <p className="text-gray-600">Complete tracking from pickup to final destruction verification</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Serving All of Georgia</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Professional onsite data destruction services throughout Georgia and Southeast States
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
              {['Atlanta', 'Savannah', 'Augusta', 'Columbus', 'Macon', 'Suwanee', 'Albany', 'Roswell', 'Sandy Springs', 'Warner Robins', 'Johns Creek', 'Alpharetta'].map((city) => (
                <div key={city} className="bg-gray-50 rounded-lg p-4">
                  <p className="font-semibold text-gray-900">{city}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center bg-primary-green rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready for Secure Data Destruction?
            </h2>
            <p className="text-xl mb-8 text-gray-100">
              Contact Computer Recyclers USA today to schedule your onsite data destruction service in Georgia
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => setShowPickupForm(true)}
                className="bg-white text-primary-green hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                SCHEDULE DESTRUCTION SERVICE
              </button>
              <div className="flex items-center space-x-4 text-gray-100">
                <a href="tel:770-840-0805" className="flex items-center hover:text-white transition-colors">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  770-840-0805
                </a>
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
    </div>
  );
}