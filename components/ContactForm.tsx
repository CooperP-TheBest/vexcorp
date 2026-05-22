"use client";

import { useState } from "react";

type Fields = {
  name: string;
  business: string;
  email: string;
  details: string;
};

const EMPTY: Fields = { name: "", business: "", email: "", details: "" };

/**
 * ContactForm — the inquiry form for the Contact page.
 *
 * V1 note: this form is intentionally not wired to a backend yet. On a
 * valid submit it shows a local confirmation state. When a mail service
 * or API route is added later, replace the body of `handleSubmit`.
 */
export default function ContactForm() {
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Partial<Fields>>({});
  const [submitted, setSubmitted] = useState(false);

  const update =
    (key: keyof Fields) =>
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
      setFields((f) => ({ ...f, [key]: e.target.value }));
      setErrors((err) => ({ ...err, [key]: undefined }));
    };

  const validate = (): boolean => {
    const next: Partial<Fields> = {};
    if (!fields.name.trim()) next.name = "Please enter your name.";
    if (!fields.business.trim())
      next.business = "Please enter your business name.";
    if (!fields.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) {
      next.email = "Please enter a valid email address.";
    }
    if (!fields.details.trim())
      next.details = "Please share a few details about your project.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    // Placeholder for a future API route / mail integration.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="border border-crimson/40 bg-ink-graphite/60 p-10 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-crimson-glow">
          Inquiry received
        </p>
        <h3 className="mt-4 font-display text-2xl font-semibold text-mist">
          Thank you, {fields.name.split(" ")[0] || "there"}.
        </h3>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-mist-muted">
          Your details have been captured. A member of VexCorp will follow up
          shortly. For anything immediate, reach us directly at{" "}
          <a
            href="mailto:contact@vexcorp.co"
            className="text-mist-soft underline decoration-crimson/50 underline-offset-4 transition-colors hover:text-crimson-glow"
          >
            contact@vexcorp.co
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => {
            setFields(EMPTY);
            setSubmitted(false);
          }}
          className="mt-8 border border-ink-line px-6 py-3 text-sm tracking-wide text-mist-soft transition-all duration-300 hover:border-crimson/60 hover:text-mist"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="border border-crimson/25 bg-ink-graphite/40 p-8 shadow-[0_0_0_1px_rgba(158,27,47,0.20)] sm:p-10"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <Field
          label="Name"
          name="name"
          value={fields.name}
          onChange={update("name")}
          error={errors.name}
          placeholder="Your full name"
        />
        <Field
          label="Business Name"
          name="business"
          value={fields.business}
          onChange={update("business")}
          error={errors.business}
          placeholder="Your company"
        />
      </div>

      <div className="mt-6">
        <Field
          label="Email"
          name="email"
          type="email"
          value={fields.email}
          onChange={update("email")}
          error={errors.email}
          placeholder="you@company.com"
        />
      </div>

      <div className="mt-6">
        <label
          htmlFor="details"
          className="font-mono text-xs uppercase tracking-[0.22em] text-mist-muted"
        >
          Project Details
        </label>
        <textarea
          id="details"
          name="details"
          rows={5}
          value={fields.details}
          onChange={update("details")}
          placeholder="Tell us about your business and what you're looking to build."
          className="mt-3 w-full resize-none border border-ink-line bg-ink-black/60 px-4 py-3 text-sm text-mist placeholder:text-mist-muted/60 outline-none transition-all duration-300 focus:border-crimson/60"
        />
        {errors.details && <ErrorText>{errors.details}</ErrorText>}
      </div>

      <button
        type="submit"
        className="group mt-8 inline-flex w-full items-center justify-center gap-2.5 bg-crimson px-7 py-4 text-sm font-medium tracking-wide text-mist transition-all duration-300 ease-out hover:bg-crimson-glow sm:w-auto"
      >
        <span>Send Inquiry</span>
        <span
          className="transition-transform duration-300 ease-out group-hover:translate-x-1"
          aria-hidden="true"
        >
          →
        </span>
      </button>
    </form>
  );
}

/* ---- Field primitives ---------------------------------------------- */

function Field({
  label,
  name,
  value,
  onChange,
  error,
  placeholder,
  type = "text",
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="font-mono text-xs uppercase tracking-[0.22em] text-mist-muted"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="mt-3 w-full border border-ink-line bg-ink-black/60 px-4 py-3 text-sm text-mist placeholder:text-mist-muted/60 outline-none transition-all duration-300 focus:border-crimson/60"
      />
      {error && <ErrorText>{error}</ErrorText>}
    </div>
  );
}

function ErrorText({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-2 font-mono text-xs tracking-wide text-crimson-glow">
      {children}
    </p>
  );
}
