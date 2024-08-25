import React from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from "firebase/app";
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'


const firebaseConfig = {
  apiKey: "AIzaSyDM5skRI4BH0fLoAmgC3BjNoyXbU6oa5GQ",
  authDomain: "proyecto-c9078.firebaseapp.com",
  projectId: "proyecto-c9078",
  storageBucket: "proyecto-c9078.appspot.com",
  messagingSenderId: "420380923845",
  appId: "1:420380923845:web:e7bd7e021772a4b8649dac"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
