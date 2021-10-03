import React from 'react';
import ReactDom from 'react-dom';
import App from './app';
import './css/NavBar.module.css';
import { initializeApp } from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQ1krGx0AAq98s9Uhs_D6a0iu6iHysyqg",
  authDomain: "jobhound-7cfeb.firebaseapp.com",
  projectId: "jobhound-7cfeb",
  storageBucket: "jobhound-7cfeb.appspot.com",
  messagingSenderId: "447508536494",
  appId: "1:447508536494:web:e49d629aafb6e506fca13f"
};
const app = initializeApp(firebaseConfig);

// Initialize Firebase
//Dammit Alex
ReactDom.render(<App/>, document.getElementById('App'));