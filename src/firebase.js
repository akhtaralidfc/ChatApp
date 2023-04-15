import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  authDomain: "chat-e3372.firebaseapp.com",
  projectId: "chat-e3372",
  storageBucket: "chat-e3372.appspot.com",
  messagingSenderId: "491953578793",
  appId: "1:491953578793:web:ae0de3f38ff55ee2740d38"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
