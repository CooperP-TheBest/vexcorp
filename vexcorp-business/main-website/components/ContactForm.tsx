"use client";

import { useRef, useState } from "react";

/* ------------------------------------------------------------------ */
/*  Types                                                               */
/* ------------------------------------------------------------------ */

type Fields = {
  name: string;
  business: string;
  email: string;
  details: string;
};

const EMPTY: Fields = { name: "", business: "", email: "", details: "" };

/* ------------------------------------------------------------------ */
/*  File-validation constants                                          */
/* ------------------------------------------------------------------ */

const ALLOWED_EXT = new Set([".png", ".jpg", ".jpeg", ".webp", ".svg", ".mp4", ".mov"]);
const IMAGE_EXT   = new Set([".png", ".jpg", ".jpeg", ".webp", ".svg"]);
const VIDEO_EXT   = new Set([".mp4", ".mov"]);

const MAX_IMAGES     = 20;
const MAX_VIDEOS     = 3;
const MAX_TOTAL      = 25;
const MAX_IMAGE_BYTES = 10  * 1024 * 1024; // 10 MB
const MAX_VIDEO_BYTES = 100 * 1024 * 1024; // 100 MB

function fileExt(name: string) {
  return "." + (name.split(".").pop() ?? "").toLowerCase();
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

/**
 * ContactForm — the inquiry form for the Contact page.
 */
export default function ContactForm() {
  const [fields,    setFields]    = useState<Fields>(EMPTY);
  const [errors,    setErrors]    = useState<Partial<Fields>>({});
  const [submitted, setSubmitted] = useState(false);

  // Upload state
  const [files,     setFiles]     = useState<File[]>([]);
  const [fileError, setFileError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  /* ── field helpers ─────────────────────────────────────────────── */

  const update =
    (key: keyof Fields) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFields((f) => ({ ...f, [key]: e.target.value }));
      setErrors((err) => ({ ...err, [key]: undefined }));
    };

  /* ── form validation ───────────────────────────────────────────── */

  const validate = (): boolean => {
    const next: Partial<Fields> = {};
    if (!fields.name.trim())
      next.name = "Please enter your name.";
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

  /* ── file validation ───────────────────────────────────────────── */

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const incoming = Array.from(e.target.files);

    // 1 — type check (by extension — more reliable than MIME across OSes)
    const bad = incoming.filter((f) => !ALLOWED_EXT.has(fileExt(f.name)));
    if (bad.length) {
      setFileError(
        `Unsupported file type${bad.length > 1 ? "s" : ""}: ${bad.map((f) => f.name).join(", ")}. ` +
        "Allowed: PNG, JPG, WEBP, SVG, MP4, MOV.",
      );
      e.target.value = "";
      return;
    }

    // 2 — merge with already-accepted files and recount
    const combined = [...files, ...incoming];
    const images   = combined.filter((f) => IMAGE_EXT.has(fileExt(f.name)));
    const videos   = combined.filter((f) => VIDEO_EXT.has(fileExt(f.name)));

    if (combined.length > MAX_TOTAL) {
      setFileError(`Maximum ${MAX_TOTAL} files total.`);
      e.target.value = "";
      return;
    }
    if (images.length > MAX_IMAGES) {
      setFileError(`Maximum ${MAX_IMAGES} image files allowed.`);
      e.target.value = "";
      return;
    }
    if (videos.length > MAX_VIDEOS) {
      setFileError(`Maximum ${MAX_VIDEOS} video files allowed.`);
      e.target.value = "";
      return;
    }

    // 3 — size checks
    const bigImage = images.find((f) => f.size > MAX_IMAGE_BYTES);
    if (bigImage) {
      setFileError(`"${bigImage.name}" exceeds the 10 MB image limit.`);
      e.target.value = "";
      return;
    }
    const bigVideo = videos.find((f) => f.size > MAX_VIDEO_BYTES);
    if (bigVideo) {
      setFileError(`"${bigVideo.name}" exceeds the 100 MB video limit.`);
      e.target.value = "";
      return;
    }

    setFiles(combined);
    setFileError("");
    e.target.value = ""; // reset so the same file can be re-added after removal
  };

  const removeFile = (index: number) =>
    setFiles((prev) => prev.filter((_, i) => i !== index));

  /* ── submit ────────────────────────────────────────────────────── */

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const fileNote =
      files.length > 0
        ? `\n\nReference files (${files.length}) — please send these as email attachments:\n` +
          files.map((f) => `  - ${f.name}`).join("\n")
        : "";

    const subject = encodeURIComponent(`VexCorp Inquiry — ${fields.business}`);
    const body    = encodeURIComponent(
      [
        `Name:     ${fields.name}`,
        `Business: ${fields.business}`,
        `Reply to: ${fields.email}`,
        ``,
        `---`,
        ``,
        fields.details,
        fileNote,
      ].join("\n"),
    );

    window.location.href =
      `mailto:contact@vexcorp.co?subject=${subject}&body=${body}`;

    setSubmitted(true);
  };

  /* ── success state ─────────────────────────────────────────────── */

  if (submitted) {
    return (
      <div className="border border-crimson/30 bg-ink-graphite/50 p-10 text-center shadow-[0_2px_12px_rgba(0,0,0,0.3)]">
        <span className="inline-block font-mono text-[10px] uppercase tracking-[0.22em] text-crimson/80">
          Inquiry prepared
        </span>

        <h3 className="mt-4 font-display text-2xl font-semibold text-mist">
          Thank you, {fields.name.split(" ")[0] || "there"}.
        </h3>

        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-mist-soft">
          Your email client should be opening with all details pre-filled.
          Review the message and hit send — we&apos;ll get back to you shortly.
        </p>

        {files.length > 0 && (
          <p className="mx-auto mt-3 max-w-md text-xs leading-relaxed text-mist-muted">
            Don&apos;t forget to attach your reference files to the email before sending.
          </p>
        )}

        <div className="rule mx-auto my-7 w-16" />

        <p className="text-xs text-mist-muted">
          Client didn&apos;t open?{" "}
          <a
            href="mailto:contact@vexcorp.co"
            className="text-mist-soft underline decoration-crimson/40 underline-offset-4 transition-colors duration-300 hover:text-crimson-glow hover:decoration-crimson/70"
          >
            contact@vexcorp.co
          </a>
        </p>

        <button
          type="button"
          onClick={() => {
            setFields(EMPTY);
            setFiles([]);
            setFileError("");
            setSubmitted(false);
          }}
          className="mt-8 border border-ink-line px-7 py-3 text-sm tracking-wide text-mist-muted transition-all duration-300 hover:border-crimson/50 hover:text-mist"
        >
          Start a new inquiry
        </button>
      </div>
    );
  }

  /* ── form ──────────────────────────────────────────────────────── */

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="border border-crimson/25 bg-ink-graphite/40 p-8 shadow-[0_0_0_1px_rgba(158,27,47,0.20)] sm:p-10"
    >
      {/* Name + Business */}
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

      {/* Email */}
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

      {/* Project Details */}
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

      {/* ── Upload area ──────────────────────────────────────────── */}
      <div className="mt-4">
        {/* Row: description left, button right */}
        <div className="flex flex-col gap-4 border border-ink-line bg-ink-black/60 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Left — label + description */}
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-mist-muted">
              References
            </p>
            <p className="mt-1 text-sm leading-relaxed text-mist-muted">
              Upload images, logo, or short video references
            </p>
          </div>

          {/* Right — attach button */}
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="group flex shrink-0 items-center gap-2 self-start border border-ink-line px-4 py-2.5 text-xs tracking-wide text-mist-muted transition-all duration-300 hover:border-crimson/50 hover:text-mist sm:self-center"
          >
            {/* Paperclip icon */}
            <svg
              className="h-3.5 w-3.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
            </svg>
            <span>Attach files</span>
          </button>

          {/* Hidden file input */}
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept=".png,.jpg,.jpeg,.webp,.svg,.mp4,.mov"
            onChange={handleFileChange}
            className="hidden"
          />
        </div>

        {/* Attached file list */}
        {files.length > 0 && (
          <ul className="mt-2 divide-y divide-ink-line/40">
            {files.map((file, i) => (
              <li
                key={i}
                className="flex items-center justify-between py-1.5"
              >
                <span className="max-w-[85%] truncate text-xs text-mist-soft">
                  {file.name}
                  <span className="ml-2 text-mist-muted">
                    ({(file.size / (1024 * 1024)).toFixed(1)} MB)
                  </span>
                </span>
                <button
                  type="button"
                  onClick={() => removeFile(i)}
                  aria-label={`Remove ${file.name}`}
                  className="ml-3 shrink-0 text-sm text-mist-muted transition-colors duration-200 hover:text-crimson-glow"
                >
                  ×
                </button>
              </li>
            ))}
          </ul>
        )}

        {/* Validation error */}
        {fileError && <ErrorText>{fileError}</ErrorText>}

        {/* Constraints hint */}
        <p className="mt-2 font-mono text-[10px] leading-relaxed tracking-wide text-mist-muted/50">
          PNG · JPG · WEBP · SVG · MP4 · MOV&nbsp;&nbsp;
          Images: max 10 MB · {MAX_IMAGES} files&nbsp;&nbsp;
          Videos: max 100 MB · {MAX_VIDEOS} files
        </p>
      </div>

      {/* Submit */}
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

/* ------------------------------------------------------------------ */
/*  Primitives                                                         */
/* ------------------------------------------------------------------ */

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
