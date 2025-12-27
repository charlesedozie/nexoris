export const runtime = "nodejs";

import { NextResponse } from "next/server";
import Mailjet from "node-mailjet";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const note = formData.get("note") as string;
    const resume = formData.get("resume") as File | null;

    if (!fullName || !email || !note) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const mailjet = new Mailjet({
      apiKey: process.env.MAILJET_API_KEY!,
      apiSecret: process.env.MAILJET_SECRET_KEY!,
    });

    let attachments = [];

    if (resume) {
      const buffer = Buffer.from(await resume.arrayBuffer());

      attachments.push({
        ContentType: resume.type,
        Filename: resume.name,
        Base64Content: buffer.toString("base64"),
      });
    }

    await mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: process.env.MAIL_FROM!,
            Name: "Nexoris Contact Form",
          },
          To: [
            {
              Email: process.env.MAIL_TO!,
              Name: "Admin",
            },
          ],
          ReplyTo: {
            Email: email,
            Name: fullName,
          },
          Subject: `New Contact Form – ${fullName}`,
          HTMLPart: `
            <p><b>Name:</b> ${fullName}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Message:</b><br/>${note}</p>
          `,
          Attachments: attachments,
        },
      ],
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
