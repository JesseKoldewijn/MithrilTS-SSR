import { type JSX, Show, createSignal, splitProps } from "solid-js"

import { TextField, TextFieldRoot } from "@/components/ui/textfield"
import { cn } from "@/utils/cn"

interface CounterAttrs extends JSX.HTMLAttributes<HTMLDivElement> {
  count?: number
}

const Counter = (props: CounterAttrs) => {
  const [local, rest] = splitProps(props as CounterAttrs, ["count", "class", "children"])

  const [count, setCount] = createSignal(local.count || 0)

  const add = () => {
    setCount(count() + 1)
  }

  const subtract = () => setCount(count() - 1)

  return (
    <div class={cn("relative flex items-center justify-center gap-2", local.class)} {...rest}>
      <TextFieldRoot class="inset-0 flex flex-1 items-center justify-center gap-1 rounded-md border-2 !py-0 px-1">
        <button
          class="flex h-10 w-10 select-none items-center justify-center text-center"
          onclick={subtract}
        >
          -
        </button>
        <TextField
          type="text"
          value={count()}
          name="count"
          class="!m-0 !mb-0 !mt-0 h-10 max-w-16 rounded-none border-x-2 border-y-0 px-2 py-2 text-center"
        />
        <button
          class="flex h-10 w-10 select-none items-center justify-center text-center"
          onclick={add}
        >
          +
        </button>
      </TextFieldRoot>
      <Show when={local.children}>
        <div>{local.children}</div>
      </Show>
    </div>
  )
}

export default Counter
