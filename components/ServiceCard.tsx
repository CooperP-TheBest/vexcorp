/**
 * ServiceCard — a modular panel for the Services page.
 *
 * Thin dark border with a faint crimson outline layered just outside it,
 * giving each card quiet structure against the background without
 * popping out. Generous internal spacing and a restrained crimson hairline
 * on hover. Cards marked `forward` carry a slightly stronger crimson
 * border (used for the "Expanding Capabilities" panel).
 */
export default function ServiceCard({
  title,
  text,
  forward = false,
}: {
  title: string;
  text: string;
  forward?: boolean;
}) {
  return (
    <article
      className={`group relative flex flex-col border bg-ink-graphite/50 p-8 shadow-[0_0_0_1px_rgba(158,27,47,0.20)] transition-all duration-300 hover:-translate-y-1 sm:p-10 ${
        forward
          ? "border-crimson/30 hover:border-crimson/60"
          : "border-crimson/25 hover:border-crimson/50"
      }`}
    >
      {/* Top hairline that lights up on hover */}
      <span
        className="absolute inset-x-0 top-0 h-px bg-crimson/0 transition-colors duration-300 group-hover:bg-crimson/70"
        aria-hidden="true"
      />

      <h3 className="font-display text-xl font-semibold text-mist">
        {title}
      </h3>

      <p className="mt-4 text-sm leading-relaxed text-mist-muted">{text}</p>
    </article>
  );
}
