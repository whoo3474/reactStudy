import React, { Component } from 'react';

class Product extends Component{
    state = {
        count: 0,
    }

    btnClick = (e) => {
        if(this.state.count === 0 && e.target.value === "-"){
            alert("상품이 0개 일 경우 더이상 - 처리 불가능합니다.");
            return;
        }

        let num = (e.target.value === '+') ? 1 : -1;

        this.setState({
            count: this.state.count + num,
        });

        this.props.onSum(this.props.price * num);
    }
    
    render(){
        return(
            <div className="Product">
                <div className="Product-Name">{this.props.name}</div>
                <div className="Product-Detail">
                    <button className="btnCalc" onClick={this.btnClick} value="-">-</button>
                    <input className="Product-Count" type="text" value={this.state.count} readOnly />
                    <button className="btnCalc" onClick={this.btnClick} value="+">+</button>
                </div>
            </div>
        );
    }
}

export default Product;