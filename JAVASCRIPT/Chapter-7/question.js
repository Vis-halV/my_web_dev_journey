/* Qs1. Create a new button element. Give it a text "Click me", 
    background color of red & text color of white. 
    
    Insert the button as the first elememt inside the body tag. */

let newBtn = document.createElement("button");
newBtn.innerText = "Click me!";
newBtn.style.backgroundColor = "red";
newBtn.style.color = "white";

document.querySelector("body").prepend(newBtn);

/* Qs2. Create a <p> tag in html, give it a class & some styling. 
    Now create a new class in CSS and try to append this class to the <p> element.
    
    Did you notice, how you overwrite the class name when you add a new
    Solve this problem using classList.*/

let para = document.querySelector("p");

// para.setAttribute("class", "newContent");
/* After the above line the whole class is replaced but we need to append 
    So, We are going to use classList. */

console.log(para.classList);
para.classList.add("newContent");
console.log(para.classList);