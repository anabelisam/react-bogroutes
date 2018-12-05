import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  user: {},
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_LOGIN':
      return {
        ...state,
        user: action.user
      }
    case 'LOGIN_ERROR':
      return {
        ...state,
        errorMessage: action.errorMessage
      }
    default:
      return state;
  };
}
export default createStore(reducer, applyMiddleware(thunk));
