// Linking in html using <scrpit> tag and src attribute 

// To make a popup in browser

alert("Hello World");

// To print in console 

console.log("HEllo World");

// Introduction to Variable 

// name = "Visanth";   // String
// console.log(name);

age = 19;   // Integer
price = 9833.41 //Float/Decimal

x = null;   // Know datatype but no value
y = undefined;  // Unknown datatype and unnkown value
isNum = true;   // Bolean

/*Java script is dynamically typed language and no need to mention datatype 

Variable Rules:

    - Variable names are case sensitive; "a" & "A" is differnt.
    - Only letters, digits, underscore(_), and $ is allowed.
    - Not even space is alloweded.$
    - Only a letter, underscore(_) or $ should be the first Character.
    - Reserved words cannot be variable name like true, false, etc.

fullname - Normal case 
fullName - Camel case
full_name - Snake case
full-name - Kebab case
FullName - Pascal case 



 var - Variable can be re-declared & updated.
     - A global scope variable.
Used before 2015 */

var a = 10;
 
var a = 20; // No error 
  
var a = 10; // No error 

console.log(age);   // a = 10 Disadvantage 

// After ES6 - 2015 introduce let & const

// const - Variable cannot be re-declared or updated.
//       - A block scope variable.

const pi =  3.14;

//  let - Variable cannot be re-declared but can be updated.
//      - A block scope variable.

let name = "Vishal";
let marks = 100;
let abc;

console.log(abc);   // Undefined

// Scope:

{
    let m = 5;
    console.log(m);
}

{
    let m = 10;
    console.log(m);
}

// Output: 
//  5 
//  10


// Introduction to Data types 

// - Primitive(7)
// - Non-primitive - Object

// 1. Number

let num = 100;
let sal = 1000.50;

// 2. String

let w = "Welcome";

// 3. Boolean

let isFollow = true;
let isBlock = false;

// 4. Undefined 

let n; // by default all variables are undefied 

// 5. Null

let o = null; // Unknowm value

// 6. Biginit

let bi = BigInt("123");

// 7. Symbol

let sy = Symbol("hello!");

// To find the data type

typeof bi;
typeof sy;

// Non-Primitive:

// Objects are collection of other primitive data types.
// key : value 

const Student = {
    fullName : "Vignesh",
    age : 20,
    cgpa : 8.0,
    isPass : true
};

// To access the variable from a object

console.log(Student.age);
console.log(Student["fullName"]);

// To update 

Student.age = Student.age + 5;

// Doubt 

// Obect may be const but the key inside the object can be changed.

// Sring manipulation

let str = "abcd";

str + 123;

console.log(str);   // abcd123