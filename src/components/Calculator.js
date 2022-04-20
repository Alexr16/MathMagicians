import React, { Component } from 'react';
import Button from './Button';
import Display from './Display';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor() {
    super();
    const data = {
      total: null,
      next: '0',
      operation: null,
    };
    this.state = data;
  }

  handleClick = (e) => {
    const value = e.target.getAttribute('data-value');
    const calc = calculate(this.state, value);
    this.setState({
      ...calc,
    });
  };

  render() {
    const { next, total } = this.state;
    return (
      <div className="container">
        <Display data={next || total} />
        <div className="wrapper">
          <Button onClick={this.handleClick} onKeyPress={this.onKeyPress} className="gray" label="AC" value="AC" />
          <Button onClick={this.handleClick} onKeyPress={this.onKeyPress} className="gray" label="+/-" value="+/-" />
          <Button onClick={this.handleClick} onKeyPress={this.onKeyPress} className="gray" label="%" value="%" />
          <Button onClick={this.handleClick} onKeyPress={this.onKeyPress} className="orange" label="÷" value="÷" />
          <Button onClick={this.handleClick} onKeyPress={this.onKeyPress} className="gray" label="7" value="7" />
          <Button onClick={this.handleClick} onKeyPress={this.onKeyPress} className="gray" label="8" value="8" />
          <Button onClick={this.handleClick} onKeyPress={this.onKeyPress} className="gray" label="9" value="9" />
          <Button onClick={this.handleClick} onKeyPress={this.onKeyPress} className="orange" label="x" value="x" />
          <Button onClick={this.handleClick} onKeyPress={this.onKeyPress} className="gray" label="4" value="4" />
          <Button onClick={this.handleClick} onKeyPress={this.onKeyPress} className="gray" label="5" value="5" />
          <Button onClick={this.handleClick} onKeyPress={this.onKeyPress} className="gray" label="6" value="6" />
          <Button onClick={this.handleClick} onKeyPress={this.onKeyPress} className="orange" label="-" value="-" />
          <Button onClick={this.handleClick} onKeyPress={this.onKeyPress} className="gray" label="1" value="1" />
          <Button onClick={this.handleClick} onKeyPress={this.onKeyPress} className="gray" label="2" value="2" />
          <Button onClick={this.handleClick} onKeyPress={this.onKeyPress} className="gray" label="3" value="3" />
          <Button onClick={this.handleClick} onKeyPress={this.onKeyPress} className="orange" label="+" value="+" />
          <Button onClick={this.handleClick} onKeyPress={this.onKeyPress} className="gray zero" label="0" value="0" />
          <Button onClick={this.handleClick} onKeyPress={this.onKeyPress} className="gray" label="." value="." />
          <Button onClick={this.handleClick} onKeyPress={this.onKeyPress} className="orange" label="=" value="=" />
        </div>
      </div>
    );
  }
}

export default Calculator;
