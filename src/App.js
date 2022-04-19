import './App.css';
import React, { PureComponent } from 'react';
import Calculator from './components/Calculator';

class App extends PureComponent {
  render() {
    return (
      <div className="calc-container">
        <Calculator />
      </div>
    );
  }
}

export default App;
