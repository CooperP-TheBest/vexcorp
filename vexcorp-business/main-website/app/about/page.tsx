import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import MascotPlaceholder from "@/components/MascotPlaceholder";

export const metadata: Metadata = {
  title: "About",
  description:
    "VexCorp is a modern digital company focused on building clean, high-performance websites — approached with aerospace precision.",
};

const PARAGRAPHS = [
  "VexCorp is a modern digital company focused on building clean, high-performance websites for businesses looking to establish a stronger online presence.",
  "Inspired by aerospace precision and modern interface systems, VexCorp approaches digital design with a focus on clarity, structure, and long-term expansion.",
  "We build with our clients to create digital experiences that evolve alongside the businesses behind them.",
  "Additional systems, tools, and platform capabilities are actively being developed as VexCorp continues to expand.",
];

const PRINCIPLES = [
  { label: "Precision", note: "Considered, exact, and engineered." },
  { label: "Clarity", note: "Structure that communicates instantly." },
  { label: "Scalability", note: "Built to grow with the business." },
];

export default function AboutPage() {
  return (
    <>
      {/* ============================= HEADER ============================= */}
      <section className="border-b border-ink-line/60">
        <div className="mx-auto max-w-shell px-6 py-24 lg:px-8 lg:py-32">
          <Reveal className="max-w-3xl">
            <SectionLabel>About</SectionLabel>
            <h1 className="mt-8 font-display text-4xl font-semibold leading-[1.16] tracking-tight text-mist text-balance sm:text-5xl">
              A digital company engineered around precision.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* ============================ NARRATIVE =========================== */}
      <section className="border-b border-ink-line/60">
        <div className="mx-auto grid max-w-shell gap-16 px-6 py-24 lg:grid-cols-[1fr_0.7fr] lg:gap-24 lg:px-8 lg:py-28">
          {/* Paragraphs */}
          <div className="space-y-12">
            {PARAGRAPHS.map((text, i) => (
              <Reveal key={i} delay={i * 80}>
                <p className="text-lg leading-relaxed text-mist-soft text-balance">
                  {text}
                </p>
              </Reveal>
            ))}
          </div>

          {/* VexCorp jet — visual */}
          <Reveal delay={120}>
            <div className="lg:sticky lg:top-28">
              <MascotPlaceholder variant="about" label="VexCorp jet" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================== PRINCIPLES =========================== */}
      <section className="border-b border-ink-line/60">
        <div className="mx-auto max-w-shell px-6 py-24 lg:px-8 lg:py-28">
          <Reveal>
            <SectionLabel>Principles</SectionLabel>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {PRINCIPLES.map((p, i) => (
              <Reveal
                key={p.label}
                delay={i * 90}
                className="border border-crimson/25 bg-ink-graphite/60 p-10 shadow-[0_0_0_1px_rgba(158,27,47,0.20)]"
              >
                <h3 className="font-display text-2xl font-semibold text-mist">
                  {p.label}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-mist-muted">
                  {p.note}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================== CTA =============================== */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.03),transparent_62%)]" />
        <div className="relative mx-auto max-w-shell px-6 py-24 text-center lg:px-8 lg:py-28">
          <Reveal className="mx-auto max-w-2xl">
            <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-mist text-balance sm:text-4xl">
              Build with VexCorp.
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-mist-soft">
              We work alongside the businesses we build for. Reach out to start
              the conversation.
            </p>
            <div className="mt-10 flex justify-center">
              <CTAButton href="/contact">Contact VexCorp</CTAButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
