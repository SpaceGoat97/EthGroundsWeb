
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDioqBXpSobn-B7trEp---AL7VYbDA5XpY",
    authDomain: "ethgrounds.firebaseapp.com",
    databaseURL: "https://ethgrounds.firebaseio.com",
    projectId: "ethgrounds",
    storageBucket: "ethgrounds.appspot.com",
    messagingSenderId: "371316291034",
    appId: "1:371316291034:web:4d9787e01c5a25851a7ce3",
    measurementId: "G-P3ZQLBGQ0G"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const db = firebase.firestore();