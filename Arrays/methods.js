//*toString()
let num = [1,2,3,4,5,6,7]
console.log(num);
let b = num.toString();            //convers the array to a String
console.log(b);

//*join()
let a = num.join("-");     //adds the parameter given for every index
console.log(a);

//*pop()-->Modifies original array
let z = num.pop()           //removing the last element from he array
console.log(num);                   
console.log(z);             //returns the removed element

//*push()-->Modifies original array
let y = num.push(0);          //adds an element at the last index
console.log(num);
console.log(y);                  //returns the new array length

//*shift()
let x = num.shift()               //removes and returns the 1st element of the array
console.log(x, num);

//*unshift()
let w = num.unshift(1);        //adds a new element at the start index given in the paramenter and return the new length
console.log(w,num);

//*delete --> it is an operator not a method
console.log(num);
delete num[6]                  //deletes the given index and leaves an empty space, here the array length doesn't change
console.log(num);

//*concat()
let num1 = [7,8,9,10]
let num2 = [11,12,13]
let newNum = num.concat(num1,num2);   //create a new array, the original num[] is not modified
console.log(newNum);



//*sort()-->Modifies original array  
let v = [76,12,8,234,745,234,795,124];
v.sort()                                 //sorts alphabetically(identifies everything a String)
console.log(v);

//!to sort ascending or descending way
//*Step 1: Create a function
let ascending = (a,b)=>{
    return a-b
}
let descending = (a,b)=>{
    return b-a
}

v.sort(ascending)              //passing th4 funciton as parameter
console.log(v);
v.sort(descending)
console.log(v);


//*reverse()-->Modifies original array
num.reverse();             //revreses the array
console.log(num);
num.reverse();


//*splice() -->used for editing an array...takes 3 arguments...modifies original array
//!num.splice(startIndex,noOfElementsToRemove,newElemetsToAdd)

let deletedItems = num.splice(6,1,7,8,9);              //returns the removed items in an arry and adds the new elemts as specifed in the parameters
console.log(num);                              
console.log(deletedItems);


//*slice() ---> returns a new array from the specified index parameter of the original aray
let numZ = num.slice(6)  //num.slice(3,6)
console.log(num);
console.log(numZ);