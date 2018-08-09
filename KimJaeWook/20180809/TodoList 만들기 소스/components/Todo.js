import React, { Component } from 'react';

class Todo extends Component {

    handleComplete = () =>{
        this.props.onComplete(this.props.data.idx);
    }

    handleDelete = () => {
        this.props.onDelete(this.props.data.idx);
    }

    render()
    {
        return(
            <div>
                {this.props.data.todo}
                <button onClick={this.handleComplete}>완료</button>
                <button onClick={this.handleDelete}>삭제</button>
            </div>
        );
    }
}

export default Todo;