// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUdfN8EoCI-Tmh5KxFISNJ2g46OXW55ow",
  authDomain: "simple-todo1-f04cd.firebaseapp.com",
  projectId: "simple-todo1-f04cd",
  storageBucket: "simple-todo1-f04cd.appspot.com",
  messagingSenderId: "959453268598",
  appId: "1:959453268598:web:e5a6a8112e540576e46d57",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
