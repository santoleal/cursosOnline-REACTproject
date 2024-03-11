import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGSloconkQCUJ3flBtVqbU4xRBzGCHZ9k",
  authDomain: "cursos-online-2024.firebaseapp.com",
  projectId: "cursos-online-2024",
  storageBucket: "cursos-online-2024.appspot.com",
  messagingSenderId: "771227733309",
  appId: "1:771227733309:web:bad7f29f04a76ea1d54954",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
