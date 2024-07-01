// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0BsokegsrV3MCAyg4LHdt6jNdoBmnH4k",
  authDomain: "eventos-santamarta.firebaseapp.com",
  projectId: "eventos-santamarta",
  storageBucket: "eventos-santamarta.appspot.com",
  messagingSenderId: "887473203225",
  appId: "1:887473203225:web:fa0fcc4da37d3ebb34a288"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase