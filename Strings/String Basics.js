let a = "HelloWorld"
console.log(a.length);

let b = 'he\'s'            //using escape to print he's
console.log(b);

let f = `Hello\nWorld`         //prints in new line
console.log(f);


let g = `GbGBgBgBg\tBGBGBG`       //introduces a tab space
console.log(g);


let h = 'Hello\rWorlds'                //carriage return (here hello is printed 1st and when it gets to \r part the cursor moves back to the begning and prints world over hello)
console.log(h);



let c = "ABCDEFGH"
console.log(c[0]);
console.log(c[1]);
console.log(c[2]);
console.log(c[3]);
console.log(c[4]);
console.log(c[5]);
console.log(c[6]);
console.log(c[7]);


//Template Literals

// `` --> this is a backtic

let d = "Me"
let e = 'You'

let phrase = `${d} "and" 'or' ${e}`
console.log(phrase);

