import mithril from "astro-mithril"

import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
  integrations: [mithril()],
})
