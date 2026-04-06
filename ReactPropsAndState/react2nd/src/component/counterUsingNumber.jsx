import { useState } from "react"

export function Counter() {
  const [count, setCount] = useState(0)
  //     intialvariable, updater Function = useState(currentValue)
  return (
    <>
    <button onClick={()=>{setCount(count - 1)}}>Increment</button>
    <h1>Count: {count}</h1>
    </>
  )
}