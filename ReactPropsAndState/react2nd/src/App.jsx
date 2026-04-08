import { useState } from "react"
import { Child } from "./component/ChildComonent"
import { Counter } from "./component/counterUsingNumber"
import { StringUseState } from "./component/useStateByString"
import { ToggleTheme } from "./component/toggleTheme"
import { ArraysUseState } from "./component/arrayUsingState"
import { ObjState } from "./component/objUsingState"


function App() {
  const [toggleCompo, setToggleCompo] = useState(false)
  return (
    <>
    {/* <Child name="Rahul"/> */}
    {/* <Counter/> */}
    {/* <StringUseState/> */}
    {/* <ToggleTheme/> */}
    {/* <ArraysUseState/> */}
    <button onClick={()=>{setToggleCompo(!toggleCompo)}}>Change the compoenent</button>
    {toggleCompo ?<ArraysUseState/> : <ObjState/> }
    </>
  )
}

export default App
