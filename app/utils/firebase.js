import { initializeApp } from "firebase/app";
import { browserLocalPersistence, getAuth, sendPasswordResetEmail, setPersistence } from 'firebase/auth';
import 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyD6Z5CA5rDpf2195-bQOxe5MZxJoUXschs",
  authDomain: "voicenotes-2141e.firebaseapp.com",
  projectId: "voicenotes-2141e",
  storageBucket: "voicenotes-2141e.appspot.com",
  messagingSenderId: "1076246765588",
  appId: "1:1076246765588:web:3577e31586c0bfdec48701",
  measurementId: "G-XSZ5ES7XL5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export const auth = getAuth(app);
export const db = getFirestore(app);
export { sendPasswordReset };
export default app;

setPersistence(auth, browserLocalPersistence)