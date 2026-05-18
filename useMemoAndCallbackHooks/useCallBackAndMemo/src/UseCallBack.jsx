import React, { memo, useCallback, useState } from "react"

const Child = memo(({handleClick}) => {
  console.log("child ReRender")
  return (
    <button onClick={handleClick}>
      click
    </button>
  )
})

function UseCallBack() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button Clicked")
  },[count])

  return (
    <>
    <h1>{count}</h1>
    <button onClick={()=> setCount(count + 1)}>Increase</button>

    <Child handleClick={handleClick}/>
    </>
  )
}

export default UseCallBack
