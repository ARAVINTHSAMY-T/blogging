// Firebase initialization for browser modules (v9+ modular SDK)
// This file imports the SDK from the official CDN and exports initialized services.

import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.13.0/firebase-analytics.js';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut
} from 'https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js';
import {
  getFirestore,
  serverTimestamp,
  doc,
  getDoc,
  setDoc,
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  limit,
  updateDoc,
  increment
} from 'https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js';

const firebaseConfig = {
  apiKey: "AIzaSyArG_L7qR1Ylzq-PW2rqtCD0xKSfldSUw4",
  authDomain: "blogging-kec.firebaseapp.com",
  projectId: "blogging-kec",
  storageBucket: "blogging-kec.appspot.com",
  messagingSenderId: "123719648565",
  appId: "1:123719648565:web:16070ccb07a74ca441787c",
  measurementId: "G-DPG9J7T0GX"
};

const app = initializeApp(firebaseConfig);

// Analytics is optional and only works on https and some environments
try {
  getAnalytics(app);
} catch (_) {}

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

// Export initialized services and frequently used Firestore helpers
export {
  app,
  auth,
  provider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  db,
  serverTimestamp,
  doc,
  getDoc,
  setDoc,
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  limit,
  updateDoc,
  increment
};


