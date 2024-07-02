// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoZT38U3TEYe099yVX_bUEu8emjz40BDs",
  authDomain: "bazarapp-e8c8e.firebaseapp.com",
  projectId: "bazarapp-e8c8e",
  storageBucket: "bazarapp-e8c8e.appspot.com",
  messagingSenderId: "753995517263",
  appId: "1:753995517263:web:70879101214a346cdac93a",
  measurementId: "G-J6MYWQZBK1"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
