
import { createRoot } from 'react-dom/client';
import './index.css';
import robot from './robot.png';

function div_onclick() {
    const h1 = document.getElementById("heading");
    h1.innerText = "Dynamic HTML";
}

const h1_onclick = () => {
    const div = document.getElementById("main");
    div.style.backgroundColor = "lightblue";
};

const root = createRoot( document.getElementById('root') );
root.render(
    <>
        <h1 onClick={h1_onclick} id="heading">Basic HTML</h1>
        <div onClick={div_onclick} id="main">
            <p><strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</strong>
                A, adipisci aliquam cum ea earum eligendi est et, ipsum pariatur qui quia,
                quo quos repellat repellendus sunt ut velit. <em>Dolor, vel.</em></p>
            <img src={robot} alt="robot" width="200"/>
        </div>
    </>
);