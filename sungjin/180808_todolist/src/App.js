import React, { Component } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

class App extends Component {
  id = 1;
  state = {
    info : [
      {
        id : 0,
        title : 'title example',
      },
    ],
  }
  handleCreate = (data) =>{
    const {info} = this.state;
    this.setState({
      info : info.concat({id: this.id++, ...data})
    })
  }
  render() {
    return (
      <div>
        <TodoForm onCreate={this.handleCreate}/>
        <TodoList info={this.state.info}/>
      </div>
    );
  }
}

export default App;
