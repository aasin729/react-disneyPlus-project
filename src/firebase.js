// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAI-Y2eTOnmvi6aFlXQ31mcHiTwdoaXpfo",
  authDomain: "react-disney-plus-app-7b50d.firebaseapp.com",
  projectId: "react-disney-plus-app-7b50d",
  storageBucket: "react-disney-plus-app-7b50d.firebasestorage.app",
  messagingSenderId: "684138354294",
  appId: "1:684138354294:web:53a2f43dfb22bb98aef157"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;