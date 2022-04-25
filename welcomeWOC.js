//  // Import the functions you need from the SDKs you need
//   import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
//   import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
//   // TODO: Add SDKs for Firebase products that you want to use
//   // https://firebase.google.com/docs/web/setup#available-libraries

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

function signOut(){
  firebase.auth().signOut()
  alert('user Signed Out successfully!!');
  location.href = "./1SignUpFbseWOC.html"
}
