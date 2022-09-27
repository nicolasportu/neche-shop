// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVgrOukMjZtA8Zzs4FNs9dUT6oN0r33ZM",
  authDomain: "neche-shop.firebaseapp.com",
  projectId: "neche-shop",
  storageBucket: "neche-shop.appspot.com",
  messagingSenderId: "370536401021",
  appId: "1:370536401021:web:6607625ea0712c327e0914"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);