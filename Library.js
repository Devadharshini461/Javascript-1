function library(){
let username=prompt("Username");
let pass=prompt("Password");
if (username=="library"&&pass=="book123"){
    let b=confirm("do you want to borrow a book?");
    if (b){
        let category=prompt("select a book category\n1.Fiction\n2.Science\n3.History");
        switch (category){
            case "1" :
                alert("You selected Fiction");
                break;
            case "2":
                alert("You selected Science");
                break;
            case "3":
                alert("You selected History");
                break;
            default:
                alert("invalid category");
        }
    }
    else{
        alert("may be next time");
    }}
else{
    alert("Invalid login");
}
}
library();