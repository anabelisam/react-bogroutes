import { authRef } from '../config/firebase';

export const userLogin = (username, password) =>  dispatch => {
  authRef
    .signInWithEmailAndPassword(username, password)
    .then(result => {
      dispatch({
        type: 'USER_LOGIN',
        user: result.user,
      })
    })
    .catch(error => {
      console.log(error);
    });
};