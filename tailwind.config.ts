import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B0D0F",
        "ink-soft": "#14171A",
        paper: "#F4F0E6",
        "paper-dim": "#EAE4D4",
        brass: "#B8945A",
        "brass-bright": "#D4AF6A",
        oxblood: "#7A2A2E",
        stone: "#8A8578",
        "stone-dark": "#5C584D",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-instrument)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        widest2: "0.25em",
      },
      maxWidth: {
        content: "1440px",
      },
    },
  },
  plugins: [],
};
export default config;
