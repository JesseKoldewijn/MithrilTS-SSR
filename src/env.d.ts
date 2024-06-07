/// <reference types="astro/client" />
/// <reference types="vite-plugin-pwa/client" />
/// <reference types="vite-plugin-pwa/solid" />
/// <reference types="vite-plugin-pwa/vanillajs" />

declare module "virtual:pwa-register" {
  import type { RegisterSWOptions } from "vite-plugin-pwa/types"

  export type { RegisterSWOptions }

  export function registerSW(options?: RegisterSWOptions): (reloadPage?: boolean) => Promise<void>
}

declare module "virtual:pwa-info" {
  import { pwaInfo } from "vite-plugin-pwa/types"

  export { pwaInfo }
}
