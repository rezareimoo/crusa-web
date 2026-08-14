import Link from "next/link";
import type { ReactNode } from "react";

const CITIES = ["Atlanta", "Marietta", "Alpharetta", "Vinings"] as const;

type ServiceAreaCalloutProps = {
  /** Extra copy under the city line (e.g. pickup logistics). */
  children?: ReactNode;
  className?: string;
};

export default function ServiceAreaCallout({
  children,
  className = "",
}: ServiceAreaCalloutProps) {
  return (
    <div className={`text-center ${className}`}>
      <div className="inline-flex items-center justify-center gap-2 mb-4 text-primary-green">
        <svg
          className="w-5 h-5 shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
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
        <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.22em]">
          Statewide Coverage
        </span>
      </div>

      <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 leading-snug tracking-tight">
        {CITIES.map((city, i) => (
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

      <p className="mt-3 text-base sm:text-lg text-gray-600">
        and all of{" "}
        <Link
          href="/service-area/georgia"
          className="text-primary-green hover:text-primary-green-dark font-bold underline decoration-primary-green/30 underline-offset-4 hover:decoration-primary-green transition-colors"
        >
          Georgia
        </Link>
      </p>

      {children && (
        <p className="mt-4 text-sm sm:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
          {children}
        </p>
      )}
    </div>
  );
}
