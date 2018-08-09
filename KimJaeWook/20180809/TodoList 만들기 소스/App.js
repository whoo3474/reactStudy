import React, { Component } from 'react';
import TodoAdd from './components/TodoAdd';
import TodoList from './components/TodoList';
import './App.css';

class App extends Component {
  state = {
    todolist:[
    ]
  }

  handleAdd = (data) => {
    console.log('Function onAdd Start');
    const { todolist } = this.state;
    this.setState({
      todolist: todolist.concat({
        idx: this.state.todolist.length, 
        complete: false, 
        delete: false, 
        ...data})
    });    
  }

  handleComplete = (idx) => {
    console.log('Function onComplete Start');
    const { todolist } = this.state;
    this.setState({
      todolist: todolist.map(
        todo => todo.idx === idx
          ? {...todo, complete: true}
          : todo
      )
    });
    
  }

  handleDelete = (idx) => {
    console.log('Function onDelete Start');
    const { todolist } = this.state;
    this.setState({
      todolist: todolist.filter(todo => todo.idx !== idx)          
    });
  }

  render() {
    console.log(this.state);
    return (
      <div className="todo-list-template">
        <div className="title">
          오늘 할 일
        </div>
        <TodoAdd onAdd={this.handleAdd}/>
        <TodoList 
          data={this.state.todolist}          
          onComplete={this.handleComplete}
          onDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
