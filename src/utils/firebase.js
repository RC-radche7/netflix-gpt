// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMauc7G_37AJkgB6i7r0iVHtmIcTvw490",
  authDomain: "netflixgpt-e0141.firebaseapp.com",
  projectId: "netflixgpt-e0141",
  storageBucket: "netflixgpt-e0141.appspot.com",
  messagingSenderId: "92505041622",
  appId: "1:92505041622:web:3351c2a0f382ef48f3b777",
  measurementId: "G-T9T55GDL6L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);