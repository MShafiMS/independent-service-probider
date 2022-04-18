// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDui5-bVtH43btHb7uNedTzJ7NxO2PbUjw",
  authDomain: "independent-service-prov-403df.firebaseapp.com",
  projectId: "independent-service-prov-403df",
  storageBucket: "independent-service-prov-403df.appspot.com",
  messagingSenderId: "698587692782",
  appId: "1:698587692782:web:96869a69d6c438a0253dff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;