// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{ getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGi3ndUC1b4SFNstliSSVryu7_ymXEkZc",
  authDomain: "match-home-7d1f9.firebaseapp.com",
  databaseURL: "https://match-home-7d1f9-default-rtdb.firebaseio.com",
  projectId: "match-home-7d1f9",
  storageBucket: "match-home-7d1f9.appspot.com",
  messagingSenderId: "747751099607",
  appId: "1:747751099607:web:29d1e5beda87c847dfb492"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)