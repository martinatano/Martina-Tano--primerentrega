import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import products from './mocks/products.json';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {addDoc, collection, getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbBTT5IOEqd9DzzefCrEJ3zxw5Ib1Wue8",
  authDomain: "cafemarleene.firebaseapp.com",
  projectId: "cafemarleene",
  storageBucket: "cafemarleene.appspot.com",
  messagingSenderId: "758619216870",
  appId: "1:758619216870:web:cc983a74642536132cd427",
  measurementId: "G-VCSR0N9QPC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app)

// products.forEach((product) => {
//   addDoc (collection (db, 'products'), product)
//   .then((docRef => {
//     console.log('documento agregadocon id: ', docRef.id)
//   }))
//   .catch((error) => {
//     console.log('error al agregar doc', error)
//   })
// })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
