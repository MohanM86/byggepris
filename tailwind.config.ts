import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0C0C0E",
          deep: "#060608",
          card: "#141418",
          elevated: "#1A1A20",
          surface: "#22222A",
        },
        accent: {
          DEFAULT: "#E8B931",
          light: "#F2D264",
          dark: "#C49A1A",
          muted: "#A8882E",
          glow: "#E8B93140",
        },
        gold: {
          DEFAULT: "#D4A82A",
          light: "#ECC94B",
          muted: "#8B7730",
        },
        steel: {
          DEFAULT: "#5B7B9A",
          light: "#7B9BB8",
          dark: "#3D5A75",
        },
        neutral: {
          50: "#F5F5F7",
          100: "#E8E8EC",
          200: "#D1D1D8",
          300: "#B0B0BA",
          400: "#8A8A96",
          500: "#6B6B78",
          600: "#4D4D58",
          700: "#35353E",
          800: "#24242C",
          900: "#18181E",
        },
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
        body: ['"DM Sans"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        glow: "0 0 40px rgba(232, 185, 49, 0.15)",
        "glow-sm": "0 0 20px rgba(232, 185, 49, 0.1)",
        "glow-lg": "0 0 80px rgba(232, 185, 49, 0.2)",
        card: "0 2px 12px rgba(0, 0, 0, 0.3)",
        "card-hover": "0 8px 32px rgba(0, 0, 0, 0.5)",
      },
      animation: {
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(232, 185, 49, 0.1)" },
          "50%": { boxShadow: "0 0 40px rgba(232, 185, 49, 0.25)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
