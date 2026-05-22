export default {
  content: ["./src/**/*.{astro,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "#F4F1EA",
          deep: "#EBE6DA",
          dim: "#DFD8C7",
        },
        ink: {
          DEFAULT: "#0A0E14",
          soft: "#1B2028",
          muted: "#3B4250",
          fade: "#6B6F78",
        },
        amber: {
          DEFAULT: "#FFB100",
          deep: "#E89500",
          glow: "#FFD24A",
          dim: "#7A5400",
        },
        rust: {
          DEFAULT: "#C44A20",
          deep: "#8E3414",
        },
        moss: {
          DEFAULT: "#2E4B40",
          deep: "#1B2E27",
          soft: "#5C7A6E",
        },
        graph: "rgba(10,14,20,0.07)",

        primary: {
          50: "#EAF3F1", 100: "#CCE0DC", 200: "#9AC2BA", 300: "#67A498", 400: "#4D8E81",
          500: "#2E4B40", 600: "#2C6359", 700: "#234D45", 800: "#1A3832", 900: "#11241F",
        },
        accent: {
          50: "#FDF1E4", 100: "#FBDFC0", 200: "#F8C28A", 300: "#F5AC65", 400: "#FFB100",
          500: "#E48322", 600: "#C76E1B", 700: "#A76420", 800: "#7A4A18", 900: "#4E2F10",
        },
        neutral: {
          50: "#F7F7F7", 100: "#EDEDED", 200: "#C7C7C7", 300: "#A6A6A6", 400: "#808080",
          500: "#6F6F6F", 600: "#464646", 700: "#363636", 800: "#262626", 900: "#131C27",
        },
        success: { DEFAULT: "#4FCE5D", 600: "#3FA84A" },
        danger:  { DEFAULT: "#D14343" },
        info:    { DEFAULT: "#2F80ED" },
      },
      fontFamily: {
        display: ["Anton", "Oswald", "sans-serif"],
        serif: ["Fraunces", "Georgia", "serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
        oswald: ["Anton", "Oswald", "sans-serif"],
        openSans: ["Fraunces", "Georgia", "serif"],
      },
      fontSize: {
        "2xs": ["0.65rem", "0.9rem"],
        "xs":  ["0.75rem", "1rem"],
        "sm":  ["0.85rem", "1.3rem"],
        "base":["1rem",    "1.55rem"],
        "lg":  ["1.1rem",  "1.6rem"],
        "xl":  ["1.25rem", "1.7rem"],
        "2xl": ["1.6rem",  "1.9rem"],
        "3xl": ["1.8rem",  "2.1rem"],
        "4xl": ["2.2rem",  "2.5rem"],
        "5xl": ["3rem",    "3rem"],
        "6xl": ["4.2rem",  "4rem"],
        "7xl": ["5.6rem",  "5rem"],
        "8xl": ["7.5rem",  "6.5rem"],
        "9xl": ["10rem",   "8.5rem"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.02em",
        widest: "0.32em",
      },
      borderRadius: { none: "0", sm: "0.15rem", DEFAULT: "0.25rem", lg: "0.5rem", full: "9999px" },
      boxShadow: {
        card: "0 1px 0 rgba(10,14,20,.06), 0 12px 24px -16px rgba(10,14,20,.18)",
        elevated: "0 24px 60px -24px rgba(10,14,20,.35)",
        crisp: "0 0 0 1px rgba(10,14,20,.08)",
        glow: "0 0 0 4px rgba(255,177,0,.18)",
      },
      backgroundImage: {
        "cta-gradient": "linear-gradient(180deg, #FFB100 0%, #E89500 100%)",
        "blueprint": "linear-gradient(rgba(10,14,20,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(10,14,20,0.06) 1px, transparent 1px)",
        "noise": "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .25 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
      },
      backgroundSize: {
        "grid-sm": "24px 24px",
        "grid-md": "48px 48px",
        "grid-lg": "96px 96px",
      },
      animation: {
        "pulse-amber": "pulse-amber 2.4s ease-in-out infinite",
        "blink": "blink 1.6s steps(2) infinite",
        "marquee": "marquee 30s linear infinite",
        "draw-line": "draw-line 1.4s ease-out forwards",
      },
      keyframes: {
        "pulse-amber": {
          "0%,100%": { boxShadow: "0 0 0 0 rgba(255,177,0,.55)" },
          "50%":     { boxShadow: "0 0 0 14px rgba(255,177,0,0)" },
        },
        "blink": {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        "marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "draw-line": {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
      },
    },
  },
  plugins: [],
};
