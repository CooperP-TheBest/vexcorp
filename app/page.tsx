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
      <section className="relative overflow-hidden border-b border-ink-line/60">
        <div className="mx-auto grid max-w-shell items-center gap-16 px-6 py-24 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20 lg:px-8 lg:py-32">
          <Reveal>
            <SectionLabel>VexCorp</SectionLabel>

            <h1 className="mt-8 font-display text-4xl font-semibold leading-[1.12] tracking-tight text-mist text-balance sm:text-5xl lg:text-6xl">
              Modern websites for businesses that want to look{" "}
              <span className="text-crimson-glow">serious online.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-relaxed text-mist-soft">
              VexCorp is a precision-focused digital agency building modern
              websites for businesses that want to look serious online.
            </p>
          </Reveal>

          {/* VexCorp jet — hero visual */}
          <Reveal delay={140}>
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <MascotPlaceholder variant="hero" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========================== INTRO QUOTE =========================== */}
      <section className="border-b border-ink-line/60">
        <div className="mx-auto max-w-shell px-6 py-20 lg:px-8 lg:py-24">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span
              className="block font-display text-5xl leading-none text-crimson/40"
              aria-hidden="true"
            >
              &ldquo;
            </span>
            <p className="mt-3 font-display text-2xl font-medium leading-snug text-mist text-balance sm:text-3xl">
              Here at VexCorp we handle the complexity so businesses can focus
              on growth.
            </p>
            <div className="rule mx-auto mt-8 w-24" />
          </Reveal>
        </div>
      </section>

      {/* ========================== CAPABILITIES ========================== */}
      <section className="border-b border-ink-line/60">
        <div className="mx-auto max-w-shell px-6 py-24 lg:px-8 lg:py-28">
          <Reveal>
            <SectionLabel>Capabilities</SectionLabel>
            <h2 className="mt-7 max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight text-mist sm:text-4xl">
              What we build.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-mist-soft">
              Every business has a different personality. VexCorp focuses on
              building websites that feel intentional, memorable, and tailored
              to the brand... Whether clean and professional, or somewhere in
              between.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============================ APPROACH ============================ */}
      <section className="border-b border-ink-line/60">
        <div className="mx-auto max-w-shell px-6 py-24 lg:px-8 lg:py-28">
          <Reveal>
            <SectionLabel>Approach</SectionLabel>
            <h2 className="mt-7 max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight text-mist sm:text-4xl">
              Why businesses trust VexCorp.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {APPROACH.map((item, i) => (
              <Reveal key={item.title} delay={i * 90}>
                <div className="border-t border-ink-line pt-6">
                  <h3 className="font-display text-lg font-semibold text-mist">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist-muted">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================== CTA =============================== */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.03),transparent_62%)]" />
        <div className="relative mx-auto max-w-shell px-6 py-28 text-center lg:px-8 lg:py-32">
          <Reveal className="mx-auto max-w-2xl">
            <SectionLabel>Next step</SectionLabel>
            <h2 className="mt-7 font-display text-3xl font-semibold leading-tight tracking-tight text-mist text-balance sm:text-4xl lg:text-5xl">
              Ready to present your business properly?
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-mist-soft">
              Tell us what you&apos;re building. VexCorp will handle the
              complexity so you can focus on growth.
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
