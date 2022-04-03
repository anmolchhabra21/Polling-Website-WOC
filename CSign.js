const firebaseConfig = {
    apiKey: "AIzaSyBsaTnuNS-A-H30Sd-oz6M0D7qSjyFoYfI",
    authDomain: "pollingwebsite-a8305.firebaseapp.com",
    databaseURL: "https://pollingwebsite-a8305-default-rtdb.firebaseio.com",
    projectId: "pollingwebsite-a8305",
    storageBucket: "pollingwebsite-a8305.appspot.com",
    messagingSenderId: "1036692593631",
    appId: "1:1036692593631:web:ed939e8e54bc2a15b1426a"
  };

  firebase.initializeApp(firebaseConfig);

//   var PollingWebsiteDB = firebase.database().ref('PollingWebsite');

//   document.getElementById('form').addEventListener("submit",submitForm);

//   var getElementVal=(id)=>{
//       return document.getElementById(id).value;
//   };

//   function submitForm(e){
//       e.preventDefault();
      
//       var Fnm= getElementVal('FName');
//       var Lnm= getElementVal('LName');
//       var eml = getElementVal('Email');
//       var Nbr = getElementVal('Nmbr');
//       var Pwd = getElementVal('Pswd');

//       console.log(Fnm,Lnm,eml,Nbr,Pwd);

//       saveMessages(Fnm,Lnm, eml, Nbr,Pwd);
//       window.alert("Form Submitted!!");
//       document.getElementById('form').reset();
//   }

// const saveMessages=(Fnm,Lnm, eml, Nbr,Pwd) =>{
//     var newPolling = PollingWebsiteDB.push();

//     newPolling.set({
//         name1:Fnm,
//         name2:Lnm,
//         id_eml: eml,
//         id_nbr:Nbr,
//         id_pswd: Pwd,
//     });
// };
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
// import { getDatabase } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";
// import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

// const auth = getAuth();
// const database = getDatabase(app);

function register(){
    email = document.getElementById('Email').value;
    LName = document.getElementById('LName').value;
    FName = document.getElementById('FName').value;
    Nmbr = document.getElementById('Nmbr').value;
    Pswd = document.getElementById('Pswd').value;

    console.log(email,Nmbr,Pswd);
    alert("Done!!");
//     createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });
}



// auth.createUserWithEmailAndPassword(email,Pswd)
// .then(function(){
//     var user=auth.currentUser;
//     var database_ref=database.ref();

//     var user_data={
//         email:email,
//         FName:FName,
//         LName:LName,
//         Nmbr:Nmbr,
//         Pswd:Pswd,
//         last_login:Date.now()

//     }

//     database_ref.child('users/'+user.uid).set(user_data);
//     alert('User Created!!');



// })



// .catch(function(error){
//     var error_code=error.code;
//     var error_message=error.message;

//     alert(error_message);
// })