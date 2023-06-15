console.log("Javascript Variables");

/*                             Rules for variable names                       

1. letters, underscores and $ allowed
2. should not start with numbers
3. cannot use keywords
4. case sensitive

*/

//*                                                       var           (minimal us of this preferred)                                 */

//* var can be redeclared and reinitialized*/
//!Globally Scoped

var z = 12;
var z = null;
var z = true;
var z = "var testing";
var z = 12.22;

console.log(z); //12.22

//*                                                           let       (using this is peferred)                                     */

/*we can use "let" to re-initialize a variable from one datatype to another ("let" is accessible only within the funciton block or any code block,
not accessible outside that code block. here re-declaring it gives error)*/
//Block scoped
//here a is a number
let a = 67;
console.log(a); //67

//here a is re-initialized to a string datatype from number/int
a = "harry";
console.log(a); //harry

{
  let a = true;
}

//*                                                       const                                            */

//try to use const the most in a js code

// any variable declared using const cannot be redeclared and reinitialized

// const u;   (This will throw syntx error)

const x = "Jeebus";

// x=33

console.log(x);

/* let and const are never initialized by default, var is always initialized with undefined */
/*const must be initialized when declaring it unlike let and var */