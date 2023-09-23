import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../store/ActionCreator";

export const CounterUseReducer = () => {
  const despatch = useDispatch();
  const countValue = useSelector((state) => state.count);
  const incrementCount = () => {
    despatch(increment());
  };
  const decrementCounter = () => {
    despatch(decrement());
  };
  return (
    <div>
      <h1>{countValue}</h1>
      <button onClick={incrementCount}>Inc</button>
      <button onClick={decrementCounter}>Dec</button>
    </div>
  );
};

export default CounterUseReducer;
