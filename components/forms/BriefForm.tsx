"use client";

import { BRIEF_TOPICS, BUDGETS, CAPABILITIES, UPLOAD_ACCEPT } from "@/lib/enquiry";
import { CONTROL, Consent, Field, FormStatus, Honeypot, Submit, invalid } from "./fields";
import { useEnquiry } from "./useEnquiry";

const HALF = "flex-[1_1_280px]";
const FULL = "flex-[1_1_100%]";

/** "Brief us" form on /for-brands, routed by "What's this about?". */
export function BriefForm() {
  const { state, onSubmit, fieldErrors: e, pending } = useEnquiry();

  return (
    <form className="flex flex-[1.6_1_520px] flex-wrap gap-5" onSubmit={onSubmit} encType="multipart/form-data">
      <input type="hidden" name="form" value="brief" />
      <Honeypot />
      <Field id="b0" label="What’s this about?" basis={FULL} error={e.topic}>
        <select className={CONTROL} id="b0" name="topic" defaultValue={BRIEF_TOPICS[0].value} {...invalid("b0", e.topic)}>
          {BRIEF_TOPICS.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
      </Field>
      <Field id="b1" label="Company or agency" basis={HALF} error={e.company}>
        <input className={CONTROL} id="b1" name="company" type="text" autoComplete="organization" required {...invalid("b1", e.company)} />
      </Field>
      <Field id="b2" label="Your name" basis={HALF} error={e.name}>
        <input className={CONTROL} id="b2" name="name" type="text" autoComplete="name" required {...invalid("b2", e.name)} />
      </Field>
      <Field id="b3" label="Email" basis={HALF} error={e.email}>
        <input className={CONTROL} id="b3" name="email" type="email" autoComplete="email" required {...invalid("b3", e.email)} />
      </Field>
      <Field id="b4" label="Phone" basis={HALF} error={e.phone}>
        <input className={CONTROL} id="b4" name="phone" type="tel" autoComplete="tel" {...invalid("b4", e.phone)} />
      </Field>
      <Field id="b5" label="Objective" basis={FULL} error={e.objective}>
        <textarea className={`${CONTROL} [resize:vertical]`} id="b5" name="objective" rows={4} required {...invalid("b5", e.objective)} />
      </Field>
      <Field id="b6" label="Audience and market" basis={HALF} error={e.audience}>
        <input className={CONTROL} id="b6" name="audience" type="text" {...invalid("b6", e.audience)} />
      </Field>
      <Field id="b7" label="Required capability" basis={HALF} error={e.capability}>
        <select className={CONTROL} id="b7" name="capability" defaultValue={CAPABILITIES[0]} {...invalid("b7", e.capability)}>
          {CAPABILITIES.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </Field>
      <Field id="b8" label="Timing" basis={HALF} error={e.timing}>
        <input className={CONTROL} id="b8" name="timing" type="text" {...invalid("b8", e.timing)} />
      </Field>
      <Field id="b9" label="Budget range" basis={HALF} error={e.budget}>
        <select className={CONTROL} id="b9" name="budget" defaultValue={BUDGETS[0]} {...invalid("b9", e.budget)}>
          {BUDGETS.map((b) => (
            <option key={b}>{b}</option>
          ))}
        </select>
      </Field>
      <Field id="b10" label="Existing brief (upload)" basis={FULL} error={e.brief_file}>
        <input className={CONTROL} id="b10" name="brief_file" type="file" accept={UPLOAD_ACCEPT} {...invalid("b10", e.brief_file)} />
      </Field>
      <Field id="b11" label="How will you measure success?" basis={FULL} error={e.success}>
        <input className={CONTROL} id="b11" name="success" type="text" {...invalid("b11", e.success)} />
      </Field>
      <Consent id="b12" error={e.consent} />
      {state.status === "success" && (
        <FormStatus tone="success" message="Thanks. Your brief is on its way to the right team; we’ll reply by email." />
      )}
      {state.status === "error" && <FormStatus tone="error" message={state.error} />}
      <div className={FULL}>
        <Submit pending={pending}>Send Brief</Submit>
      </div>
    </form>
  );
}
