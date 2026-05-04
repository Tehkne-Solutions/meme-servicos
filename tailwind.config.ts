import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF2D55",
        secondary: "#5B5BFF",
        dark: "#1E1E1E",
        gray: "#6B6B6B",
        "gray-light": "#F2F2F2",
        white: "#FFFFFF",
        green: "#7ED321",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      fontSize: {
        hero: ["46px", { lineHeight: "54px", letterSpacing: "-0.5px" }],
        h2: ["32px", { lineHeight: "38px" }],
        h3: ["20px", { lineHeight: "26px" }],
        body: ["16px", { lineHeight: "24px" }],
        small: ["14px", { lineHeight: "20px" }],
      },
      spacing: {
        section: "96px",
        "section-sm": "48px",
      },
      borderRadius: {
        card: "8px",
      },
      boxShadow: {
        card: "0px 4px 20px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};

export default config;
