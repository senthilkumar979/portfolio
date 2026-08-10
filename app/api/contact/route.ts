import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { contactTopics } from "@/content/contact";
import { profile } from "@/content/profile";

interface ContactPayload {
  name?: unknown;
  email?: unknown;
  topic?: unknown;
  message?: unknown;
  company?: unknown;
}

const topicLabels = contactTopics.map((topic) => topic.label);

function isNonEmptyString(value: unknown, max: number): value is string {
  return typeof value === "string" && value.trim().length > 0 && value.length <= max;
}

function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isTopic(value: string): boolean {
  return (topicLabels as readonly string[]).includes(value);
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  // Honeypot — bots fill this; humans never see it.
  if (typeof payload.company === "string" && payload.company.trim()) {
    return NextResponse.json({ ok: true });
  }

  if (!isNonEmptyString(payload.name, 120)) {
    return NextResponse.json({ error: "Name is required." }, { status: 400 });
  }
  if (!isNonEmptyString(payload.email, 200) || !isEmail(payload.email.trim())) {
    return NextResponse.json({ error: "A valid email is required." }, { status: 400 });
  }
  if (!isNonEmptyString(payload.topic, 80) || !isTopic(payload.topic)) {
    return NextResponse.json({ error: "Choose a valid topic." }, { status: 400 });
  }
  if (!isNonEmptyString(payload.message, 5000)) {
    return NextResponse.json({ error: "Message is required." }, { status: 400 });
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || "587");
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.CONTACT_TO_EMAIL || profile.email;
  const from = process.env.SMTP_FROM || user || to;

  if (!host || !user || !pass) {
    console.error("Contact form missing SMTP env: SMTP_HOST, SMTP_USER, SMTP_PASS");
    return NextResponse.json(
      { error: "Email is not configured on this server yet." },
      { status: 503 },
    );
  }

  const name = payload.name.trim();
  const email = payload.email.trim();
  const topic = payload.topic.trim();
  const message = payload.message.trim();

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: `"${profile.shortName} portfolio" <${from}>`,
      to,
      replyTo: email,
      subject: `[Portfolio] ${topic}: ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Topic: ${topic}`,
        "",
        message,
      ].join("\n"),
      html: `
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Topic:</strong> ${escapeHtml(topic)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replaceAll("\n", "<br/>")}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form send failed:", error);
    return NextResponse.json(
      { error: "Could not send your message. Try emailing me directly." },
      { status: 502 },
    );
  }
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
