// getAttribute(attr) used to get the attribute's value

let div = document.querySelector("div");
console.log(div);

let id = div.getAttribute("id");
console.log(id);    // null

let name = div.getAttribute("name");
console.log(name);

let para = document.querySelector("p");
console.log(para.getAttribute("id"));

// setAttribute(attr, value) used to set attribute val 

para.setAttribute("id", "paragraph");

// style is also an attribute 

/*To manipulate need to change it from kebab-case to camelCase 
        CSS             :   JAVASCRIPT
    background-color    :   backgroundColor
    font-size           :   fontSize    */

div.style.backgroundColor = "skyblue";  
// Dark blue has been changed to light blue 

div.style.fontSize = "2rem";

//  Insert Elements let el = document.createElement("Div");
let newBtn = document.createElement("button");
newBtn.innerText = "Click me!";

// node.append(el) - adds at the end of node (inside)
// let div = document.querySelector("div");
div.append(newBtn);

// node.prepend(el) - adds at the start of node (inside)
// div.prepend(newBtn);

// node.before(el) - adds before the node (outside)
// div.before(newBtn);

// node.after(el) - adds after the node (outside)
let p = document.querySelector("p");
p.after(newBtn);

// Example:

let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>Hi, I am new!</i>";

document.querySelector("body").prepend(newHeading);

// delete elements 

// node.remove() - removes the node 

para.remove();
newHeading.remove();

// appendChild can create a entire new node at the end 
// refered from https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild

const fragment = document.createDocumentFragment();
const li = fragment
  .appendChild(document.createElement("section"))
  .appendChild(document.createElement("ul"))
  .appendChild(document.createElement("li"));
li.textContent = "hello world";

document.body.appendChild(fragment);

// removeChild can delete child node from a parent node 
// refered from https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild

document.body.removeChild(document.body.lastChild);