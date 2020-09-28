import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
//import collectionItemComponent from '../components/collection-item/collection-item.component';

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

export const createUserProfileDocument = async (userAuth, additionalData) => {

  if(!userAuth) return;
  
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get();
  const collectionRef = firestore.collection('users');
  const collectionSnapshot = await collectionRef.get();
  
  console.log({collection: collectionSnapshot.docs.map(doc =>doc.data())});
  
  if(!snapShot.exists){
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt, 
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef;
};



export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    console.log(collectionRef);
    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc();
      console.log(newDocRef);
      batch.set(newDocRef, obj);
    });
    return await batch.commit()

 };

 export const convertCollectionsSnapshotToMap = (collections) => {
   const transformedCollection = collections.docs.map( doc =>{
     const {title, items} = doc.data();

     return {
       routeName: encodeURI(title.toLowerCase()),
       id: doc.id,
       title,
       items
     }
   });
   return transformedCollection.reduce( (accumulator, collection ) =>{
    //set the property to collection title and then make that key to out collection itself 
    accumulator[collection.title.toLowerCase()] = collection;
     return accumulator;
   }, {})
  // console.log(transformedCollection);
 }


//google sign in 
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters( {prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;