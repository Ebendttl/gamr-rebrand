import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { HONEYPOT } from "@/lib/enquiry-options";

export const CONTROL =
  "box-border min-h-13 w-full rounded-none border border-line-strong bg-field px-3.5 py-3 font-sans text-[16px] text-white aria-[invalid=true]:border-white";

type FieldProps = { id: string; label: string; basis: string; error?: string; children: ReactNode };

/** Label + control + inline error. `basis` is the flex basis class that sets the column width. */
export function Field({ id, label, basis, error, children }: FieldProps) {
  return (
    <div className={cn("flex flex-col gap-2", basis)}>
      <label className="font-mono text-[12px] font-bold tracking-[0.14em] text-soft uppercase" htmlFor={id}>
        {label}
      </label>
      {children}
      {error && <FieldError id={`${id}-error`}>{error}</FieldError>}
    </div>
  );
}

export function FieldError({ id, children }: { id: string; children: ReactNode }) {
  return (
    <span id={id} className="text-[14px] text-white">
      {children}
    </span>
  );
}

/** aria props wiring a control to its error message. */
export function invalid(id: string, error?: string) {
  return error ? { "aria-invalid": true, "aria-describedby": `${id}-error` } : {};
}

export function Consent({ id, error }: { id: string; error?: string }) {
  return (
    <div className="flex flex-[1_1_100%] flex-wrap items-center gap-3">
      <input className="h-5.5 w-5.5 [accent-color:#2563EB]" id={id} name="consent" type="checkbox" required {...invalid(id, error)} />
      <label className="text-[14px] text-soft" htmlFor={id}>
        I agree to the privacy policy.
      </label>
      {error && (
        <div className="flex-[1_1_100%]">
          <FieldError id={`${id}-error`}>{error}</FieldError>
        </div>
      )}
    </div>
  );
}

/** Hidden from people and assistive tech; bots that fill every field reveal themselves. */
export function Honeypot() {
  return (
    <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
      <label>
        Website
        <input type="text" name={HONEYPOT} tabIndex={-1} autoComplete="off" defaultValue="" />
      </label>
    </div>
  );
}

export function Submit({ pending, children }: { pending: boolean; children: ReactNode }) {
  return (
    <button
      type="submit"
      disabled={pending}
      aria-disabled={pending}
      className="min-h-14 cursor-pointer rounded-none border-2 border-blue bg-blue px-9 py-0 font-sans text-[13px] font-bold tracking-[0.14em] text-white uppercase disabled:cursor-wait"
    >
      {pending ? "Sending…" : children}
    </button>
  );
}

/** Polite live region for success and failure messages. */
export function FormStatus({ message, tone }: { message: string; tone: "success" | "error" }) {
  return (
    <div
      role={tone === "error" ? "alert" : "status"}
      tabIndex={-1}
      className={cn(
        "flex-[1_1_100%] border px-4 py-3.5 text-[15px] leading-[1.6]",
        tone === "success" ? "border-blue-text text-white" : "border-white text-white",
      )}
    >
      {message}
    </div>
  );
}
