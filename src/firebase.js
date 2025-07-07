// firebase.js

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics"; // Optional in dev

const firebaseConfig = {
  apiKey: "AIzaSyDqyBunpiObvH4nvkenOniGEe1sU1sx_BI",
  authDomain: "clone-ae836.firebaseapp.com",
  projectId: "clone-ae836",
  storageBucket: "clone-ae836.firebasestorage.app",
  messagingSenderId: "463498488509",
  appId: "1:463498488509:web:fd46e97e00e603c355a5d4",
  measurementId: "G-PT2DK0KPBS",
};

const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);           
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
