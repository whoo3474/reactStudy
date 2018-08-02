import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    num1: 0
  }
  render() {
    return (
      <div className="App">
        <button>+</button>
        <div>value : {this.state.num1}</div>
        <button>-</button>
      </div>
    );
  }
}

export default App;
