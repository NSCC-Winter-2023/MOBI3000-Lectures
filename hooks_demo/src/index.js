import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

function Hello(props) {

    const [color, setColor] = useState(props.color);
    const [text, setText] = useState(props.text);

    const h1_onclick = () => {
        setColor("green");
        setText("Goodbye cruel world...");
    };

    useEffect(() => {
        const h1s = document.getElementsByTagName("h1");
        for (const e of h1s) {
            e.innerText = "Changed by useEffect";
        }
    });

    return (
        <>
        <h1 onClick={h1_onclick} style={{backgroundColor:color}}>{text}</h1>
        <h2 onClick={() => setText("You clicked me!")}>Something else....</h2>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <App />
        {/*<Hello color="blue" text="hello"/>*/}
    </>
);

