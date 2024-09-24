var user = document.getElementById("name");
var pwd = document.getElementById("psswrd");
var btn = document.getElementById("btn");
var error = document.getElementById("err1");
// function validate(){
//     if(user.value=="" || pwd.value.trim()==""){
//         alert("Field cannot be empty");
//         return false;
//     }
//     else if(pwd.value.length<5){
//        // alert("Password should be greater than 5") ;
//        pwd.style.border="2px solid red";
//        err1.textContent="Passwrod should be greater than 5";
//        return false;   
//      }
//     else{
//         pwd.style.border="green";
//         err1.textContent="";
//         return true;
//     }

// }
function validate(){
    let regex = /^([a-zA-Z0-9.-]+)@([a-zA-Z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/
    if(regex.tesr(user.value)){
        return true;
    }
    else{
        alert("Email is  invalid")
        return false;
    }
}

