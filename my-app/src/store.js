import {createStore} from 'redux';

const INITIAL_STATE = {
    data: ['Petr', 'Ivan', 'Mando']
};

function names(state=INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_NAME':
            return{...state, data: [ ...state.data, action.payload]};
        default:
            return state;
    }
}

const store = createStore(names);

export default store;