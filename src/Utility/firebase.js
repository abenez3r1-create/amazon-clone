import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD4lJrUNMQfuS12QyY44CoexoZV3hfRPJk",
  authDomain: "clone-47671.firebaseapp.com",
  projectId: "clone-47671",
  storageBucket: "clone-47671.appspot.com",
  messagingSenderId: "736945052312",
  appId: "1:736945052312:web:692919f9a758e1af024eed",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
