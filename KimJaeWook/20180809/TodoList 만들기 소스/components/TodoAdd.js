import React, { Component } from 'react';
import './TodoAdd.css';

class TodoAdd extends Component {
    state = {
        todo: ''
    }

    handleChange = (e) => {
        this.setState({
            todo: e.target.value
        });
    }

    handleSubmit = (e) => {
        //페이지 리로딩 방지
        e.preventDefault();

        if(this.state.todo.trim().length === 0)
        {
            alert('빈값 또는 공백을 입력할 수 없습니다.');
            return;
        }        

        //부모에게 입력값 전달
        this.props.onAdd(this.state);
        //값 초기화
        this.setState({
            todo: ''
        });
    }

    render()
    {
        return(
            <form className="form" onSubmit={this.handleSubmit}>
                <div className="form-wrapper">
                <input 
                    type="text" 
                    placeholder="할일" 
                    onChange={this.handleChange}
                    value={this.state.todo} 
                /> 
                <button className="create-button" type="submit">추가</button>
                </div>
            </form>
        );
    }
}

export default TodoAdd;