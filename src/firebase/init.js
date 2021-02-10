import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7WFy06N6Hyr8VVdWYqBc5AvxttWw15DU",
  authDomain: "sassysisters-style.firebaseapp.com",
  projectId: "sassysisters-style",
  storageBucket: "sassysisters-style.appspot.com",
  messagingSenderId: "1031106772542",
  appId: "1:1031106772542:web:bd1bac773c9d4260d9db6f",
  measurementId: "G-F6MZXVF4Z4",
};

const initializeFirebase = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app(); // if already initialized, use that one
  }
};

export default initializeFirebase;
