"use client";

import { useState } from "react";
import Link from "next/link";
import PickupForm from "@/components/PickupForm";
import Header from "@/components/Header";
import ParticleBackground from "@/components/ParticleBackground";
import StructuredData from "@/components/StructuredData";
import { Analytics } from "@vercel/analytics/react";

const FAQ_ITEMS = [
  {
    question: "Do you charge for business pickup in Atlanta?",
    answer:
      "Free pickup is available for businesses and corporate organizations whose project meets the logistics minimum for their location. Minimums depend on location, truck routing, and loading. Contact us with your volume and address, and we'll confirm.",
  },
  {
    question: "Do you take computers that don't work?",
    answer:
      "Yes. We accept IT and electronic equipment in any condition, including units that no longer boot or power on.",
  },
  {
    question: "What happens to the hard drives?",
    answer:
      "Data-bearing devices are either physically shredded or logically sanitized under R2v3 Appendix B, following NIST SP 800-88. If logical sanitization is unsuccessful, the device is physically destroyed.",
  },
  {
    question: "How long until I get my certificate of destruction?",
    answer:
      "Typical turnaround is 5–10 business days from pickup through to your audit report and serialized certificate of destruction.",
  },
  {
    question: "Do you accept servers and networking equipment?",
    answer:
      "Yes. We accept servers, switches, routers, related rack equipment, and other data center or IT closet assets.",
  },
  {
    question: "Can I drop off equipment instead?",
    answer:
      "Yes. Anyone can drop off IT equipment for free at 3644 Burnette Road, Suwanee, GA 30024, Mon–Fri 9:30AM–4:30PM EST. Only TVs carry a recycling fee.",
  },
] as const;

const ACCEPTED_EQUIPMENT = [
  "Desktops and laptops",
  "Servers",
  "Storage devices",
  "Networking equipment (switches, routers, and rack equipment)",
  "Monitors",
  "Printers",
  "Phones",
  "Peripherals",
  "Other end-of-life or surplus IT and electronics",
] as const;

const METRO_CITIES = [
  "Atlanta",
  "Marietta",
  "Alpharetta",
  "Roswell",
  "Sandy Springs",
  "Decatur",
  "Vinings",
  "Johns Creek",
  "Duluth",
  "Lawrenceville",
  "Suwanee",
] as const;

const PROCESS_STEPS = [
  {
    title: "Schedule",
    body: "Call 770-840-0805 or use Schedule Pickup. Tell us your volume and address, and we'll confirm your pickup minimum.",
  },
  {
    title: "Pickup",
    body: "Pickups are typically scheduled within 24–48 hours, in a window that fits your operations. Early-morning pickups can be arranged on request.",
  },
  {
    title: "Processing",
    body: "Equipment is processed at our access-controlled, CCTV-monitored R2v3 facility in Suwanee. Data-bearing devices are shredded or logically sanitized under R2v3 Appendix B.",
  },
  {
    title: "Documentation",
    body: "You receive a serialized certificate of destruction and an audit report, typically within 5–10 business days of pickup.",
  },
] as const;

