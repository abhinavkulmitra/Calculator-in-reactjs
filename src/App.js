import React, { useState } from "react";
import "./styles.css";

let sum = 0;

export default function App() {
  const [addedValue, setAddedValue] = useState("");

  function add() {
    console.log("sumTop", sum);
    let number;
    let userInputTag = document.querySelector(".userInputID");

    console.log("userinput", userInputTag.value);

    number = parseInt(userInputTag.value);

    console.log("number", number);

    sum += number;
    setAddedValue(sum);
    console.log("sumbottom", sum);
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

        <button className="addBtn" onClick={add}>
          Add (+)
        </button>
      </div>
      <div className="addition">{addedValue}</div>
    </div>
  );
}

/* 
  DONE: add two numbers
  DONE: take inputs from user and add them 
  DONE: and show the result in UI


*/
