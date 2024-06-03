/** @type {import('prettier').Config} */
const config = {
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-astro",
    "prettier-plugin-tailwindcss",
  ],
  // Prettier options
  semi: false,
  trailingComma: "es5",
  singleQuote: false,
  tabWidth: 2,
  useTabs: false,
  printWidth: 100,
  // Sort imports
  importOrder: ["^astro/(.*)$", "^@astro/(.*)$", "^solid/(.*)$", "^@/(.*)$", "^@/(.css)$", "^[./]"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  // Tailwind
  tailwindAttributes: ["className"],
  tailwindFunctions: ["clsx", "cn", "twMerge"],
  tailwindConfig: "./tailwind.config.ts",
}
export default config
