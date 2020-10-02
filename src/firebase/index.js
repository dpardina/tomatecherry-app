import * as firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: ,
    authDomain: ,
    databaseURL: ,
    projectId: ,
    storageBucket: ,
    messagingSenderId: ,
    appId: 
})

export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app);
}