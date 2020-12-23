import React, { useState } from "react";
import "./styles.css";

let symbols = {
  add: "+",
  substract: "-",
  multiply: "x",
  divide: "÷"
  // "equals to": "="
};

let sum = 0;
let userStringInput = "";

export default function App() {
  const [addedValue, setAddedValue] = useState("");
  const [inputNum, setInputNum] = useState("");

  function calculate(value) {
    let inputBar = document.querySelector(".userInputID");

    userStringInput = userStringInput + inputBar.value + " " + symbols[value];

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
      // case "equal to":
      //   sum = sum + ;
      //   break;
      default:
        sum = sum + 0;
    }

    inputBar.value = ""; //reset the input value
    inputBar.focus();

    // setting hooks' values
    setAddedValue(sum);
    setInputNum(userStringInput);
  }

  return (
    <div className="App">
      <h1>+ - x ÷</h1>
      <h2>A calculator</h2>

      <div className="inputNum"> {inputNum} </div>
      <div className="result">{addedValue}</div>

      <div className="userInput">
        <input className="userInputID" placeholder="type a number" />
        {Object.keys(symbols).map((cur) => (
          <button onClick={() => calculate(cur)} key={cur}>
            {symbols[cur]}
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
// DONE: erase input from input bar and add focus
// -> show the add as 1 + 4 = 5 in UI
// ->
// ->
