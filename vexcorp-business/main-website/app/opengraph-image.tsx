import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

/* ------------------------------------------------------------------ */
/*  Route-segment config                                               */
/* ------------------------------------------------------------------ */

// Node.js runtime — allows fs.readFileSync so the jet PNG is read
// directly from the serverless bundle (included via outputFileTracingIncludes
// in next.config.mjs) without any outbound network request.
// This is the only approach that works reliably on Vercel: edge-runtime
// fetches to external URLs silently fail during Satori rendering.
export const size        = { width: 1200, height: 1200 };
export const contentType = "image/png";

/* ------------------------------------------------------------------ */
/*  OG image                                                           */
/* ------------------------------------------------------------------ */

/**
 * Site-wide Open Graph / social-preview image.
 *
 * Composition (bottom → top):
 *   1. Solid ink-black canvas   — #08080a, 1200 × 1200 square
 *   2. Crimson bloom            — warm radial glow seated behind the jet
 *   3. Jet PNG                  — centered 1000 × 1000, base64-embedded
 *   4. Vignette overlay         — large transparent core (full jet visible),
 *                                  gentle fade to black only at canvas edges
 *
 * Geometry:
 *   Jet content inside the 1000 × 1000 box ≈ 1000 × 667 (landscape aspect).
 *   From canvas centre the jet body spans ±500 px horizontally / ±333 px
 *   vertically.  Vignette transparent zone covers 55 % of the gradient ray
 *   (≈ 467 px), so the full jet body stays visible while only the outer
 *   gray PNG background bleeds into the dark transition ring.
 */
export default function Image() {
  // Read the jet PNG from disk and embed as a base64 data-URI.
  // Satori renders it directly from memory — no network request.
  let jetSrc: string;
  try {
    const buf = readFileSync(
      join(process.cwd(), "public/images/Hero/vexcorp-jet.png"),
    );
    jetSrc = `data:image/png;base64,${buf.toString("base64")}`;
  } catch {
    // Fallback: 1 × 1 transparent GIF — shows black canvas + bloom only.
    jetSrc =
      "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
  }

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
        {/* 1000 × 1000 box inside 1200 × 1200 canvas → 100 px black
            breathing room on every side. objectFit:contain letterboxes
            the landscape jet; the canvas black fills the strips above
            and below the aircraft. */}
        <img
          src={jetSrc}
          width={1000}
          height={1000}
          style={{ objectFit: "contain" }}
        />

        {/* ── Layer 3: Vignette ────────────────────────────────── */}
        {/* Large transparent core keeps the jet fully visible.
            Darkening only reaches the outer gray PNG background
            and canvas corners. */}
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
