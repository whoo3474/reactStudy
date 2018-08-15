import React, { Component } from 'react';

class TodoForm extends Component {
  state = {
    title : '',
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  handleSubmit = (e)=>{
    e.preventDefault();
    this.props.onCreate(this.state);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <input name="title" onChange={this.handleChange}/>
        <button type="submit">버튼</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
