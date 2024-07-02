
import { initializeApp } from "firebase/app";
import {getAuth } from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB4aJy9fN8yqc5y_CY2JYcP5pbdxl2QB8w",
  authDomain: "recat-firebash.firebaseapp.com",
  projectId: "recat-firebash",
  storageBucket: "recat-firebash.appspot.com",
  messagingSenderId: "491304783506",
  appId: "1:491304783506:web:a2c7ca561196f2bbe2204b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const db = getFirestore(app);
