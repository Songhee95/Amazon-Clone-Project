// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAuCSYSybWI8yRMTxs2k4jFbVGwZ-iNaM0",
  authDomain: "clone-eec21.firebaseapp.com",
  projectId: "clone-eec21",
  storageBucket: "clone-eec21.appspot.com",
  messagingSenderId: "943702347818",
  appId: "1:943702347818:web:cc41e39ea607376c717353",
  measurementId: "G-YL9DG5G2T2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

//initialize database
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
