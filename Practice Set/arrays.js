//*1
let nums = [1,2,3,4,5]
// let a = prompt ("Enter a Prompt");       //Taking User Input, but prompt only runs in the browser
// a = Number.parseInt(a);              //prompt inpputs are always string so converting it to a number
// nums.push(a);                      //can add any number to an array uing push()
// console.log(nums);


//*2 --> easy one 

//*3
let vals = nums.filter((a)=>{
    return a == 4;
})

console.log(vals);

//*4 Already Done!!


//*5 
let fact = nums.reduce((a,b)=>{
    return a*b;
})

console.log(fact);