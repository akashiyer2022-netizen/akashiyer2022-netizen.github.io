/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0b0f14",
          900: "#101827",
          800: "#182235",
        },
        paper: "#ffffff",
        muted: "#5b6676",
        line: "rgba(16, 24, 39, 0.12)",
        accent: "#c9a25f", // warm “heritage” accent vibe
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      boxShadow: {
        soft: "0 10px 30px rgba(16,24,39,0.10)",
      },
    },
  },
  plugins: [],
};
