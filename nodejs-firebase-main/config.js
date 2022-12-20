const firebase = require("firebase");
const firebaseConfig = {
  apiKey: "AIzaSyCOMgcUjkn1rFgi4PAS6z5QwOr6dPCIpss",
  authDomain: "regapp-8c4b5.firebaseapp.com",
  projectId: "regapp-8c4b5",
  storageBucket: "regapp-8c4b5.appspot.com",
  messagingSenderId: "373223490516",
  appId: "1:373223490516:web:2f2fae350f36c52e5e8c41",
  measurementId: "G-L83C61680L"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const User = db.collection("Users");
module.exports = User;
