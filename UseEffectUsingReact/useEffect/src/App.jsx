import { useEffect, useState } from "react"

function Child(){
  let [count, setCount] = useState(0);
    
  //mounted and unmounted
  useEffect(()=>{
   console.log("Component mounted")
   //cleanup function
   const timer = setInterval(()=>{
    console.log("Helo this is 1 sec after")
   },1000)
   
   return () => {
    console.log("component Unmounted")
    clearInterval(timer)
   }
  },[])

  //update state manage
  useEffect(()=>{
    console.log("Component Update Count:", count)
  },[count])
  return(
    <>
    <h1>Counter: {count}</h1>
    <button onClick={()=>{setCount(count + 1)}}>Increment count1</button>
    </>
  )
}
function App() {
  const [show, setShow] = useState(false);
  console.log("show the show", show)
  return (
    <>
    <h1>React lifecycle</h1>
    <button onClick={()=>{ setShow(!show)}}>
      {show ? "Unmount Component" :"Mount Component"}
    </button>

    {show && <Child/>}
    {/*true && true */}
    </>
  )
}

export default App
