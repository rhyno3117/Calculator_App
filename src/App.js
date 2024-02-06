import { useState } from "react";
import * as math from "mathjs";
import './App.css';
import Button from './components/Button';
import Input from './components/Input';


const App = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");



  const addToText = (val) => {
    setText((text) => {
      const lastChar = text[text.length - 1];
      // Check if the last character is an operator or a space, and the new value is an operator
      if ((lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/') && (val === '+' || val === '-' || val === '*' || val === '/')) {
        return [...text.slice(0, -1), val];
      } else {
        return [...text, val];
      }
    });
  }
  

  const calculateResult = () => {
    const input = text.join("") //Remove all commas
    setResult(math.evaluate(input));
  }


  
  const resetInput = () => {
    setText("");
    setResult("");
  }

  const buttonColor = "#f2a33c";


  return (
    <div className="App">
      <div className='calc-wrapper'>
        <Input text={text} result={result} />
        <div className="row">
          <Button symbol="7" handleClick={addToText} />
          <Button symbol="8" handleClick={addToText} />
          <Button symbol="9" handleClick={addToText} />
          <Button symbol="/" color={buttonColor} handleClick={addToText} />
        </div>
        <div className="row">
          <Button symbol="4" handleClick={addToText} />
          <Button symbol="5" handleClick={addToText} />
          <Button symbol="6" handleClick={addToText} />
          <Button symbol="*" color={buttonColor} handleClick={addToText} />
        </div>
        <div className="row">
          <Button symbol="1" handleClick={addToText} />
          <Button symbol="2" handleClick={addToText} />
          <Button symbol="3" handleClick={addToText} />
          <Button symbol="+" color={buttonColor} handleClick={addToText} />
        </div>
        <div className="row">
          <Button symbol="0" handleClick={addToText} />
          <Button symbol="." handleClick={addToText} />
          <Button symbol="=" handleClick={calculateResult}/>
          <Button symbol="-" color={buttonColor} handleClick={addToText} />
        </div>
        <Button symbol="Clear" color="#00abf0" handleClick={resetInput} />
      </div>
    </div>
  );
}

export default App;
