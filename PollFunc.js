function copy(){
        
        let url = document.location.href;

        navigator.clipboard.writeText(url).then(function() {
            alert('This Url Was Copied on your Clipboard, Now you can share this with Everyone!!');
        }, function() {
            console.log('Copy error')
        });
    }
     var val1 = document.getElementById('optn1').innerHTML;
     console.log(val1);
    function fun1(){
        ++val1;
        document.getElementById('optn1').innerHTML= val1;
    }
    var val2 = document.getElementById('optn2').innerHTML;
    function fun2(){
        ++val2;
        document.getElementById('optn2').innerHTML= val2;
    }
    var val3 = document.getElementById('optn3').innerHTML;
    function fun3(){
        ++val3;
        document.getElementById('optn3').innerHTML= val3;
    }
    var val4 = document.getElementById('optn4').innerHTML;
    function fun4(){
        ++val4;
        document.getElementById('optn4').innerHTML= val4;
    }
    // yahan par total ko bahar define karne par error aa rha hai sir se puchna hai 
    function perct1(){
        let total = val1*1+val2*1+val3*1+val4*1;
        let pt1= (val1*100)/total;
        document.getElementById('perc1').innerHTML= pt1;
    }
    function perct2(){
        let total = val1*1+val2*1+val3*1+val4*1;
        let pt2= (val2*100)/total;
        document.getElementById('perc2').innerHTML= pt2;
    }
    function perct3(){
        let total = val1*1+val2*1+val3*1+val4*1;
        let pt3= (val3*100)/total;
        document.getElementById('perc3').innerHTML= pt3;
    }
    function perct4(){
        let total = val1*1+val2*1+val3*1+val4*1;
        let pt4= (val4*100)/total;
        document.getElementById('perc4').innerHTML= pt4;
    }
    // var bullet= setInterval(trigger,100);

    function trigger(){
        perct1();
        perct2();
        perct3();
        perct4();
        
    }

    // var optn1 = document.getElementById('optn1').innerHTML;
    // console.log("the value of option 1 is"+optn1);
    
    // var optn2 = document.getElementById('optn2').innerHTML;
    // var optn3 = document.getElementById('optn3').innerHTML;
    // var optn4 = document.getElementById('optn4').innerHTML;
    
    // var perc1 = document.getElementById('perc1').innerHTML;
    // var perc2 = document.getElementById('perc2').innerHTML;
    // var perc3 = document.getElementById('perc3').innerHTML;
    // var perc4 = document.getElementById('perc4').innerHTML;
    
    // var ques = document.getElementById('ques').innerHTML;


    
    // function writeUserData(userId, name, email, imageUrl) {
    //     firebase.database().ref('users/' + userId).set({
    //       username: name,
    //       email: email,
    //       profile_picture : imageUrl
    //     });
    //   }

    
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
        
        var ques = document.getElementById('ques').innerHTML;
        firebase.database().ref('users/xyz').set({
            
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
            location.href="/ShowResults.html";
        })
        .catch((error)=>{
            alert("unsuccessful,error "+error);
        });
    }
    

