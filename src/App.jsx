import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

function App() {
  // use the useSelector function to get the state from store
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);

  // return a dispatch function to excute the options that passed as an parameter
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement(5))}>-</button>

      {isLogged ? <h3>Valuable Information</h3> : ""}
    </div>
  );
}

export default App;
