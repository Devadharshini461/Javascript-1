let a=prompt("1.What carriers a positive charge in an atom?\nA.Neutron\nB.Proton\nC.Electron\nD.Ions");
let score=0;
switch (a){
    case "A":
        alert("Incorrect");
        break;
    case "B":
        alert("Correct");
        score+=1;
        break;
    case "C":
        alert("Incorrect");
        break;
    case "D":
        alert("Incorrect");
        break;
}
let b=prompt("2.Which planet is known as the Red Planet?\nA.Venus\nB.Mars\nC.Jupiter\nD.Saturn");
switch(b){
    case "A":
        alert("Incorrect");
        break;
    case "B":
        alert("Correct");
        score+=1;
        break;
    case "C":
        alert("Incorrect");
        break;
    case "D":
        alert("Incorrect");
        break;
}
let c=prompt("3.The square root of 81 is?\nA.7\nB.8\nC.9\nD.10");
switch(c){
    case "A":
        alert("Incorrect");
        break;
    case "B":
        alert("Incorrect");
        break;
    case "C":
        alert("Correct");
        score+=1;
        break;
    case "D":
        alert("Incorrect");
        break;
}
alert("Your Final Score:"+score+"/3");