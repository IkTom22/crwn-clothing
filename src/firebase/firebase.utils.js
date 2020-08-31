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
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;
  
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get();
  
  if(!snapShot.exists){
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt, 
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters( {prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;