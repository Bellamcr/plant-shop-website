// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from'firebase/storage';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBATOyWynTAoOOdPIk99Wcp-f8Pgr_kZ0",
  authDomain: "greenhouse-db1e8.firebaseapp.com",
  projectId: "greenhouse-db1e8",
  storageBucket: "greenhouse-db1e8.appspot.com",
  messagingSenderId: "725805714548",
  appId: "1:725805714548:web:e668a248b04bb837c71521",
  measurementId: "G-1HQRW9FS9E"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore();
const storage = getStorage();

export {auth, db, storage};