import { NextResponse } from "next/server";
import { applySchema } from "@/lib/schemas";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate request data using Zod apply schema
    const parseResult = applySchema.safeParse(body);

    if (!parseResult.success) {
      return NextResponse.json(
        { error: "Validation failed", details: parseResult.error.flatten() },
        { status: 400 }
      );
    }

    const { jobId, name, email, phone, experience, portfolioUrl, coverLetter, resumeName } = parseResult.data;

    console.log(`[Apply API] Received application for Job #${jobId} from ${name} <${email}>:`, {
      phone,
      experience,
      portfolioUrl,
      coverLetter,
      resumeName,
    });

    // Configure Nodemailer SMTP Transporter from env variables
    const host = process.env.SMTP_HOST || "smtp.gmail.com";
    const port = parseInt(process.env.SMTP_PORT || "587");
    const user = process.env.SMTP_USER || "jogisivakumae.eee@gmail.com";
    const pass = process.env.SMTP_PASS || "";
    const toEmail = process.env.CONTACT_RECEIVER_EMAIL || "jogisivakumae.eee@gmail.com";

    let emailSent = false;
    let emailError = "";

    if (host && user && pass) {
      try {
        const transporter = nodemailer.createTransport({
          host,
          port,
          secure: port === 465, // true for 465, false for 587 or others
          auth: {
            user,
            pass,
          },
        });

        const mailOptions = {
          from: `"${name} via Reeyansh Tech Careers" <${user}>`,
          to: toEmail,
          replyTo: email,
          subject: `New Job Application: ${jobId} from ${name}`,
          text: `You have received a new job application on Reeyansh Tech Solutions website.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nJob ID: ${jobId}\nExperience: ${experience}\nPortfolio: ${portfolioUrl || "N/A"}\nResume: ${resumeName}\n\nCover Letter:\n${coverLetter}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
              <h2 style="color: #0ea5e9; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px; margin-top: 0;">New Careers Application</h2>
              <p>A candidate has submitted an application for an open position.</p>
              
              <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
                <tr style="background-color: #f8fafc;">
                  <td style="padding: 10px; font-weight: bold; width: 150px; border-bottom: 1px solid #e2e8f0;">Job Code / Title:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-family: monospace; font-weight: bold; color: #0284c7;">${jobId}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #e2e8f0;">Applicant Name:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">${name}</td>
                </tr>
                <tr style="background-color: #f8fafc;">
                  <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #e2e8f0;">Email:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;"><a href="mailto:${email}">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #e2e8f0;">Phone Number:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;"><a href="tel:${phone}">${phone}</a></td>
                </tr>
                <tr style="background-color: #f8fafc;">
                  <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #e2e8f0;">Experience Level:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">${experience}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #e2e8f0;">Resume Attachment:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-style: italic;">${resumeName}</td>
                </tr>
                ${portfolioUrl ? `
                <tr style="background-color: #f8fafc;">
                  <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #e2e8f0;">Portfolio Link:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;"><a href="${portfolioUrl}" target="_blank">${portfolioUrl}</a></td>
                </tr>
                ` : ""}
              </table>

              <div style="background-color: #f1f5f9; padding: 15px; border-radius: 6px; margin-top: 10px;">
                <h4 style="margin-top: 0; color: #334155;">Cover Letter / Notes:</h4>
                <p style="white-space: pre-wrap; margin: 0; color: #475569; line-height: 1.5;">${coverLetter}</p>
              </div>

              <p style="font-size: 11px; color: #94a3b8; margin-top: 30px; text-align: center; border-top: 1px solid #e2e8f0; padding-top: 15px;">
                Sent automatically by Reeyansh Tech Solutions Server Portal.
              </p>
            </div>
          `,
        };

        await transporter.sendMail(mailOptions);
        emailSent = true;
        console.log(`[Apply API] Email notification sent successfully to ${toEmail}`);
      } catch (mailErr: any) {
        console.error("[Apply API Mail Error]:", mailErr);
        emailError = mailErr.message || "Failed to send email";
      }
    } else {
      console.warn("[Apply API] SMTP credentials not fully configured in env. Falling back to log-only mode.");
    }

    return NextResponse.json(
      { 
        message: "Application submitted successfully", 
        referenceId: `APP-${Math.random().toString(36).substring(3, 9).toUpperCase()}`,
        emailSent,
        ...(emailError && { emailError })
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("[Apply API Error]:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
