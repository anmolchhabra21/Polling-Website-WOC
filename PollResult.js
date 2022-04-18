// Import the functions you need from the SDKs you need
import * as Aaja from './PollFunc.js';
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
import { getDatabase,ref,set,child,update,remove } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-database.js";

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
const db= getDatabase();

var optn1 = document.getElementById('optn1').Aaja.value;
console.log("the value of option 1 is"+optn1);

var optn2 = document.getElementById('optn2').value;
var optn3 = document.getElementById('optn3').value;
var optn4 = document.getElementById('optn4').value;

var perc1 = document.getElementById('perc1').value;
var perc2 = document.getElementById('perc2').value;
var perc3 = document.getElementById('perc3').value;
var perc4 = document.getElementById('perc4').value;

var ques = document.getElementById('ques').value;

document.getElementById('databtn').onclick = function insertData(){
    console.log("clicked...");
    set(ref(db,"Poll 1"),{
        Question : ques,
        Option1: optn1,
        Option2: optn2,
        Option3: optn3,
        Option4: optn4,
        Percentage1:perc1,
        Percentage2:perc2,
        Percentage3:perc3,
        Percentage4:perc4
    })
    .then(()=>{
        alert("data stored successfully")
    })
    .catch((error)=>{
        alert("unsuccessful,error "+error);
    });
}

