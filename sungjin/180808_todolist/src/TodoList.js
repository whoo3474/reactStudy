import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
  render() {
    return (
			<div>
        <Todo title={this.props.title} />
			</div>
    );
  }
}

export default TodoList;
