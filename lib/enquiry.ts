import { z } from "zod";
import { BRIEF_TOPICS, BUDGETS, CAPABILITIES, CONTACT_INTENTS, type RouteKey } from "./enquiry-options";

export * from "./enquiry-options";

/** Absent form fields arrive as undefined; treat them as empty strings so the friendly messages apply. */
const str = <T extends z.ZodType>(schema: T) => z.preprocess((v) => (typeof v === "string" ? v : ""), schema);
const text = (max: number) => str(z.string().trim().max(max));
const required = (max: number, message: string) => str(z.string().trim().min(1, message).max(max));
const email = str(z.string().trim().max(200).email("Enter a valid email address."));
const phone = str(
  z
    .string()
    .trim()
    .max(40)
    .regex(/^[+()\d\s-]*$/, "Enter a valid phone number."),
);
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

export function routeFor(input: ContactInput | BriefInput): RouteKey {
  const options: readonly { value: string; route: RouteKey }[] = input.form === "contact" ? CONTACT_INTENTS : BRIEF_TOPICS;
  const key = input.form === "contact" ? input.intent : input.topic;
  return options.find((o) => o.value === key)?.route ?? "ROUTE_DEFAULT";
}
