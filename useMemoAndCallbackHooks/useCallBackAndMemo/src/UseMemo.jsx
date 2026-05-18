import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const [count, setCount] = useState(0);
    const [dark, setDark] = useState(false);

    const result = useMemo(()=> {
        console.log("calculating....")
        for(let i=0; i< 10000; i++){}
        return count * 2;
    },[count])
    console.log(dark)
  return (
    <div>
        <h1>{result}</h1>
        <button onClick={()=> setCount(count + 1)}>Increase</button>
        <button onClick={()=> setDark(!dark)}>Change Theme</button>
        <h2>{dark}</h2>
    </div>
  )
}

export default UseMemo