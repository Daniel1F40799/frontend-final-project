import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDYINk_aozzXuBaQ7T9JZsc0Dm-EC2cCk8",
  authDomain: "studyconnect-85c54.firebaseapp.com",
  projectId: "studyconnect-85c54",
  storageBucket: "studyconnect-85c54.appspot.com",
  messagingSenderId: "857818834031",
  appId: "1:857818834031:web:4ed687931288d544f1199a",
  measurementId: "G-ZWY21T9LXF"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
