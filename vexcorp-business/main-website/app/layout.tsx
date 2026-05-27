import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://vexcorp.co"),
  title: {
    default: "VexCorp — Precision-Focused Digital Agency",
    template: "%s — VexCorp",
  },
  description:
    "VexCorp is a precision-focused digital agency building modern websites for businesses that want to look serious online.",
  keywords: [
    "VexCorp",
    "digital agency",
    "website development",
    "responsive design",
    "website redesign",
  ],

  /* ── Favicon ──────────────────────────────────────────────────── */
  // app/icon.svg is picked up automatically by Next.js and injected
  // as <link rel="icon" type="image/svg+xml"> — no explicit entry
  // needed here.  The lines below are kept as documentation only.
  // icons: { icon: "/icon.svg" },

  /* ── Open Graph ───────────────────────────────────────────────── */
  // app/opengraph-image.tsx is auto-discovered by Next.js and added
  // as og:image.  The explicit images array below ensures Twitter
  // also picks it up via the og:image fallback, and gives downstream
  // tools a stable path for card debuggers.
  openGraph: {
    title:       "VexCorp — Precision-Focused Digital Agency",
    description: "Modern websites for businesses that want to look serious online. We build with you.",
    type:        "website",
    url:         "https://vexcorp.co",
    siteName:    "VexCorp",
    images: [
      {
        url:    "/opengraph-image",
        width:  1200,
        height: 1200,
        alt:    "VexCorp — Precision-Focused Digital Agency",
      },
    ],
  },

  /* ── Twitter / X card ─────────────────────────────────────────── */
  twitter: {
    card:        "summary_large_image",
    title:       "VexCorp — Precision-Focused Digital Agency",
    description: "Modern websites for businesses that want to look serious online. We build with you.",
    images:      ["/opengraph-image"],
  },
};

export const viewport: Viewport = {
  themeColor: "#08080a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {/* Base atmosphere — soft graphite lift settling into matte black */}
        <div
          className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(120%_80%_at_50%_0%,#16161b_0%,#0c0c0f_45%,#08080a_100%)]"
          aria-hidden="true"
        />
        {/* Vignette — slight cinematic depth at the edges */}
        <div
          className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_46%,rgba(0,0,0,0.55)_100%)]"
          aria-hidden="true"
        />
        {/* Very faint monochrome film grain — cinematic depth, almost unnoticeable */}
        <div
          className="noise-layer pointer-events-none fixed inset-0 -z-10 opacity-[0.035]"
          aria-hidden="true"
        />

        <Navbar />

        <main className="min-h-screen pt-16">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
