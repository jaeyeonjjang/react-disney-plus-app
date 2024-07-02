// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxocGQmqksF7a7Wv3drI5xOeKS-pzGyTQ",
  authDomain: "react-disney-plus-app-9d481.firebaseapp.com",
  projectId: "react-disney-plus-app-9d481",
  storageBucket: "react-disney-plus-app-9d481.appspot.com",
  messagingSenderId: "90844906744",
  appId: "1:90844906744:web:0908b0e4a159eb1445670d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;