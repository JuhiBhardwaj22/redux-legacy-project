import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../store/ActionCreator";

export const Counter = ({ count, increment, decrement }) => {
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => increment(10)}>Inc</button>
      <button onClick={decrement}>Dec</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  count: state.count,
});
const mapDispatchToProps = {
  increment,
  decrement,
};

//So in this case we don't need to write action creator
// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "INCREMENT" }),
//     decrement: () => dispatch({ type: "DECREMENT" }),
//   };
// };

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
