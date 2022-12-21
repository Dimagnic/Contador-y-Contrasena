import React, { useState } from "react";
import App from "../App.css";

const Contador = () => {
  const [counter, setCounter] = useState(0)

  //let counter = 0

    const increment = () => {
    //alert('Esta Incrementando')
    setCounter(counter + 1) // setCounter cambia el estado inicial de useState
    //counter = counter + 1 ..... counter = 1 
  }
    const decrement = () => setCounter(counter - 1)

  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={decrement}>Decremento</button>
      <button onClick={increment} >Incremento</button>

    </div>
  )
};

export default Contador;