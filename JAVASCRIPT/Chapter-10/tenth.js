// Prototypes in JS

/**
 *  A javaScript object is an entity having state and behavior (properties and method).
 *  JS objects have a special property called prototype.
 *  We can set prototype using __proto__
 */

// Creating object Student
const student = {
    // Declaring properties
    fullName : "Vishal",
    marks : 95.6,
    // Declaring method
    printMarks: function() {
        console.log("Marks = ", this.marks);
    }
};

const employee = {
    calTax() {
        console.log("Tax rate is 10%");
    }
};

const vijayKumar = {
    salary : 50000,
};

// Passing proto as a reference to another class
vijayKumar.__proto__ = employee;

/**
 * If object & prototype have same method, object's method will be used.
 * Then the method in object will be called not the proto's object which has been passed. 
 */

const venkiNithi = {
    salary : 50000,
    calTax() {
        console.log("Tax rate is 20%");
    }
};

venkiNithi.__proto__ = employee;

venkiNithi.calTax();

// Output : Tax rate is 20%

/** class
 * It is used like a blueprint or template.
 * Class is a program-code template for creating objects.
 * Those objects will have some state(variables), 
 * And some behaviour(functions) inside it.
 */

/**constructor() method is :
 * - automatically invoked by new
 * - initilizes object
 */
class toyotaCar {
    constructor(brand, mileage) {
        console.log("Creating a new object");
        this.brandName = brand;
        this.mileage = mileage;
    }

    start() {
        console.log("Start");
    }

    stop() {
        console.log("Stop");
    }

    // setBrand(brand) {
    //     this.brandName = brand;
    // }
}

let fortuner = new toyotaCar("Fortuner", 10);
// fortuner.setBrand("Fortuner");
// console.log(fortuner);
let lexus = new toyotaCar("Lexus", 12);
// console.log(lexus);

/** Inheritance
 * Inheritance is passing down poperties &b method from parent class to child class.
 * If child & parent have same method, 
 * child's method will be used.(Method overriding) 
 */

class Parent {
    hello() {
        console.log("Hello");
    }
}

class Child extends Parent {}

let obj = new Child();

class Person {
   constructor(name) {
    this.species = "Homo Sapiens";
    this.name = name;
   }

    eat() {
        console.log("Eat");
    }
}

class Enginneer extends Person {
    constructor(name) {
        super(name);    // To invoke Parent Constructor 
        this.name = name;
    }

    work() {
        super.eat();    // To use parent method 
        console.log("Solves problem.")
    }
}

let engObj = new Enginneer("Vishal");

/**Error if we dont use super keyword 
 * Uncaught ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
 * at new Enginneer (tenth.js:116:9)
 * at tenth.js:124:14
 */

/**Super keyword 
 * The super keyword is used to call the constructor of its parent class to access the parent's properties and methods 
 * 
 * Example : In the above code we have passed the name from child to the parent class.
 */

// Error Handleling

// In javaScript if there is an error the following part of the code will not get executed.

let a = 5;
let b = 10;
console.log("a : ", a);
console.log("b : ", b);
console.log("a + b : ", a+b);

try {
    console.log("a + b : ", a+c); // error 
} catch(err) {
    console.log(err);   // Prints the error statement
}

console.log("a + b : ", a+b);
console.log("a + b : ", a+b);
console.log("a + b : ", a+b);
console.log("a + b : ", a+b);
console.log("a + b : ", a+b);
console.log("a + b : ", a+b);