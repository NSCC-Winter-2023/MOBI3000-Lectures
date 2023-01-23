import './Button.css';
import {useEffect, useState} from "react";

function Button({text, onClick}) {
    const [message, setMessage] = useState("");

    const button_onclick = () => {
      setMessage("CLICKED!");
      onClick(text);
    };

    useEffect(() => {
        if (message !== "") {
            setTimeout(() => {
                setMessage("");
            }, 1000);
        }
        console.log('useEffect called');
    }, [message]);

    return (
        <div className="button">
            <h1>{message}</h1>
            <button onClick={button_onclick}>{text}</button>
        </div>
    )
}

export default Button;