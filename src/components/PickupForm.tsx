"use client";

import { useState } from "react";

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
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    popular: true,
  },
  {
    value: "equipment-pickup",
    title: "Free IT Equipment Pickup",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    popular: true,
  },
  {
    value: "responsible-recycling",
    title: "Responsible Electronics Recycling",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

  const gtag_report_conversion = (url?: string) => {
    if (typeof window !== "undefined") {
      const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;

      if (gtag) {
        const callback = () => {
          if (typeof url !== "undefined" && url) {
            window.location.href = url;
          }
        };

        gtag("event", "conversion", {
          send_to: "AW-17836566328/8pSKCJO5q9obELjOkblC",
          event_callback: callback,
        });
      }
    }
    return false;
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
        gtag_report_conversion();
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

  const renderHeader = () => (
    <div className="border-b border-gray-100">
      {onClose && (
        <div className="px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors duration-200"
              aria-label="Close form"
            >
              <svg
                className="w-3 h-3 text-gray-400 hover:text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      <div className="px-4 sm:px-6 lg:px-8 pb-6">
        <div className="text-center mb-4">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
            {currentStep === 1 && "Contact Information"}
            {currentStep === 2 && "Choose Your Services"}
            {currentStep === 3 && "Additional Details"}
          </h2>
          {currentStep >= 2 && (
            <p className="text-sm font-medium text-primary-green mb-2">
              Help us prepare for your pickup (Optional)
            </p>
          )}
          <span className="text-sm text-gray-500">
            Step {currentStep} of {totalSteps}
          </span>
        </div>

        <div className="flex space-x-2 max-w-md mx-auto">
          {Array.from({ length: totalSteps }).map((_, index) => (
            <div
              key={index}
              className={`h-2 flex-1 rounded-full transition-colors duration-200 ${
                index + 1 <= currentStep ? "bg-primary-green" : "bg-gray-200"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );

  const renderStep1Contact = () => (
    <div className="px-4 sm:px-6 lg:px-8 pt-6">
      <div className="text-center mb-8">
        <p className="text-gray-600 text-base sm:text-lg">
          Tell us how to reach you. We&apos;ll respond within 24 hours.
        </p>
        <div className="mt-2 flex items-center justify-center text-sm text-gray-500">
          <svg className="w-4 h-4 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          Your information is protected and secure
        </div>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent transition-colors ${
                errors.firstName ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your first name"
            />
            {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>}
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent transition-colors ${
                errors.lastName ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your last name"
            />
            {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
            Company Name *
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent transition-colors ${
              errors.companyName ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter your company name"
          />
          {errors.companyName && <p className="mt-1 text-sm text-red-600">{errors.companyName}</p>}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent transition-colors ${
                errors.phoneNumber ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="(555) 123-4567"
            />
            {errors.phoneNumber && <p className="mt-1 text-sm text-red-600">{errors.phoneNumber}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent transition-colors ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="your.email@company.com"
            />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep2Services = () => (
    <div className="px-4 sm:px-6 lg:px-8 pt-6">
      <div className="text-center mb-8">
        <p className="text-gray-600 text-base sm:text-lg">
          Interested in a specific service? Select any that apply — or skip if you&apos;re not sure yet.
        </p>
        <div className="mt-2 flex items-center justify-center text-sm text-gray-500">
          <svg className="w-4 h-4 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          Optional — you already have a response coming
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:gap-4 mb-6">
        {serviceOptions.map((option) => (
          <div
            key={option.value}
            className={`relative p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 hover:shadow-md ${
              formData.services.includes(option.value)
                ? "border-primary-green bg-primary-green bg-opacity-5 shadow-md"
                : "border-gray-200 hover:border-gray-300"
            }`}
            onClick={() => handleServiceToggle(option.value)}
          >
            {option.popular && (
              <div className="absolute -top-2 left-4">
                <span className="bg-primary-green text-white text-xs font-semibold px-2 py-1 rounded-full">
                  POPULAR
                </span>
              </div>
            )}
            <div className="flex items-center space-x-3">
              <div
                className={`p-2 rounded-lg ${
                  formData.services.includes(option.value) ? "bg-primary-green text-white" : "bg-gray-100 text-gray-600"
                }`}
              >
                {option.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-gray-900">{option.title}</h3>
              </div>
              <div
                className={`w-5 h-5 border-2 rounded-full flex items-center justify-center ${
                  formData.services.includes(option.value) ? "border-primary-green bg-primary-green" : "border-gray-300"
                }`}
              >
                {formData.services.includes(option.value) && (
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {formData.services.includes("equipment-pickup") && (
        <p className="text-sm text-gray-600 bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
          Free pickup is for businesses and corporate organizations. Individuals
          may drop off equipment at our Suwanee facility—call 770-840-0805 for
          hours and directions.
        </p>
      )}
    </div>
  );

  const renderStep3Details = () => (
    <div className="px-4 sm:px-6 lg:px-8 pt-6">
      <div className="text-center mb-8">
        <p className="text-gray-600 text-base sm:text-lg">
          Share what you know about your equipment — all fields are optional.
        </p>
        <div className="mt-2 flex items-center justify-center text-sm text-gray-500">
          <svg className="w-4 h-4 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          Helps us prepare — skip anything you don&apos;t know yet
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Equipment types (optional)</label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {equipmentOptions.map((equipment) => (
              <label key={equipment} className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  type="checkbox"
                  checked={formData.equipmentTypes.includes(equipment)}
                  onChange={() => handleEquipmentToggle(equipment)}
                  className="w-4 h-4 text-primary-green border-gray-300 rounded focus:ring-primary-green"
                />
                <span className="ml-2 text-sm text-gray-700">{equipment}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="estimatedQuantity" className="block text-sm font-medium text-gray-700 mb-2">
            Estimated quantity (optional)
          </label>
          <select
            id="estimatedQuantity"
            name="estimatedQuantity"
            value={formData.estimatedQuantity}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent transition-colors"
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
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Additional information (optional)
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent transition-colors resize-vertical"
            placeholder="Special requirements, access instructions, security needs, or anything else we should know..."
          />
        </div>
      </div>
    </div>
  );

  if (submitStatus === "success") {
    return (
      <div className="min-h-[60vh]">
        <div className="border-b border-gray-100">
          {onClose && (
            <div className="px-4 sm:px-6 lg:px-8 py-3">
              <div className="flex justify-end">
                <button
                  onClick={onClose}
                  className="p-1 hover:bg-gray-100 rounded-full transition-colors duration-200"
                  aria-label="Close form"
                >
                  <svg
                    className="w-3 h-3 text-gray-400 hover:text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          )}

          <div className="px-4 sm:px-6 lg:px-8 pb-6">
            <div className="text-center">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">You&apos;re all set!</h2>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center pt-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Thank you for reaching out</h3>
          <p className="text-gray-600 text-lg mb-6 max-w-lg">
            We have your contact information and will reach out within 24 hours.
            {submittedSupplementalDetails
              ? " We also received your optional details and will use them to prepare."
              : ""}
          </p>
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h4 className="font-semibold text-gray-900 mb-2">What happens next?</h4>
            <ul className="text-sm text-gray-600 space-y-1 text-left max-w-md mx-auto">
              <li>✓ We&apos;ll call or email you within 24 hours</li>
              <li>✓ Schedule a convenient pickup or consultation</li>
              <li>✓ Provide a detailed quote when you&apos;re ready</li>
              <li>✓ Answer any questions you may have</li>
            </ul>
          </div>
          <div className="text-sm text-gray-500">
            Need immediate assistance? Call us at{" "}
            <a href="tel:770-840-0805" className="text-primary-green font-semibold">
              770-840-0805
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-[60vh]">
      {renderHeader()}

      {showContactCapturedBanner && currentStep >= 2 && (
        <div className="mx-4 sm:mx-6 lg:mx-8 mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-900 text-sm text-center font-medium">
            We received your contact info — you&apos;ll hear from us soon. The steps below are optional and help us prepare.
          </p>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="mx-4 sm:mx-6 lg:mx-8 mt-4 mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-red-500 mr-3 shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-red-700 font-medium">
              Something went wrong. Please try again or call us directly at 770-840-0805.
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleFormSubmit}>
        {currentStep === 1 && renderStep1Contact()}
        {currentStep === 2 && renderStep2Services()}
        {currentStep === 3 && renderStep3Details()}

        <div className="border-t border-gray-200 px-4 sm:px-6 lg:px-8 py-6 bg-gray-50">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
            <button
              type="button"
              onClick={handlePrevious}
              disabled={currentStep !== 3}
              className={`px-6 py-3 border border-gray-300 rounded-lg font-medium transition-colors order-2 sm:order-1 ${
                currentStep !== 3 ? "text-gray-400 cursor-not-allowed" : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              Previous
            </button>

            <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center order-1 sm:order-2 w-full sm:w-auto justify-end">
              {currentStep >= 2 && (
                <button
                  type="button"
                  onClick={skipOptionalSteps}
                  className="px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-white transition-colors order-2 sm:order-1"
                >
                  {currentStep === 2 ? "No thanks, I'm done" : "Skip optional details"}
                </button>
              )}

              {currentStep < 3 ? (
                <button
                  type="submit"
                  disabled={isSubmittingInitial}
                  className="bg-primary-green hover:bg-primary-green-dark text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 order-1 sm:order-2 flex items-center justify-center min-w-[160px]"
                >
                  {currentStep === 1 && isSubmittingInitial ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Continue →"
                  )}
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmittingSupplemental}
                  className="bg-primary-green hover:bg-primary-green-dark text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center min-w-[180px]"
                >
                  {isSubmittingSupplemental ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    "Submit details"
                  )}
                </button>
              )}
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-gray-500">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Secure & Confidential
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Free Consultation
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
                Response within 24 hours
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
