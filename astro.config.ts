import { defineConfig } from "astro/config";
import tailwind from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://ganesh-macherla.github.io/astro-paper/",
  base: "/astro-paper",

  vite: {
    plugins: [tailwind()],
  },

  integrations: [sitemap()],
});