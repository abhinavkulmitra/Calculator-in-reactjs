import React, { useState } from "react";
import "./styles.css";

let symbols = {
  add: "+",
  substract: "-",
  multiply: "x",
  divide: "÷"
};

let sum = 0;

export default function App() {
  const [addedValue, setAddedValue] = useState("");

  function calculate(value) {
    let inputBar = document.querySelector(".userInputID");
    let number = parseInt(inputBar.value);

    switch (value) {
      case "add":
        sum += number;
        break;
      case "substract":
        sum = sum - number;
        break;
      case "multiply":
        sum = sum * number;
        break;
      case "divide":
        sum = sum / number;
        break;
      default:
        sum = 0;
    }

    inputBar.value = ""; //reset the input value
    inputBar.focus();
    setAddedValue(sum);
  }

  return (
    <div className="App">
      <h1>+ - x ÷</h1>
      <h2>A calculator</h2>

      <div className="addition">{addedValue}</div>

      <div className="userInput">
        <input className="userInputID" placeholder="type a number" />
        {Object.keys(symbols).map((cur) => (
          <button onClick={() => calculate(cur)} key={cur}>
            {cur + " " + symbols[cur]}
          </button>
        ))}
      </div>
    </div>
  );
}

// DONE: add two numbers
// DONE: take inputs from user and add them
// DONE: and show the result in UI
// DONE: add substract, multiply and division btns
// erase input from input bar and add focus
// -> show the add as 1 + 4 = 5 in UI
// ->
// ->
