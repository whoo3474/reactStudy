import Counter from '../components/Counter';
import * as actions from '../actions';
import { connect } from 'react-redux';
import { getRandomColor } from '../util';

// store 안에 state 값을 props로 연결
const mapStateToProps = (state) => ({
    color: state.colorData.color,
    number: state.numberData.number
});

// const mapStateToProps = (state) => {
//     console.log(state);
//     console.log(state.colorData.color);
// }

// 액션 생성자를 이용하여 액션을 생성
// 액션을 dispatch하는 함수를 만들어 이를 props로 연결
const mapDispatchToProps = (dispatch) => ({
    onIncrement: () => dispatch(actions.increment()),
    onDecrement: () => dispatch(actions.decrement()),
    onSetColor:  () => {
        const color = getRandomColor();
        dispatch(actions.setColor(color));
    }
});

// Counter 컴포넌트 어플리케이션의 데이터 레이어와 묶는 역할
const CounterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

export default CounterContainer;