// firebase.js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7RbSt4o-0nqbZs5rwnVm7h0nBWbIN10A",
  authDomain: "inventory-management-app-1caac.firebaseapp.com",
  projectId: "inventory-management-app-1caac",
  storageBucket: "inventory-management-app-1caac.appspot.com",
  messagingSenderId: "708991546365",
  appId: "1:708991546365:web:e4dc553a7793b48a559f94",
  measurementId: "G-K6NZNSXD17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export { firestore };
