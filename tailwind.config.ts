import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#14B8A6",
          50: "#CCFBF1",
          100: "#99F6E4",
          200: "#5EEAD4",
          300: "#2DD4BF",
          400: "#14B8A6",
          500: "#0D9488",
          600: "#0F766E",
          700: "#115E59",
          800: "#134E4A",
          900: "#042F2E",
        },
        emergency: {
          DEFAULT: "#EF4444",
          500: "#EF4444",
          600: "#DC2626",
        },
        surface: {
          DEFAULT: "#0F172A",
          800: "#1E293B",
          700: "#334155",
          600: "#475569",
        },
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px rgba(20, 184, 166, 0.2)" },
          "100%": { boxShadow: "0 0 20px rgba(20, 184, 166, 0.4)" },
        },
      },
      backgroundImage: {
        "hero-pattern":
          "radial-gradient(ellipse at top, rgba(20,184,166,0.15), transparent 50%)",
        "card-gradient":
          "linear-gradient(135deg, rgba(30,41,59,0.8), rgba(15,23,42,0.95))",
      },
    },
  },
  plugins: [],
};
export default config;