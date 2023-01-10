
function div_onclick() {
    const h1 = document.getElementById("heading");
    h1.innerText = "Dynamic HTML";
}

const h1_onclick = () => {
    const div = document.getElementById("main");
    div.style.backgroundColor = "lightblue";
};

const e = React.createElement;
const root = ReactDOM.createRoot( document.getElementById('root') );
root.render(
    e(React.Fragment, null,
        e("h1", {id:"heading", onClick:h1_onclick}, "Basic HTML"),
        e("div", {id:"main", onClick:div_onclick},
            e("p", null,
                e("strong", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit."),
                "A, adipisci aliquam cum ea earum eligendi est et, ipsum pariatur qui quia, quo quos repellat repellendus sunt ut velit.",
                e("em", null, "Dolor, vel.")
            ),
            e("img", {src:"robot.png", alt:"robot", width:"200"})
        )
    )
);