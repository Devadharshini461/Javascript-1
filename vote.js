function ip(){
    let name=prompt("enter name:","Dhiya");
    let age =prompt("enter age: ","18");
    age=Number(age);
    if (age>=18){
        alert("Hello "+ name +" ,You are eligible to vote");
    }
    else{
        alert("Sorry "+ name +" ,You are not eligible to vote");
    }
}


function eligible(){
    ip();
    let r=confirm("Do you want to check again");
    if (r){
        ip();
    }
    else{
        alert("Good bye");
    }
}

eligible();
