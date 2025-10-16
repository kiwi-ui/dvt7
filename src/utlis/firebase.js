// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTl2vEmcp3VRvJm4igHk7PfsN4svghHOU",
  authDomain: "dvt7-79e11.firebaseapp.com",
  projectId: "dvt7-79e11",
  storageBucket: "dvt7-79e11.firebasestorage.app",
  messagingSenderId: "863955747683",
  appId: "1:863955747683:web:29ac343602cd6c355cc956"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

