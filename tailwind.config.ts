import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF1E5B",    // O rosa/vermelho do Strategic Map e bordas
        secondary: "#6767F1",  // O roxo da seção Martech e Form
        dark: "#1A1A1A",       // O preto dos títulos de leads
        success: "#80D509",    // O verde do botão de proposta
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        'figma-h1': ['50px', { lineHeight: '61px', fontWeight: '700' }],
        'figma-h2': ['30px', { lineHeight: '38px', fontWeight: '700' }],
        'figma-body': ['20px', { lineHeight: '30px' }],
      }
    },
  },
  plugins: [],
};
export default config;
