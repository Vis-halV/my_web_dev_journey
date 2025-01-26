// DOM - Part-1

// Window object 

/* The window object represents an open window in a browser's object (not JavaScripts) 
    & is automatically created by browser.
    
    It is a GLOBAL object with lots of properties and methods.  */  
    
// What is DOM?

/*  When a web page is loaded, the browser creates a Document Object Model (DOM) of the page.*/

// DOM manipulation

// To acces the element by id 

let heading = document.getElementById("heading"); // h1
console.dir(heading);   // dir is used because it is an object from the class document.body

/*  - Id is used to access element uniquely if we want same property for two or more we can use class. */

// To acces the element by class

let headings = document.getElementsByClassName("myClass");
console.dir(headings);
console.log(headings);  // Returns array of collection which has  unique elemeents.

// To acces the element by tag name

let para = document.getElementsByTagName("p");
console.dir(para);

// Advance level - Query  Selector 

// For tags 

let firstTagElement =  document.querySelector("p");    // Returns first element alone.
console.dir(firstTagElement);

let allTagElement =  document.querySelectorAll("p");   // Returns all element in same tag in form of nodes.
console.dir(allTagElement);

// For Class 

let firstClassElement =  document.querySelector(".myClass");    // . dot is used for class
console.dir(firstClassElement);

let allClassElement =  document.querySelectorAll(".myClass"); 
console.dir(allClassElement);

// For Id 

let firstIdElement =  document.querySelector("#heading");  // # is used for Id 
console.dir(firstIdElement);