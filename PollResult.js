// // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
// import { getDatabase,ref,set,child,update,remove } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-database.js";

// // TODO: Add SDKs for Firebase products that you want to use:
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBsaTnuNS-A-H30Sd-oz6M0D7qSjyFoYfI",
//   authDomain: "pollingwebsite-a8305.firebaseapp.com",
//   databaseURL: "https://pollingwebsite-a8305-default-rtdb.firebaseio.com",
//   projectId: "pollingwebsite-a8305",
//   storageBucket: "pollingwebsite-a8305.appspot.com",
//   messagingSenderId: "1036692593631",
//   appId: "1:1036692593631:web:ed939e8e54bc2a15b1426a"
// };

// Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);
// const db= getDatabase();

// var optn1 = document.getElementById('optn1').innerHTML;
// var optn2 = document.getElementById('optn2').innerHTML;
// var optn3 = document.getElementById('optn3').innerHTML;
// var optn4 = document.getElementById('optn4').innerHTML;
// var perc1 = document.getElementById('perc1').innerHTML;
// var perc2 = document.getElementById('perc2').innerHTML;
// var perc3 = document.getElementById('perc3').innerHTML;
// var perc4 = document.getElementById('perc4').innerHTML;
// var ques = document.getElementById('ques').value;

document.getElementById('databtn').onclick = function insertData(){
    console.log("clicked...");
    var optn1 = document.getElementById('optn1').innerHTML;
    var optn2 = document.getElementById('optn2').innerHTML;
    var optn3 = document.getElementById('optn3').innerHTML;
    var optn4 = document.getElementById('optn4').innerHTML;
    var perc1 = document.getElementById('perc1').innerHTML;
    var perc2 = document.getElementById('perc2').innerHTML;
    var perc3 = document.getElementById('perc3').innerHTML;
    var perc4 = document.getElementById('perc4').innerHTML;
    var ques = document.getElementById('ques').value();
    console.log("Question : " + ques);
    set(ref(db,"users/xyz"),{
        
        Question: ques,
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

// function writeNewPost(uid, username, picture, title, body) {
//     // A post entry.
//     var postData = {
//       author: username,
//       uid: uid,
//       body: body,
//       title: title,
//       starCount: 0,
//       authorPic: picture
//     };
  
//     // Get a key for a new Post.
//     var newPostKey = firebase.database().ref().child('posts').push().key;
  
//     // Write the new post's data simultaneously in the posts list and the user's post list.
//     var updates = {};
//     updates['/posts/' + newPostKey] = postData;
//     updates['/user-posts/' + uid + '/' + newPostKey] = postData;
  
//     return firebase.database().ref().update(updates);
//   }
