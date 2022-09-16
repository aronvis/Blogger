import firebase from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBIjqg8CRsPNbHWOTSn0rHyZc66puXQVzI",
    authDomain: "fir-aa29b.firebaseapp.com",
    projectId: "fir-aa29b",
    storageBucket: "fir-aa29b.appspot.com",
    messagingSenderId: "538440129184",
    appId: "1:538440129184:web:86212fd9f73c0dee2347c5",
    measurementId: "G-YHCT8KJ3YB"
};

if (!firebase.getApps.length) {
    firebase.initializeApp(firebaseConfig)
} 
  
