import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAOew_DT7nU-d8lv0-LgWiyPT4WiOU9ihA",
  authDomain: "my-task-91afb.firebaseapp.com",
  projectId: "my-task-91afb",
  storageBucket: "my-task-91afb.appspot.com",
  messagingSenderId: "869299172238",
  appId: "1:869299172238:web:5191511342c79ec00beadf"
};

// app => objeto com todas as configurações do firebase
export const app = initializeApp(firebaseConfig);
// auth => objeto com as configurações de Authentication
export const auth = getAuth(app);
// db => objeto com as configurações do Firestore
export const db = getFirestore(app);