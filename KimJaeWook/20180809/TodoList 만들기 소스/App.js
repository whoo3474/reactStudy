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

  onComplete = () => {
    console.log('Function onComplete Start');
  }

  onDelete = () => {
    console.log('Function onDelete Start');
  }

  render() {

    //const { list } = this.state;
    //const todolist = list.map(
    //  list => (<Todo key={list.id} info={list}/>)
    //);
    console.log(this.state);

    return (
      <div className="todo-list-template">
        <div className="title">
          오늘 할 일
        </div>
        <TodoAdd onAdd={this.handleAdd}/>
        <TodoList />
      </div>
    );
  }
}

export default App;
