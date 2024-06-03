import m from "mithril"

import styles from "./Counter.module.css"

interface CounterAttrs {
  attrs: {
    count: number
  }
}

interface ViewProps {
  children: m.Children
}

const Counter = ({ attrs: { count: initialCount } }: CounterAttrs) => {
  let count = initialCount
  const add = () => {
    count += 1
  }
  const subtract = () => (count -= 1)

  return {
    view: ({ children }: ViewProps) => {
      return (
        <>
          <div className={styles.counter}>
            <button onclick={subtract}>-</button>
            <pre>{count}</pre>
            <button onclick={add}>+</button>
          </div>
          <div className={styles.counter__message}>{children}</div>
        </>
      )
    },
  }
}

export default Counter
