import React, { Component } from 'react';
import Product from './components/Product';

import './App.css';

class App extends Component {
  state = {
    sum: 0,
  }

  calcSum = (calcPrice) =>
  {
    this.setState({
      sum: this.state.sum + calcPrice,
    });
  }
   
  render() { 
    //Product의 코드를 몰라도 상품명과 상품가격만 작성 및 상품추가 가능
    return (
      <div className="Main">
        <Product name="Adults"   price="50"  onSum={this.calcSum} />
        <Product name="Seniors"  price="100" onSum={this.calcSum} />
        <Product name="Students" price="150" onSum={this.calcSum} />
        <Product name="Test" price="200" onSum={this.calcSum} />
        <div className="Line"></div>
        <div>
          <div className="Total">Total</div> 
          <div className="Total-Price">$ {this.state.sum}</div> 
        </div>
      </div>
    );
  }
}

export default App;
