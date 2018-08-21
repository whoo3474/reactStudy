import { createAction, handleActions } from 'redux-actions';

// 액션 타입 정의
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

// 액션 함수 정의
export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);

// 초기화
const init = {
    number: 0
};

// // 리듀서를 만들어서 내보내줌
// export default function reducer(state = initialState, action){
//     // 액션 타입에 따라 로직 정의
//     switch(action.type){
//         case INCREMENT:
//             return { number: state.number + 1 };
//         case DECREMENT:
//             return { number: state.number - 1 };        
//         default:
//         // 정해진 액션 타입이 아닐 경우 기존 상태 반환
//             return state;
//     }
// }

export default handleActions({
    [INCREMENT]: (state, action) => {
        console.log(state);
        return { number: state.number + 1 };
    },

    [DECREMENT]: ({ number }) => {
        return ({ number: number - 1 });
    }
}, init);