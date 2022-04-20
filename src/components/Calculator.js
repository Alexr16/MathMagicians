import React, { PureComponent } from 'react';
import Button from './Button';
import Display from './Display';
import calculate from '../logic/calculate';

class Calculator extends PureComponent {
  constructor() {
    super();
    this.state = { };
  }

  render() {
    return (
      <div className="container">
        <Display data={0} />
        <div className="wrapper">
          <Button onClick={this.handleClick} onKeyPress={this.onKeyPress} className="gray" label="AC" value="clear" />
          <Button onClick={this.handleClick} onKeyPress={this.onKeyPress} className="gray" label="+/-" value="minusPlus" />
          <Button onClick={this.handleClick} onKeyPress={this.onKeyPress} className="gray" label="%" value="percent" />
          <Button onClick={this.handleClick} onKeyPress={this.onKeyPress} className="orange" label="÷" value="divide" />
          <Button onClick={this.handleClick} onKeyPress={this.onKeyPress} className="gray" label="7" value="7" />
          <Button onClick={this.handleClick} onKeyPress={this.onKeyPress} className="gray" label="8" value="8" />
          <Button onClick={this.handleClick} onKeyPress={this.onKeyPress} className="gray" label="9" value="9" />
          <Button onClick={this.handleClick} onKeyPress={this.onKeyPress} className="orange" label="x" value="multiply" />
          <Button onClick={this.handleClick} onKeyPress={this.onKeyPress} className="gray" label="4" value="4" />
          <Button onClick={this.handleClick} onKeyPress={this.onKeyPress} className="gray" label="5" value="5" />
          <Button onClick={this.handleClick} onKeyPress={this.onKeyPress} className="gray" label="6" value="6" />
          <Button onClick={this.handleClick} onKeyPress={this.onKeyPress} className="orange" label="-" value="minus" />
          <Button onClick={this.handleClick} onKeyPress={this.onKeyPress} className="gray" label="1" value="1" />
          <Button onClick={this.handleClick} onKeyPress={this.onKeyPress} className="gray" label="2" value="2" />
          <Button onClick={this.handleClick} onKeyPress={this.onKeyPress} className="gray" label="3" value="3" />
          <Button onClick={this.handleClick} onKeyPress={this.onKeyPress} className="orange" label="+" value="plus" />
          <Button onClick={this.handleClick} onKeyPress={this.onKeyPress} className="gray zero" label="0" value="0" />
          <Button onClick={this.handleClick} onKeyPress={this.onKeyPress} className="gray" label="." value="." />
          <Button onClick={this.handleClick} onKeyPress={this.onKeyPress} className="orange" label="=" value="equal" />

        </div>
      </div>
    );
  }
}

export default Calculator;
