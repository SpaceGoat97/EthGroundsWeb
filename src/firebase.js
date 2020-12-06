
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import svelte from 'rollup-plugin-svelte';
import replace from '@rollup/plugin-replace';
import dotenv from 'dotenv';

dotenv.config();


var firebaseConfig = {
    apiKey: process.env.DB,
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