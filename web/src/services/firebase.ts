import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA3Fi1GOaZgPFzEgL1uB4-bUBz0fSSLu4g",
  authDomain: "feedwidget-lg13.firebaseapp.com",
  projectId: "feedwidget-lg13",
  storageBucket: "feedwidget-lg13.appspot.com",
  messagingSenderId: "551070414475",
  appId: "1:551070414475:web:831210623d4ca2f2cac68e",
  measurementId: "G-097W506LR6",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export { firebase, auth };
