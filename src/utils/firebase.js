// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbw2RJquQZA2eEQej77J1Rn_hJckzZ-wE",
  authDomain: "netflixgpt-2700c.firebaseapp.com",
  projectId: "netflixgpt-2700c",
  storageBucket: "netflixgpt-2700c.appspot.com",
  messagingSenderId: "845871593700",
  appId: "1:845871593700:web:02471ac34b89fe1ad614f1",
  measurementId: "G-LMWJSY54MJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();