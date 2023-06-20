let num = [1,2,3,4,5,6,7]


//*Method 1
console.log("Using classic for");
for(let i=0;i<num.length;i++){
    console.log(num[i]);
}


//*Method 2
console.log("Using for each");
num.forEach((i)=>{
    console.log(i);
    console.log("square ",i*i);
});

//*Method 3
let name1 = "Jodish";
let arr = Array.from(name1)                    //converts this into a chatacter array

console.log(arr);


//*Method 4
console.log("Using for of");
for(let i of num){
    console.log(i);
}

//* Method 5 --> based on the principle has each array element also has a key which is the index
console.log("Using for in");
for(let i in num){
    console.log(num[i]);
}
