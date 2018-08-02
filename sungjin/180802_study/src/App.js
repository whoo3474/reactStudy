import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    num1: 0
  }
  increaseNum = () => {
    const {num1} = this.state
    this.setState({
      num1: num1 + 1
    })
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.increaseNum}>+</button>
        <div>value : {this.state.num1}</div>
        <button>-</button>
      </div>
    );
  }
}

export default App;
