import Link from "next/link";
import Mark from "./Mark";

const LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

/**
 * Footer — minimal closing band: brand, navigation, and direct contact.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-line/70 bg-ink-charcoal">
      <div className="mx-auto max-w-shell px-6 py-16 lg:px-8">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          {/* Brand block */}
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <Mark className="h-5 w-5 text-crimson" />
              <span className="font-display text-sm font-semibold tracking-brand text-mist">
                VexCorp
              </span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-mist-muted">
              For businesses that value clarity, trust, and presentation.
            </p>
            <p className="mt-6 font-display text-lg font-semibold text-mist">
              We build with you.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-mist-muted">
              Navigate
            </p>
            <ul className="mt-5 space-y-3">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-mist-soft transition-colors duration-300 hover:text-crimson-glow"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-mist-muted">
              Direct Contact
            </p>
            <a
              href="mailto:contact@vexcorp.co"
              className="group mt-5 inline-flex items-center gap-2 text-sm text-mist-soft underline decoration-transparent underline-offset-4 transition-all duration-300 hover:text-crimson-glow hover:decoration-crimson/40"
            >
              contact@vexcorp.co
              <span
                className="opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden="true"
              >
                ↗
              </span>
            </a>
            <a
              href="tel:+18065000441"
              className="mt-1.5 block text-sm text-mist-muted transition-colors duration-300 hover:text-mist-soft"
            >
              (806) 500-0441
            </a>
            <p className="mt-4 text-xs leading-relaxed text-mist-muted">
              We respond within 24 hours.
            </p>
          </div>
        </div>

        <div className="rule mt-14" />

        <div className="mt-8 flex flex-col gap-2 text-xs text-mist-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} VexCorp. All rights reserved.</p>
          <p className="font-mono uppercase tracking-[0.18em]">
            Precision digital engineering
          </p>
        </div>
      </div>
    </footer>
  );
}
