
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';



const firebaseConfig = {
  apiKey: "AIzaSyCyDbB99SzpnKRgwwhFOlSxWIrUKzQfQqw",
  authDomain: "taskmn-c736c.firebaseapp.com",
  projectId: "taskmn-c736c",
  storageBucket: "taskmn-c736c.appspot.com",
  messagingSenderId: "903686105596",
  appId: "1:903686105596:web:63089e6b2aee923199aa79"
};


// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
console.log('Firebase initialized:', firebaseApp);

export const authPersist = initializeAuth(firebaseApp, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});