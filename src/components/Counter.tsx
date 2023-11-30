// src/components/Counter.tsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, AppState, RootState } from "../store";

const Counter: React.FC = () => {
  const count = useSelector((state: RootState) => {
    console.log(state);
    return state.counter.count;
  });
  const dispatch = useDispatch();

  return (
    <div>
      <p>Count: {count}</p>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
