import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBpUZSKQWYhXu3h6ogrDCaYMEJ0brSJIu4",
  authDomain: "the-message-project-9c56c.firebaseapp.com",
  projectId: "the-message-project-9c56c",
  storageBucket: "the-message-project-9c56c.appspot.com",
  messagingSenderId: "388071172685",
  appId: "1:388071172685:web:cf79e3f0388905c6340a04",
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();
//timestamp
const timestamp = firebase.firestore.timestamp;

export { projectFirestore, projectAuth, timestamp, projectStorage };
