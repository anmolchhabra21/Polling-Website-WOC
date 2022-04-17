// import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

// let SighIn = document.getElementById("SighIn");
// const auth=getAuth();

SighIn.addEventListener('click',(event)=>{
  event.preventDefault();

  localStorage.setItem("email", document.getElementById("Emal").value);
  localStorage.setItem("passwd", document.getElementById("passwd").value);
  // console.log(email, password);
  console.log("logging in");
  location.href = "./loadingPage.html";
  // signInWithEmailAndPassword(auth, email, password)
  // .then((userCredential) => {
  //   // Signed in 
  //   console.log("logged in...");
  //   const user = userCredential.user;
  //   // ...
  //   /*alert("Signed in as "+ email);*/
  //   location.href = "./WelcomeWOC.html"
  // })
  // .catch((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   console.log(errorMessage)
  //   // ..
  // });

})