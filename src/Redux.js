import { createStore } from "redux";

// ACTION --> any action you want to do. A function that returns a simple object
const increment = () => {
  return {
    type: "INCREMENT",
  };
};

const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

// REDUCER --> describe how your action transform the state to the next state

const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;

    case "DECREMENT":
      return state - 1;

    default:
      return state;
  }
};

// STORE --> Globalized State

let store = createStore(counter);

// display it in the console
store.subscribe(() => console.log(store.getState()));

// DISPATCH --> where you execute the action
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(decrement());
