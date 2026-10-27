"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type ReactNode } from "react";
import Header from "@/components/Header";
import PickupFormModal from "@/components/PickupFormModal";
import ServiceAreaCallout from "@/components/ServiceAreaCallout";
import { Analytics } from "@vercel/analytics/react";

/* ---------- Small building blocks from the CRUSA design system ---------- */

const container = "max-w-[1200px] mx-auto px-4 sm:px-8";
const eyebrow = "font-mono text-xs font-medium uppercase tracking-[0.08em]";
const btnBase =
  "inline-flex items-center justify-center gap-2 min-h-11 px-6 rounded-[10px] text-[15px] font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2";
const btnPrimary = `${btnBase} bg-action-primary text-on-action-primary hover:bg-action-primary-hover focus-visible:outline-brand-lime`;

function Arrow() {
  return (
    <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
      →
    </span>
  );
}

/** The logo's recycling arrow, abstracted to one round-capped arc. Deep bands only. */
function Arc({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`pointer-events-none absolute ${className}`}
      width="420"
      height="420"
      viewBox="0 0 420 420"
      aria-hidden="true"
    >
      <circle
        cx="210"
        cy="210"
        r="170"
        fill="none"
        stroke="var(--line-inverse)"
        strokeWidth="28"
        strokeLinecap="round"
        strokeDasharray="640 430"
      />
    </svg>
  );
}

