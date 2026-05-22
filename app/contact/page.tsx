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
        <Reveal delay={180} className="mt-10 text-center">
          <div className="rule mx-auto mb-8 w-24" />
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-mist-muted">
            Direct Contact
          </p>
          <a
            href="mailto:contact@vexcorp.co"
            className="mt-3 inline-block font-display text-lg text-mist transition-colors duration-300 hover:text-crimson-glow"
          >
            contact@vexcorp.co
          </a>
        </Reveal>
      </div>
    </section>
  );
}
