import React, { useState } from 'react';
import Button from './Button';
import Display from './Display';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [total, setTotal] = useState(0);
  const [next, setNext] = useState(0);
  const [operation, setOperation] = useState(null);

  const handleClick = (value) => {
    const ob = { total, next, operation };
    const calc = calculate(ob, value);
    setTotal(calc.total);
    setNext(calc.next);
    setOperation(calc.operation);
  };

  const onKeyPress = () => {
  };

  return (
    <div className="container">
      <Display data={next || total} />
      <div div className="wrapper">
        <Button Click={handleClick('AC')} KeyPress={onKeyPress} Name="gray" lab="AC" val="AC" />
        <Button Click={handleClick('+/-')} KeyPress={onKeyPress} Name="gray" lab="+/-" val="+/-" />
        <Button Click={handleClick('%')} KeyPress={onKeyPress} Name="gray" lab="%" val="%" />
        <Button Click={handleClick('÷')} KeyPress={onKeyPress} Name="orange" lab="÷" val="÷" />
        <Button Click={handleClick('7')} KeyPress={onKeyPress} Name="gray" lab="7" val="7" />
        <Button Click={handleClick('8')} KeyPress={onKeyPress} Name="gray" lab="8" val="8" />
        <Button Click={handleClick('9')} KeyPress={onKeyPress} Name="gray" lab="9" val="9" />
        <Button Click={handleClick('X')} KeyPress={onKeyPress} Name="orange" lab="x" val="x" />
        <Button Click={handleClick('4')} KeyPress={onKeyPress} Name="gray" lab="4" val="4" />
        <Button Click={handleClick('5')} KeyPress={onKeyPress} Name="gray" lab="5" val="5" />
        <Button Click={handleClick('6')} KeyPress={onKeyPress} Name="gray" lab="6" val="6" />
        <Button Click={handleClick('-')} KeyPress={onKeyPress} Name="orange" lab="-" val="-" />
        <Button Click={handleClick('1')} KeyPress={onKeyPress} Name="gray" lab="1" val="1" />
        <Button Click={handleClick('2')} KeyPress={onKeyPress} Name="gray" lab="2" val="2" />
        <Button Click={handleClick('3')} KeyPress={onKeyPress} Name="gray" lab="3" val="3" />
        <Button Click={handleClick('+')} KeyPress={onKeyPress} Name="orange" lab="+" val="+" />
        <Button Click={handleClick('0')} KeyPress={onKeyPress} Name="gray zero" lab="0" val="0" />
        <Button Click={handleClick('.')} KeyPress={onKeyPress} Name="gray" lab="." val="." />
        <Button Click={handleClick('=')} KeyPress={onKeyPress} Name="orange" lab="=" val="=" />
      </div>
    </div>
  );
};

export default Calculator;
