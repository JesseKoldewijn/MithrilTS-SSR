import solidJs from "@astrojs/solid-js"
import AstroPWA from "@vite-pwa/astro"

import { defineConfig } from "astro/config"

import manifest from "./src/manifest"

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [
    solidJs(),
    AstroPWA({
      mode: process.env.NODE_ENV !== "development" ? "production" : "development",
      base: "/",
      scope: "/",
      includeAssets: ["favicon.ico"],
      manifest: manifest,
      workbox: {
        navigateFallback: "/",
        globPatterns: ["**/*.{css,js,html,svg,png,ico,txt}"],
      },
      devOptions: {
        enabled: process.env.NODE_ENV !== "development",
        navigateFallbackAllowlist: [/^\/$/],
      },
    }),
  ],
})
