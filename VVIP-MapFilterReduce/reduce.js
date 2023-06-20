//*Reduces the array to the given logic and returns it in number depending on arraytype
let a = [1,2,3,4,5,6]

let newVals = a.reduce((b,c)=>{                  
    return b*c
})

console.log(newVals);


//! Working
//* 1st iteration takes b = 1 and c = 2......multiplies and the result is reassigned to b now b=2
//*2nd iteration takes b = 2(1*2) and c= 3.....(b*c)=>(2*3)=6. now b =6
//*This continues till the last value


//*Alternate Method

const add = (a,b)=>{                 //defining a function
    return a+b;
}

let values = a.reduce(add);           //passing as parameter
console.log(values);
