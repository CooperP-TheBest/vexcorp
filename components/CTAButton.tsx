import Link from "next/link";

type CTAButtonProps = {
  href: string;
  children: React.ReactNode;
  /** "primary" is filled crimson; "ghost" is an outlined steel button. */
  variant?: "primary" | "ghost";
  className?: string;
};

/**
 * CTAButton — the site's single call-to-action element.
 *
 * Kept deliberately minimal: sharp corners, restrained crimson, and a
 * smooth hover transition with a subtle glow.
 */
export default function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
}: CTAButtonProps) {
  const base =
    "group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-medium tracking-wide transition-all duration-300 ease-out";

  const styles =
    variant === "primary"
      ? "bg-crimson text-mist hover:bg-crimson-glow"
      : "border border-ink-line bg-transparent text-mist-soft hover:border-crimson/60 hover:text-mist";

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      <span>{children}</span>
      <span
        className="translate-x-0 transition-transform duration-300 ease-out group-hover:translate-x-1"
        aria-hidden="true"
      >
        →
      </span>
    </Link>
  );
}
