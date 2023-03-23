function nameOfTheFuncion (parameters) {
    
    //   Instructions 

}

function averge(a,b,c,d,e){
    return (a+b+c+d+e)/2;
}


console.log(averge(1,2,3,4,45));


//here args takes multple arguments with the use of a single variable and stores it in an array
function functionName(...args) {
    
    // instructions
    
}


let sum =0
function multipleArgsFunc(...args) {
    
    for (let index = 0; index < args.length; index++) {
        
        sum+=args[index]
    }

    return sum
    
}

console.log(multipleArgsFunc(1,2,3,3,4,4,4,4,4,53,5,252,25,25,25,25,));
