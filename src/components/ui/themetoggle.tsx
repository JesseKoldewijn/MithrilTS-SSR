import { type ColorMode, useColorMode } from "@kobalte/core"
import type { DropdownMenuTriggerProps } from "@kobalte/core/dropdown-menu"
import { LoaderCircle } from "lucide-solid"
import { type Accessor, Show, createSignal, onMount } from "solid-js"

import { DarkIcon, LightIcon, SystemIcon } from "../icons/ThemeIcons"
import { Button } from "./button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu"

const ModeToggle = () => {
  const { colorMode, setColorMode } = useColorMode()

  return (
    <DropdownMenu placement="bottom-end">
      <DropdownMenuTrigger
        as={(props: DropdownMenuTriggerProps) => (
          <Button size="icon" class="h-10 w-10 px-0" {...props}>
            <CurrentIcon currentTheme={colorMode} />
            <span class="sr-only">Toggle theme</span>
          </Button>
        )}
      />
      <DropdownMenuContent class="min-w-[8rem]">
        <DropdownMenuItem onSelect={() => setColorMode("light")}>
          <LightIcon />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => setColorMode("dark")}>
          <DarkIcon />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => setColorMode("system")}>
          <SystemIcon />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ModeToggle

const CurrentIcon = ({ currentTheme }: { currentTheme: Accessor<ColorMode> }) => {
  const [isSystem, setIsSystem] = createSignal(false)
  const [show, setShow] = createSignal(false)

  onMount(() => {
    const handler = (e?: MutationRecord[]) => {
      const sysTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
      setIsSystem(currentTheme() === sysTheme)
      setShow(true)
    }

    const observer = new MutationObserver((e) => handler(e))

    observer.observe(document.documentElement, {
      attributes: true,
      subtree: true,
    })
  })

  return (
    <div>
      <Show when={show()}>
        <Show when={!isSystem() && currentTheme() === "light"}>
          <div class="flex items-center justify-center">
            <LightIcon class="mx-auto h-6 w-6" />
          </div>
        </Show>
        <Show when={!isSystem() && currentTheme() === "dark"}>
          <div class="flex items-center justify-center">
            <DarkIcon class="mx-auto h-6 w-6" />{" "}
          </div>
        </Show>
        <Show when={isSystem()}>
          <div class="flex items-center justify-center">
            <SystemIcon class="mx-auto h-6 w-6" />
          </div>
        </Show>
      </Show>
      <Show when={!show()}>
        <div class="flex items-center justify-center">
          <LoaderCircle class="h-6 w-6 animate-spin" />
        </div>
      </Show>
    </div>
  )
}
