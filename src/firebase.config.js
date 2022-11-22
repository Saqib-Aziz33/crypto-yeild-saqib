// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXQf6HDMY1F_WWTYWC0IQv2L7HTHcgqd0",
  authDomain: "contact-forms-35a5f.firebaseapp.com",
  projectId: "contact-forms-35a5f",
  storageBucket: "contact-forms-35a5f.appspot.com",
  messagingSenderId: "1012082226810",
  appId: "1:1012082226810:web:80115f8dc6c70e1f29adc3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
