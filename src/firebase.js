import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB3X9JzfIHK4CFY3kfqJr8iYPb5MtGTUcU",
  authDomain: "react-task-last.firebaseapp.com",
  projectId: "react-task-last",
  storageBucket: "react-task-last.appspot.com",
  messagingSenderId: "777444655790",
  appId: "1:777444655790:web:bfc4f3d4eb60ea9b5b233f",
  measurementId: "G-XXFRTQRKVR"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
