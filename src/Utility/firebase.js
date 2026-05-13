import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD4lJrUNMQfuS12QyY44CoexoZV3hfRPJk",
  authDomain: "clone-47671.firebaseapp.com",
  projectId: "clone-47671",
  storageBucket: "clone-47671.firebasestorage.app",
  messagingSenderId: "736945052312",
  appId: "1:736945052312:web:692919f9a758e1af024eed",
};

// Initialize Firebase

const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore;