function SectionHeader({
  index,
  label,
  title,
  intro,
  inverse = false,
}: {
  index: string;
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  inverse?: boolean;
}) {
  return (
    <header className="grid gap-3 max-w-[720px]">
      <p className={`${eyebrow} ${inverse ? "text-ink-inverse-muted" : "text-ink-subtle"}`}>
        <span className={inverse ? "text-brand-lime" : "text-brand-forest"}>[{index}]</span>{" "}
        {label}
      </p>
      <h2
        className={`text-[28px] leading-[34px] sm:text-4xl sm:leading-[42px] font-semibold tracking-[-0.02em] ${
          inverse ? "text-ink-inverse" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`text-lg leading-[30px] max-w-[60ch] ${
            inverse ? "text-ink-inverse-muted" : "text-ink-muted"
          }`}
        >
          {intro}
        </p>
      )}
    </header>
  );
}

function Icon({ d }: { d: string }) {
  return (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  );
}

const services = [
  {
    href: "/services/data-destruction",
    title: "Data Destruction & Sanitization",
    body: "NIST 800-88 physical shredding or logical sanitization under R2v3 Appendix B—choose the path that fits your media and reuse goals.",
    meta: "NIST 800-88 · R2V3 APP. B",
    icon: "M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z M9 12l2 2 4-4",
  },
  {
    href: "/services/free-it-equipment-pickup",
    title: "Free IT Equipment Pickup",
    body: "Complimentary pickup for businesses and corporate organizations throughout Georgia, regardless of condition. Convenient scheduling aligned with your operations.",
    meta: "BUSINESSES · GEORGIA",
    icon: "M3 7a2 2 0 0 1 2-2h9v11H3z M14 9h4l3 3.5V16h-7 M7.5 19.3a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6z M17.5 19.3a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6z",
  },
  {
    href: "/services/responsible-electronics-recycling",
    title: "Responsible Electronics Recycling",
    body: "Environmentally responsible recycling of electronic equipment with documented downstream tracking and zero landfill for hazardous material.",
    meta: "DOWNSTREAM TRACKED",
    icon: "M4 4v5h5 M20 20v-5h-5 M5.5 9A7.5 7.5 0 0 1 19 8 M18.5 15A7.5 7.5 0 0 1 5 16",
  },
];

const certifications = [
  { name: "R2v3", scope: "Responsible recycling", href: "https://sustainableelectronics.org", external: true },
  { name: "ISO 14001", scope: "Environmental", href: "/certificates" },
  { name: "ISO 9001", scope: "Quality", href: "/certificates" },
  { name: "ISO 45001", scope: "Health & safety", href: "/certificates" },
];

const reasons = [
  {
    title: "R2v3 Certified Facility",
    body: "Our facility meets the highest industry standards for responsible recycling and data security.",
  },
  {
    title: "Comprehensive Compliance",
    body: "Documented chain of custody and NIST 800-88 sanitization supporting HIPAA, SOX, GLBA, and FACTA requirements. Serialized certificate of destruction on every device.",
  },
  {
    title: "Enterprise Support",
    body: "Dedicated account manager, 24–48 hour scheduled pickup, and audit reporting within 5–10 business days.",
  },
];

const standards = [
  "R2v3 Certified",
  "Multiple ISO Standards",
  "R2v3 Appendix B — Data Sanitization",
  "NIST 800-88",
];

/* ---------- Page ---------- */

export default function Home() {
  const [showPickupForm, setShowPickupForm] = useState(false);
  const openForm = () => setShowPickupForm(true);

  return (
    <div className="min-h-screen bg-surface-page text-ink">
      <Header currentPage="home" />

      {/* Hero */}
      <section id="home" className="relative overflow-hidden bg-surface-deep text-ink-inverse">
        <div className={`${container} relative py-16 sm:py-24 lg:py-28`}>
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-line-inverse px-3 py-1 text-[13px] font-medium text-ink-inverse">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-lime" aria-hidden="true" />
                R2v3 certified · Since 2004
              </p>
              <h1 className="mt-6 text-[40px] leading-[44px] sm:text-5xl sm:leading-[54px] lg:text-[60px] lg:leading-[64px] font-semibold tracking-[-0.03em]">
                Georgia Computer Recycling,{" "}
                <span className="text-brand-lime">Data Destruction & IT Asset Disposition</span>
              </h1>
              <p className="mt-6 text-lg leading-[30px] text-ink-inverse-muted max-w-[56ch]">
                R2v3-certified ITAD for Georgia businesses — certified data destruction, logical
                data sanitization, and value recovery on retired IT assets. Free pickup statewide.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <button type="button" onClick={openForm} className={`group ${btnPrimary}`}>
                  Schedule free pickup <Arrow />
                </button>
                <a
                  href="tel:770-840-0805"
                  className={`${btnBase} border border-ink-inverse-muted/60 text-ink-inverse hover:bg-line-inverse focus-visible:outline-brand-lime`}
                >
                  Call <span className="font-mono">770-840-0805</span>
                </a>
              </div>
              <p className={`${eyebrow} mt-6 font-normal text-ink-inverse-muted`}>
                Mon–Fri 9:30AM–4:30PM ET · Response within 24 hours
              </p>
            </div>

            <div className="relative">
              <Arc className="-right-28 -bottom-32 hidden lg:block" />
              <div className="relative overflow-hidden rounded-3xl border border-line-inverse">
                <Image
                  src="/bg1.png"
                  alt="Computer Recyclers USA facility exterior with company sign"
                  width={2000}
                  height={887}
                  priority
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="w-full h-auto aspect-[4/3] object-cover object-[70%_center]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-10 sm:py-12">
        <div className={container}>
          <ul className="grid grid-cols-2 lg:grid-cols-4 rounded-2xl border border-line bg-surface-raised overflow-hidden">
            {certifications.map((c, i) => (
              <li
                key={c.name}
                className={`border-line ${i % 2 === 1 ? "border-l" : ""} ${i >= 2 ? "border-t lg:border-t-0" : ""} ${
                  i === 2 ? "lg:border-l" : ""
                }`}
              >
                <Link
                  href={c.href}
                  {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex h-full flex-col gap-1 p-5 sm:p-6 hover:bg-surface-tint transition-colors focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus-ring"
                >
                  <span className="flex items-center gap-2 text-lg font-semibold text-ink">
                    <span className="w-2 h-2 rounded-full bg-brand-lime" aria-hidden="true" />
                    {c.name}
                  </span>
                  <span className={`${eyebrow} font-normal tracking-[0.06em] text-ink-subtle`}>{c.scope}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="pt-10 pb-16 sm:pt-12 sm:pb-24">
        <div className={container}>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 sm:mb-12">
            <SectionHeader
              index="01"
              label="Services"
              title="Our ITAD Services"
              intro="Certified data destruction and sanitization, free equipment pickup, and responsible recycling services"
            />
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 text-[15px] font-medium text-link hover:text-link-hover hover:underline underline-offset-4 shrink-0"
            >
              All services <Arrow />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group flex flex-col gap-3 rounded-2xl border border-line bg-surface-raised p-6 transition-colors hover:border-brand-forest focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
              >
                <span className="w-10 h-10 rounded-[10px] grid place-items-center bg-surface-tint text-brand-forest">
                  <Icon d={s.icon} />
                </span>
                <h3 className="mt-2 text-xl leading-7 font-semibold tracking-[-0.01em] text-ink">{s.title}</h3>
                <p className="text-sm leading-[22px] text-ink-muted">{s.body}</p>
                <div className="mt-auto pt-4 border-t border-line flex items-center justify-between gap-3">
                  <span className="font-mono text-xs tracking-[0.04em] text-ink-subtle">{s.meta}</span>
                  <span className="text-sm font-medium text-link group-hover:text-link-hover inline-flex items-center gap-1.5">
                    Learn more <Arrow />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* By the numbers */}
      <section className="pb-16 sm:pb-24">
        <div className={container}>
          <div className="relative overflow-hidden rounded-3xl bg-surface-deep px-6 py-10 sm:px-10 sm:py-12">
            <Arc className="-left-40 -bottom-56 opacity-70" />
            <div className="relative">
              <p className={`${eyebrow} text-ink-inverse-muted`}>
                <span className="text-brand-lime">[02]</span> By the numbers
              </p>
              <dl className="mt-6 grid grid-cols-1 sm:grid-cols-3">
                {[
                  { value: "5M", unit: "+", label: "Devices processed" },
                  { value: "700", unit: "+", label: "Businesses served" },
                  { value: "2004", unit: "", label: "Serving Georgia businesses since" },
                ].map((s, i) => (
                  <div
                    key={s.label}
                    className={`border-t border-line-inverse py-6 ${
                      i > 0 ? "sm:border-l sm:pl-6" : ""
                    } sm:pr-6 flex flex-col-reverse`}
                  >
                    <dt className="mt-2 text-sm leading-[22px] text-ink-inverse-muted">{s.label}</dt>
                    <dd className="text-5xl sm:text-[56px] leading-[60px] font-medium tracking-[-0.02em] tabular-nums text-ink-inverse">
                      {s.value}
                      {s.unit && <span className="text-brand-lime">{s.unit}</span>}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section id="about" className="bg-surface-sunken py-16 sm:py-24">
        <div className={container}>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <SectionHeader
                index="03"
                label="Why CRUSA"
                title="Why Choose Computer Recyclers USA?"
                intro="Serving Georgia and Southeast businesses with reliable data destruction, responsible electronics recycling, and IT Asset Disposition (ITAD) services."
              />
              <p className="mt-4 text-base leading-[26px] text-ink-muted max-w-[60ch]">
                Looking for{" "}
                <Link
                  href="/computer-recycling-atlanta"
                  className="font-medium text-link hover:text-link-hover underline decoration-link/30 underline-offset-4 hover:decoration-link"
                >
                  computer recycling in Atlanta
                </Link>
                ? We pick up from businesses across the metro area.
              </p>

              <div className="mt-10">
                <h3 className={`${eyebrow} text-ink-subtle`}>Our Certifications</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {standards.map((s) => (
                    <li
                      key={s}
                      className="inline-flex items-center gap-2 rounded-full border border-line bg-surface-raised px-3 py-1 font-mono text-xs tracking-[0.04em] uppercase text-ink"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-forest" aria-hidden="true" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <ol className="rounded-2xl border border-line bg-surface-raised divide-y divide-line self-start">
              {reasons.map((r, i) => (
                <li key={r.title} className="p-6 sm:p-8 grid grid-cols-[auto_1fr] gap-x-5">
                  <span className="font-mono text-xs font-medium tracking-[0.08em] text-brand-forest pt-1.5">
                    [0{i + 1}]
                  </span>
                  <div>
                    <h3 className="text-lg leading-[26px] font-semibold text-ink">{r.title}</h3>
                    <p className="mt-2 text-sm leading-[22px] text-ink-muted">{r.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section className="py-16 sm:py-24">
        <div className={container}>
          <div className="rounded-2xl border border-line bg-surface-raised px-4 py-10 sm:px-10 sm:py-14">
            <h2 className="text-center text-[28px] leading-[34px] sm:text-4xl sm:leading-[42px] font-semibold tracking-[-0.02em] text-ink mb-8">
              Serving All of Georgia
            </h2>
            <ServiceAreaCallout />
          </div>
        </div>
      </section>

      <PickupFormModal open={showPickupForm} onClose={() => setShowPickupForm(false)} />
      <Analytics />
    </div>
  );
}
