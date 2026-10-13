import { useState, type FormEvent } from "react";
import { z } from "zod";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100, "Name is too long"),
  email: z.string().trim().email("Please enter a valid email").max(255),
  organization: z.string().trim().max(150, "Too long").optional(),
  reason: z.enum(["volunteer", "partnership", "support", "general"], { errorMap: () => ({ message: "Please choose a reason" }) }),
  message: z.string().trim().min(10, "Please write at least 10 characters").max(2000, "Message is too long"),
});

type Errors = Partial<Record<keyof z.infer<typeof contactSchema>, string>>;

const field = "w-full rounded-sm border border-input bg-card px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/70 focus:border-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/40";

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const parsed = contactSchema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      organization: (fd.get("organization") as string) || undefined,
      reason: fd.get("reason") || undefined,
      message: fd.get("message"),
    });
    if (!parsed.success) {
      const errs: Errors = {};
      for (const i of parsed.error.issues) errs[i.path[0] as keyof Errors] ??= i.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("sending");
    const { error } = await supabase.from("contact_messages").insert({
      ...parsed.data,
      organization: parsed.data.organization ?? null,
    });
    if (error) {
      setStatus("error");
      return;
    }
    form.reset();
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div role="status" className="flex flex-col items-start gap-4 rounded-sm border border-border bg-card p-8 shadow-soft">
        <CheckCircle2 className="h-8 w-8 text-primary" aria-hidden="true" />
        <h3 className="text-2xl text-primary">Thank you — your message has been received.</h3>
        <p className="text-muted-foreground">The Rabta team will read it and get back to you by email.</p>
        <button type="button" onClick={() => setStatus("idle")} className="text-sm font-semibold text-primary underline underline-offset-4">
          Send another message
        </button>
      </div>
    );
  }

  const err = (k: keyof Errors) =>
    errors[k] ? <p id={`${k}-err`} className="mt-1.5 text-sm text-destructive">{errors[k]}</p> : null;

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5 rounded-sm border border-border bg-card p-6 shadow-soft sm:grid-cols-2 sm:p-8">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-semibold">Name</label>
        <input id="name" name="name" autoComplete="name" className={field} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-err" : undefined} />
        {err("name")}
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-semibold">Email</label>
        <input id="email" name="email" type="email" autoComplete="email" className={field} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-err" : undefined} />
        {err("email")}
      </div>
      <div>
        <label htmlFor="organization" className="mb-1.5 block text-sm font-semibold">
          Organization <span className="font-normal text-muted-foreground">(optional)</span>
        </label>
        <input id="organization" name="organization" autoComplete="organization" className={field} />
        {err("organization")}
      </div>
      <div>
        <label htmlFor="reason" className="mb-1.5 block text-sm font-semibold">Reason for contacting</label>
        <select id="reason" name="reason" defaultValue="" className={field} aria-invalid={!!errors.reason} aria-describedby={errors.reason ? "reason-err" : undefined}>
          <option value="" disabled>Select a reason</option>
          <option value="volunteer">Volunteering interest</option>
          <option value="partnership">Partnership enquiry</option>
          <option value="support">Supporting Rabta</option>
          <option value="general">General question</option>
        </select>
        {err("reason")}
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold">Message</label>
        <textarea id="message" name="message" rows={5} className={field} aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-err" : undefined} />
        {err("message")}
      </div>
      {status === "error" && (
        <div role="alert" className="flex items-start gap-2 rounded-sm border border-destructive/40 bg-destructive/5 p-4 text-sm text-destructive sm:col-span-2">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          Your message could not be sent. Please try again, or reach us on Instagram.
        </div>
      )}
      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:bg-forest-deep disabled:opacity-70"
        >
          {status === "sending" && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
      </div>
    </form>
  );
}
