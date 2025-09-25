let n1="34";
let n2="54";
let op="+";
x1=Number(n1);
y1=Number(n2);

switch (op){
    case "+":
        result=x1+y1;
        break;
    case "-":
        result=x1-y1;
        break;
    case "*":
        result=x1*y1;
        break;
    case "/":
        result=x1/y1;
        break;
    default:
        console.log("invalid operator");
}
    console.log("result:",result);


let day1=4;
switch(day1){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day number");
}