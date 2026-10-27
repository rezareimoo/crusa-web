"use client";

import { useState } from "react";
import { reportAdsConversion, trackEvent } from "@/lib/analytics";

interface FormData {
  firstName: string;
  lastName: string;
  companyName: string;
  phoneNumber: string;
  email: string;
  message: string;
  services: string[];
  equipmentTypes: string[];
  estimatedQuantity: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  companyName?: string;
  phoneNumber?: string;
  email?: string;
}

const emptyForm = (): FormData => ({
  firstName: "",
  lastName: "",
  companyName: "",
  phoneNumber: "",
  email: "",
  message: "",
  services: [],
  equipmentTypes: [],
  estimatedQuantity: "",
});

const serviceOptions = [
  {
    value: "data-destruction",
    title: "Secure Data Destruction",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    popular: true,
  },
  {
    value: "equipment-pickup",
    title: "Free IT Equipment Pickup",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    popular: true,
  },
  {
    value: "responsible-recycling",
    title: "Responsible Electronics Recycling",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    popular: false,
  },
];

const equipmentOptions = [
  "Desktop Computers",
  "Laptops",
  "Servers",
  "Monitors",
  "Printers",
  "Networking Equipment",
  "Storage Devices",
  "Mobile Devices",
  "Other Electronics",
];

const quantityOptions = [
  { value: "1-10", label: "1-10 items" },
  { value: "11-50", label: "11-50 items" },
  { value: "51-100", label: "51-100 items" },
  { value: "100+", label: "100+ items" },
  { value: "unsure", label: "Not sure yet" },
];

