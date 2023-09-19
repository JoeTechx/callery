// import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";

import "firebase/compat/auth";
import "firebase/compat/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDd3ZgejNlE-OmPvBYWbykMb4QpmE9vT3Q",
  authDomain: "callery-fcad7.firebaseapp.com",
  projectId: "callery-fcad7",
  storageBucket: "callery-fcad7.appspot.com",
  messagingSenderId: "135948808745",
  appId: "1:135948808745:web:e8239b4e239a86f4f76238"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export default app;