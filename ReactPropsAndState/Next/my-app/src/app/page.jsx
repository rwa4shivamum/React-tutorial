"use client"
import { useState } from "react";

export default function Home() {
  const [counter, setCounter] = useState(0)
  function counterIncrese(){
    setCounter(counter + 1)
  }
  return (
   <>
   <h1>{counter}</h1>
   <button onClick={counterIncrese}> Increment</button>
   </>
  );
}
