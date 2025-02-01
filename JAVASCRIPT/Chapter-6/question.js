/* Qs1. Create a H2 heading with text - "Hello JavaScript". 
    Append "from Visanth Designs" to this text using JS. */

let h2 = document.querySelector("h2");
console.dir(h2);
h2.innerText = h2.innerText + " from Visanth Designs"

/* Qs2. Create 3 divs with common class name - "box".
    Access them & add some unique text to each of them.*/

let divs = document.querySelectorAll(".box");

let idx = 1;
for(div of divs) {
    div.innerText = `New text ${idx}`;
    idx++;
}

/*  In query selector for class (.)dot is used and 
    for id (#) hash is used to differentiate*/