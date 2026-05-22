import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Professional website development, multi-page business sites, responsive UI design, redesigns, and maintenance — engineered by VexCorp.",
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const PRIMARY_SERVICES = [
  {
    num: "01",
    title: "Custom Business Websites",
    text: "Professionally crafted websites tailored to your business, designed to create trust, clarity, and a strong online presence.",
  },
  {
    num: "02",
    title: "Multi-Page Site Systems",
    text: "Multi-page website systems built for smooth navigation, structured content, and long-term reliability.",
  },
  {
    num: "03",
    title: "Refinement & Expansion",
    text: "Ongoing maintenance, feature additions, and structural refinements that help your website evolve with your business.",
  },
];

const SECONDARY_SERVICES = [
  {
    num: "04",
    title: "Mobile Optimization",
    text: "Clean, responsive experiences designed to perform across all modern devices.",
  },
  {
    num: "05",
    title: "Expansion Ready",
    text: "Structured foundations prepared for future functionality, integrations, and business growth.",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    name: "Discovery",
    desc: "Understanding your business goals, visual direction, and structural requirements.",
  },
  {
    step: "02",
    name: "Structure",
    desc: "Building the foundation, layout, and navigation structure behind the experience.",
  },
  {
    step: "03",
    name: "Design",
    desc: "Crafting every detail with precision, alignment to brand, and clear visual intent.",
  },
  {
    step: "04",
    name: "Launch",
    desc: "Final review, clean deployment, and a polished handoff ready for your audience.",
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function ServicesPage() {
  return (
    <>
      {/* ============================= HEADER ============================= */}
      <section className="border-b border-ink-line/60">
        <div className="mx-auto max-w-shell px-6 py-20 lg:px-8 lg:py-24">
          <Reveal className="max-w-3xl">
            <SectionLabel>Services</SectionLabel>
            <h1 className="mt-8 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-mist text-balance sm:text-5xl">
              Clean. Sharp. Built to fit your brand.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-mist-soft">
              Every service we offer is built on precision, clarity, and
              structured execution.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ========================= WHAT WE DELIVER ========================= */}
      <section className="border-b border-ink-line/60">
        <div className="mx-auto max-w-shell px-6 py-16 lg:px-8 lg:py-20">

          <Reveal>
            <SectionLabel>What We Deliver</SectionLabel>
          </Reveal>

          {/* ── Top row: 3 primary cards ── */}
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-5">
            {PRIMARY_SERVICES.map((s, i) => (
              <Reveal key={s.num} delay={i * 75} className="h-full">
                <article className="group relative flex h-full flex-col border border-crimson/20 bg-ink-graphite/40 p-7 shadow-[0_2px_10px_rgba(0,0,0,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:border-crimson/40 hover:bg-ink-graphite/60 lg:p-8">

                  {/* Crimson top hairline — revealed on hover */}
                  <span
                    className="absolute inset-x-0 top-0 h-px bg-crimson/0 transition-colors duration-300 group-hover:bg-crimson/50"
                    aria-hidden="true"
                  />

                  {/* Title */}
                  <h3 className="font-display text-lg font-semibold leading-snug text-mist">
                    {s.title}
                  </h3>

                  {/* Hairline rule */}
                  <div
                    className="mt-5 h-px w-8 bg-ink-line transition-colors duration-300 group-hover:bg-steel-dim/40"
                    aria-hidden="true"
                  />

                  {/* Body — pushed to fill remaining height */}
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-mist-muted">
                    {s.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          {/* ── Bottom row: 2 secondary cards ── */}
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5">
            {SECONDARY_SERVICES.map((s, i) => (
              <Reveal key={s.num} delay={i * 75} className="h-full">
                <article className="group relative h-full border border-crimson/20 bg-ink-graphite/30 p-7 shadow-[0_2px_10px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:border-crimson/40 hover:bg-ink-graphite/50 lg:p-8">

                  {/* Crimson top hairline */}
                  <span
                    className="absolute inset-x-0 top-0 h-px bg-crimson/0 transition-colors duration-300 group-hover:bg-crimson/50"
                    aria-hidden="true"
                  />

                  <h3 className="font-display text-base font-semibold text-mist">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist-muted">
                    {s.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ PROCESS ============================= */}
      <section className="border-b border-ink-line/60">
        <div className="mx-auto max-w-shell px-6 py-16 lg:px-8 lg:py-20">

          <Reveal>
            <SectionLabel>Process</SectionLabel>
            <h2 className="mt-6 font-display text-2xl font-semibold tracking-tight text-mist sm:text-3xl">
              Structured Process. Clean Results.
            </h2>
          </Reveal>

          {/* Step grid — hairline separators via gap-px technique */}
          <div className="mt-10 grid grid-cols-1 gap-px border border-crimson/20 bg-crimson/20 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((step, i) => (
              <Reveal key={step.step} delay={i * 75}>
                <div className="flex h-full flex-col bg-ink-black px-6 py-7 lg:px-7">

                  {/* Number */}
                  <span className="font-mono text-[10px] tracking-[0.22em] text-crimson/55">
                    {step.step}
                  </span>

                  {/* Step name — bright, title weight */}
                  <h3 className="mt-3 font-display text-sm font-semibold text-mist">
                    {step.name}
                  </h3>

                  {/* Description — smaller and subordinate */}
                  <p className="mt-2 text-xs leading-relaxed text-mist-muted">
                    {step.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Flow label — decorative, below the grid */}
          <Reveal delay={320}>
            <p className="mt-6 font-mono text-[10px] tracking-[0.18em] text-steel-dim/60">
              Discovery&nbsp;&nbsp;—&nbsp;&nbsp;Structure&nbsp;&nbsp;—&nbsp;&nbsp;Design&nbsp;&nbsp;—&nbsp;&nbsp;Launch
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============================== CTA =============================== */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.025),transparent_60%)]"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-shell px-6 py-20 text-center lg:px-8 lg:py-28">
          <Reveal className="mx-auto max-w-2xl">
            <SectionLabel>Next step</SectionLabel>
            <h2 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-tight text-mist text-balance sm:text-4xl lg:text-5xl">
              Ready to elevate your online presence?
            </h2>
            <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-mist-soft">
              Every project is quoted on scope.
            </p>
            <div className="mt-8 flex justify-center">
              <CTAButton href="/contact" size="lg">
                Schedule Your Inquiry
              </CTAButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
