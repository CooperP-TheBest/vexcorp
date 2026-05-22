import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Professional website development, multi-page business sites, responsive UI design, redesigns, and maintenance — engineered by VexCorp.",
};

const SERVICES = [
  {
    title: "Professional Website Development",
    text: "Modern websites designed to help businesses build trust and present themselves professionally online.",
  },
  {
    title: "Multi-Page Business Websites",
    text: "Structured websites with clean navigation, responsive layouts, and scalable page architecture.",
  },
  {
    title: "Responsive UI Design",
    text: "Interfaces optimized for desktop, tablet, and mobile devices with consistent modern styling.",
  },
  {
    title: "Website Redesigns",
    text: "Refreshing outdated websites with cleaner layouts, improved visual hierarchy, and modern design language.",
  },
  {
    title: "Basic Site Maintenance",
    text: "Content updates, visual adjustments, and ongoing refinements as business needs evolve.",
  },
  {
    title: "Expanding Capabilities",
    text: "VexCorp is actively developing additional platform systems, integrated tools, and scalable digital infrastructure designed for future business growth.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ============================= HEADER ============================= */}
      <section className="border-b border-ink-line/60">
        <div className="mx-auto max-w-shell px-6 py-24 lg:px-8 lg:py-28">
          <Reveal className="max-w-3xl">
            <SectionLabel>Services</SectionLabel>
            <h1 className="mt-8 font-display text-4xl font-semibold leading-[1.14] tracking-tight text-mist text-balance sm:text-5xl">
              Clean. Sharp. Built to fit your brand.
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-mist-soft">
              Each service is built around the same principles — precision,
              clarity, and structure that scales.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============================== GRID ============================== */}
      <section>
        <div className="mx-auto max-w-shell px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {SERVICES.map((service, i) => (
              <Reveal key={service.title} delay={(i % 2) * 90}>
                <ServiceCard
                  title={service.title}
                  text={service.text}
                  forward={i === SERVICES.length - 1}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================== CTA =============================== */}
      <section className="relative overflow-hidden border-t border-ink-line/60">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.03),transparent_62%)]" />
        <div className="relative mx-auto max-w-shell px-6 py-24 text-center lg:px-8 lg:py-28">
          <Reveal className="mx-auto max-w-2xl">
            <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-mist text-balance sm:text-4xl">
              Not sure which service fits?
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-mist-soft">
              Share a few details about your business and VexCorp will map the
              right approach with you.
            </p>
            <div className="mt-10 flex justify-center">
              <CTAButton href="/contact">Start the conversation</CTAButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
