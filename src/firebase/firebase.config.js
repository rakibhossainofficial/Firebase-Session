import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
 

const firebaseConfig = {
  apiKey: "AIzaSyArFqfa9JZL6E-WTzY7LznW84XfapiGzhI",
  authDomain: "intro-sign-in.firebaseapp.com",
  projectId: "intro-sign-in",
  storageBucket: "intro-sign-in.firebasestorage.app",
  messagingSenderId: "330103233157",
  appId: "1:330103233157:web:a1af582c9c19fe614167ec",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)


