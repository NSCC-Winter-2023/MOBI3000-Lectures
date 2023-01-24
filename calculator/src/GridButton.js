import './GridButton.css';
import Button from "./Button";

function GridButton({onButtonClick, onOperatorClick}) {
  return (
    <div className="buttons">
      <Button text="7" onClick={onButtonClick}/>
      <Button text="8" onClick={onButtonClick}/>
      <Button text="9" onClick={onButtonClick}/>
      <Button text="*" onClick={onOperatorClick}/>
      <Button text="4" onClick={onButtonClick}/>
      <Button text="5" onClick={onButtonClick}/>
      <Button text="6" onClick={onButtonClick}/>
      <Button text="-" onClick={onOperatorClick}/>
      <Button text="1" onClick={onButtonClick}/>
      <Button text="2" onClick={onButtonClick}/>
      <Button text="3" onClick={onButtonClick}/>
      <Button text="+" onClick={onOperatorClick}/>
      <Button text="C" onClick={onOperatorClick}/>
      <Button text="0" onClick={onButtonClick}/>
      <Button text="." onClick={onButtonClick}/>
      <Button text="=" onClick={onOperatorClick}/>
    </div>
  );
}

export default GridButton;