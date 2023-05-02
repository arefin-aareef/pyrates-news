// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAu3RIoLXw2MQUakmbNZjg20mFkmpYnJeg",
  authDomain: "pyrates-news.firebaseapp.com",
  projectId: "pyrates-news",
  storageBucket: "pyrates-news.appspot.com",
  messagingSenderId: "489387402313",
  appId: "1:489387402313:web:acdfc502a02bb53b9fcb98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;