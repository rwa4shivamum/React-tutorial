import { useState } from "react"

export function ArraysUseState() {
    //const fruits = ["Apple", "Banana"]
    const [fruits, setFruits] = useState(["Apple", "Banana"])
    
    function addFruits(){
        setFruits([...fruits, "Mango"])
        console.log("refresh UI")
    }
    return(
        <>
        <ul>
        {fruits.map((item, index)=>(
            <li key={index}>{item}{index}</li>
        ))}
        </ul>
        <button onClick={addFruits}>Add Fruits</button>
        </>
    )
}