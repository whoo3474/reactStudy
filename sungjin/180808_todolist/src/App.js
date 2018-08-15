import React, { Component } from 'react';
import TodoForm from './TodoForm';

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
        <p>{this.state.title}</p>
      </div>
    );
  }
}

export default App;
