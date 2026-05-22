import Image from "next/image";

/**
 * MascotPlaceholder — the VexCorp jet visual.
 *
 * Renders the transparent jet PNG with no frame and no box. A soft
 * radial mask fades the image edges so the aircraft and its boost trail
 * dissolve into the page rather than ending at a rectangle. Sizing,
 * positioning and bleed are owned by the consuming section, so the jet
 * can extend well beyond its container.
 *
 *  - variant="hero":  stronger edge fade + a faint cinematic crimson
 *                     bloom seated behind the jet.
 *  - variant="about": gentler, more restrained fade, no bloom.
 */
export default function MascotPlaceholder({
  className = "",
  label = "VexCorp jet",
  variant = "hero",
}: {
  className?: string;
  label?: string;
  variant?: "hero" | "about";
}) {
  const hero = variant === "hero";

  // Radial mask — keeps the jet core solid, dissolves edges and the
  // boost trail organically into the background.
  // Hero: center offset to 56% (slightly right of midpoint) so the left
  // edge — facing the text column — fades more gradually, letting the
  // glow and trail bleed toward copy for a unified composition.
  const maskValue = hero
    ? "radial-gradient(ellipse 92% 90% at 56% 50%, #000 62%, transparent 100%)"
    : "radial-gradient(ellipse 74% 76% at 50% 50%, #000 62%, transparent 100%)";

  return (
    <div className={`relative aspect-[3/2] w-full ${className}`}>
      {/* Cinematic crimson bloom — homepage only.
          Positioned slightly left of centre and wider than the container so
          the glow bleeds past the left edge into the text column, unifying
          the composition without the aircraft itself overlapping copy. */}
      {hero && (
        <div
          className="pointer-events-none absolute left-[40%] top-1/2 h-[80%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(158,27,47,0.13),transparent_65%)] blur-3xl"
          aria-hidden="true"
        />
      )}

      <Image
        src="/images/Hero/vexcorp-jet.png"
        alt={label}
        fill
        sizes={
          hero
            ? "(max-width: 1024px) 96vw, 78vw"
            : "(max-width: 1024px) 84vw, 52vw"
        }
        priority={hero}
        className="object-contain"
        style={{ WebkitMaskImage: maskValue, maskImage: maskValue }}
      />
    </div>
  );
}