export default function ComputerRecyclingAtlantaPage() {
  const [showPickupForm, setShowPickupForm] = useState(false);

  // Site-wide LocalBusiness already exists in root layout (@id #organization).
  // Reference it from Service rather than duplicating the full object.
  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Computer Recycling Atlanta",
    description:
      "R2v3-certified computer recycling, IT asset disposition, and certified data destruction for metro Atlanta businesses, with free business pickup and serialized certificates of destruction.",
    provider: {
      "@id": "https://www.crusallc.com/#organization",
    },
    areaServed: [
      { "@type": "City", name: "Atlanta" },
      { "@type": "State", name: "Georgia" },
    ],
    serviceType: "Computer Recycling",
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.crusallc.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Computer Recycling Atlanta",
        item: "https://www.crusallc.com/computer-recycling-atlanta",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={serviceStructuredData} />
      <StructuredData data={faqStructuredData} />
      <StructuredData data={breadcrumbStructuredData} />
      <Header currentPage="services" />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-16 sm:py-20 overflow-hidden">
        <ParticleBackground />
        <div className="relative z-[1] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              Computer Recycling in Atlanta, GA
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-6 sm:mb-8 px-2">
              <strong>
                R2v3-certified computer recycling, IT asset disposition, and
                certified data destruction for metro Atlanta businesses, with
                free business pickup and serialized certificates of destruction.
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

      {/* Stat band */}
      <section className="bg-white text-gray-900 border-y border-gray-200/80 py-4 sm:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center">
            <div>
              <div className="font-bold text-lg sm:text-xl text-primary-green">
                Since 2004
              </div>
              <div className="text-gray-600 text-xs sm:text-sm">
                Serving Georgia businesses
              </div>
            </div>
            <div>
              <div className="font-bold text-lg sm:text-xl text-primary-green">
                5M+
              </div>
              <div className="text-gray-600 text-xs sm:text-sm">
                Devices Processed
              </div>
            </div>
            <div>
              <div className="font-bold text-lg sm:text-xl text-primary-green">
                700+
              </div>
              <div className="text-gray-600 text-xs sm:text-sm">
                Businesses Served
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Computer Disposal for Atlanta Businesses */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Computer Disposal for Atlanta Businesses
          </h2>
          <div className="space-y-4 text-lg text-gray-600 max-w-4xl">
            <p>
              Computer Recyclers USA has handled computer recycling and IT asset
              disposition for Georgia businesses since 2004. We pick up retired
              computers, laptops, servers, and networking equipment from
              businesses across metro Atlanta. Everything is processed at our
              R2v3-certified facility at 3644 Burnette Road in Suwanee, about 30
              minutes from downtown Atlanta, with easy access from I-85, I-985,
              and GA-316.
            </p>
            <p>
              Free pickup is available for businesses and corporate
              organizations, subject to minimums based on location, routing, and
              loading. There&apos;s no maximum. We regularly handle large
              removals, and equipment is accepted in any condition, including
              units that no longer power on.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            How Atlanta Computer Recycling Works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {PROCESS_STEPS.map((step, index) => (
              <div
                key={step.title}
                className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm"
              >
                <div className="w-10 h-10 bg-primary-green rounded-lg flex items-center justify-center mb-4 text-white font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Accept */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
            What We Accept
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 max-w-3xl mx-auto mb-6">
            {ACCEPTED_EQUIPMENT.map((item) => (
              <div key={item} className="flex items-start space-x-3">
                <div className="w-5 h-5 bg-primary-green rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
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
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 text-center max-w-2xl mx-auto">
            Working, damaged, or incomplete, it doesn&apos;t matter. We accept
            equipment that no longer boots or powers on.
          </p>
        </div>
      </section>

      {/* Certified Data Destruction */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center">
            Certified Data Destruction in Atlanta
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
            Every hard drive and data-bearing device is handled under NIST SP
            800-88 at our Suwanee facility. We&apos;re certified under R2v3
            Appendix B for both physical and logical sanitization, so you can
            choose the path that fits your media and reuse goals.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-primary-green transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Hard Drive & SSD Shredding
              </h3>
              <p className="text-gray-600 mb-6">
                Physical destruction of HDDs, SSDs, and storage media, with
                methods matched to media type per NIST SP 800-88. Serialized
                certificate of destruction for every device.
              </p>
              <Link
                href="/services/hard-drive-shredding"
                className="inline-flex items-center text-primary-green font-semibold hover:text-primary-green-dark"
              >
                Hard drive shredding
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-primary-green transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Logical Data Sanitization
              </h3>
              <p className="text-gray-600 mb-6">
                Certified software erasure under R2v3 Appendix B, so drives can
                be reused and keep their resale value. If sanitization fails, the
                device is physically destroyed.
              </p>
              <Link
                href="/services/data-sanitization"
                className="inline-flex items-center text-primary-green font-semibold hover:text-primary-green-dark"
              >
                Certified data sanitization
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
            Onsite witnessed destruction is available on request for
            organizations with witness requirements.
          </p>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            Who We Serve in Atlanta
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2">Healthcare</h3>
              <p className="text-gray-600 text-sm">
                Providers and facilities with HIPAA-sensitive equipment and data.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2">
                Finance & professional services
              </h3>
              <p className="text-gray-600 text-sm">
                Banks, advisory firms, and professional services.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2">
                Education & government
              </h3>
              <p className="text-gray-600 text-sm">
                Schools, universities, and government entities.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2">Enterprise & SMB</h3>
              <p className="text-gray-600 text-sm">
                Manufacturing, retail, and businesses of all sizes.
              </p>
            </div>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center">
            Our processes align with HIPAA, SOX, GLBA, and FACTA requirements,
            and we maintain ISO 9001, ISO 14001, and ISO 45001 certifications
            alongside R2v3. Your compliance team should confirm fit for your
            specific obligations. See our{" "}
            <Link
              href="/certificates"
              className="text-primary-green hover:text-primary-green-dark font-semibold"
            >
              certificates
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Serving Metro Atlanta */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center">
            Serving Metro Atlanta
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-8">
            We serve businesses throughout metro Atlanta and surrounding
            counties, including:
          </p>
          <p className="text-center text-xl sm:text-2xl font-semibold text-gray-900 leading-relaxed tracking-tight mb-8">
            {METRO_CITIES.map((city, i) => (
              <span key={city}>
                {i > 0 && (
                  <span className="mx-2 sm:mx-3 text-primary-green/40 font-light select-none">
                    ·
                  </span>
                )}
                <span className="text-primary-green">{city}</span>
              </span>
            ))}
          </p>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto">
            Outside the metro area? We serve businesses across{" "}
            <Link
              href="/service-area/georgia"
              className="text-primary-green hover:text-primary-green-dark font-semibold"
            >
              all of Georgia
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Recurring Pickups */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Recurring Pickups
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            For offices and facilities with steady retirement volume, we can set
            up recurring pickups, for example monthly or quarterly, with
            consistent reporting every time. A dedicated account manager
            coordinates your schedule.
          </p>
        </div>
      </section>

      {/* Individuals & Drop-Off */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Individuals & Drop-Off
          </h2>
          <div className="space-y-4 text-lg text-gray-600 max-w-3xl">
            <p>
              Free pickup is for businesses and corporate organizations.
              Individuals can drop off IT equipment for free at our Suwanee
              facility, 3644 Burnette Road, Suwanee, GA 30024, Monday–Friday,
              9:30AM–4:30PM EST. That includes computers, laptops, monitors,
              printers, phones, and peripherals.
            </p>
            <p>
              TVs are the only items with a recycling fee: $25 for TVs under
              65&quot;, $45 for TVs 65&quot; and larger, and $150 for any CRT
              television.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
            Atlanta Computer Recycling FAQ
          </h2>
          <div className="space-y-3">
            {FAQ_ITEMS.map((item) => (
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
        </div>
      </section>

      {/* Pickup Form Modal — contact block is the shared Footer component */}
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
      <Analytics />
    </div>
  );
}
