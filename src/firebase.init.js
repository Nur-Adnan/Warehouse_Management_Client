// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDjIHWpOWAdiz4P6zXjeHrVI1fxjOLJQw",
  authDomain: "assignment11-8de4c.firebaseapp.com",
  projectId: "assignment11-8de4c",
  storageBucket: "assignment11-8de4c.appspot.com",
  messagingSenderId: "653586123858",
  appId: "1:653586123858:web:05e54c5952d67ee3a6638b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;