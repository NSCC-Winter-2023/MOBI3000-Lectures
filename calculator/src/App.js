import './App.css';
import Display from "./Display";
import GridButton from "./GridButton";
import {useState} from "react";

function App() {
  const [result, setResult] = useState(0.0);
  const [display, setDisplay] = useState("0");
  const [memory, setMemory] = useState(0.0);

  const button_onclick = (text) => {
    const show = display !== "0" ? display + text : text;
    setDisplay(show);
    setResult(parseFloat(show));
  }

  const operator_onclick = (text) => {
    switch (text) {
      case "C":
        setDisplay("0");
        setResult(0);
        break;
      case "+":
        setMemory(result);
        setDisplay("0");
        setResult(0);
        break;
      case "=":
        const sum = result + memory;
        setResult(sum);
        setDisplay(sum.toFixed(3));
        break;
    }
  }

  return (
    <div className="App">
      <Display text={display} />
      <GridButton onButtonClick={button_onclick} onOperatorClick={operator_onclick} />
    </div>
  );
}

export default App;
