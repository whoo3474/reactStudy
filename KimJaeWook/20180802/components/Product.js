import React, { Component } from 'react';

class Product extends Component{
    state = {
        name: '',
        price: 0,
        sum: 0,
    }
    
    render(){
        return(
            <input type="text" value={this.state.sum} readOnly />
        );
    }
}

export default Product;