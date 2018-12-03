import * as firebase from 'firebase';
import firebaseConf  from './config';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConf);
}

export const authRef = firebase.auth();