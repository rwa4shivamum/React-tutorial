import { useEffect, useState } from "react"


function App() {
  const [count, setCounter] = useState(0)
  const [count2, setCount2] = useState(3)
  useEffect(()=>{
    console.log("Inside useEffect when counter increase",count)
  },[count, count2])
  return (
    <>
    <h1>Here in first counter {count}</h1>
    <button onClick={()=> setCounter(count + 1)}>Increment</button>
    <br />
    <h2>here is my 2nd count {count2}</h2>
    <button onClick={()=> setCount2(count2 + 2)}>Increment By 2</button>
    </>
  )
}

export default App
