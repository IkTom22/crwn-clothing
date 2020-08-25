import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =  {
    apiKey: "AIzaSyB0SAqxn4dy93QR222eeO3oXw1d8QEvOo0",
    authDomain: "crwn-db-52f3c.firebaseapp.com",
    databaseURL: "https://crwn-db-52f3c.firebaseio.com",
    projectId: "crwn-db-52f3c",
    storageBucket: "crwn-db-52f3c.appspot.com",
    messagingSenderId: "943502831223",
    appId: "1:943502831223:web:722b5439969157b34b6072"
  };


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters( {prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;