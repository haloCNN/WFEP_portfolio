"use client";

import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-border bg-accent-soft p-10 text-center">
        <p className="font-display text-xl font-semibold text-ink">Message received</p>
        <p className="mt-3 text-ink-muted">
          Thanks for reaching out. This demo form does not send email—wire it to your
          provider (e.g. Resend, Formspree) in production.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-surface-elevated p-8 md:p-10"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block sm:col-span-1">
          <span className="text-sm font-medium text-ink">Name</span>
          <input
            required
            name="name"
            type="text"
            autoComplete="name"
            className="mt-2 w-full rounded-lg border border-border bg-surface px-4 py-3 text-ink outline-none transition-shadow focus:ring-2 focus:ring-accent/30"
          />
        </label>
        <label className="block sm:col-span-1">
          <span className="text-sm font-medium text-ink">Email</span>
          <input
            required
            name="email"
            type="email"
            autoComplete="email"
            className="mt-2 w-full rounded-lg border border-border bg-surface px-4 py-3 text-ink outline-none transition-shadow focus:ring-2 focus:ring-accent/30"
          />
        </label>
      </div>
      <label className="mt-6 block">
        <span className="text-sm font-medium text-ink">Project type</span>
        <select
          name="type"
          className="mt-2 w-full rounded-lg border border-border bg-surface px-4 py-3 text-ink outline-none focus:ring-2 focus:ring-accent/30"
          defaultValue=""
        >
          <option value="" disabled>
            Select…
          </option>
          <option value="discovery">Discovery sprint</option>
          <option value="embedded">Embedded partnership</option>
          <option value="system">Design system</option>
          <option value="other">Other</option>
        </select>
      </label>
      <label className="mt-6 block">
        <span className="text-sm font-medium text-ink">Message</span>
        <textarea
          required
          name="message"
          rows={5}
          className="mt-2 w-full resize-y rounded-lg border border-border bg-surface px-4 py-3 text-ink outline-none focus:ring-2 focus:ring-accent/30"
          placeholder="Tell me about your users, timeline, and goals…"
        />
      </label>
      <p className="mt-4 text-xs text-ink-faint">
        By submitting, you agree to our{" "}
        <a href="/privacy" className="text-accent hover:underline">
          privacy policy
        </a>
        .
      </p>
      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-ink py-3.5 text-sm font-medium text-surface transition-colors hover:bg-ink/90 sm:w-auto sm:px-8"
      >
        Send message
      </button>
    </form>
  );
}
