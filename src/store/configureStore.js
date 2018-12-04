import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
    user: {}
}

const reducer = (state=initialState, action) => {
    if(action.type === 'USER_LOGIN') {
        return {
            ...state,
            user: action.user
        }
    }
    return state;
};

export default createStore(reducer, applyMiddleware(thunk));