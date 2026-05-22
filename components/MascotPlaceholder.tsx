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
  const maskValue = hero
    ? "radial-gradient(ellipse 72% 74% at 50% 50%, #000 54%, transparent 100%)"
    : "radial-gradient(ellipse 74% 76% at 50% 50%, #000 62%, transparent 100%)";

  return (
    <div className={`relative aspect-[3/2] w-full ${className}`}>
      {/* Cinematic crimson bloom — homepage only, restrained */}
      {hero && (
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[56%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(158,27,47,0.12),transparent_70%)] blur-3xl"
          aria-hidden="true"
        />
      )}

      <Image
        src="/images/Hero/vexcorp-jet.png"
        alt={label}
        fill
        sizes={
          hero
            ? "(max-width: 1024px) 96vw, 62vw"
            : "(max-width: 1024px) 84vw, 52vw"
        }
        priority={hero}
        className="object-contain"
        style={{ WebkitMaskImage: maskValue, maskImage: maskValue }}
      />
    </div>
  );
}
