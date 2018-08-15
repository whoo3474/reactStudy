import React, { Component } from 'react';
import TodoForm from './TodoForm';

class App extends Component {
  state = {
    title : 'title',
  }
  handleCreate = () =>{
    const { title } = this.state;
    this.setState({
      title : 'clicked',
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
