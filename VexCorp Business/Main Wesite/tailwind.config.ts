import type { Config } from "tailwindcss";

/**
 * VexCorp design tokens.
 * Matte black / charcoal / graphite surfaces, controlled dark crimson accent,
 * metallic steel detailing, and soft off-white text.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          black: "#08080a",
          charcoal: "#101012",
          graphite: "#17171a",
          panel: "#1b1b1f",
          line: "#27272d",
        },
        crimson: {
          deep: "#5c0f1a",
          DEFAULT: "#9e1b2f",
          glow: "#c43141",
        },
        steel: {
          DEFAULT: "#80848d",
          dim: "#585b62",
        },
        mist: {
          DEFAULT: "#e8e8e4",
          soft: "#c5c5c1",
          muted: "#8c8c89",
        },
      },
      fontFamily: {
        display: [
          '"Space Grotesk"',
          '"Inter"',
          "system-ui",
          "-apple-system",
          '"Segoe UI"',
          "sans-serif",
        ],
        sans: [
          '"Inter"',
          "system-ui",
          "-apple-system",
          '"Segoe UI"',
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        mono: [
          '"JetBrains Mono"',
          '"IBM Plex Mono"',
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
      },
      letterSpacing: {
        brand: "0.2em",
      },
      maxWidth: {
        shell: "76rem",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
        fadeIn: "fadeIn 0.5s ease forwards",
      },
    },
  },
  plugins: [],
};

export default config;
