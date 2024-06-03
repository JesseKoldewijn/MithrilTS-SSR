import { ColorModeProvider, ColorModeScript } from "@kobalte/core"
import { type JSX, splitProps } from "solid-js"

import ModeToggle from "@/components/ui/themetoggle"
import { cn } from "@/utils/cn"

interface ThemeProviderAttrs extends JSX.HTMLAttributes<HTMLDivElement> {
  children?: JSX.Element
}

const ThemeProvider = (props: ThemeProviderAttrs) => {
  const [local, rest] = splitProps(props as ThemeProviderAttrs, ["children", "class"])

  return (
    <>
      <ColorModeScript />
      <ColorModeProvider>
        <div class={cn("relative", local)} {...rest}>
          {local.children}
          <div id="theme-toggle-container" class="fixed bottom-3 right-3 md:bottom-6 md:right-6">
            <ModeToggle />
          </div>
        </div>
      </ColorModeProvider>
    </>
  )
}

export default ThemeProvider
