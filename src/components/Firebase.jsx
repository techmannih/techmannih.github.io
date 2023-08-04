import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import "firebase/compat/firestore";

   const firebaseApp =firebase.initializeApp({
  apiKey: "AIzaSyD8svpbbgfdRW8kxO7wQWuCbZ1sda4AjnY",
  authDomain: "portfolio-contact-form-b4e95.firebaseapp.com",
  databaseURL: "https://portfolio-contact-form-b4e95-default-rtdb.firebaseio.com",
  projectId: "portfolio-contact-form-b4e95",
  storageBucket: "portfolio-contact-form-b4e95.appspot.com",
  messagingSenderId: "907608729792",
  appId: "1:907608729792:web:dc3ab0a89060a26582e525"
});


const db =firebaseApp.firestore();

export { db };
