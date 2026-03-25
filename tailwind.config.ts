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
          primary: "#0C0C0E",
          secondary: "#131316",
          tertiary: "#1A1A1F",
          card: "#1E1E24",
          elevated: "#252530",
        },
        accent: {
          yellow: "#E8B931",
          gold: "#D4A017",
          amber: "#C4922A",
          warm: "#F5D04E",
          glow: "#FFDD44",
        },
        text: {
          primary: "#F2F0ED",
          secondary: "#A8A5A0",
          tertiary: "#6B6862",
          muted: "#4A4845",
        },
        steel: {
          400: "#7B8FA3",
          500: "#5A7089",
          600: "#3D5570",
        },
        surface: {
          border: "#2A2A32",
          hover: "#2E2E38",
        },
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
        body: ['"DM Sans"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      backgroundImage: {
        "gradient-yellow": "linear-gradient(135deg, #E8B931, #D4A017)",
        "glow-yellow": "radial-gradient(circle, rgba(232,185,49,0.15) 0%, transparent 70%)",
      },
      boxShadow: {
        glow: "0 0 30px rgba(232,185,49,0.15)",
        "glow-sm": "0 0 15px rgba(232,185,49,0.1)",
        "glow-lg": "0 0 60px rgba(232,185,49,0.2)",
        card: "0 4px 30px rgba(0,0,0,0.3)",
        elevated: "0 8px 40px rgba(0,0,0,0.4)",
      },
      animation: {
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(232,185,49,0.1)" },
          "50%": { boxShadow: "0 0 40px rgba(232,185,49,0.25)" },
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
