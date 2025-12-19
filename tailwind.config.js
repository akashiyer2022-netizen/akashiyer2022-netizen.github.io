import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "system-ui",
          "sans-serif",
        ],
      },
      colors: {
        ink: "#0B0C0F",     // near-black
        paper: "#FFFFFF",   // white
        rule: "rgba(0,0,0,.14)",
        accent: "#A31F34",  // MIT-ish deep red accent
      },
      letterSpacing: {
        tightest: "-0.045em",
      },
    },
  },
  plugins: [typography],
};
