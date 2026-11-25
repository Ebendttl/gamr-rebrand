"use client";

import { useEffect, useState } from "react";
import { CONTACT_INTENTS } from "@/lib/enquiry";
import { CONTROL, Consent, Field, FormStatus, Honeypot, Submit, invalid } from "./fields";
import { useEnquiry } from "./useEnquiry";

const HALF = "flex-[1_1_240px]";
const FULL = "flex-[1_1_100%]";

/** Contact form, routed by "I want to…". `/contact?intent=pitch` (hire, lab, brief…) preselects the option. */
export function ContactForm() {
  const { state, onSubmit, fieldErrors: e, pending } = useEnquiry();
  const [intent, setIntent] = useState<string>(CONTACT_INTENTS[0].value);

  useEffect(() => {
    const wanted = new URLSearchParams(window.location.search).get("intent");
    if (wanted && CONTACT_INTENTS.some((i) => i.value === wanted)) setIntent(wanted);
  }, []);

  return (
    <form className="flex flex-wrap gap-5" onSubmit={onSubmit}>
      <input type="hidden" name="form" value="contact" />
      <Honeypot />
      <Field id="c1" label="I want to…" basis={FULL} error={e.intent}>
        <select
          className={CONTROL}
          id="c1"
          name="intent"
          value={intent}
          onChange={(ev) => setIntent(ev.target.value)}
          {...invalid("c1", e.intent)}
        >
          {CONTACT_INTENTS.map((i) => (
            <option key={i.value} value={i.value}>
              {i.label}
            </option>
          ))}
        </select>
      </Field>
      <Field id="c2" label="Your name" basis={HALF} error={e.name}>
        <input className={CONTROL} id="c2" name="name" type="text" autoComplete="name" required {...invalid("c2", e.name)} />
      </Field>
      <Field id="c3" label="Email" basis={HALF} error={e.email}>
        <input className={CONTROL} id="c3" name="email" type="email" autoComplete="email" required {...invalid("c3", e.email)} />
      </Field>
      <Field id="c4" label="Phone" basis={HALF} error={e.phone}>
        <input className={CONTROL} id="c4" name="phone" type="tel" autoComplete="tel" {...invalid("c4", e.phone)} />
      </Field>
      <Field id="c5" label="Company (optional)" basis={HALF} error={e.company}>
        <input className={CONTROL} id="c5" name="company" type="text" autoComplete="organization" {...invalid("c5", e.company)} />
      </Field>
      <Field id="c6" label="Message" basis={FULL} error={e.message}>
        <textarea className={`${CONTROL} [resize:vertical]`} id="c6" name="message" rows={5} required {...invalid("c6", e.message)} />
      </Field>
      <Consent id="c7" error={e.consent} />
      {state.status === "success" && (
        <FormStatus tone="success" message="Thanks. Your message is on its way to the right team; we’ll reply by email." />
      )}
      {state.status === "error" && <FormStatus tone="error" message={state.error} />}
      <div className={FULL}>
        <Submit pending={pending}>Send Message</Submit>
      </div>
    </form>
  );
}
