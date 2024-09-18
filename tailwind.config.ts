import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'left-side': '-5px 0px 10px rgba(0, 0, 0, 0.1)', // Custom left-side shadow
      },
      fontSize: {
        'dynamic': 'clamp(.9rem, .9vw, 1rem)', // Add custom font size using clamp
      },
      animation: {
        fadeIn: 'fadeIn 0.1s ease-in-out',
      },
    },
  },
  plugins: []
};
export default config;
