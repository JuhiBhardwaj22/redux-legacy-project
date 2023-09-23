const initialState = {
  count: 0,
  otherProperty: "someValue",
};
const counterReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "INCREMENT": {
      console.log({ ...state });

      const valuenew = {
        ...state,
        otherProperty: (state.otherProperty = "Heloo Juhi"),
      };
      console.log(valuenew);
    }
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export default counterReducer;

//
