const firebaseConfig = {
    apiKey: "AIzaSyBsaTnuNS-A-H30Sd-oz6M0D7qSjyFoYfI",
    authDomain: "pollingwebsite-a8305.firebaseapp.com",
    databaseURL: "https://pollingwebsite-a8305-default-rtdb.firebaseio.com",
    projectId: "pollingwebsite-a8305",
    storageBucket: "pollingwebsite-a8305.appspot.com",
    messagingSenderId: "1036692593631",
    appId: "1:1036692593631:web:ed939e8e54bc2a15b1426a"};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
var db= firebase.database();

var ref = firebase.database().ref("users/xyz");
ref.on("value", (snapshot) => {
    const data = snapshot.val();
    document.getElementById('optn1').innerHTML=data.Option1;
    document.getElementById('optn2').innerHTML=data.Option2;
    document.getElementById('optn3').innerHTML=data.Option3;
    document.getElementById('optn4').innerHTML=data.Option4;
    document.getElementById('perc1').innerHTML=data.Percentage1;
    document.getElementById('perc2').innerHTML=data.Percentage2;
    document.getElementById('perc3').innerHTML=data.Percentage3;
    document.getElementById('perc4').innerHTML=data.Percentage4;
    document.getElementById('ques').innerHTML =data.Question;
})

// function EveryDetail(){
//     firebase.database().ref('users/xyz').on('value',
//     function(AllDetail){
//         AllDetail.forEach(
//             function(CurntRcrd){
//                 document.getElementById('optn1').innerHTML=CurntRcrd.val().Option1;
//                 document.getElementById('optn2').innerHTML=CurntRcrd.val().Option2;
//                 document.getElementById('optn3').innerHTML=CurntRcrd.val().Option3;
//                 document.getElementById('optn4').innerHTML=CurntRcrd.val().Option4;
//                 document.getElementById('perc1').innerHTML=CurntRcrd.val().Percentage1;
//                 document.getElementById('perc2').innerHTML=CurntRcrd.val().Percentage2;
//                 document.getElementById('perc3').innerHTML=CurntRcrd.val().Percentage3;
//                 document.getElementById('perc4').innerHTML=CurntRcrd.val().Percentage4;
//                 document.getElementById('ques').innerHTML =CurntRcrd.val().Question;
//             }
//         )
//     })
// }
// window.onload= EveryDetail();

// const dbRef = firebase.database().ref();
// dbRef.child("users").child("xyz").get().then((snapshot) => {
//   if (snapshot.exists()) {
//     console.log(snapshot.val());
//     document.getElementById('optn1').innerHTML=xyz['Option1']
//     document.getElementById('optn2').innerHTML=xyz['Option2']
//     document.getElementById('optn3').innerHTML=xyz['Option3']
//     document.getElementById('optn4').innerHTML=xyz['Option4']
//     document.getElementById('perc1').innerHTML= xyz['Percentage1']
//     document.getElementById('perc2').innerHTML= xyz['Percentage2']
//     document.getElementById('perc3').innerHTML= xyz['Percentage3']
//     document.getElementById('perc4').innerHTML= xyz['Percentage4']
//     document.getElementById('ques').innerHTML= xyz['Question']
//   } else {
//     console.log("No data available");
//   }
// }).catch((error) => {
//   console.error(error);
// });