const phoneRegex = /^[\+]?[1-9][\d]{0,15}$|^[\+]?[(]?[\d\s\-\(\)]{10,}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const nameRegex = /^[a-zA-Z\s\-']{2,50}$/;
const companyRegex = /^[a-zA-Z0-9\s\-'&.,()]{2,100}$/;

interface PickupFormProps {
  onClose?: () => void;
}

export default function PickupForm({ onClose }: PickupFormProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(emptyForm);

  const [isSubmittingInitial, setIsSubmittingInitial] = useState(false);
  const [isSubmittingSupplemental, setIsSubmittingSupplemental] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errors, setErrors] = useState<FormErrors>({});
  const [showContactCapturedBanner, setShowContactCapturedBanner] = useState(false);
  const [submittedSupplementalDetails, setSubmittedSupplementalDetails] = useState(false);

  const totalSteps = 3;

  const validateStep1 = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    } else if (!nameRegex.test(formData.firstName.trim())) {
      newErrors.firstName = "Please enter a valid first name (2-50 characters, letters only)";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    } else if (!nameRegex.test(formData.lastName.trim())) {
      newErrors.lastName = "Please enter a valid last name (2-50 characters, letters only)";
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company name is required";
    } else if (!companyRegex.test(formData.companyName.trim())) {
      newErrors.companyName = "Please enter a valid company name (2-100 characters)";
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!phoneRegex.test(formData.phoneNumber.replace(/\s/g, ""))) {
      newErrors.phoneNumber = "Please enter a valid phone number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleServiceToggle = (serviceValue: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(serviceValue)
        ? prev.services.filter((s) => s !== serviceValue)
        : [...prev.services, serviceValue],
    }));
  };

  const handleEquipmentToggle = (equipmentType: string) => {
    setFormData((prev) => ({
      ...prev,
      equipmentTypes: prev.equipmentTypes.includes(equipmentType)
        ? prev.equipmentTypes.filter((e) => e !== equipmentType)
        : [...prev.equipmentTypes, equipmentType],
    }));
  };

  const handlePrevious = () => {
    if (currentStep === 3) {
      setCurrentStep(2);
    }
  };

  const submitInitialLead = async () => {
    setIsSubmittingInitial(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/pickup-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          services: [],
          submissionType: "initial",
        }),
      });

      if (response.ok) {
        trackEvent("generate_lead", {
          form_name: "pickup_request",
          submission_type: "initial",
        });
        reportAdsConversion();
        setShowContactCapturedBanner(true);
        setCurrentStep(2);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Initial lead submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmittingInitial(false);
    }
  };

  const submitSupplemental = async () => {
    setIsSubmittingSupplemental(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/pickup-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          submissionType: "supplemental",
        }),
      });

      if (response.ok) {
        trackEvent("pickup_form_complete", {
          form_name: "pickup_request",
          submission_type: "supplemental",
          services: formData.services.join(",") || "none",
          estimated_quantity: formData.estimatedQuantity || "unspecified",
        });
        setSubmittedSupplementalDetails(true);
        setSubmitStatus("success");
        setFormData(emptyForm());
        setShowContactCapturedBanner(false);
        setCurrentStep(1);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Supplemental submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmittingSupplemental(false);
    }
  };

  const skipOptionalSteps = () => {
    setSubmittedSupplementalDetails(false);
    setSubmitStatus("success");
    setFormData(emptyForm());
    setShowContactCapturedBanner(false);
    setCurrentStep(1);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (currentStep === 1) {
      if (!validateStep1()) return;
      await submitInitialLead();
      return;
    }

    if (currentStep === 2) {
      setCurrentStep(3);
      return;
    }

    if (currentStep === 3) {
      await submitSupplemental();
    }
  };

  const inputClass = (hasError?: boolean) =>
    `w-full min-h-11 px-3 py-2.5 rounded-md border bg-surface-raised text-base text-ink placeholder:text-ink-subtle transition-colors focus:outline-2 focus:outline-offset-1 focus:outline-focus-ring focus:border-focus-ring ${
      hasError ? "border-danger" : "border-line-strong"
    }`;
  const labelClass = "block text-sm font-medium text-ink mb-2";
  const errorClass = "mt-1.5 text-sm text-danger";
  const eyebrowClass = "font-mono text-xs font-medium uppercase tracking-[0.08em]";

  const CheckIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  );

  const ShieldIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
    </svg>
  );

  const CloseButton = () =>
    onClose ? (
      <button
        type="button"
        onClick={onClose}
        className="w-10 h-10 -mr-2 rounded-md grid place-items-center text-ink-muted hover:bg-surface-sunken hover:text-ink transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
        aria-label="Close form"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    ) : null;

  const renderHeader = () => (
    <div className="px-5 sm:px-8 pt-6 pb-6 border-b border-line">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className={`${eyebrowClass} text-brand-forest`}>
            Step {currentStep} of {totalSteps}
            {currentStep >= 2 && <span className="text-ink-subtle"> · Optional</span>}
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-ink">
            {currentStep === 1 && "Contact information"}
            {currentStep === 2 && "Choose your services"}
            {currentStep === 3 && "Additional details"}
          </h2>
          {currentStep >= 2 && (
            <p className="mt-1 text-sm text-ink-muted">Help us prepare for your pickup.</p>
          )}
        </div>
        <CloseButton />
      </div>

      <div className="mt-5 flex gap-1.5" aria-hidden="true">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div
            key={index}
            className={`h-1.5 flex-1 rounded-full transition-colors duration-150 ${
              index + 1 <= currentStep ? "bg-brand-lime" : "bg-surface-sunken"
            }`}
          />
        ))}
      </div>
    </div>
  );

  const renderStep1Contact = () => (
    <div className="px-5 sm:px-8 pt-6">
      <div className="mb-6">
        <p className="text-base text-ink-muted">
          Tell us how to reach you. We&apos;ll respond within 24 hours.
        </p>
        <p className="mt-2 flex items-center gap-1.5 text-sm text-ink-subtle">
          <ShieldIcon className="w-4 h-4 text-brand-forest" />
          Your information is protected and secure
        </p>
      </div>

      <div className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="firstName" className={labelClass}>
              First name *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              aria-invalid={!!errors.firstName}
              className={inputClass(!!errors.firstName)}
              placeholder="Enter your first name"
            />
            {errors.firstName && <p className={errorClass}>{errors.firstName}</p>}
          </div>

          <div>
            <label htmlFor="lastName" className={labelClass}>
              Last name *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              aria-invalid={!!errors.lastName}
              className={inputClass(!!errors.lastName)}
              placeholder="Enter your last name"
            />
            {errors.lastName && <p className={errorClass}>{errors.lastName}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="companyName" className={labelClass}>
            Company name *
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleInputChange}
            aria-invalid={!!errors.companyName}
            className={inputClass(!!errors.companyName)}
            placeholder="Enter your company name"
          />
          {errors.companyName && <p className={errorClass}>{errors.companyName}</p>}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="phoneNumber" className={labelClass}>
              Phone number *
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              aria-invalid={!!errors.phoneNumber}
              className={inputClass(!!errors.phoneNumber)}
              placeholder="(555) 123-4567"
            />
            {errors.phoneNumber && <p className={errorClass}>{errors.phoneNumber}</p>}
          </div>

          <div>
            <label htmlFor="email" className={labelClass}>
              Email address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              aria-invalid={!!errors.email}
              className={inputClass(!!errors.email)}
              placeholder="your.email@company.com"
            />
            {errors.email && <p className={errorClass}>{errors.email}</p>}
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep2Services = () => (
    <div className="px-5 sm:px-8 pt-6">
      <div className="mb-6">
        <p className="text-base text-ink-muted">
          Interested in a specific service? Select any that apply — or skip if you&apos;re not sure yet.
        </p>
        <p className="mt-2 flex items-center gap-1.5 text-sm text-ink-subtle">
          <CheckIcon className="w-4 h-4 text-brand-forest" />
          Optional — you already have a response coming
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 mb-6">
        {serviceOptions.map((option) => {
          const selected = formData.services.includes(option.value);
          return (
            <button
              type="button"
              key={option.value}
              aria-pressed={selected}
              onClick={() => handleServiceToggle(option.value)}
              className={`w-full text-left flex items-center gap-3 p-4 rounded-xl border transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring ${
                selected
                  ? "border-brand-forest bg-surface-tint"
                  : "border-line bg-surface-raised hover:border-line-strong"
              }`}
            >
              <span
                className={`w-10 h-10 shrink-0 rounded-md grid place-items-center ${
                  selected ? "bg-brand-forest text-ink-inverse" : "bg-surface-tint text-brand-forest"
                }`}
              >
                {option.icon}
              </span>
              <span className="flex-1 min-w-0">
                <span className="block text-base font-semibold text-ink">{option.title}</span>
                {option.popular && (
                  <span className={`${eyebrowClass} text-ink-subtle`}>Popular</span>
                )}
              </span>
              <span
                className={`w-5 h-5 shrink-0 rounded-full border grid place-items-center ${
                  selected ? "border-brand-forest bg-brand-forest text-ink-inverse" : "border-line-strong"
                }`}
              >
                {selected && <CheckIcon className="w-3 h-3" />}
              </span>
            </button>
          );
        })}
      </div>

      {formData.services.includes("equipment-pickup") && (
        <p className="text-sm text-ink-muted bg-surface-sunken border border-line rounded-xl p-4 mb-6">
          Free pickup is for businesses and corporate organizations. Individuals
          may drop off equipment at our Suwanee facility—call 770-840-0805 for
          hours and directions.
        </p>
      )}
    </div>
  );

  const renderStep3Details = () => (
    <div className="px-5 sm:px-8 pt-6">
      <div className="mb-6">
        <p className="text-base text-ink-muted">
          Share what you know about your equipment — all fields are optional.
        </p>
        <p className="mt-2 flex items-center gap-1.5 text-sm text-ink-subtle">
          <CheckIcon className="w-4 h-4 text-brand-forest" />
          Helps us prepare — skip anything you don&apos;t know yet
        </p>
      </div>

      <div className="space-y-6">
        <fieldset>
          <legend className={labelClass}>Equipment types (optional)</legend>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {equipmentOptions.map((equipment) => {
              const checked = formData.equipmentTypes.includes(equipment);
              return (
                <label
                  key={equipment}
                  className={`flex items-center gap-2 min-h-11 px-3 py-2 rounded-md border cursor-pointer transition-colors ${
                    checked ? "border-brand-forest bg-surface-tint" : "border-line hover:border-line-strong"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => handleEquipmentToggle(equipment)}
                    className="w-4 h-4 rounded-sm border-line-strong accent-[#106838]"
                  />
                  <span className="text-sm text-ink">{equipment}</span>
                </label>
              );
            })}
          </div>
        </fieldset>

        <div>
          <label htmlFor="estimatedQuantity" className={labelClass}>
            Estimated quantity (optional)
          </label>
          <select
            id="estimatedQuantity"
            name="estimatedQuantity"
            value={formData.estimatedQuantity}
            onChange={handleInputChange}
            className={inputClass()}
          >
            <option value="">Select a range (optional)</option>
            {quantityOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="message" className={labelClass}>
            Additional information (optional)
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleInputChange}
            className={`${inputClass()} resize-y`}
            placeholder="Special requirements, access instructions, security needs, or anything else we should know..."
          />
        </div>
      </div>
    </div>
  );

  const Spinner = () => (
    <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
    </svg>
  );

  const primaryButton =
    "inline-flex items-center justify-center min-h-11 px-6 rounded-[10px] bg-action-primary text-on-action-primary font-medium transition-colors hover:bg-action-primary-hover disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring";
  const outlineButton =
    "inline-flex items-center justify-center min-h-11 px-6 rounded-[10px] border border-line-strong text-ink font-medium transition-colors hover:bg-surface-tint focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring";

  if (submitStatus === "success") {
    return (
      <div className="bg-surface-raised">
        <div className="px-5 sm:px-8 pt-6 pb-6 border-b border-line flex items-start justify-between gap-4">
          <div>
            <p className={`${eyebrowClass} text-brand-forest`}>Request received</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-ink">You&apos;re all set</h2>
          </div>
          <CloseButton />
        </div>

        <div className="px-5 sm:px-8 py-8">
          <div className="w-12 h-12 rounded-full bg-surface-tint text-brand-forest grid place-items-center mb-5">
            <CheckIcon className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-semibold text-ink mb-2">Thank you for reaching out</h3>
          <p className="text-base text-ink-muted mb-6 max-w-lg">
            We have your contact information and will reach out within 24 hours.
            {submittedSupplementalDetails
              ? " We also received your optional details and will use them to prepare."
              : ""}
          </p>
          <div className="rounded-xl border border-line bg-surface-sunken p-5 mb-6">
            <p className={`${eyebrowClass} text-ink-subtle mb-3`}>What happens next</p>
            <ol className="space-y-2 text-sm text-ink">
              {[
                "We'll call or email you within 24 hours",
                "Schedule a convenient pickup or consultation",
                "Provide a detailed quote when you're ready",
                "Answer any questions you may have",
              ].map((item, i) => (
                <li key={item} className="flex gap-3">
                  <span className="font-mono text-xs text-brand-forest pt-0.5">[0{i + 1}]</span>
                  {item}
                </li>
              ))}
            </ol>
          </div>
          <p className="text-sm text-ink-muted">
            Need immediate assistance? Call us at{" "}
            <a href="tel:770-840-0805" className="font-mono font-medium text-link hover:text-link-hover hover:underline underline-offset-4">
              770-840-0805
            </a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-surface-raised">
      {renderHeader()}

      {showContactCapturedBanner && currentStep >= 2 && (
        <div className="mx-5 sm:mx-8 mt-5 p-4 rounded-xl bg-surface-tint flex gap-2.5 items-start" role="status">
          <CheckIcon className="w-4 h-4 mt-0.5 shrink-0 text-brand-forest" />
          <p className="text-sm text-ink">
            We received your contact info — you&apos;ll hear from us soon. The steps below are optional and help us prepare.
          </p>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="mx-5 sm:mx-8 mt-5 p-4 rounded-xl border border-danger/30 bg-danger/5" role="alert">
          <p className="text-sm font-medium text-danger">
            Error: something went wrong. Please try again or call us directly at 770-840-0805.
          </p>
        </div>
      )}

      <form onSubmit={handleFormSubmit}>
        {currentStep === 1 && renderStep1Contact()}
        {currentStep === 2 && renderStep2Services()}
        {currentStep === 3 && renderStep3Details()}

        <div className="mt-8 border-t border-line bg-surface-sunken px-5 sm:px-8 py-5">
          <div className="flex flex-col-reverse sm:flex-row sm:justify-between sm:items-center gap-3">
            {currentStep === 3 ? (
              <button type="button" onClick={handlePrevious} className={outlineButton}>
                ← Previous
              </button>
            ) : (
              <span className="hidden sm:block" />
            )}

            <div className="flex flex-col-reverse sm:flex-row gap-3 sm:items-center">
              {currentStep >= 2 && (
                <button type="button" onClick={skipOptionalSteps} className={outlineButton}>
                  {currentStep === 2 ? "No thanks, I'm done" : "Skip optional details"}
                </button>
              )}

              {currentStep < 3 ? (
                <button type="submit" disabled={isSubmittingInitial} className={`${primaryButton} min-w-[160px]`}>
                  {currentStep === 1 && isSubmittingInitial ? (
                    <>
                      <Spinner />
                      Sending...
                    </>
                  ) : (
                    "Continue →"
                  )}
                </button>
              ) : (
                <button type="submit" disabled={isSubmittingSupplemental} className={`${primaryButton} min-w-[180px]`}>
                  {isSubmittingSupplemental ? (
                    <>
                      <Spinner />
                      Submitting...
                    </>
                  ) : (
                    "Submit details"
                  )}
                </button>
              )}
            </div>
          </div>

          <ul className="mt-5 pt-4 border-t border-line flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-[0.06em] text-ink-subtle">
            <li className="flex items-center gap-1.5">
              <ShieldIcon className="w-3.5 h-3.5 text-brand-forest" />
              Secure &amp; confidential
            </li>
            <li className="flex items-center gap-1.5">
              <CheckIcon className="w-3.5 h-3.5 text-brand-forest" />
              Free consultation
            </li>
            <li className="flex items-center gap-1.5">
              <CheckIcon className="w-3.5 h-3.5 text-brand-forest" />
              Response within 24 hours
            </li>
          </ul>
        </div>
      </form>
    </div>
  );
}
