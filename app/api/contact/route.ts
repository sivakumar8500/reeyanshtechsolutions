import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/schemas";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate request data using Zod contact schema
    const parseResult = contactSchema.safeParse(body);

    if (!parseResult.success) {
      return NextResponse.json(
        { error: "Validation failed", details: parseResult.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = parseResult.data;

    console.log(`[Contact API] Received contact request from ${name} <${email}>:`, {
      subject,
      message,
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
          from: `"${name} via Reeyansh Tech Website" <${user}>`,
          to: toEmail,
          replyTo: email,
          subject: `New Contact Request: ${subject}`,
          text: `You have received a new contact request from Reeyansh Tech Solutions website.\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
              <h2 style="color: #4f46e5; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px; margin-top: 0;">New Contact Request</h2>
              <p>You have received a new customer inquiry from the Reeyansh Tech Solutions website.</p>
              
              <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
                <tr style="background-color: #f8fafc;">
                  <td style="padding: 10px; font-weight: bold; width: 120px; border-bottom: 1px solid #e2e8f0;">Name:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #e2e8f0;">Email:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;"><a href="mailto:${email}">${email}</a></td>
                </tr>
                <tr style="background-color: #f8fafc;">
                  <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #e2e8f0;">Subject:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">${subject}</td>
                </tr>
              </table>

              <div style="background-color: #f1f5f9; padding: 15px; border-radius: 6px; margin-top: 10px;">
                <h4 style="margin-top: 0; color: #334155;">Message Content:</h4>
                <p style="white-space: pre-wrap; margin: 0; color: #475569; line-height: 1.5;">${message}</p>
              </div>

              <p style="font-size: 11px; color: #94a3b8; margin-top: 30px; text-align: center; border-top: 1px solid #e2e8f0; padding-top: 15px;">
                Sent automatically by Reeyansh Tech Solutions Server Portal.
              </p>
            </div>
          `,
        };

        await transporter.sendMail(mailOptions);
        emailSent = true;
        console.log(`[Contact API] Email notification sent successfully to ${toEmail}`);
      } catch (mailErr: any) {
        console.error("[Contact API Mail Error]:", mailErr);
        emailError = mailErr.message || "Failed to send email";
      }
    } else {
      console.warn("[Contact API] SMTP credentials not fully configured in env. Falling back to log-only mode.");
    }

    return NextResponse.json(
      { 
        message: "Contact request submitted successfully", 
        id: Math.random().toString(36).substring(7),
        emailSent,
        ...(emailError && { emailError })
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("[Contact API Error]:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
