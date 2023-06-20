//* Map create a new array everytime and returns it unlike for-loop iteration which modify the original array
let a = [1,2,3,4,5,6]
console.log(a);

//!(value, index, array)
let arr = a.map((i, index, array)=>{
    console.log(i, index, array);
    return i*i;
});

console.log(arr);