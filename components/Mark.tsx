/**
 * Mark — the VexCorp glyph.
 *
 * A thin, angular stealth silhouette used alongside the wordmark.
 * Inherits `currentColor` so it can be tinted by its parent.
 */
export default function Mark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M16 3 L29 27 L16 21 L3 27 Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M16 11 L16 21"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}
