// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPxxWdANWBicnhuJCZmVOUMxcm8w4SwrE",
  authDomain: "mehedi-hasan-nabil.firebaseapp.com",
  projectId: "mehedi-hasan-nabil",
  storageBucket: "mehedi-hasan-nabil.appspot.com",
  messagingSenderId: "261273968357",
  appId: "1:261273968357:web:7615d826a917d5a3acbe0c",
  measurementId: "G-SWQ291952E",
};

// Initialize Firebase
const initializeFirebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default initializeFirebaseApp;
