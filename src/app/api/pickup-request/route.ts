import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface PickupRequestData {
  firstName: string;
  lastName: string;
  companyName: string;
  phoneNumber: string;
  email: string;
  message: string;
  services: string[];
}

const serviceLabels: Record<string, string> = {
  "it-equipment-pickup": "IT Equipment Pickup",
  "data-destruction": "Data Destruction",
  other: "Other",
};

export async function POST(request: NextRequest) {
  try {
    const data: PickupRequestData = await request.json();

    const {
      firstName,
      lastName,
      companyName,
      phoneNumber,
      email,
      message,
      services,
    } = data;

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

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const selectedServices = services
      .map((service) => serviceLabels[service] || service)
      .join(", ");

    const emailSubject = `CRUSA WEBSITE INQUIRY: ${companyName}`;

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

ADDITIONAL INFORMATION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${message || "No additional information provided."}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
This inquiry was submitted through the CRUSA website contact form.
Please respond promptly to provide excellent customer service.
    `.trim();

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.EMAIL_ADDR,
      subject: emailSubject,
      text: emailBody,
      html: emailBody.replace(/\n/g, "<br>").replace(/━/g, "─"),
    };

    await transporter.sendMail(mailOptions);

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
