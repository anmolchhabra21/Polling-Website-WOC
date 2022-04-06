//  // Import the functions you need from the SDKs you need
//  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
//  import { getDatabase } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";
//  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
//  // TODO: Add SDKs for Firebase products that you want to use
//  // https://firebase.google.com/docs/web/setup#available-libraries

//  // Your web app's Firebase configuration
//  const firebaseConfig = {
//    apiKey: "AIzaSyBsaTnuNS-A-H30Sd-oz6M0D7qSjyFoYfI",
//    authDomain: "pollingwebsite-a8305.firebaseapp.com",
//    databaseURL: "https://pollingwebsite-a8305-default-rtdb.firebaseio.com",
//    projectId: "pollingwebsite-a8305",
//    storageBucket: "pollingwebsite-a8305.appspot.com",
//    messagingSenderId: "1036692593631",
//    appId: "1:1036692593631:web:ed939e8e54bc2a15b1426a"
//  };

//  // Initialize Firebase
//  const app = initializeApp(firebaseConfig);
//  const database = getDatabase(app);
//  const auth = getAuth(app);

//  SighUp.addEventListener('click',(e)=>{

//       var Fnm= getElementById('FName').value;
//       var Lnm= getElementById('LName').value;
//       var email = getElementById('Email').value;
//       var Nbr = getElementById('Nmbr').value;
//       var password = getElementById('Pswd').value;

//       // console.log(Fnm,Lnm,email,Nbr,password);
//       // alert("first part done");

//     const auth=getAuth();
//     createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       // Signed in 
//       const user = userCredential.user;
//       alert('user created!');
//       // ...
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       alert(errorMessage);
//       // ..
//     });
//  })

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js"
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
const database = getDatabase(app);
const auth = getAuth();

SighUp.addEventListener('click',(e)=>{

  var email = document.getElementById('Email').value;
  var FName = document.getElementById('FName').value;
  var Nmbr = document.getElementById('Nmbr').value;
  var password = document.getElementById('Pswd').value;
  alert('THis much runned!!');
  // this much is also not running Sir

  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    alert('User Created!!');
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    alert(errorMessage);
  });

});