// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBELpVyzvS8ZMjngP-RjgcrkH2tJtyQTY",
  authDomain: "pedro-b5bf3.firebaseapp.com",
  projectId: "pedro-b5bf3",
  storageBucket: "pedro-b5bf3.appspot.com",
  messagingSenderId: "520828741972",
  appId: "1:520828741972:web:b8ee30b703eb12d476c0c1",
  measurementId: "G-YRJ53ZGY76",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth, app };
