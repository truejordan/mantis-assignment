import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "green-mantis": "#52F2B9",
        "black" : "#0F0F0F"

      },
      opacity: {
        'dark': '0.56',
        '2': '0.02',
        '4': '0.04',
      }
    },
  },
  plugins: [],
};
export default config;
