"use client";

import { useState } from "react";
import Image from "next/image";
import PickupForm from "@/components/PickupForm";
import Header from "@/components/Header";
import ParticleBackground from "@/components/ParticleBackground";
import StructuredData from "@/components/StructuredData";

export default function FreeITEquipmentPickup() {
  const [showPickupForm, setShowPickupForm] = useState(false);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Free IT Equipment Pickup Services",
    "description": "Complimentary IT equipment pickup throughout Georgia. No quantity limits, professional packing assistance available, fully audited reports provided.",
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
    "serviceType": "IT Equipment Pickup",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Free pickup service for all types and quantities of IT equipment"
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={structuredData} />
      <Header currentPage="services" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-16 sm:py-20 overflow-hidden">
        <ParticleBackground />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              <span className="text-primary-green">Free IT Equipment Pickup</span> Georgia
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-6 sm:mb-8 px-2">
              <strong>
                Complimentary pickup services throughout Georgia and Southeast States. 
                Professional, convenient, and absolutely free - no quantity limits.
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

      {/* Main Content */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Effortless IT Equipment Pickup Throughout Georgia
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                <strong>
                  We provide complimentary pickup services throughout Georgia and 
                  Southeast States for all types of IT equipment, regardless of age, 
                  condition, or quantity. Our professional team handles the logistics 
                  so you can focus on your business operations.
                </strong>
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">No Quantity Limits</h3>
                  <p className="text-gray-600">From single devices to entire data centers</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Professional Packing</h3>
                  <p className="text-gray-600">We can assist with equipment preparation</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Fully Audited</h3>
                  <p className="text-gray-600">Complete reports and documentation</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Statewide Service</h3>
                  <p className="text-gray-600">All cities and counties in Georgia</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/truck-nobg.png"
                  alt="Professional IT equipment pickup truck serving Atlanta area"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>

          {/* 3-Step Process Section */}
          <div className="mb-16 bg-primary-green rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-8 text-center">Simple 3-Step Process</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary-green">1</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Inform Us</h3>
                <p className="text-gray-100">
                  Tell us about the types and quantities of IT equipment you need picked up. 
                  Computers, servers, monitors, printers - we handle it all.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary-green">2</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Schedule Pickup</h3>
                <p className="text-gray-100">
                  We&apos;ll arrange a convenient pickup time that works with your schedule, 
                  including evenings and weekends if needed.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary-green">3</span>
                </div>
                <h3 className="text-xl font-bold mb-3">We Pick Up</h3>
                <p className="text-gray-100">
                  Our professional team arrives on time, handles all loading, 
                  and provides complete documentation for your records.
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose Our Pickup Service */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Why Businesses Choose Our Pickup Service
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Incredibly Easy for Your Business</h3>
                    <p className="text-gray-600">
                      Simply schedule a pickup and we handle everything else. No logistics, 
                      no transportation costs, no employee time wasted on equipment disposal.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Professional Packing Assistance</h3>
                    <p className="text-gray-600">
                      Need help preparing your equipment for pickup? Our experienced team 
                      can assist with proper packing, disconnection, and safe handling of 
                      all electronic devices.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">No Quantity Too Small or Large</h3>
                    <p className="text-gray-600">
                      Whether you have a single laptop or an entire server room full of 
                      equipment, we provide the same professional service at no cost.
                    </p>
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
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Fully Audited Reports Available</h3>
                    <p className="text-gray-600">
                      Receive comprehensive documentation including detailed inventory lists, 
                      pickup receipts, and processing reports for compliance and audit purposes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Flexible Scheduling</h3>
                    <p className="text-gray-600">
                      Convenient appointment times including evenings and weekends to 
                      minimize disruption to your business operations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">All Equipment Types Accepted</h3>
                    <p className="text-gray-600">
                      Computers, servers, laptops, monitors, printers, networking equipment, 
                      and all other electronic devices - working or non-working condition accepted.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Equipment Types */}
          <div className="mb-16 bg-gray-50 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Equipment We Pick Up (No Charge)
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We accept all types of IT and electronic equipment, regardless of age, 
                condition, or working status. Everything is processed responsibly.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                'Desktop Computers',
                'Laptops & Notebooks', 
                'Servers & Workstations',
                'Monitors & Displays',
                'Printers & Scanners',
                'Networking Equipment',
                'Storage Devices',
                'Mobile Devices',
                'Audio/Video Equipment',
                'Telecom Equipment',
                'UPS Systems',
                'Cables & Components'
              ].map((equipment) => (
                <div key={equipment} className="bg-white rounded-lg p-4 text-center shadow-sm">
                  <div className="w-8 h-8 bg-primary-green rounded-full mx-auto mb-3 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="font-semibold text-gray-900">{equipment}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Service Areas */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Free Pickup Throughout Georgia</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Professional IT equipment pickup services available in all Georgia cities and counties
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
              Ready to Schedule Your Free Pickup?
            </h2>
            <p className="text-xl mb-8 text-gray-100">
              Contact Computer Recyclers USA today - no equipment quantity too small or too large
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => setShowPickupForm(true)}
                className="bg-white text-primary-green hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                SCHEDULE FREE PICKUP NOW
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
          className="fixed inset-0 z-[10000] bg-black bg-opacity-75 backdrop-blur-md transition-all duration-300 ease-out"
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