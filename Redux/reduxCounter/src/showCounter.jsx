
import React from 'react'
import { useSelector } from 'react-redux'

const ShowCounter = () => {
    const count = useSelector((state)=> state.count)
  return (
    <div>
        <h1>Here from showCounter</h1>
        {count}
    </div>
  )
}

export default ShowCounter