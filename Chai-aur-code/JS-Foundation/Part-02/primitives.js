// number

let balance = 105;
let anotherBalance = new Number(105); 

// console.log(typeof balance);

// console.log(anotherBalance); 
// console.log(anotherBalance.valueOf()); 
// console.log(typeof anotherBalance);

// boolean
let isActive = true;
let isReallyAactive = new Boolean(true);

// null and undefined

let firstName = null;
let lastName;
// console.log(firstName); 
// console.log(lastName);

// string

let myString = "hello"
let myString1 = 'hola'
let username = 'visanth'

let oldGreet =myString + ' ' + username + '!';
// console.log(oldGreet);

let greetMessage = `Hello ${username}!`;
let demoOne = `Value is ${2*2}`;
// console.log(greetMessage);
// console.log(demoOne);

let sm1 = Symbol();
let sm2 = Symbol("hey");
let sm3 = Symbol("hey");

console.log(sm1 === sm2); 
console.log(sm2 === sm3); 

// No matter what it retuens different vakues as a symbol is unique