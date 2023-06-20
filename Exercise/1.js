let num1 = Math.random() * 100;    //this generates a random number which can be a decimal too
let a = Math.floor((Math.random()*100)+1);   //Generates a random whole number
console.log(a);

let userChoice = prompt("Guess the number");
console.log(userChoice);

let diff = a - userChoice;

//*if user gets it right the 1st time
console.log((userChoice==a)? "Guessed Right": "Wrong Guess");

//*if user guessed way more or less than 10.
console.log((diff>10 || diff<10)? "You have guessed more than 10" : null);


//*if user guessed way more or less than 50.