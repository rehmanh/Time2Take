// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPvdLVaCuJLqdxsFpFDNci2YpzudeRmik",
  authDomain: "time2take-c2a79.firebaseapp.com",
  projectId: "time2take-c2a79",
  storageBucket: "time2take-c2a79.appspot.com",
  messagingSenderId: "735338400270",
  appId: "1:735338400270:web:3eb11181bf31bbc9000a5f",
  measurementId: "G-HHG3321MLS"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
