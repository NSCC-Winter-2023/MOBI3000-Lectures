import './Counter.css';
import {useState} from "react";

function Counter() {

    const [count, setCount] = useState(0);

    let t;
    const start_onclick = () => {
        t = setInterval(() => {
            setCount(prev => prev + 1);
        }, 1000);
    }

    const stop_onclick = () => {
        clearInterval(t);
    }

    return (
        <div className="counter">
            <h1>{count}</h1>
            <button onClick={start_onclick}>Start</button>
            <button onClick={stop_onclick}>Stop</button>
        </div>
    );
}

export default Counter;