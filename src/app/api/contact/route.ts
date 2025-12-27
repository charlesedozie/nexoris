export const runtime = "nodejs";

import { NextResponse } from "next/server";
import Mailjet from "node-mailjet";

/**
 * Helper: standard JSON error response
 */
function errorResponse(
  message: string,
  status = 500,
  details?: unknown
) {
  if (details) {
    console.error("[CONTACT_API_ERROR]", message, details);
  } else {
    console.error("[CONTACT_API_ERROR]", message);
  }

  return NextResponse.json(
    { success: false, error: message },
    { status }
  );
}

export async function POST(req: Request) {
  try {
    /* ----------------------------------------
     * 1. Parse FormData
     * -------------------------------------- */
    let formData: FormData;

    try {
      formData = await req.formData();
    } catch (err) {
      return errorResponse("Invalid form submission", 400, err);
    }

    const fullName = formData.get("fullName");
    const email = formData.get("email");
    const note = formData.get("note");
    const resume = formData.get("resume") as File | null;

    /* ----------------------------------------
     * 2. Validate required fields
     * -------------------------------------- */
    if (!fullName || !email || !note) {
      return errorResponse(
        "Missing required fields (name, email, or message)",
        400
      );
    }

    if (typeof email !== "string" || !email.includes("@")) {
      return errorResponse("Invalid email address", 400);
    }

    /* ----------------------------------------
     * 3. Validate attachment (if present)
     * -------------------------------------- */
    let attachments: any[] = [];

    if (resume) {
      if (!(resume instanceof File)) {
        return errorResponse("Invalid resume upload", 400);
      }

      if (resume.type !== "application/pdf") {
        return errorResponse("Only PDF files are allowed", 400);
      }

      const MAX_FILE_SIZE = 15 * 1024 * 1024; // 15MB (Mailjet limit)

      if (resume.size > MAX_FILE_SIZE) {
        return errorResponse(
          "File too large. Maximum allowed size is 15MB.",
          400
        );
      }

      try {
        const buffer = Buffer.from(await resume.arrayBuffer());

        attachments.push({
          ContentType: resume.type,
          Filename: resume.name,
          Base64Content: buffer.toString("base64"),
        });
      } catch (err) {
        return errorResponse("Failed to process attachment", 500, err);
      }
    }

    /* ----------------------------------------
     * 4. Validate environment variables
     * -------------------------------------- */
    const {
      MAILJET_API_KEY,
      MAILJET_SECRET_KEY,
      MAIL_FROM,
      MAIL_TO,
    } = process.env;

    if (
      !MAILJET_API_KEY ||
      !MAILJET_SECRET_KEY ||
      !MAIL_FROM ||
      !MAIL_TO
    ) {
      return errorResponse(
        "Email service not configured on server",
        500
      );
    }

    /* ----------------------------------------
     * 5. Send email via Mailjet
     * -------------------------------------- */
    const mailjet = new Mailjet({
      apiKey: MAILJET_API_KEY,
      apiSecret: MAILJET_SECRET_KEY,
    });

    try {
      await mailjet.post("send", { version: "v3.1" }).request({
        Messages: [
          {
            From: {
              Email: MAIL_FROM,
              Name: "Nexoris Contact Form",
            },
            To: [
              {
                Email: MAIL_TO,
                Name: "Admin",
              },
            ],
            ReplyTo: {
              Email: String(email),
              Name: String(fullName),
            },
            Subject: `New Contact Form – ${fullName}`,
            HTMLPart: `
              <h3>New Contact Submission</h3>
              <p><b>Name:</b> ${fullName}</p>
              <p><b>Email:</b> ${email}</p>
              <p><b>Message:</b><br/>${note}</p>
              ${
                resume
                  ? `<p><b>Attached file:</b> ${resume.name}</p>`
                  : "<p><b>No attachment provided</b></p>"
              }
            `,
            Attachments: attachments,
          },
        ],
      });
    } catch (err: any) {
      /**
       * Mailjet errors are usually nested
       */
      const mailjetError =
        err?.response?.data || err?.message || err;

      return errorResponse(
        "Email service failed to send message",
        502,
        mailjetError
      );
    }

    /* ----------------------------------------
     * 6. Success
     * -------------------------------------- */
    return NextResponse.json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (err) {
    /* ----------------------------------------
     * 7. Absolute fallback (should never hit)
     * -------------------------------------- */
    return errorResponse(
      "Unexpected server error",
      500,
      err
    );
  }
}
