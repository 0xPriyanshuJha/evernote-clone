import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

require('firebase/firestore');


const firebaseConfig = {
  apiKey: "AIzaSyDlGDtf8rKjok07Z5QCFhzDgKJjw3A98-g",
  authDomain: "evernote-clone-a8070.firebaseapp.com",
  projectId: "evernote-clone-a8070",
  storageBucket: "evernote-clone-a8070.appspot.com",
  messagingSenderId: "221313043814",
  appId: "1:221313043814:web:a6798c8e90701319bd4ca7",
  measurementId: "fG-XB1VHEFJMK"
};


const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('evernote-container'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
