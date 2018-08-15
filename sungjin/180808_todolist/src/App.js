import React, { Component } from 'react';
import TodoForm from './TodoForm';

class App extends Component {
  state = {
    title : 'title',
  }
  render() {
    return (
      <div>
        <TodoForm />
        <p>{this.state.title}</p>
      </div>
    );
  }
}

export default App;
