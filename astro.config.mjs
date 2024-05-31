import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://globalhire.com",
  integrations: [
    tailwind(),
    react(),
    sitemap({
      changefreq: "monthly",
      priority: 0.7,
      lastmod: new Date("2024-05-26"),
      i18n: {
        defaultLocale: "es",
        locales: {
          es: 'es-MX'
        }
      }
    }),
  ],
});
