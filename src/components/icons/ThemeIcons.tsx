import type { SVGAttributes } from "lucide-solid"
import { splitProps } from "solid-js"

import { cn } from "@/utils/cn"

export type ThemeIconSvgProps = Omit<SVGAttributes, "children" | "xmlns" | "viewBox">

export const SystemIcon = (props: ThemeIconSvgProps) => {
  const [local, rest] = splitProps(props as ThemeIconSvgProps, ["class"])

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class={cn("mr-2 h-4 w-4", local.class)}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M3 19h18M5 7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z"
      />
    </svg>
  )
}

export const DarkIcon = (props: ThemeIconSvgProps) => {
  const [local, rest] = splitProps(props as ThemeIconSvgProps, ["class"])

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class={cn("mr-2 h-4 w-4", local.class)}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 3h.393a7.5 7.5 0 0 0 7.92 12.446A9 9 0 1 1 12 2.992z"
      />
    </svg>
  )
}

export const LightIcon = (props: ThemeIconSvgProps) => {
  const [local, rest] = splitProps(props as ThemeIconSvgProps, ["class"])

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class={cn("mr-2 h-4 w-4", local.class)}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M8 12a4 4 0 1 0 8 0a4 4 0 1 0-8 0m-5 0h1m8-9v1m8 8h1m-9 8v1M5.6 5.6l.7.7m12.1-.7l-.7.7m0 11.4l.7.7m-12.1-.7l-.7.7"
      />
    </svg>
  )
}
