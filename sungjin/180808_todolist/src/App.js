import React, { Component } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

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
        <TodoList title={this.state.title}/>
      </div>
    );
  }
}

export default App;
