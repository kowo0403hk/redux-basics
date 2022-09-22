// action functions MUST return a plain object with the type property
export const increment = (num) => {
  return {
    type: "INCREMENT",
    payload: num, //payload is the data that passed in as parameter and be manipulated with the state by the dispatch function
  };
};

export const decrement = (num) => {
  return {
    type: "DECREMENT",
    payload: num,
  };
};
