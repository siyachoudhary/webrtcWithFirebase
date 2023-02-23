// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVCsj8itxDdOyIo68XwvQVjEOqf_zYDDI",
  authDomain: "webtrcapptest.firebaseapp.com",
  databaseURL: "https://webtrcapptest-default-rtdb.firebaseio.com",
  projectId: "webtrcapptest",
  storageBucket: "webtrcapptest.appspot.com",
  messagingSenderId: "95147934988",
  appId: "1:95147934988:web:f9b5ec82ae8eabf4fb7529",
  measurementId: "G-0BH0R10F99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };