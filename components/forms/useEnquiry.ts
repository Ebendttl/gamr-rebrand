"use client";

import { useState, type FormEvent } from "react";
import type { EnquiryResult } from "@/lib/enquiry";

type State =
  { status: "idle" | "pending" } | { status: "success" } | { status: "error"; error: string; fieldErrors: Record<string, string> };

/** Posts a form to /api/enquiry; keeps typed input on error, resets the form on success. */
export function useEnquiry() {
  const [state, setState] = useState<State>({ status: "idle" });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setState({ status: "pending" });
    let result: EnquiryResult;
    try {
      const res = await fetch("/api/enquiry", { method: "POST", body: new FormData(form) });
      result = (await res.json()) as EnquiryResult;
    } catch {
      result = { ok: false, error: "We couldn’t reach the server. Check your connection and try again." };
    }
    if (result.ok) {
      form.reset();
      setState({ status: "success" });
      requestAnimationFrame(() => form.querySelector<HTMLElement>("[role=status]")?.focus());
      return;
    }
    const fieldErrors = result.fieldErrors ?? {};
    setState({ status: "error", error: result.error, fieldErrors });
    requestAnimationFrame(() => {
      const first = form.querySelector<HTMLElement>("[aria-invalid=true]") ?? form.querySelector<HTMLElement>("[role=alert]");
      first?.focus();
    });
  }

  const fieldErrors = state.status === "error" ? state.fieldErrors : {};
  return { state, onSubmit, fieldErrors, pending: state.status === "pending" };
}
