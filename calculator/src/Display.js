import './Display.css';
import {useState} from "react";

function Display({text}) {

  console.log('rendering...');

  const [memory, setMemory] = useState("12345");

  let t = text;
  if (text === "0") {
    t = memory;
  }

  return (
    <h1>{t}</h1>
  );
}

export default Display;