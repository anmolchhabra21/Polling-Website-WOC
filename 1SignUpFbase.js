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

  var PollingWebsiteDB = firebase.database().ref('PollingWebsite');

  document.getElementById('form').addEventListener("submit",submitForm);

  var getElementVal=(id)=>{
      return document.getElementById(id).value;
  };

  function submitForm(e){
      e.preventDefault();
      
      var Fnm= getElementVal('FName');
      var Lnm= getElementVal('LName');
      var eml = getElementVal('Email');
      var Nbr = getElementVal('Nmbr');
      var Pwd = getElementVal('Pswd');

      console.log(Fnm,Lnm,eml,Nbr,Pwd);

      saveMessages(Fnm,Lnm, eml, Nbr,Pwd);
      window.alert("Form Submitted!!");
      document.getElementById('form').reset();
  }

const saveMessages=(Fnm,Lnm, eml, Nbr,Pwd) =>{
    var newPolling = PollingWebsiteDB.push();

    newPolling.set({
        name1:Fnm,
        name2:Lnm,
        id_eml: eml,
        id_nbr:Nbr,
        id_pswd: Pwd,
    });
};