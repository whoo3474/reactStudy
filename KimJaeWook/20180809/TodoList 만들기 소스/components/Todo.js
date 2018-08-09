import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {

    handleComplete = () =>{        
        this.props.onComplete(this.props.data.idx);
    }

    handleDelete = () => {
        if(this.props.data.complete)
        {
            alert('완료처리된 할일은 삭제가 불가능합니다.');
            return;
        }
        this.props.onDelete(this.props.data.idx);
    }

    render()
    {
        const { todo, complete } = this.props.data;
        return(
            <div className="todo-item">                
                <div className="delete" onClick={this.handleDelete}>
                    &times;
                </div>
                <div className={`todo-text ${complete && 'checked'}`} onClick={this.handleComplete}>
                    {todo}
                </div>
                { complete && (<div className="check-mark">✓</div>)}
            </div>
        );
    }
}

export default Todo;