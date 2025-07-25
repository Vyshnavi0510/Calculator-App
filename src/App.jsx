import "./App.css";
import CalculatorKeys from "./CalculatorKeys/CalculatorKeys";
import { useState } from "react";
function App() {
  const [display, setDisplay] = useState("");
  function handleClick(value) {
    setDisplay(display + value);
  }
  function handleClear() {
    setDisplay("");
  }
  function handleEqual() {
    try {
      const result = eval(display);
      setDisplay(result);
    } catch {
      setDisplay("Error");
    }
  }
  function handleDel() {
    setDisplay(display.slice(0, -1));
  }
  return (
    <>
      <div className="calculator">
        <div className="calculator-body">
          <input
            type="text"
            className="output"
            value={display}
            onChange={handleClick}
          />
          <CalculatorKeys
            handleClick={handleClick}
            handleClear={handleClear}
            handleEqual={handleEqual}
            handleDel={handleDel}
          />
        </div>
      </div>
    </>
  );
}
export default App;
