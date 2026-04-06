import { useState } from "react"

export function StringUseState() {
  const [name, setName] = useState("shivam")
  //     intialvariable, updater Function = useState(currentValue)
  return (
    <>
    <button onClick={()=>{setName("Rahul")}}>Change name</button>
    <h1>CurrentName: {name}</h1>
    </>
  )
}