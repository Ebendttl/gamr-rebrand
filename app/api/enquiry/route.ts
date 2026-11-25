import { Resend } from "resend";
import type { z } from "zod";
import {
  BRIEF_TOPICS,
  CONTACT_INTENTS,
  HONEYPOT,
  MAX_UPLOAD_BYTES,
  briefSchema,
  contactSchema,
  routeFor,
  type BriefInput,
  type ContactInput,
  type EnquiryResult,
} from "@/lib/enquiry";
import { rateLimited } from "@/lib/rate-limit";

const PUBLIC_INBOX = "info@gamr.africa";

function json(body: EnquiryResult, status = 200) {
  return Response.json(body, { status });
}

function fieldErrors(error: z.ZodError): Record<string, string> {
  const out: Record<string, string> = {};
  for (const issue of error.issues) {
    const key = String(issue.path[0] ?? "form");
    out[key] ??= issue.message;
  }
  return out;
}

function inboxFor(input: ContactInput | BriefInput): string {
  return process.env[routeFor(input)] || process.env.ROUTE_DEFAULT || PUBLIC_INBOX;
}

function summary(input: ContactInput | BriefInput): { subject: string; lines: [string, string][] } {
  if (input.form === "contact") {
    const intent = CONTACT_INTENTS.find((i) => i.value === input.intent)?.label ?? input.intent;
    return {
      subject: `Website enquiry: ${intent} from ${input.name}`,
      lines: [
        ["I want to", intent],
        ["Name", input.name],
        ["Email", input.email],
        ["Phone", input.phone],
        ["Company", input.company],
        ["Message", input.message],
      ],
    };
  }
  const topic = BRIEF_TOPICS.find((t) => t.value === input.topic)?.label ?? input.topic;
  return {
    subject: `Website brief: ${topic} from ${input.company}`,
    lines: [
      ["What’s this about", topic],
      ["Company or agency", input.company],
      ["Name", input.name],
      ["Email", input.email],
      ["Phone", input.phone],
      ["Objective", input.objective],
      ["Audience and market", input.audience],
      ["Required capability", input.capability],
      ["Timing", input.timing],
      ["Budget range", input.budget],
      ["How will you measure success", input.success],
    ],
  };
}

const escapeHtml = (s: string) => s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
  if (rateLimited(ip)) {
    return json({ ok: false, error: "Too many messages from your connection. Please try again in a few minutes." }, 429);
  }

  let data: FormData;
  try {
    data = await request.formData();
  } catch {
    return json({ ok: false, error: "We couldn’t read that submission. Please try again." }, 400);
  }

  // Honeypot filled in: pretend it worked so bots learn nothing.
  if (String(data.get(HONEYPOT) ?? "") !== "") return json({ ok: true });

  const fields = Object.fromEntries(Array.from(data.entries()).filter((entry): entry is [string, string] => typeof entry[1] === "string"));
  const schema = fields.form === "brief" ? briefSchema : contactSchema;
  const parsed = schema.safeParse(fields);
  if (!parsed.success) {
    return json({ ok: false, error: "Please check the highlighted fields.", fieldErrors: fieldErrors(parsed.error) }, 422);
  }
  const input = parsed.data;

  const attachments: { filename: string; content: Buffer }[] = [];
  const file = data.get("brief_file");
  if (input.form === "brief" && file instanceof File && file.size > 0) {
    if (file.size > MAX_UPLOAD_BYTES) {
      return json(
        { ok: false, error: "Please check the highlighted fields.", fieldErrors: { brief_file: "Files must be 8 MB or smaller." } },
        422,
      );
    }
    attachments.push({ filename: file.name.slice(0, 120), content: Buffer.from(await file.arrayBuffer()) });
  }

  const { subject, lines } = summary(input);
  const text = lines.map(([k, v]) => `${k}: ${v || "–"}`).join("\n");
  const html = `<table cellpadding="6">${lines
    .map(([k, v]) => `<tr><th align="left" valign="top">${escapeHtml(k)}</th><td>${escapeHtml(v || "–").replace(/\n/g, "<br>")}</td></tr>`)
    .join("")}</table>`;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    if (process.env.NODE_ENV !== "production") {
      console.info(`[enquiry] RESEND_API_KEY not set; would send to ${routeFor(input)}:\n${subject}\n${text}`);
      return json({ ok: true });
    }
    console.error("[enquiry] RESEND_API_KEY is not configured");
    return json({ ok: false, error: `Sorry, we couldn’t send your message. Please email ${PUBLIC_INBOX}.` }, 500);
  }

  const { error } = await new Resend(apiKey).emails.send({
    from: process.env.MAIL_FROM || `Gamr website <website@gamr.africa>`,
    to: inboxFor(input),
    replyTo: input.email,
    subject,
    text,
    html,
    attachments,
  });
  if (error) {
    console.error("[enquiry] Resend error", error);
    return json({ ok: false, error: `Sorry, we couldn’t send your message. Please try again or email ${PUBLIC_INBOX}.` }, 502);
  }
  return json({ ok: true });
}
