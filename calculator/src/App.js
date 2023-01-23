import './App.css';
import Button from "./Button";
import {useState} from "react";

function App() {
  const [result, setResult] = useState(0);
  const [display, setDisplay] = useState("0");
  const [memory, setMemory] = useState(0);

  const button_onclick = (text) => {
    const show = display + text;
    setDisplay(show);
    setResult(Number.parseInt(show));
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
        setDisplay(sum.toString());
        break;
    }
  }

  return (
    <div className="App">
      <h1>{display}</h1>
      <div className="buttons">
        <Button text="7" onClick={button_onclick}/>
        <Button text="8" onClick={button_onclick}/>
        <Button text="9" onClick={button_onclick}/>
        <Button text="*" onClick={operator_onclick}/>
        <Button text="4" onClick={button_onclick}/>
        <Button text="5" onClick={button_onclick}/>
        <Button text="6" onClick={button_onclick}/>
        <Button text="-" onClick={operator_onclick}/>
        <Button text="1" onClick={button_onclick}/>
        <Button text="2" onClick={button_onclick}/>
        <Button text="3" onClick={button_onclick}/>
        <Button text="+" onClick={operator_onclick}/>
        <Button text="C" onClick={operator_onclick}/>
        <Button text="0" onClick={button_onclick}/>
        <Button text="." onClick={button_onclick}/>
        <Button text="=" onClick={operator_onclick}/>
      </div>
    </div>
  );
}

export default App;
