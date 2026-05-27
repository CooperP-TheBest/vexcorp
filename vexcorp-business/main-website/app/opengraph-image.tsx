import { ImageResponse } from "next/og";

/* ------------------------------------------------------------------ */
/*  Route-segment config                                               */
/* ------------------------------------------------------------------ */

export const runtime     = "edge";
export const size        = { width: 1200, height: 1200 };
export const contentType = "image/png";

/* ------------------------------------------------------------------ */
/*  Asset reference                                                    */
/* ------------------------------------------------------------------ */

// Absolute URL — edge runtime fetches this from Vercel's CDN at
// render time.  Local dev also works because the live site is up.
const JET_SRC =
  "https://vexcorp.co/images/Hero/vexcorp-jet.png";

/* ------------------------------------------------------------------ */
/*  OG image                                                           */
/* ------------------------------------------------------------------ */

/**
 * Site-wide Open Graph / social-preview image.
 *
 * Composition (bottom → top):
 *   1. Solid ink-black canvas   — #08080a, 1200 × 1200
 *   2. Crimson bloom            — faint radial glow behind the jet
 *   3. Jet PNG                  — centered, 1000 × 1000
 *   4. Vignette overlay         — radial gradient that blends the
 *                                  gray PNG edges to black so the
 *                                  aircraft dissolves cleanly into
 *                                  the dark background
 */
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width:           1200,
          height:          1200,
          backgroundColor: "#08080a",
          display:         "flex",
          alignItems:      "center",
          justifyContent:  "center",
          position:        "relative",
          overflow:        "hidden",
        }}
      >
        {/* ── Layer 1: Crimson bloom ──────────────────────────── */}
        <div
          style={{
            position: "absolute",
            top:      0,
            left:     0,
            right:    0,
            bottom:   0,
            background:
              "radial-gradient(ellipse 72% 72% at 50% 50%," +
              "rgba(158,27,47,0.24) 0%," +
              "rgba(158,27,47,0.06) 45%," +
              "transparent 68%)",
            display: "flex",
          }}
        />

        {/* ── Layer 2: Jet ────────────────────────────────────── */}
        {/* 1000 × 1000 gives 100 px black breathing room on every
            side within the 1200 × 1200 canvas. objectFit:contain
            letterboxes the landscape jet within the square box —
            the black canvas fills the empty strips. */}
        <img
          src={JET_SRC}
          width={1000}
          height={1000}
          style={{ objectFit: "contain" }}
        />

        {/* ── Layer 3: Vignette ───────────────────────────────── */}
        {/* Mirrors the CSS mask used in MascotPlaceholder.
            Keeps the jet body fully visible (transparent core),
            then graduates to solid #08080a at the canvas edges,
            eliminating the gray PNG background. */}
        <div
          style={{
            position: "absolute",
            top:      0,
            left:     0,
            right:    0,
            bottom:   0,
            background:
              "radial-gradient(ellipse at 50% 50%," +
              "transparent 48%," +
              "rgba(8,8,10,0.50) 65%," +
              "rgba(8,8,10,0.88) 80%," +
              "#08080a 92%)",
            display: "flex",
          }}
        />
      </div>
    ),
    { width: 1200, height: 1200 },
  );
}
