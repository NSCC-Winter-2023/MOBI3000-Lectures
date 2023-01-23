import './Counter.css';
import {useState, useEffect} from "react";

function Counter({countBy}) {

    const [count, setCount] = useState(0);
    const [timer, setTimer] = useState(false);

    const start_onclick = () => {
        setTimer(true);
    }

    const stop_onclick = () => {
        setTimer(false);
    }

    // no dependency list means the useEffect will
    // be called during every render
    useEffect(() => {
        console.log('useEffect called.');
    })

    // an empty dependency list will cause useEffect
    // to only be called during Mounting
    // the 'clearInterval' will be called when the
    // component unmounts or when the dependency list
    // changes
    useEffect(() => {
        if (timer) {
            const t = setInterval(() => {
                setCount(prev => prev + countBy);
            }, 1000);
            return () => clearInterval(t);
        }
    }, [countBy, timer]);

    // a variable in the dependency list will cause
    // useEffect to be called only when it changes
    // and cause a re-render
    useEffect(() => {
        const h1 = document.getElementsByTagName('h1');
        for (const h of h1) {
            h.style.fontSize = `${count}px`;
        }
    }, [count])

    return (
        <div className="counter">
            <h1>{count}</h1>
            <button onClick={start_onclick}>Start</button>
            <button onClick={stop_onclick}>Stop</button>
        </div>
    );
}

export default Counter;