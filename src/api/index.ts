import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBFNY8VZhvvW9WNKOfp1zEQOthJSDmMQ6o",
  authDomain: "tech-lid-bashboard.firebaseapp.com",
  databaseURL:
    "https://tech-lid-bashboard-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "tech-lid-bashboard",
  storageBucket: "tech-lid-bashboard.appspot.com",
  messagingSenderId: "775500119325",
  appId: "1:775500119325:web:6e344867410eb8a37935f4",
};

export const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);
