// App.js

import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { increment, decrement } from "./redux/action";
import ShowCounter from "./showCounter";

export default function App() {
  const count = useSelector((state) => state.count);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Redux Counter</h1>

      <ShowCounter/>
      <h1>Here from App.jsx {count}</h1>
      <button onClick={() => dispatch(increment())}>
        Increment
      </button>

      <button onClick={() => dispatch(decrement())}>
        Decrement
      </button>
    </div>
  );
}