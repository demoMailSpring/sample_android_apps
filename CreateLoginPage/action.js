function clicked(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;

    if(username==""){
        alert("Please fill username.");
    } else if(password==""){
        alert("Please fill password.");
    } else if(username=="admin" && password=="admin"){
        window.open("https://eresconsciente.wordpress.com/");
    } else{
        alert("Login Failed");
    }
    
}