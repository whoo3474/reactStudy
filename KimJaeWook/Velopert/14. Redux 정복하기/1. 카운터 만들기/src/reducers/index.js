// import * as types from '../actions/ActionTypes';
import color from './color';
import number from './number';

import { combineReducers } from 'redux';

// 리듀서를 하나로 합침
// const initialState = {
//     color: 'black',
//     number: 0
// }

// function counter(state = initialState, action){
//     switch(action.type){
//         case types.INCREMENT:
//             return {
//                 ...state,
//                 number: state.number + 1
//             };
//         case types.DECREMENT:
//             return {
//                 ...state,
//                 number: state.number - 1
//             };
//         case types.SET_COLOR:
//             return {
//                 ...state,
//                 color: action.color
//             };
//         default:
//             return state;
//     }
// }

// export default counter;

const reducers = combineReducers({
    numberData: number,
    colorData: color
});

export default reducers;