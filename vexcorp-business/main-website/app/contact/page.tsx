import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach out to VexCorp to start building a cleaner, more modern digital presence for your business.",
};

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03),transparent_60%)]" />

      <div className="relative mx-auto max-w-3xl px-6 py-24 lg:px-8 lg:py-32">
        {/* Heading */}
        <Reveal className="text-center">
          <div className="flex justify-center">
            <SectionLabel>Contact</SectionLabel>
          </div>
          <h1 className="mt-8 font-display text-4xl font-semibold leading-[1.14] tracking-tight text-mist text-balance sm:text-5xl">
            Let&apos;s build something better.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-mist-soft">
            VexCorp works with businesses looking for a cleaner, more modern
            digital presence. Reach out below to start the conversation.
          </p>
        </Reveal>

        {/* Form */}
        <Reveal delay={120} className="mt-14">
          <ContactForm />
        </Reveal>

        {/* Direct contact */}
        <Reveal delay={180} className="mt-12">
          <div className="border border-ink-line/60 bg-ink-graphite/30 px-8 py-7 text-center">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-mist-muted">
              Prefer to reach out directly?
            </p>
            <a
              href="mailto:contact@vexcorp.co"
              className="group mt-4 inline-flex items-center gap-2.5 font-display text-lg font-medium text-mist underline decoration-crimson/30 underline-offset-4 transition-all duration-300 hover:text-crimson-glow hover:decoration-crimson/60"
            >
              contact@vexcorp.co
              <span
                className="translate-x-0 opacity-50 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                aria-hidden="true"
              >
                ↗
              </span>
            </a>
            <a
              href="tel:+18065000441"
              className="mt-2 block font-display text-base text-mist-soft transition-colors duration-300 hover:text-mist"
            >
              (806) 500-0441
            </a>
            <p className="mt-4 text-xs text-mist-muted">
              We respond to all inquiries within 24 hours.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
