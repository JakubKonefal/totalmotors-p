// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getFirestore as getFirestore2 } from 'firebase/firestore';

import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyD2eclJLRCa71uN0_USfmqb-DT8-ev2Jh8',
  authDomain: 'sprzedamtwojsamochod.firebaseapp.com',
  projectId: 'sprzedamtwojsamochod',
  storageBucket: 'sprzedamtwojsamochod.appspot.com',
  messagingSenderId: '474205725821',
  appId: '1:474205725821:web:0f6fa0daeb1295042fbd14',
  measurementId: 'G-JHHE6Z9PR0',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// export const auth = app.auth();
// export const firestoreDB = getFirestore(app);
// export const firestoreDB2 = getFirestore2(app);
