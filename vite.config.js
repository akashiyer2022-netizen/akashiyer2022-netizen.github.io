import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // IMPORTANT: set this to your repo name
  // example: https://akashiyer2022.github.io/akashiyer2022-netizen/
  base: "/akashiyer2022-netizen/",
});
