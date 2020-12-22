import React, { useState } from "react";
import "./styles.css";

export default function App() {
  // const [addedValue, setAddedValue] = useState("");
  function add() {
    let sum = 0;
    let number;
    // document.querySelector("#userInputID") === null ? 0, number = document.querySelector("#userInputID");
    sum += number.value;
    // setAddedValue(sum);
    console.log(sum);
  }

  return (
    <div className="App">
      <h1>+ - x ÷</h1>
      <h2>A calculator</h2>
      <div className="userInput">
        <input
          type="number"
          className="userInputID"
          name=""
          placeholder="type a number"
        />
        <button className="addBtn" onClick={add()}>
          Add (+)
        </button>
      </div>
      <div className="addition">{addedValue}</div>
    </div>
  );
}

/* 
  take inputs from user and add them 

*/
