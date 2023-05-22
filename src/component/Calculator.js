import React, { useState } from "react";

function Calculator() {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    const value = e.target.name;
    if (value === "+/-") {
      setResult(result + "-");
    } else if (value === "%") {
      setResult(result + "/100");
    } else if (value === "x") {
      setResult(result + "*");
    } else if (value === "÷") {
      setResult(result + "/");
    } else {
      setResult(result + value);
    }
  };

  const calculate = () => {
    try {
      const calculatedResult = eval(result);
      setResult(
        calculatedResult === Infinity ? 0 : calculatedResult.toString() || ""
      );
    } catch (error) {
      setResult("Error");
    }
  };
  const clear = () => {
    setResult("");
  };

  return (
    <div className="calculator">
      <input type="text" value={result} />
      <div className="keypad">
        <button name="AC" className="tab3" onClick={clear}>
          AC
        </button>
        <button name="+/-" className="tab3" onClick={handleClick}>
          +/-
        </button>
        <button name="%" className="tab3" onClick={handleClick}>
          %
        </button>
        <button name="÷" className="tab2" onClick={handleClick}>
          ÷
        </button>
        <button name="7" className="tab" onClick={handleClick}>
          7
        </button>
        <button name="8" className="tab" onClick={handleClick}>
          8
        </button>
        <button name="9" className="tab" onClick={handleClick}>
          9
        </button>
        <button name="x" className="tab2" onClick={handleClick}>
          x
        </button>
        <button name="4" className="tab" onClick={handleClick}>
          4
        </button>
        <button name="5" className="tab" onClick={handleClick}>
          5
        </button>
        <button name="6" className="tab" onClick={handleClick}>
          6
        </button>
        <button name="-" className="tab2" onClick={handleClick}>
          -
        </button>
        <button name="1" className="tab" onClick={handleClick}>
          1
        </button>
        <button name="2" className="tab" onClick={handleClick}>
          2
        </button>
        <button name="3" className="tab" onClick={handleClick}>
          3
        </button>
        <button name="+" className="tab2" onClick={handleClick}>
          +
        </button>
        <button name="0" className="zero" onClick={handleClick}>
          0
        </button>
        <button name="." className="tab" onClick={handleClick}>
          .
        </button>
        <button className="tab2" onClick={calculate}>
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
