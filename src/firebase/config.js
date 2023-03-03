// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword  } from "firebase/auth";
import { getStorage, getDownloadURL, ref as refStorage} from "firebase/storage";
import { collection, getDocs, doc, getDoc, addDoc, getFirestore  } from 'firebase/firestore';

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

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(firebase);

// Create a reference with an initial file path and name
const storage = getStorage();

// Initialize Cloud Firestore and get a reference to the service

const db = getFirestore(firebase);

export { collection, getDocs, doc, getDoc, addDoc, refStorage, storage, getDownloadURL, db, auth, createUserWithEmailAndPassword };
