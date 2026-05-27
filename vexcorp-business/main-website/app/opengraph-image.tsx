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

// Using the GitHub raw URL avoids a self-referential Vercel CDN fetch
// (which can fail on cold render) while remaining publicly accessible
// from edge functions, local dev, and social-media crawlers.
const JET_SRC =
  "https://raw.githubusercontent.com/CooperP-TheBest/vexcorp/main" +
  "/vexcorp-business/main-website/public/images/Hero/vexcorp-jet.png";

/* ------------------------------------------------------------------ */
/*  OG image                                                           */
/* ------------------------------------------------------------------ */

/**
 * Site-wide Open Graph / social-preview image.
 *
 * Composition (bottom → top):
 *   1. Solid ink-black canvas   — #08080a, 1200 × 1200 square
 *   2. Crimson bloom            — warm radial glow seated behind jet
 *   3. Jet PNG                  — centered 1000 × 1000, objectFit contain
 *   4. Vignette overlay         — large transparent core (full jet visible),
 *                                  gentle fade to black only at canvas edges
 *
 * Geometry notes:
 *   Jet content inside the 1000 × 1000 box is ~1000 × 667 (landscape).
 *   From canvas centre the jet body spans ±500 px horizontally / ±333 px
 *   vertically.  The vignette transparent zone covers 55 % of the gradient
 *   ray (≈ 467 px), so the entire jet body stays visible; only the outer
 *   gray PNG background bleeds into the dark transition ring.
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
            top:    0,
            left:   0,
            right:  0,
            bottom: 0,
            background:
              "radial-gradient(circle at center," +
              "rgba(158,27,47,0.30) 0%," +
              "rgba(158,27,47,0.12) 38%," +
              "transparent 62%)",
            display: "flex",
          }}
        />

        {/* ── Layer 2: Jet ─────────────────────────────────────── */}
        <img
          src={JET_SRC}
          width={1000}
          height={1000}
          style={{ objectFit: "contain" }}
        />

        {/* ── Layer 3: Vignette ────────────────────────────────── */}
        {/* Transparent core = 55 % of gradient ray ≈ 467 px.
            The jet body (max 500 px from centre) is nearly fully
            preserved; the darkening only reaches the gray PNG
            background strips outside the aircraft. */}
        <div
          style={{
            position: "absolute",
            top:    0,
            left:   0,
            right:  0,
            bottom: 0,
            background:
              "radial-gradient(circle at center," +
              "transparent 55%," +
              "rgba(8,8,10,0.60) 74%," +
              "rgba(8,8,10,0.92) 87%," +
              "#08080a 96%)",
            display: "flex",
          }}
        />
      </div>
    ),
    { width: 1200, height: 1200 },
  );
}
