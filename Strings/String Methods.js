let naam = "Naari"
console.log(naam.length);   //number of letters


let b = "hello"
console.log(b.toUpperCase());


let c = "Hello"
console.log(c.toLowerCase());


let d = "Hello World!!!!"
console.log(d.slice(2));                //this starts from index 2 and prints everything that follows

console.log(d.slice(2, 7));             //starts from index 2 and ends with index 7-1

let e = "Amaterasu"
console.log(e.replace("Am","Ka"));    //replaces the specified part of the string with the new part you want to

let f = "Yowaimo!!!!!"
console.log(f.concat(" Minna san"));            //adds one string to another

let g = "                    Baaaakaaaaa!!!!                 "
console.log(g);
console.log(g.trimStart());
console.log(g.trimEnd());
console.log(g.trim());
