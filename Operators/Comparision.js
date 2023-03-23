const a = 1
const b = 2
const c = 3
const d = 4
const e = 5


console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);
console.log(a==b);
console.log(a!=b);


console.log();
console.log();

//Important concept


const x = 10
const y = "10"

console.log("Is x = 10 == y='10' ",x==y);        //only checks the value, so if the value is same regardless of datatype it returns true
console.log("Is x = 10 != y='10' ",x!=y);

console.log("Is x = 10 === y='10' ",x===y);                //checks both the value and type, so number 10 is not equal to string 10
console.log("Is x = 10 !== y='10' ",x!==y);

