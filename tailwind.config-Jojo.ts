import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:    ["var(--font-sans)", "Inter", "Cairo", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
        mono:    ["var(--font-geist-mono)", "monospace"],
        arabic:  ["var(--font-arabic)", "Cairo", "sans-serif"],
      },
      colors: {
        surface:  "var(--color-surface)",
        card:     "var(--color-card)",
        overlay:  "var(--color-overlay)",
        deep:     "var(--color-deep)",
        "lumina-gold": {
          light:   "#F4EAD4",
          DEFAULT: "#D4AF37",
          dark:    "#AA820A",
        },
        "lumina-taupe": {
          100: "#F5F5F4",
          500: "#8B8580",
          900: "#2A2725",
        },
        brand: {
          50:  "#fdfaf5",
          100: "#f7f0e0",
          200: "#edddba",
          300: "#e8c98a",
          400: "#d4a96a",
          500: "#c9a96e",
          600: "#a07840",
          700: "#7a5a2c",
          800: "#5c4020",
          900: "#3d2a12",
        },
        accent: {
          400: "#f0a050",
          500: "#e8873a",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-gradient":
          "linear-gradient(135deg, #12100e 0%, #1c1710 40%, #141208 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.7s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
