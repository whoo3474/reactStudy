import * as types from '../actions/ActionTypes';

const init = {
    color: 'red'
}

const color = (state = init, action) => {
    console.log(state);
    switch(action.type){
        case types.SET_COLOR:
            return {
                color: action.color
            }
        default:
            return state;

    }
};

export default color;