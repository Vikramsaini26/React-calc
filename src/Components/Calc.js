import React, { useState } from "react";

const Calc = () => {
  const [result, setResult] = useState("");

  const clickHandler = (event) => {
    setResult(result.concat(event.target.value));
  };

  const clearDisplay = () => {
    setResult("");
  };
  const backspace = () => {
    setResult(result.slice(0, -1));
  };

  const calculate = () => {
    setResult(eval(result), toString());
  };
  return (
    <div className="calc-app">
      <div>
        <input type="text" value={result} />
      </div>
      <div className="keypad">
        <button id="clear" onClick={clearDisplay}>
          Clear
        </button>
        <button name="" id="percentage" value="%" onClick={clickHandler}>
          %
        </button>
        <button id="backspace" onClick={backspace}>
          C
        </button>

        <button name="/" className="divide" value="/" onClick={clickHandler}>
          &#247;
        </button>

        <button name="7" className="seven" value="7" onClick={clickHandler}>
          7
        </button>
        <button name="8" className="eight" value="8" onClick={clickHandler}>
          8
        </button>
        <button name="9" className="nine" value="9" onClick={clickHandler}>
          9
        </button>
        <button name="*" className="multiply" value="*" onClick={clickHandler}>
          &times;
        </button>

        <button name="4" className="four" value="4" onClick={clickHandler}>
          4
        </button>
        <button name="5" className="five" value="5" onClick={clickHandler}>
          5
        </button>
        <button name="6" className="six" value="6" onClick={clickHandler}>
          6
        </button>
        <button name="-" className="sub" value="-" onClick={clickHandler}>
          -
        </button>

        <button name="1" className="one" value="1" onClick={clickHandler}>
          1
        </button>
        <button name="2" className="two" value="2" onClick={clickHandler}>
          2
        </button>
        <button name="3" className="three" value="3" onClick={clickHandler}>
          3
        </button>
        <button name="+" className="add" value="+" onClick={clickHandler}>
          +
        </button>

        <button name="0" className="zero" value="0" onClick={clickHandler}>
          0
        </button>
        <button
          name="00"
          className="double zero"
          value="00"
          onClick={clickHandler}
        >
          00
        </button>
        <button name="." className="point" onClick={clickHandler}>
          .
        </button>
        <button id="result" className="equalto" onClick={calculate}>
          =
        </button>
      </div>
    </div>
  );
};

export default Calc;
