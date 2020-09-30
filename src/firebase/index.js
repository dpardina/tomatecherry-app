import * as firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyB1c2MDMy_Jz02Pw3u4gU1XGW1zxKzuebg",
    authDomain: "tomatecherry-app.firebaseapp.com",
    databaseURL: "https://tomatecherry-app.firebaseio.com",
    projectId: "tomatecherry-app",
    storageBucket: "tomatecherry-app.appspot.com",
    messagingSenderId: "610292083723",
    appId: "1:610292083723:web:c6611551ce2ce5f9e12b0e"
})

export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app);
}