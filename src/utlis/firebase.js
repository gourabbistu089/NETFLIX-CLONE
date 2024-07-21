// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBG0uCvp0U56oLgSiCuEdBFiqx6UzEVpfI",
  authDomain: "netflixgpt-d68e8.firebaseapp.com",
  projectId: "netflixgpt-d68e8",
  storageBucket: "netflixgpt-d68e8.appspot.com",
  messagingSenderId: "882403035657",
  appId: "1:882403035657:web:5463d19ced41b17a4b86d8",
  measurementId: "G-F99WK7DXSX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();



