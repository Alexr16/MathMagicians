import { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [total, setTotal] = useState(0);
  const [next, setNext] = useState(0);
  const [operation, setOperation] = useState(null);

  const ob = { total, next, operation };

  const handleClick = (value) => {
    const calc = calculate(ob, value);
    setTotal(calc.total);
    setNext(calc.next);
    setOperation(calc.operation);
  };

  const onKeyPress = () => {

  };

  return (
    <div className="container">
      <div className="display">{next || total}</div>
      <div className="wrapper">
        <div role="button" tabIndex="0" onClick={() => handleClick('AC')} onKeyPress={onKeyPress} className="btn gray" value="AC">AC</div>
        <div role="button" tabIndex="0" onClick={() => handleClick('+/-')} onKeyPress={onKeyPress} className="btn gray" value="+/-">+/-</div>
        <div role="button" tabIndex="0" onClick={() => handleClick('%')} onKeyPress={onKeyPress} className="btn gray" value="%">%</div>
        <div role="button" tabIndex="0" onClick={() => handleClick('÷')} onKeyPress={onKeyPress} className="btn orange" value="÷">÷</div>
        <div role="button" tabIndex="0" onClick={() => handleClick('7')} onKeyPress={onKeyPress} className="btn gray" value="7">7</div>
        <div role="button" tabIndex="0" onClick={() => handleClick('8')} onKeyPress={onKeyPress} className="btn gray" value="8">8</div>
        <div role="button" tabIndex="0" onClick={() => handleClick('9')} onKeyPress={onKeyPress} className="btn gray" value="9">9</div>
        <div role="button" tabIndex="0" onClick={() => handleClick('x')} onKeyPress={onKeyPress} className="btn orange" value="x">x</div>
        <div role="button" tabIndex="0" onClick={() => handleClick('4')} onKeyPress={onKeyPress} className="btn gray" value="4">4</div>
        <div role="button" tabIndex="0" onClick={() => handleClick('5')} onKeyPress={onKeyPress} className="btn gray" value="5">5</div>
        <div role="button" tabIndex="0" onClick={() => handleClick('6')} onKeyPress={onKeyPress} className="btn gray" value="6">6</div>
        <div role="button" tabIndex="0" onClick={() => handleClick('-')} onKeyPress={onKeyPress} className="btn orange" value="-">-</div>
        <div role="button" tabIndex="0" onClick={() => handleClick('1')} onKeyPress={onKeyPress} className="btn gray" value="1">1</div>
        <div role="button" tabIndex="0" onClick={() => handleClick('2')} onKeyPress={onKeyPress} className="btn gray" value="2">2</div>
        <div role="button" tabIndex="0" onClick={() => handleClick('3')} onKeyPress={onKeyPress} className="btn gray" value="3">3</div>
        <div role="button" tabIndex="0" onClick={() => handleClick('+')} onKeyPress={onKeyPress} className="btn orange" value="+">+</div>
        <div role="button" tabIndex="0" onClick={() => handleClick('0')} onKeyPress={onKeyPress} className="btn gray zero" value="0">0</div>
        <div role="button" tabIndex="0" onClick={() => handleClick('.')} onKeyPress={onKeyPress} className="btn gray" value=".">.</div>
        <div role="button" tabIndex="0" onClick={() => handleClick('=')} onKeyPress={onKeyPress} className="btn orange" value="=">=</div>
      </div>
    </div>
  );
};

export default Calculator;
