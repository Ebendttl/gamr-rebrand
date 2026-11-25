/** Form options shared by the client forms and the server; keep this file free of server-only imports. */
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

export type EnquiryResult = { ok: true } | { ok: false; error: string; fieldErrors?: Record<string, string> };
