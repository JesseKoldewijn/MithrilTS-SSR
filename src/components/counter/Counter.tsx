import { type JSX, Show, createSignal, onMount, splitProps } from "solid-js"

import { TextField, TextFieldRoot } from "@/components/ui/textfield"
import { cn } from "@/utils/cn"

interface CounterAttrs extends JSX.HTMLAttributes<HTMLDivElement> {
  count?: number
}

const Counter = (props: CounterAttrs) => {
  const [local, rest] = splitProps(props as CounterAttrs, ["count", "class", "children"])

  const [count, setCount] = createSignal(local.count || 0)
  const [isInteractive, setIsInteractive] = createSignal(false)

  onMount(() => {
    setIsInteractive(true)
  })

  const add = () => {
    setCount(count() + 1)
  }

  const subtract = () => setCount(count() - 1)

  const validateInput = (val: number, fallbackValue: number) => {
    let value = val

    if (isNaN(val)) {
      value = fallbackValue
    }
    return value
  }

  const handleValue = (val: number, setter: (val: number) => void) => {
    const value = validateInput(val, count())
    setter(value)
  }

  const changeHandler = (
    e: Event & {
      target: HTMLInputElement
    }
  ) => {
    const inputVal = e.target.value
    const val = parseInt(inputVal)

    const value = validateInput(val, count())

    handleValue(value, (val) => {
      setCount(val)
      e.target.value = val.toString()
    })
  }

  const handleKeyUp = (
    e: Event & {
      target: HTMLInputElement
    }
  ) => {
    const inputVal = e.target.value
    const val = parseInt(inputVal)

    handleValue(val, (val) => {
      setCount(val)
      e.target.value = val.toString()
    })
  }

  const handleKeyDown = (
    e: Event & {
      key: string
      ctrlKey: boolean
      metaKey: boolean
      target: HTMLInputElement
    }
  ) => {
    const isArrowDown = e.key === "ArrowDown"
    const isArrowUp = e.key === "ArrowUp"
    const isArrowX = e.key === "ArrowLeft" || e.key === "ArrowRight"
    const inputIsNaN = isNaN(parseInt(e.key))

    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    const alphabetArray = alphabet.split("")
    const inputIsAlphabetical = !!alphabetArray.find((char) => char === e.key.toLowerCase())
    const isSystemHotkey = e.ctrlKey || e.metaKey

    if (isArrowX) return

    if (isArrowDown) {
      e.preventDefault()
      subtract()
      return
    }

    if (isArrowUp) {
      e.preventDefault()
      add()
      return
    }

    if (inputIsNaN && inputIsAlphabetical && !isSystemHotkey) {
      e.preventDefault()
    }
  }

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
          onChange={changeHandler}
          onKeyUp={handleKeyUp}
          onKeyDown={handleKeyDown}
          class="!m-0 !mb-0 !mt-0 h-10 max-w-16 rounded-none border-x-2 border-y-0 px-2 py-2 text-center"
          disabled={!isInteractive()}
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
