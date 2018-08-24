import { createAction, handleActions } from 'redux-actions';

import { Map, List } from 'immutable';

// 액션타입 정의
const CREATE = 'counter/CREATE';
const REMOVE = 'counter/REMOVE';
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';
const SET_COLOR = 'counter/SET_COLOR';

// 액션 생성자 정의
// 파라미터를 주석으로 적어놓음
export const create = createAction(CREATE);         //color
export const remove = createAction(REMOVE);         
export const increment = createAction(INCREMENT);   //index
export const decrement = createAction(DECREMENT);   //index
export const setColor = createAction(SET_COLOR);    //index, color

// state 초기화
const init = Map({
    counters: List([
        Map({
            color: 'red',
            number: 0
        })
    ])
});

// 리듀서 틀 생성
export default handleActions({
    [CREATE]: (state, action) => {
        const counters = state.get('counters');
        return state.set('counters', counters.push(
            Map({
                color: action.payload,
                number: 0                
            })
        ));
    },
    [REMOVE]: (state, action) => {
        const counters = state.get('counters');
        return state.set('counters', counters.pop());
    },
    [INCREMENT]: (state, action) => {
        const counters = state.get('counters');
        return state.set('counters', counters.setIn([action.payload, 'number'], counters.getIn([action.payload, 'number']) + 1));
    },
    [DECREMENT]: (state, action) => {
        const counters = state.get('counters');
        return state.set('counters', counters.setIn([action.payload, 'number'], counters.getIn([action.payload, 'number']) - 1));
    },
    [SET_COLOR]: (state, action) => {
        const counters = state.get('counters');                
        return state.set('counters', counters.setIn([action.payload.index, 'color'], action.payload.color));
    },
}, init);

