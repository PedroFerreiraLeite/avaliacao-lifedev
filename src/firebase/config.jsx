import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCARs5MNVLn8yGtdzq5lD6hnOeuq8ZVeac",
  authDomain: "mini-blog-lifedev.firebaseapp.com",
  projectId: "mini-blog-lifedev",
  storageBucket: "mini-blog-lifedev.firebasestorage.app",
  messagingSenderId: "651454195359",
  appId: "1:651454195359:web:6947e43e35f834f24324aa",
  measurementId: "G-MSEW4K2Z4L"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { db, auth, provider }