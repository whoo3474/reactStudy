import React, { Component } from 'react';

class Todo extends Component {
  state = {
    title : 'title',
  }
  render() {
    const { title } = this.props;
    return (
			<div>
        <p>{title}</p>
			</div>
    );
  }
}

export default Todo;
