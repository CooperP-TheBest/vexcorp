"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Mark from "./Mark";

const LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

/**
 * Navbar — thin, sticky, slightly transparent.
 *
 * Background opacity firms up once the page is scrolled. Links carry a
 * subtle crimson hover glow; the active route is marked with a hairline.
 */
export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-ink-line/80 bg-ink-black/85 backdrop-blur-md"
          : "border-b border-transparent bg-ink-black/40 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-shell items-center justify-between px-6 lg:px-8">
        {/* Brand */}
        <Link
          href="/"
          className="group flex items-center gap-2.5"
          aria-label="VexCorp — home"
        >
          <Mark className="h-6 w-6 text-crimson transition-colors duration-300 group-hover:text-crimson-glow" />
          <span className="font-display text-base font-semibold tracking-brand text-mist">
            VexCorp
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`relative px-4 py-2 text-sm tracking-wide transition-colors duration-300 ${
                  isActive(link.href)
                    ? "text-mist"
                    : "text-mist-muted hover:text-mist"
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span
                    className="absolute inset-x-3 -bottom-px h-px bg-crimson"
                    aria-hidden="true"
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center text-mist-soft transition-colors hover:text-mist md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <div className="relative h-3.5 w-5">
            <span
              className={`absolute left-0 h-px w-5 bg-current transition-all duration-300 ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 h-px w-5 bg-current transition-all duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 h-px w-5 bg-current transition-all duration-300 ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-ink-line/60 bg-ink-black/95 backdrop-blur-md transition-[max-height,opacity] duration-300 md:hidden ${
          open ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="mx-auto flex max-w-shell flex-col px-6 py-2">
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`flex items-center justify-between border-b border-ink-line/40 py-4 text-sm tracking-wide transition-colors last:border-0 ${
                  isActive(link.href)
                    ? "text-mist"
                    : "text-mist-muted hover:text-mist"
                }`}
              >
                {link.label}
                <span className="font-mono text-xs text-crimson/70">↗</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
