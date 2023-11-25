
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCyDbB99SzpnKRgwwhFOlSxWIrUKzQfQqw",
  authDomain: "taskmn-c736c.firebaseapp.com",
  projectId: "taskmn-c736c",
  storageBucket: "taskmn-c736c.appspot.com",
  messagingSenderId: "903686105596",
  appId: "1:903686105596:web:63089e6b2aee923199aa79"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
console.log('Firebase initialized:', app);

export default app;

// export const firebaseApp = initializeApp(firebaseConfig);
export const auth =getAuth(firebaseApp);
export const db = getFirestore()