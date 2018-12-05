import { authRef } from '../config/firebase';
import history from '../utils/history';

export const userLogin = (username, password) =>  dispatch => {
  authRef
    .signInWithEmailAndPassword(username, password)
    .then(result => {
      dispatch({
        type: 'USER_LOGIN',
        user: result.user,
      });
      history.push('dashboard')
    })
    .catch(error => {
      dispatch({
        type: 'LOGIN_ERROR',
        errorMessage: error.message,
      });
    });
};