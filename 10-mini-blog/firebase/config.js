// Import the functions from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firebase'

// The app's configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAXJKOHc5cz76Jfukev9yyFG5k0viy5OM",
  authDomain: "miniblog-2023.firebaseapp.com",
  projectId: "miniblog-2023",
  storageBucket: "miniblog-2023.appspot.com",
  messagingSenderId: "1046787239261",
  appId: "1:1046787239261:web:1e7987df3d7c0ef8744cb4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Data base
const db = getFirestore(app);

export { db };