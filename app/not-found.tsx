import CTAButton from "@/components/CTAButton";
import SectionLabel from "@/components/SectionLabel";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03),transparent_62%)]" />
      <div className="relative mx-auto flex max-w-shell flex-col items-center px-6 py-32 text-center lg:px-8 lg:py-40">
        <SectionLabel>Signal lost</SectionLabel>
        <h1 className="mt-8 font-display text-6xl font-semibold tracking-tight text-mist sm:text-7xl">
          404
        </h1>
        <p className="mt-5 max-w-md text-base leading-relaxed text-mist-soft">
          This page could not be located. The route may have moved or never
          existed.
        </p>
        <div className="mt-10">
          <CTAButton href="/">Return home</CTAButton>
        </div>
      </div>
    </section>
  );
}
