// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCRBKIAxL-lkEfn3hTyXjqmtGd4HVsk9VU",
  authDomain: "portfolio-9536d.firebaseapp.com",
  projectId: "portfolio-9536d",
  storageBucket: "portfolio-9536d.firebasestorage.app",
  messagingSenderId: "671292016924",
  appId: "1:671292016924:web:8ce1db1a9d863d2eb152d9",
  measurementId: "G-FXQQPTM81N"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
