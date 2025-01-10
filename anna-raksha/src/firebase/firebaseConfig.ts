// src/firebase/firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAVWdg1WCR39no2XDN70PGRl1CrR-AGlXA",
    authDomain: "anna-rakshaka.firebaseapp.com",
    projectId: "anna-rakshaka",
    storageBucket: "anna-rakshaka.firebasestorage.app",
    messagingSenderId: "97071651413",
    appId: "1:97071651413:web:16564a9382976eddfcd2dc"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
