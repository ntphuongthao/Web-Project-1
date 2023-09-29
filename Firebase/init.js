// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signOut,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXbCCB2tSKE__ox3zIdd_c12a5jMpsluY",
  authDomain: "webdev-99f7a.firebaseapp.com",
  projectId: "webdev-99f7a",
  storageBucket: "webdev-99f7a.appspot.com",
  messagingSenderId: "61608388832",
  appId: "1:61608388832:web:0417f528ee9a9cc87f8885",
  measurementId: "G-GXSYB1LZ65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


// signOut(auth).then(() => {
//     // Sign-out successful.
//   }).catch((error) => {
//     // An error happened.
//   });
  