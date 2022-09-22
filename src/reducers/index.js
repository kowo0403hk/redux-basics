import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux";

// combine all the reducers in one object and pass it to store for state management
const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
});

export default allReducers;
