import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
  state = {
    info : [
      {
        title : '',
      },
    ],
  }
  render() {
    const { info } = this.props;
    const list = info.map(
      elem => {
        return <Todo key={elem.id} title={elem.title} />
      })
    return (
			<div>
        {list}
			</div>
    );
  }
}

export default TodoList;
