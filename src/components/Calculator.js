import React from 'react';
// import Display from './Display';

const handleClick = () => {
  // const value = e.target.getAttribute('data-value');
  // const calc = calculate(this.state, value);
  // this.setState({
  //   ...calc,
  // });
};

const onKeyPress = () => {
  // const value = e.target.getAttribute('data-value');
  // const calc = calculate(this.state, value);
  // this.setState({
  //   ...calc,
  // });
};

function Calculator() {
  // constructor() {
  //   super();
  //   const data = {
  //     total: null,
  //     next: '0',
  //     operation: null,
  //   };
  //   this.state = data;
  // }
  // const { next, total } = this.state;
  return (
    <div className="container">
      {/* <Display data={next || total} /> */}
      <div className="wrapper">
        <div role="button" tabIndex="0" onClick={handleClick} onKeyPress={onKeyPress} className="btn gray" value="AC">AC</div>
        <div role="button" tabIndex="0" onClick={handleClick} onKeyPress={onKeyPress} className="btn gray" value="+/-">+/-</div>
        <div role="button" tabIndex="0" onClick={handleClick} onKeyPress={onKeyPress} className="btn gray" value="%">%</div>
        <div role="button" tabIndex="0" onClick={handleClick} onKeyPress={onKeyPress} className="btn orange" value="÷">÷</div>
        <div role="button" tabIndex="0" onClick={handleClick} onKeyPress={onKeyPress} className="btn gray" value="7">7</div>
        <div role="button" tabIndex="0" onClick={handleClick} onKeyPress={onKeyPress} className="btn gray" value="8">8</div>
        <div role="button" tabIndex="0" onClick={handleClick} onKeyPress={onKeyPress} className="btn gray" value="9">9</div>
        <div role="button" tabIndex="0" onClick={handleClick} onKeyPress={onKeyPress} className="btn orange" value="x">x</div>
        <div role="button" tabIndex="0" onClick={handleClick} onKeyPress={onKeyPress} className="btn gray" value="4">4</div>
        <div role="button" tabIndex="0" onClick={handleClick} onKeyPress={onKeyPress} className="btn gray" value="5">5</div>
        <div role="button" tabIndex="0" onClick={handleClick} onKeyPress={onKeyPress} className="btn gray" value="6">6</div>
        <div role="button" tabIndex="0" onClick={handleClick} onKeyPress={onKeyPress} className="btn orange" value="-">-</div>
        <div role="button" tabIndex="0" onClick={handleClick} onKeyPress={onKeyPress} className="btn gray" value="1">1</div>
        <div role="button" tabIndex="0" onClick={handleClick} onKeyPress={onKeyPress} className="btn gray" value="2">2</div>
        <div role="button" tabIndex="0" onClick={handleClick} onKeyPress={onKeyPress} className="btn gray" value="3">3</div>
        <div role="button" tabIndex="0" onClick={handleClick} onKeyPress={onKeyPress} className="btn orange" value="+">+</div>
        <div role="button" tabIndex="0" onClick={handleClick} onKeyPress={onKeyPress} className="btn gray zero" value="0">0</div>
        <div role="button" tabIndex="0" onClick={handleClick} onKeyPress={onKeyPress} className="btn gray" value=".">.</div>
        <div role="button" tabIndex="0" onClick={handleClick} onKeyPress={onKeyPress} className="btn orange" value="=">=</div>
      </div>
    </div>
  );
}

export default Calculator;
