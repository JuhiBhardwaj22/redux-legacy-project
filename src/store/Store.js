import { legacy_createStore as createStore } from "redux";
import counterReducer from "./Reducer";

const store = createStore(counterReducer);

export default store;
