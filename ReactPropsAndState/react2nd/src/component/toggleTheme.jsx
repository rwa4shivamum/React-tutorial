import { useState } from "react";

export function ToggleTheme(){
    const [isOn, setIsOn] = useState(false)

    return(
        <div>
            <h1>{isOn ? "ON" : "OFF"}</h1>
            {/* isOn == true ? ture : false */}
            <button onClick={()=> {setIsOn(!isOn)}}>click to change {isOn ? "true" : "false"}</button>
        </div>
    )
}