import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBG45_ngqZ6juduWhtk3l9chmkW5sNkAkw",
  authDomain: "dashboard-95325.firebaseapp.com",
  projectId: "dashboard-95325",
  storageBucket: "dashboard-95325.appspot.com",
  messagingSenderId: "557683251321",
  appId: "1:557683251321:web:8d80bbe7a7650b4c69dca8",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
