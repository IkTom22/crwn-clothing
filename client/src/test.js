import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('3WSHxOOsXvurs7hpWVkL').collection('May')
firestore.doc('/user/3WSHxOOsXvurs7hpWVkL/May')
firebase.collection('/users')