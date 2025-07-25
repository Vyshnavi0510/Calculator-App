import React from "react";
import "./CalculatorKeys.css";
export default function CalculatorKeys({
  handleClick,
  handleClear,
  handleEqual,
  handleDel,
}) {
  return (
    <>
      <div className="calculator-keys">
        <div className="row1">
          <button className="keys" onClick={() => handleClear()}>
            AC
          </button>
          <button className="keys" onClick={() => handleDel()}>
            DEL
          </button>
          <button className="keys" onClick={() => handleClick("%")}>
            %
          </button>
          <button className="operators" onClick={() => handleClick("/")}>
            /
          </button>
        </div>
        <div className="row2">
          <button onClick={() => handleClick("7")}>7</button>
          <button onClick={() => handleClick("8")}>8</button>
          <button onClick={() => handleClick("9")}>9</button>
          <button className="operators" onClick={() => handleClick("*")}>
            *
          </button>
        </div>
        <div>
          <button onClick={() => handleClick("4")}>4</button>
          <button onClick={() => handleClick("5")}>5</button>
          <button onClick={() => handleClick("6")}>6</button>
          <button className="operators" onClick={() => handleClick("-")}>
            -
          </button>
        </div>
        <div>
          <button onClick={() => handleClick("1")}>1</button>
          <button onClick={() => handleClick("2")}>2</button>
          <button onClick={() => handleClick("3")}>3</button>
          <button className="operators" onClick={() => handleClick("+")}>
            +
          </button>
        </div>
        <div>
          <button onClick={() => handleClick("00")}>00</button>
          <button onClick={() => handleClick("0")}>0</button>
          <button onClick={() => handleClick(".")}>.</button>
          <button className="operators" onClick={() => handleEqual()}>
            =
          </button>
        </div>
      </div>
    </>
  );
}
