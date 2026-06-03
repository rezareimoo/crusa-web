export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqSection {
  heading: string;
  items: FaqItem[];
}

/** Shared with layout metadata and JSON-LD WebPage */
export const FAQ_PAGE_DESCRIPTION =
  "Frequently asked questions about data destruction, NIST 800-88, R2v3 certification, free IT pickup across Georgia, equipment we accept, compliance documentation, and more from Computer Recyclers USA.";

export const faqSections: FaqSection[] = [
  {
    heading: "Trust & Compliance",
    items: [
      {
        question: "Is my data actually destroyed, or just deleted?",
        answer:
          'Deletion or reformatting leaves recoverable data on drives. We offer both physical destruction (for example, shredding or crushing media so it cannot be reused) and logical sanitization that follows NIST SP 800-88 guidelines for clearing and purging. That means data is not merely "deleted" in a superficial sense. Depending on your media type, compliance needs, and witness requirements, we can use one approach or both.',
      },
      {
        question: "What NIST standard do you follow for data destruction?",
        answer:
          "We follow NIST Special Publication 800-88 (Rev. 1) for media sanitization. That covers appropriate methods for clearing, purging, and destructive techniques, and it aligns with widely accepted federal guidance for protecting controlled unclassified and sensitive information.",
      },
      {
        question:
          "What does R2v3 certification mean and why does it matter?",
        answer:
          "R2v3 is the current Responsible Recycling standard for electronics refurbishers and recyclers. Certification means an independent audit has verified that our facility follows strict requirements for environmental responsibility, worker health and safety, and secure data management, including proper handling of sensitive data and downstream due diligence. For your organization, R2v3 provides independent assurance that e-waste is managed responsibly, not dumped or mishandled.",
      },
    ],
  },
  {
    heading: "Process & Logistics",
    items: [
      {
        question: "How do I schedule a free pickup?",
        answer:
          "Free pickup is available for businesses and corporate organizations. Individuals may drop off equipment at our Suwanee facility, 3644 Burnette Road, Mon–Fri 9:30AM–4:30PM EST. To schedule a business pickup, call 770-840-0805 or use the Schedule Pickup button on this site. We will confirm details, coordinate a window that works for your location, and walk through next steps with you directly.",
      },
      {
        question:
          "Is there a minimum or maximum quantity of equipment for pickup?",
        answer:
          "Free pickup is for businesses and corporate organizations. There is no maximum quantity; we regularly handle large removals. Minimums depend on logistics such as location, truck routing, and loading requirements. Contact us with your volume and address and we will confirm whether your project meets the minimum for your area. Individuals may bring equipment to our Suwanee facility instead of scheduling pickup.",
      },
      {
        question: "What condition does the equipment need to be in?",
        answer:
          "We accept IT and electronic equipment in any condition, whether working, damaged, or incomplete. That includes units that no longer boot or power on.",
      },
      {
        question: "How long does the pickup process take?",
        answer:
          "Typical turnaround is about five to ten business days from pickup through to your audit report and certificate of destruction (COD). Timing can vary with volume and service type. When you schedule, we will give you a clear timeline.",
      },
      {
        question: "Can individuals drop off equipment without scheduling pickup?",
        answer:
          "Yes. Individuals may drop off IT and electronic equipment at our R2 certified Suwanee facility, 3644 Burnette Road, Suwanee, GA 30024, during business hours (Mon–Fri 9:30AM–4:30PM EST). Complimentary pickup at your location remains available for businesses and corporate organizations.",
      },
    ],
  },
  {
    heading: "Service Area",
    items: [
      {
        question: "Do you serve businesses outside of Atlanta?",
        answer:
          "Yes. We proudly serve Georgia businesses statewide, not only in Atlanta. Free IT equipment pickup, onsite data destruction, and recycling are available wherever your locations are in Georgia.",
      },
      {
        question: "Which cities and states do you cover?",
        answer:
          "Our primary service area for pickup and onsite service is Georgia. We serve the Atlanta metro area and surrounding counties, plus major markets and regions across the state such as Marietta, Roswell, Augusta, Columbus, and Macon, as well as North Georgia, Central Georgia, and South Georgia. If your organization also operates elsewhere in the Southeast, contact us to discuss coverage.",
      },
      {
        question: "Do you charge for pickup outside of Atlanta?",
        answer:
          "As long as your project meets the logistics minimum for your location, we do not add an extra fee simply for being outside Atlanta. Confirm details when you schedule so we can align on any minimum volume or routing requirements.",
      },
    ],
  },
  {
    heading: "Equipment Types",
    items: [
      {
        question: "What types of equipment do you accept?",
        answer:
          "We accept a wide range of IT and electronic equipment, including computers, laptops, monitors, printers, phones, peripherals, and other electronic devices. That matches how we describe our services elsewhere on this site.",
      },
      {
        question: "Do you accept servers and networking equipment?",
        answer:
          "Yes. We accept servers, networking gear such as switches, routers, and related rack equipment, and other data center or closet IT assets as part of pickup and recycling programs.",
      },
      {
        question: "Do you take equipment that no longer powers on?",
        answer:
          "Yes. Equipment that does not work is welcome. Whether or not a device powers on does not affect eligibility for recycling and secure processing.",
      },
      {
        question: "Do you accept TVs and what are the recycling fees?",
        answer:
          "Yes, we accept televisions for recycling. A $25 fee applies to TVs under 65 inches. TVs 65 inches and larger are $45. Any CRT television carries a $150 recycling fee. Contact us if you have questions about drop-off or volume.",
      },
    ],
  },
  {
    heading: "Business & Compliance Documentation",
    items: [
      {
        question: "Can you provide documentation for our compliance audit?",
        answer:
          "Yes. We provide documentation suited to vendor due diligence and audit support. That includes certificates of destruction with serial tracking where applicable, chain of custody records aligned with how your service was delivered, and reporting that aligns with expectations under HIPAA and FACTA as well as sanitization practices described by NIST where they apply. Your compliance team should map deliverables to your specific obligations.",
      },
      {
        question:
          "Do you offer scheduled recurring pickups for ongoing needs?",
        answer:
          "Yes. We can set up recurring pickups or recurring routes for facilities with steady retirement volume. Contact us to discuss cadence, for example monthly or quarterly, as well as minimums and reporting.",
      },
    ],
  },
];
