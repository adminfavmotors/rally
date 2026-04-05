import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "var(--black)",
        white: "var(--white)",
        red: "var(--red)",
        gray: "var(--gray)",
        gray2: "var(--gray2)",
        muted: "var(--muted)",
      },
      fontFamily: {
        sans: ["var(--font-barlow)", "sans-serif"],
        display: ["var(--font-barlow-condensed)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
