/** @type {import('tailwindcss').Config} */
export default {
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
        beige: "#D4B9A6",
        secondary: "#A48B6D",
        walnut: "#773F1A",
        soft: "#DDD1C5"
      },
      fontFamily: {
        EB: ["EB Garamond"],
        Open: ["Open Sans"],
        Paris: ["Parisienne"],
      },
      animation: {
        "spin-slow": "spin-reverse 10s linear infinite",
      },
      keyframes: {
        'spin-reverse': {
          from: {
            transform: 'rotate(0deg)',
          },
          to: {
            transform: 'rotate(-360deg)',
          },
        },
      },
    },
  },
  plugins: [],
};
