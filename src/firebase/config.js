// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyARAaCu517pXp2KuuiwrgfvpzWme7ZvKXc",
    authDomain: "altermovie-fa9ac.firebaseapp.com",
    projectId: "altermovie-fa9ac",
    storageBucket: "altermovie-fa9ac.appspot.com",
    messagingSenderId: "166898818105",
    appId: "1:166898818105:web:8d3abe9daa1210dbcac1e8",
    measurementId: "G-EFDJY2BZ9V"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service

export const db = getFirestore(firebase);
export { collection, getDocs, doc, getDoc };
