import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';

// 액션 타입 정의
const CHANGE_INPUT  = 'todo/CHANGE_INPUT';
const INSERT        = 'todo/INSERT';
const TOGGLE        = 'todo/TOGGLE';
const REMOVE        = 'todo/REMOVE';

// 액션 함수 정의
export const changeInput    = createAction(CHANGE_INPUT , value => value);
export const insert         = createAction(INSERT       , text => text);
export const toggle         = createAction(TOGGLE       , id => id);
export const remove         = createAction(REMOVE       , id => id);

// todo list에 들어갈 고유 값
let id = 0; 

// 초기화
const initialState = Map({
    input: '',
    todos: List()
});

export default handleActions({
    // 한줄짜리 코드로 반환 할 수 있는 경우엔 다음과 같이 블록 { } 를 생략 할 수 있습니다.
    [CHANGE_INPUT]: (state, action) => {
        return state.set('input', action.payload);
    },
    [INSERT]: (state, { payload: text }) => {
        // 위 코드는 action 객체를 비구조화 할당하고, payload 값을 text 라고 부르겠다는 의미입니다.
        const item = Map({ id: id++, checked: false, text }); // 하나 추가 할 때마다 id 값을 증가시킵니다.
        return state.update('todos', todos => todos.push(item));
    },
    [TOGGLE]: (state, { payload: id }) => {
        // id 값을 가진 index 를 찾아서 checked 값을 반전시킵니다
        const index = state.get('todos').findIndex(item => item.get('id') === id);
        return state.updateIn(['todos', index, 'checked'], checked => !checked);
    },
    [REMOVE]: (state, { payload: id }) => {
        // id 값을 가진 index 를 찾아서 지웁니다.
        const index = state.get('todos').findIndex(item => item.get('id') === id);
        return state.deleteIn(['todos', index]);
    }
}, initialState);