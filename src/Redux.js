import { configureStore } from "@reduxjs/toolkit";

// ACTION --> any action you want to do. A function that returns a simple object
const increment = (num) => {
  return {
    type: "INCREMENT",
    payload: num,
  };
};

const decrement = (num) => {
  return {
    type: "DECREMENT",
    payload: num,
  };
};

// REDUCER --> describe how your action transform the state to the next state

const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;

    case "DECREMENT":
      return state - action.payload;

    default:
      return state;
  }
};

// STORE --> Globalized State

let store = configureStore(counter);

// display it in the console
store.subscribe(() => console.log(store.getState()));

// DISPATCH --> where you execute the action
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(decrement());
