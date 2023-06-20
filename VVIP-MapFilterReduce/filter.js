//*Filters the values based on the logic and returns an array

let b = [7,8,9,10,11,12]

let even = b.filter((a)=>{
    return a%2==0;
})

console.log(even);