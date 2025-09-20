"use client";

import { useState } from "react";
import Image from "next/image";
import PickupForm from "@/components/PickupForm";
import Header from "@/components/Header";
import ParticleBackground from "@/components/ParticleBackground";
import StructuredData from "@/components/StructuredData";

export default function ResponsibleElectronicsRecycling() {
  const [showPickupForm, setShowPickupForm] = useState(false);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Responsible Electronics Recycling Services",
    "description": "R2 v3 certified electronics recycling in Georgia. Zero landfill guarantee, EPA compliant processes, detailed environmental impact reporting.",
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
    "serviceType": "Electronics Recycling",
    "offers": {
      "@type": "Offer",
      "description": "Environmentally responsible electronics recycling with zero landfill guarantee"
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={structuredData} />
      <Header currentPage="services" />

      {/* Hero Section with Strong CTA */}
      <section className="relative bg-gradient-to-br from-primary-green to-primary-green-dark py-16 sm:py-20 overflow-hidden">
        <ParticleBackground />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              <span className="text-yellow-300">Responsibly Recycle</span> Your Electronics Today
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto mb-6 sm:mb-8 px-2 text-gray-100">
              <strong>
                Don&apos;t let your old electronics harm the environment! Choose R2 v3 certified 
                recycling that protects our planet while recovering valuable materials.
              </strong>
            </p>
            <div className="bg-white bg-opacity-20 rounded-2xl p-6 mb-8 max-w-2xl mx-auto">
              <p className="text-xl font-bold text-yellow-300 mb-2">🌍 Make a Difference Today!</p>
              <p className="text-gray-100">
                Every device you recycle responsibly prevents toxic materials from entering 
                landfills and helps conserve precious natural resources.
              </p>
            </div>
            <div className="flex justify-center px-4">
              <button
                onClick={() => setShowPickupForm(true)}
                className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto max-w-sm sm:max-w-none"
              >
                START RECYCLING RESPONSIBLY
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
                Leading the Way in Environmental Responsibility
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                <strong>
                  Our R2 v3 certified facility ensures environmentally responsible 
                  recycling of all electronic equipment using industry-leading processes 
                  that minimize environmental impact while maximizing material recovery 
                  throughout Georgia and Southeast States.
                </strong>
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-primary-green">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Zero Landfill Guarantee</h3>
                  <p className="text-gray-600">100% diversion from landfills</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">EPA Compliant</h3>
                  <p className="text-gray-600">Exceeds all environmental standards</p>
                </div>
                <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Material Recovery</h3>
                  <p className="text-gray-600">Maximum resource conservation</p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">R2 v3 Certified</h3>
                  <p className="text-gray-600">Highest industry standards</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/upscale-c-2.svg"
                  alt="R2 certified electronics recycling facility in Suwanee GA"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Environmental Impact */}
          <div className="mb-16 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Your Environmental Impact</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl font-bold text-green-600 mb-2">95%+</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">Material Recovery Rate</div>
                <p className="text-gray-600">
                  We recover and reuse 95% or more of all materials from recycled electronics
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl font-bold text-blue-600 mb-2">0</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">Landfill Waste</div>
                <p className="text-gray-600">
                  Absolutely nothing goes to landfills - everything is reused or recycled
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">Compliance Record</div>
                <p className="text-gray-600">
                  Perfect compliance with all EPA and state environmental regulations
                </p>
              </div>
            </div>
          </div>

          {/* Why Responsible Recycling Matters */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Why Responsible Electronics Recycling Matters
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white border-2 border-red-200 rounded-xl p-8 hover:border-red-400 transition-all duration-300">
                <div className="w-16 h-16 bg-red-500 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Prevents Toxic Contamination</h3>
                <p className="text-gray-600">
                  Electronics contain lead, mercury, cadmium, and other hazardous materials 
                  that can contaminate soil and groundwater if improperly disposed of.
                </p>
              </div>

              <div className="bg-white border-2 border-green-200 rounded-xl p-8 hover:border-green-400 transition-all duration-300">
                <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Conserves Natural Resources</h3>
                <p className="text-gray-600">
                  Recycling electronics recovers precious metals like gold, silver, and copper, 
                  reducing the need for environmentally destructive mining operations.
                </p>
              </div>

              <div className="bg-white border-2 border-blue-200 rounded-xl p-8 hover:border-blue-400 transition-all duration-300">
                <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Supports Circular Economy</h3>
                <p className="text-gray-600">
                  Materials from old electronics become raw materials for new products, 
                  creating a sustainable cycle that benefits the entire economy.
                </p>
              </div>

              <div className="bg-white border-2 border-purple-200 rounded-xl p-8 hover:border-purple-400 transition-all duration-300">
                <div className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Reduces Carbon Footprint</h3>
                <p className="text-gray-600">
                  Recycling uses significantly less energy than mining and manufacturing 
                  from raw materials, dramatically reducing greenhouse gas emissions.
                </p>
              </div>

              <div className="bg-white border-2 border-orange-200 rounded-xl p-8 hover:border-orange-400 transition-all duration-300">
                <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Ensures Legal Compliance</h3>
                <p className="text-gray-600">
                  Many states and localities require proper electronics disposal. 
                  Our certified processes ensure you meet all regulatory requirements.
                </p>
              </div>

              <div className="bg-white border-2 border-teal-200 rounded-xl p-8 hover:border-teal-400 transition-all duration-300">
                <div className="w-16 h-16 bg-teal-500 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Protects Future Generations</h3>
                <p className="text-gray-600">
                  Responsible recycling today ensures cleaner air, water, and soil 
                  for our children and grandchildren to inherit.
                </p>
              </div>
            </div>
          </div>

          {/* Our Recycling Process */}
          <div className="mb-16 bg-gray-50 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Comprehensive Recycling Process
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Every step of our process is designed to maximize material recovery 
                while ensuring complete environmental protection.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure Data Destruction</h3>
                    <p className="text-gray-600">All data-bearing devices undergo complete data destruction before processing</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Component Separation</h3>
                    <p className="text-gray-600">Devices are carefully disassembled to separate different material types</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Material Processing</h3>
                    <p className="text-gray-600">Materials are processed using advanced techniques to extract maximum value</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Control</h3>
                    <p className="text-gray-600">Rigorous quality checks ensure all materials meet recycling standards</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">5</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Material Distribution</h3>
                    <p className="text-gray-600">Processed materials are sent to certified downstream partners for reuse</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">6</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Impact Reporting</h3>
                    <p className="text-gray-600">Comprehensive reports show exactly how your equipment was processed and its environmental benefit</p>
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
                R2 v3 certified electronics recycling services throughout Georgia and Southeast States
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

          {/* Final CTA */}
          <div className="text-center bg-gradient-to-r from-primary-green to-primary-green-dark rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">
              🌍 Take Action for Our Planet Today!
            </h2>
            <p className="text-xl mb-6 text-gray-100">
              Don&apos;t let your old electronics become tomorrow&apos;s environmental problem. 
              Choose responsible recycling with Computer Recyclers USA - Georgia&apos;s trusted R2 v3 certified partner.
            </p>
            <div className="bg-white bg-opacity-20 rounded-xl p-4 mb-8 max-w-xl mx-auto">
              <p className="text-lg font-semibold text-yellow-300">
                Every device recycled = Cleaner environment for Georgia families
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => setShowPickupForm(true)}
                className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                START RECYCLING RESPONSIBLY NOW
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
          className="fixed inset-0 z-50 bg-black bg-opacity-75 backdrop-blur-md transition-all duration-300 ease-out"
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