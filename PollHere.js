// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsaTnuNS-A-H30Sd-oz6M0D7qSjyFoYfI",
  authDomain: "pollingwebsite-a8305.firebaseapp.com",
  databaseURL: "https://pollingwebsite-a8305-default-rtdb.firebaseio.com",
  projectId: "pollingwebsite-a8305",
  storageBucket: "pollingwebsite-a8305.appspot.com",
  messagingSenderId: "1036692593631",
  appId: "1:1036692593631:web:ed939e8e54bc2a15b1426a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


onAuthStateChanged(auth, (user) => {
  if (user) {
       const uid = user.uid;
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    console.log(user.uid);
    document.getElementById('user_name').innerHTML=user.uid;
   
    // ...
  } else {
    // User is signed out
    // ...
    document.getElementById('user_name').innerHTML="Not Defined!";
  }
});