// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
} from "firebase/auth";

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
export const db = getFirestore(app);




  