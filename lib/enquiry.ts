import { z } from "zod";

/** Team inboxes are configured with environment variables, never hard-coded or sent to the browser. */
export type RouteKey = "ROUTE_PUBLISHING" | "ROUTE_BRANDS" | "ROUTE_LAB" | "ROUTE_PRESS" | "ROUTE_CAREERS" | "ROUTE_DEFAULT";

export const CONTACT_INTENTS = [
  { value: "pitch", label: "Pitch a game", route: "ROUTE_PUBLISHING" },
  { value: "brief", label: "Send a brand brief", route: "ROUTE_BRANDS" },
  { value: "lab", label: "Learn with the Lab", route: "ROUTE_LAB" },
  { value: "lab-partner", label: "Partner with the Lab", route: "ROUTE_LAB" },
  { value: "hire", label: "Hire talent", route: "ROUTE_LAB" },
  { value: "press", label: "Press enquiry", route: "ROUTE_PRESS" },
  { value: "careers", label: "Careers", route: "ROUTE_CAREERS" },
  { value: "other", label: "Something else", route: "ROUTE_DEFAULT" },
] as const satisfies readonly { value: string; label: string; route: RouteKey }[];

export const BRIEF_TOPICS = [
  { value: "brand-brief", label: "Brand brief", route: "ROUTE_BRANDS" },
  { value: "sponsorship", label: "Sponsorship", route: "ROUTE_BRANDS" },
  { value: "lab-partnership", label: "Lab partnership", route: "ROUTE_LAB" },
  { value: "other", label: "Something else", route: "ROUTE_DEFAULT" },
] as const satisfies readonly { value: string; label: string; route: RouteKey }[];

export const CAPABILITIES = [
  "Strategy and insight",
  "Branded game or Roblox experience",
  "Esports and tournaments",
  "Creators and community",
  "Live activation",
  "Not sure yet",
] as const;

export const BUDGETS = ["Under ₦5m", "₦5m – ₦20m", "₦20m – ₦50m", "Above ₦50m", "Not sure yet"] as const;

export const MAX_UPLOAD_BYTES = 8 * 1024 * 1024;
export const UPLOAD_ACCEPT = ".pdf,.doc,.docx,.ppt,.pptx,.key,.txt";

/** Name of the hidden honeypot field; real visitors never fill it. */
export const HONEYPOT = "website";

/** Absent form fields arrive as undefined; treat them as empty strings so the friendly messages apply. */
const str = <T extends z.ZodType>(schema: T) => z.preprocess((v) => (typeof v === "string" ? v : ""), schema);
const text = (max: number) => str(z.string().trim().max(max));
const required = (max: number, message: string) => str(z.string().trim().min(1, message).max(max));
const email = str(z.string().trim().max(200).email("Enter a valid email address."));
const phone = str(z.string().trim().max(40).regex(/^[+()\d\s-]*$/, "Enter a valid phone number."));
const consent = z.literal("on", { message: "Please agree to the privacy policy." });

export const contactSchema = z.object({
  form: z.literal("contact"),
  intent: z.enum(CONTACT_INTENTS.map((i) => i.value) as [string, ...string[]]),
  name: required(120, "Enter your name."),
  email,
  phone,
  company: text(160),
  message: required(5000, "Enter a message."),
  consent,
});

export const briefSchema = z.object({
  form: z.literal("brief"),
  topic: z.enum(BRIEF_TOPICS.map((t) => t.value) as [string, ...string[]]),
  company: required(160, "Enter your company or agency."),
  name: required(120, "Enter your name."),
  email,
  phone,
  objective: required(5000, "Tell us the objective."),
  audience: text(500),
  capability: z.enum(CAPABILITIES),
  timing: text(200),
  budget: z.enum(BUDGETS),
  success: text(1000),
  consent,
});

export type ContactInput = z.infer<typeof contactSchema>;
export type BriefInput = z.infer<typeof briefSchema>;

export type EnquiryResult = { ok: true } | { ok: false; error: string; fieldErrors?: Record<string, string> };

export function routeFor(input: ContactInput | BriefInput): RouteKey {
  const options: readonly { value: string; route: RouteKey }[] = input.form === "contact" ? CONTACT_INTENTS : BRIEF_TOPICS;
  const key = input.form === "contact" ? input.intent : input.topic;
  return options.find((o) => o.value === key)?.route ?? "ROUTE_DEFAULT";
}
