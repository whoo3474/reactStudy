import React, { Component } from 'react';

class MyComponent extends Component {
  state = {
    value: 0
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.value != prevState.value) {
      return { value: nextProps.value };
    }
    //변경할 사항이 없을 경우
    return null;
  }

  //최적화 함수
  //랜더링만 하지 않을뿐 값은 내부적으로 다 변함
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.value === 10) {
      return false;
    }
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.value !== prevProps.value) {
      console.log('value값이 바뀌었음.', this.props.value);
    }
  }

  //객체가 사라질때 수행
  componentWillUnmount() {
    console.log('bye');
  }

  render() {
    return (
      <div>
        {this.props.missing.something}
        props : {this.props.value} <br />
        state : {this.state.value}
      </div>
    );
  }
}

export default MyComponent;
