// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBABhDQWO4lKXaUrWFui3SzLSFPh7G4NpQ",
  authDomain: "all-job-tasks.firebaseapp.com",
  projectId: "all-job-tasks",
  storageBucket: "all-job-tasks.appspot.com",
  messagingSenderId: "450573020402",
  appId: "1:450573020402:web:3a951e78025130ca09746b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);