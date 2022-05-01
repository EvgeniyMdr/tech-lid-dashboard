import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBFNY8VZhvvW9WNKOfp1zEQOthJSDmMQ6o",
  authDomain: "tech-lid-bashboard.firebaseapp.com",
  projectId: "tech-lid-bashboard",
  storageBucket: "tech-lid-bashboard.appspot.com",
  messagingSenderId: "775500119325",
  appId: "1:775500119325:web:6e344867410eb8a37935f4",
};

export const firebaseApp = initializeApp(firebaseConfig);
