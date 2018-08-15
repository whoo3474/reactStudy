import React, { Component } from 'react';

class TodoForm extends Component {
  render() {
    return (
      <div><input /><button onClick={this.props.onCreate}>버튼</button></div>
    );
  }
}

export default TodoForm;
