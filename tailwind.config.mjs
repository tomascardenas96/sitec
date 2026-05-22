export default {
  content: ["./src/**/*.{astro,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#EAF3F1", 100: "#CCE0DC", 200: "#9AC2BA", 300: "#67A498", 400: "#4D8E81",
          500: "#35796F", 600: "#2C6359", 700: "#234D45", 800: "#1A3832", 900: "#11241F",
        },
        accent: {
          50: "#FDF1E4", 100: "#FBDFC0", 200: "#F8C28A", 300: "#F5AC65", 400: "#F29E4C",
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
        oswald: ["Oswald", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
      },
      fontSize: {
        "2xs": ["0.65rem", "0.9rem"],
        "xs":  ["0.75rem", "1rem"],
        "sm":  ["0.85rem", "1.15rem"],
        "base":["1rem",    "1.35rem"],
        "lg":  ["1.1rem",  "1.4rem"],
        "xl":  ["1.25rem", "1.5rem"],
        "2xl": ["1.6rem",  "1.9rem"],
        "3xl": ["1.8rem",  "2.1rem"],
        "4xl": ["2.2rem",  "2.5rem"],
      },
      borderRadius: {
        sm: "0.375rem",
        DEFAULT: "0.625rem",
        md: "0.75rem",
        lg: "1rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        full: "9999px",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(17, 36, 31, .04), 0 6px 16px rgba(17, 36, 31, .06)",
        card: "0 4px 14px rgba(17, 36, 31, .07), 0 1px 3px rgba(17, 36, 31, .04)",
        elevated: "0 14px 40px rgba(17, 36, 31, .12), 0 4px 12px rgba(17, 36, 31, .06)",
        ring: "0 0 0 1px rgba(53, 121, 111, .08), 0 6px 18px rgba(17, 36, 31, .06)",
      },
      backgroundImage: {
        "cta-gradient": "linear-gradient(135deg, #E48322 0%, #A76420 100%)",
        "primary-gradient": "linear-gradient(135deg, #35796F 0%, #234D45 100%)",
        "subtle-radial": "radial-gradient(circle at 20% 0%, rgba(53,121,111,0.06), transparent 55%)",
      },
    },
  },
  plugins: [],
};
