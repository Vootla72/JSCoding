import { useState } from "react";
import "./styles.css";


export default function App() {
  let [counter, setCounter] = useState(0);

  let disableInc = 0;
  function increment() {
    setCounter(counter++);

    // counter++;

  }
  function decrement() {
    setCounter(counter--);
    // counter--;

  }
  if (counter == 10) disableInc = true;



  return (
    <>
      <button disabled={disableInc} onClick={increment}>increment {counter}</button>
      <button disabled={!disableInc} onClick={decrement}>decrement {counter}</button>
    </>

  );
}
