import React, { Component } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

class App extends Component {
  state = {
    title : 'title',
  }
  handleCreate = (data) =>{
    this.setState({
      title : data,
    })
  }
  render() {
    return (
      <div>
        <TodoForm onCreate={this.handleCreate}/>
        <Todo title={this.state.title} />
      </div>
    );
  }
}

export default App;
