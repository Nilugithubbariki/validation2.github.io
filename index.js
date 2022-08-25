let username = document.getElementById("username");
let password = document.getElementById("password");
let result = 1;


function validateForm(){
    if(username.value == ""){
       document.getElementById("userError").innerHTML = "User Name is Empty"
       result = 0;
       alert("Your form whereever is blanck please check properlly !")
    }else if(username.value.length < 3){
        document.getElementById("userError").innerHTML = "User Name required minumum 3 character"
        
    }else{
        document.getElementById("userError").innerHTML = "";
        result = 1;
        alert("Form is submited sucessfull !");
    }
    if(password.value == ""){
        document.getElementById("passError").innerHTML = "Password is Empty"
        result = 0;
    }else{
        document.getElementById("passError").innerHTML = "";
        result = 1;
    }
    if(result){
        return true;
        
    }else{
        return false;
    }
}