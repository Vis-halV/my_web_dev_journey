// Properties

// Self-learning how these things actually work.

// Select the <div> element with the class "fruits"
let div = document.querySelector(".fruits");

// tagName : returns tag for element nodes.

console.log(document.getElementById("heading").tagName);

// innerHTML : returns the plain text or HTML content in the element.

console.log(div.innerHTML);

// innerText : returns text content of the element and all its children.

console.log(div.innerText);

// textContent : returns textual content evem for hidden elements.

console.log(div.textContent);

// To change content dynamically 

heading.innerText = "New Heading";


