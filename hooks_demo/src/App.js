import './App.css';
import Counter from "./Counter";
import {useState} from "react";

function App() {
    const [count, setCount] = useState(1);
    const count_onclick = () => {
        setCount(count * 2);
    };
  return (
    <div className="App">
      <Counter countBy={count} />
      <button onClick={count_onclick}>Count By</button>
    </div>
  );
}

export default App;
