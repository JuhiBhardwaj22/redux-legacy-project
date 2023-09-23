//Action Creater
import { INCREMENT, DECREMENT } from "./ActionType";

export const increment = (val) => ({
  type: INCREMENT, // Action type defined in the reducer
  payload: val,
});

export const decrement = () => ({
  type: DECREMENT,
});
