import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "scroll-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-50% - 2rem))" }
        }
      },
      animation: {
        "scroll-left": "scroll-left 40s linear infinite"
      },
    
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        bebas: ['var(--font-bebas)', 'Impact', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
