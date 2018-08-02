import React, { Component } from 'react';
import MyComponent from './MyComponent';

class App extends Component {
  state = {
    counter: 1,    
    error: false,
  }

  //에러가 발생할 수 있는 부모 컴퍼넌트에서 사용
  componentDidCatch(error, info) {
    console.log(error);
    console.log(info);
    this.setState({
      error: true,
    });

    //API를 통하여 서버에 에러 내역을 전송함
  }

  constructor(props) {
    super(props);
    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');
    //console.log(this.myDiv.getBoundingClientRect().height);
  }

  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  render() {
    if(this.state.error)
    {
      return(<div>에러</div>);
    }
    return (
      <div ref={ref => this.myDiv = ref}>
        {this.state.counter < 10 && <MyComponent value={this.state.counter}/>}
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}

export default App;
