"use client";

import Link from "next/link";
import { useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import Header from "@/components/Header";
import ParticleBackground from "@/components/ParticleBackground";
import PickupForm from "@/components/PickupForm";
import { faqSections } from "./faq-data";

export default function FaqPage() {
  const [showPickupForm, setShowPickupForm] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="faq" />

      <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-16 sm:py-20 overflow-hidden">
        <ParticleBackground />
        <div className="relative z-[1] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Clear answers about data destruction standards, pickups, Georgia
            service area, equipment we accept, and compliance documentation.
          </p>
          <button
            type="button"
            onClick={() => setShowPickupForm(true)}
            className="bg-primary-green hover:bg-primary-green-dark text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
          >
            SCHEDULE FREE PICKUP
          </button>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 pb-24">
        {faqSections.map((section) => (
          <section key={section.heading} className="mb-12 sm:mb-16 last:mb-0">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              {section.heading}
            </h2>
            <div className="space-y-3">
              {section.items.map((item) => (
                <details
                  key={item.question}
                  className="group border border-gray-200 rounded-xl bg-white shadow-sm open:shadow-md transition-shadow"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-4 sm:px-5 sm:py-[1.125rem] text-left text-base font-semibold text-gray-900 marker:content-none min-h-[44px] [&::-webkit-details-marker]:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-green focus-visible:ring-offset-2 rounded-xl">
                    <span className="pr-2">{item.question}</span>
                    <span className="flex-shrink-0 text-primary-green transition-transform group-open:rotate-180">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 border-t border-gray-100 pt-4 text-gray-700 leading-relaxed">
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>
          </section>
        ))}

        <section className="mt-14 pt-10 border-t border-gray-200 text-center">
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Still have questions? View our{" "}
            <Link
              href="/about"
              className="text-primary-green-darker hover:text-primary-green-dark font-bold"
            >
              About
            </Link>{" "}
            page, explore{" "}
            <Link
              href="/services"
              className="text-primary-green-darker hover:text-primary-green-dark font-bold"
            >
              services
            </Link>
            , or reach us at{" "}
            <a
              href="tel:770-840-0805"
              className="text-primary-green-darker hover:text-primary-green-dark font-bold"
            >
              770-840-0805
            </a>
            .
          </p>
          <button
            type="button"
            onClick={() => setShowPickupForm(true)}
            className="bg-primary-green hover:bg-primary-green-dark text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
          >
            REQUEST SERVICE
          </button>
        </section>
      </div>

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
              type="button"
              onClick={() => setShowPickupForm(false)}
              className="absolute top-4 right-4 z-10 bg-gray-900 bg-opacity-80 text-white rounded-full p-2 shadow-lg hover:bg-opacity-100 transition-all duration-200"
              aria-label="Close form"
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
            <PickupForm onClose={() => setShowPickupForm(false)} />
          </div>
        </div>
      )}
      <Analytics />
    </div>
  );
}
