// Import the functions you need from the SDKs you need
import * as firebase from 'firebase'
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEJ12pzEwI3pWDkF5WDov1RmrjIaCcm9Y",
  authDomain: "photowall-17cca.firebaseapp.com",
  databaseURL: "https://photowall-17cca-default-rtdb.firebaseio.com",
  projectId: "photowall-17cca",
  storageBucket: "photowall-17cca.appspot.com",
  messagingSenderId: "126772233505",
  appId: "1:126772233505:web:96ce8329a3fd1271deaa60",
  measurementId: "G-T1NMXFHL3K"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

firebase.initializeApp(firebaseConfig)
const database = firebase.database()

export { database }