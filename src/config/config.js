import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyC2mhJdxogyhPsookowwk2vKIHcAS3IIx8",
    authDomain: "bogota-routes.firebaseapp.com",
    databaseURL: "https://bogota-routes.firebaseio.com",
    projectId: "bogota-routes",
    storageBucket: "",
    messagingSenderId: "384695102688"
}

const firebaseConf = firebase.initializeApp(config);

export default firebaseConf;