import React, { Component } from 'react';

class Button extends Component {
    state = {
        price: 0,
    }

    handleCalc = (e) => {
        console.log('test');
        console.log(e.target.value);
    }

    render(){
        return(
            <button onClick={this.handleCalc}>{this.props.value}</button>
        );
    }
}

export default Button;