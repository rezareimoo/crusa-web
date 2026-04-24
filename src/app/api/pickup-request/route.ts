import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

type SubmissionType = "initial" | "supplemental" | "legacy";

interface PickupRequestData {
  submissionType?: SubmissionType;
  firstName: string;
  lastName: string;
  companyName: string;
  phoneNumber: string;
  email: string;
  message?: string;
  services?: string[];
  equipmentTypes?: string[];
  estimatedQuantity?: string;
}

const serviceLabels: Record<string, string> = {
  "data-destruction": "Secure Data Destruction",
  "equipment-pickup": "Free IT Equipment Pickup",
  "responsible-recycling": "Responsible Recycling",
  "equipment-leasing": "IT Equipment Leasing",
};

const quantityLabels: Record<string, string> = {
  "1-10": "1-10 items",
  "11-50": "11-50 items",
  "51-100": "51-100 items",
  "100+": "100+ items",
  unsure: "Not sure yet",
};

function formatServices(services: string[] | undefined): string {
  if (!services?.length) {
    return "Not provided yet (optional follow-up may include services)";
  }
  return services.map((s) => serviceLabels[s] || s).join(", ");
}

function formatEquipmentAndQuantity(
  equipmentTypes: string[] | undefined,
  estimatedQuantity: string | undefined
): { equipmentText: string; quantityText: string } {
  const equipmentText =
    equipmentTypes && equipmentTypes.length > 0
      ? equipmentTypes.join(", ")
      : "Not specified";
  const quantityText = estimatedQuantity
    ? quantityLabels[estimatedQuantity] || estimatedQuantity
    : "Not specified";
  return { equipmentText, quantityText };
}

function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: parseInt(process.env.SMTP_PORT || "587", 10),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

function requireContactFields(data: PickupRequestData): string | null {
  const { firstName, lastName, companyName, phoneNumber, email } = data;
  if (!firstName || !lastName || !companyName || !phoneNumber || !email) {
    return "Missing required fields";
  }
  return null;
}

export async function POST(request: NextRequest) {
  try {
    const data: PickupRequestData = await request.json();

    const {
      firstName,
      lastName,
      companyName,
      phoneNumber,
      email,
      message = "",
      services = [],
      equipmentTypes,
      estimatedQuantity,
    } = data;

    const rawType = data.submissionType;
    const submissionType: SubmissionType =
      rawType === "initial" || rawType === "supplemental"
        ? rawType
        : "legacy";

    const transporter = createTransporter();

    if (submissionType === "initial") {
      const err = requireContactFields(data);
      if (err) {
        return NextResponse.json({ error: err }, { status: 400 });
      }

      const emailBody = `
New website lead — contact captured (services/equipment may follow in a second message):

CONTACT INFORMATION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: ${firstName} ${lastName}
Company: ${companyName}
Phone: ${phoneNumber}
Email: ${email}

SERVICES / EQUIPMENT:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Services: ${formatServices(services)}
Equipment and quantity were not required at this stage.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Submitted through the CRUSA website contact form (initial lead).
      `.trim();

      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: process.env.EMAIL_ADDR,
        subject: `CRUSA WEBSITE LEAD (contact captured): ${companyName}`,
        text: emailBody,
        html: emailBody.replace(/\n/g, "<br>").replace(/━/g, "─"),
      });

      return NextResponse.json(
        { message: "Lead captured successfully" },
        { status: 200 }
      );
    }

    if (submissionType === "supplemental") {
      if (!email?.trim()) {
        return NextResponse.json(
          { error: "Email is required for supplemental submission" },
          { status: 400 }
        );
      }

      const { equipmentText, quantityText } = formatEquipmentAndQuantity(
        equipmentTypes,
        estimatedQuantity
      );

      const emailBody = `
Supplemental pickup / inquiry details (matches prior contact lead):

CONTACT (for matching):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: ${firstName || "(not repeated)"} ${lastName || ""}
Company: ${companyName || "(not repeated)"}
Phone: ${phoneNumber || "(not repeated)"}
Email: ${email}

SERVICES (optional):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${formatServices(services)}

EQUIPMENT DETAILS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Equipment Types: ${equipmentText}
Estimated Quantity: ${quantityText}

ADDITIONAL INFORMATION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${message || "No additional information provided."}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Supplemental submission through the CRUSA website contact form.
      `.trim();

      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: process.env.EMAIL_ADDR,
        subject: `CRUSA — Supplemental pickup details: ${email}`,
        text: emailBody,
        html: emailBody.replace(/\n/g, "<br>").replace(/━/g, "─"),
      });

      return NextResponse.json(
        { message: "Supplemental details submitted successfully" },
        { status: 200 }
      );
    }

    // Legacy: full form in one shot (no submissionType from client)
    if (
      !firstName ||
      !lastName ||
      !companyName ||
      !phoneNumber ||
      !email ||
      !services.length
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const selectedServices = services
      .map((service) => serviceLabels[service] || service)
      .join(", ");

    const { equipmentText, quantityText } = formatEquipmentAndQuantity(
      equipmentTypes,
      estimatedQuantity
    );

    const emailBody = `
New pickup request from CRUSA website:

CONTACT INFORMATION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: ${firstName} ${lastName}
Company: ${companyName}
Phone: ${phoneNumber}
Email: ${email}

SERVICES REQUESTED:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${selectedServices}

${
  equipmentTypes && equipmentTypes.length > 0
    ? `EQUIPMENT DETAILS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Equipment Types: ${equipmentText}
Estimated Quantity: ${quantityText}

`
    : ""
}ADDITIONAL INFORMATION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${message || "No additional information provided."}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
This inquiry was submitted through the CRUSA website contact form.
Please respond promptly to provide excellent customer service.
    `.trim();

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.EMAIL_ADDR,
      subject: `CRUSA WEBSITE INQUIRY: ${companyName}`,
      text: emailBody,
      html: emailBody.replace(/\n/g, "<br>").replace(/━/g, "─"),
    });

    return NextResponse.json(
      { message: "Pickup request submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { error: "Failed to submit pickup request" },
      { status: 500 }
    );
  }
}
