//this is used to print or select the keys of an object


let marks = {
    harry:1,
    me:2,
    jo:3,
    you:4
}


//*printing the keys
for (let a in marks) {
    console.log(a);
}


//printing the values
for (let names in marks) {
    console.log(marks[names]);
}