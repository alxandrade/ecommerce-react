// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwbwv1-fyjdS0P2EM3L4gjjFuWDfWEZVw",
  authDomain: "ecommerce-react-e5a21.firebaseapp.com",
  projectId: "ecommerce-react-e5a21",
  storageBucket: "ecommerce-react-e5a21.appspot.com",
  messagingSenderId: "583707938539",
  appId: "1:583707938539:web:43ec857b8d03270e16f8ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);