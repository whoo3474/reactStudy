import React, { Component } from 'react';
import Button from './components/Button';
import Product from './components/Product';

class App extends Component {
  state = {
    sum: 0,
  }
  render() {
    return (
      <div>
        <div>Adults   : <Button value="asdf"/><Product name="Adults" price="5"/>   <Button value="+"/></div>
        <div>Seniors  : <Button value="-"/><Product name="Seniors" price="7"/>  <Button value="+"/></div>
        <div>Students : <Button value="-"/><Product name="Students" price="10"/><Button value="+"/></div>
        <div>Total : ${this.state.sum}</div>
      </div>
    );
  }
}

export default App;
