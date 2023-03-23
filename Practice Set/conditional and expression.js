
let a = 14


switch (a) {
    case 12:
        console.log("This is 12");
        break;
    case 14:
        console.log("This is 14");
        break;
    case 15:
        console.log("You got 15");
        break;
    default:
        console.log("None matched");
        break;
}



let z = 3
let y = 2

let x = 6

if (x%z && z%y){
    console.log("Number is divisible by 2 and 3");
}
else if (x%z){
    console.log("Number only divisible by 3");
}
else if (x%y){
    console.log("Number only divisible by 2");
}
else{
    console.log("Number not divisible by 2 pr 3");
}


let marks = 34

console.log((marks>35)? "Pass" : "Fail");