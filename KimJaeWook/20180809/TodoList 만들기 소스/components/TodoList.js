import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
    static defaultProps = {
        todolist: [],
        onComplete: () => console.warn('onComplete not defined'),
        onDelete: () => console.warn('onDelete not defined')   
    }

    render(){
        const { data, onComplete, onDelete } = this.props;
        const list = data.map(
            todo => (
                <Todo 
                    key={todo.idx}
                    data={todo}
                    onComplete={onComplete}
                    onDelete={onDelete}
                />
            )
        );
        return(
            <div className="todos-wrapper">
                {list}
            </div>
        );
    }
}

export default TodoList;