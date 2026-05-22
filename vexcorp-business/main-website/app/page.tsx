import CTAButton from "@/components/CTAButton";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import MascotPlaceholder from "@/components/MascotPlaceholder";

const APPROACH = [
  {
    title: "Premium presentation",
    text: "Every site is built to present a business as serious, modern, and credible from the first impression.",
  },
  {
    title: "Confident messaging",
    text: "Clear, direct communication — structured so visitors immediately understand who a business is and what it offers.",
  },
  {
    title: "Intentional design",
    text: "Nothing decorative for its own sake. Layout, spacing, and motion all serve clarity and focus.",
  },
  {
    title: "Clean structure",
    text: "Scalable page architecture and reusable components, organised so a site can grow without friction.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ============================== HERO ============================== */}
      <section className="relative border-b border-ink-line/60">
        {/* Atmospheric vignette — very faint crimson breath at top */}
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_-5%,rgba(158,27,47,0.06),transparent_70%)]"
          aria-hidden="true"
        />

        <div className="mx-auto grid max-w-shell items-center gap-12 px-6 py-20 lg:min-h-[90vh] lg:grid-cols-[1fr_1.38fr] lg:gap-0 lg:px-8 lg:py-0">
          {/* Left — copy */}
          <Reveal>
            <SectionLabel>Built with intention</SectionLabel>

            <h1 className="mt-8 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-mist text-balance sm:text-5xl lg:text-[3.25rem] xl:text-[3.75rem]">
              Modern websites designed to{" "}
              <span className="text-crimson-glow">elevate your business online.</span>
            </h1>

            <p className="mt-6 max-w-[36ch] text-base leading-relaxed text-mist-soft">
              Every detail crafted with purpose and direction.
            </p>

            <div className="mt-9">
              <CTAButton href="/services" size="lg">
                Explore Capabilities
              </CTAButton>
            </div>
          </Reveal>

          {/* Right — jet.
              w-[132%] makes the aircraft significantly larger than its grid column.
              -translate-x-[11%] pushes it left — closing the gap to the text,
              allowing the glow (which extends past the container's left edge
              in MascotPlaceholder) to breathe into the copy zone and unify
              the two halves into a single cinematic composition. */}
          <Reveal delay={120}>
            <div className="relative mx-auto w-full lg:w-[132%] lg:-translate-x-[11%]">
              <MascotPlaceholder variant="hero" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========================== INTRO QUOTE =========================== */}
      <section className="border-b border-ink-line/60">
        <div className="mx-auto max-w-shell px-6 py-12 lg:px-8 lg:py-14">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span
              className="block font-display text-4xl leading-none text-crimson/35"
              aria-hidden="true"
            >
              &ldquo;
            </span>
            <p className="mt-2 font-display text-xl font-medium leading-snug text-mist text-balance sm:text-2xl lg:text-3xl">
              Here at VexCorp we handle the complexity so businesses can focus
              on growth.
            </p>
            <div className="rule mx-auto mt-6 w-20" />
          </Reveal>
        </div>
      </section>

      {/* ============================ APPROACH ============================ */}
      <section className="border-b border-ink-line/60">
        <div className="mx-auto max-w-shell px-6 py-16 lg:px-8 lg:py-20">
          <Reveal>
            <SectionLabel>Approach</SectionLabel>
            <h2 className="mt-6 max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight text-mist sm:text-4xl">
              Why businesses trust VexCorp.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-mist-soft">
              Precision and clarity at every stage — from structure to final
              polish. Every decision earns its place.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-x-10 md:grid-cols-2">
            {APPROACH.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className="group border-t border-ink-line py-7 transition-colors duration-300 hover:border-crimson/30">
                  <div className="flex items-start gap-5">
                    <span className="mt-0.5 shrink-0 font-mono text-[10px] tracking-widest text-crimson/50">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-base font-semibold text-mist">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-mist-muted">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================== CTA =============================== */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.025),transparent_60%)]" />
        <div className="relative mx-auto max-w-shell px-6 py-20 text-center lg:px-8 lg:py-28">
          <Reveal className="mx-auto max-w-2xl">
            <SectionLabel>Next step</SectionLabel>
            <h2 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-tight text-mist text-balance sm:text-4xl lg:text-5xl">
              Ready to present your business properly?
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-mist-soft">
              Tell us what you&apos;re building. VexCorp will handle the
              complexity so you can focus on growth.
            </p>
            <div className="mt-8 flex justify-center">
              <CTAButton href="/contact">Contact VexCorp</CTAButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
