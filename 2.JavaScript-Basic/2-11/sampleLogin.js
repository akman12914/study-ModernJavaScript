let user = prompt("who's there");

if(user=="Admin"){

    password = prompt("Password?")
    
    if(password == "TheMaster"){
        alert("Welcome!");
    }else if(password =='' || password == null){
        alert("Canceled");
    }else{
        alert("Wrong password");
    }

}else if(user==''||user==null){
    alert('Canceled');
}else{
    alert("I don't know you");
}