// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";
import contentGuard from "./integrations/content-guard.mjs";

export default defineConfig({
  site: "https://bruckercare.com.br",
  trailingSlash: "never",
  build: {
    format: "file",
    // Todo o CSS vai dentro do HTML: uma requisição a menos antes da primeira pintura.
    inlineStylesheets: "always",
  },
  // Mantém os espaços entre elementos de texto (ex.: "é <strong>preparar</strong>").
  compressHTML: true,
  fonts: [
    {
      provider: fontProviders.local(),
      name: "Inter",
      cssVariable: "--font-inter",
      // Fonte de reserva calibrada por peso em src/styles/global.css ("Inter Fallback"),
      // para o texto não pular quando a Inter carrega.
      fallbacks: ["Inter Fallback", "sans-serif"],
      optimizedFallbacks: false,
      options: {
        variants: [
          {
            // Inter variável (eixo wght), só o subconjunto latino: 48 KB.
            src: ["@fontsource-variable/inter/files/inter-latin-wght-normal.woff2"],
            weight: "100 900",
            style: "normal",
            display: "swap",
          },
        ],
      },
    },
  ],
  integrations: [sitemap(), contentGuard()],
});
