import React,{Component} from 'react';
import './index.css';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adultsNumber: 0,
      senioursNumber:0,
      studentsNumber:0
    }
  }
  adultsHandleIncrease = () => {
    this.setState({
      adultsNumber: this.state.adultsNumber + 1
    });
  }

  adultsHandleDecrease = () => {
    this.setState({
      adultsNumber: this.state.adultsNumber>0 ? this.state.adultsNumber-1 : this.state.adultsNumber
    });
  }
  senioursHandleIncrease = () => {
    this.setState({
      senioursNumber: this.state.senioursNumber + 1
    });
  }

  senioursHandleDecrease = () => {
    this.setState({
      senioursNumber: this.state.senioursNumber>0 ? this.state.senioursNumber-1 : this.state.senioursNumber
    });
  }
  studentsHandleIncrease = () => {
    this.setState({
      studentsNumber: this.state.studentsNumber + 1
    });
  }

  studentsHandleDecrease = () => {
    this.setState({
      studentsNumber: this.state.studentsNumber>0 ? this.state.studentsNumber-1 : this.state.studentsNumber
    });
  }

  render() {
    return (
      <div className="outline">
        <h1>카운터</h1>
        <div className="content">
          <div className="part">어른 5000원: {this.state.adultsNumber}
            <button onClick={this.adultsHandleIncrease}>+</button>
            <button onClick={this.adultsHandleDecrease}>-</button>
          </div>

          
          <div className="part">노인 3000원: {this.state.senioursNumber}</div>
          <button onClick={this.senioursHandleIncrease}>+</button>
          <button onClick={this.senioursHandleDecrease}>-</button>

          
          <div className="part">학생 1000원: {this.state.studentsNumber}</div>
          <button onClick={this.studentsHandleIncrease}>+</button>
          <button onClick={this.studentsHandleDecrease}>-</button>

          <div>총합 : {this.state.adultsNumber*5000+this.state.senioursNumber*3000+this.state.studentsNumber*1000 } 원</div>
        </div>
      </div>
    );
  }
}

export default Cart;