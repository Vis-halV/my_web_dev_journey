// Events 

/*  The change in the state of an object is known as Event.
    Events are fired to notify code of "interesting changes" that may affect code execution.
      -  Mouse events (click, double click, etc.)
      -  Keyboard events (keypress, keyup, keydown, etc.)
      -  Form events (submit, etc.)
      -  Print event & many more. */

// Event handling in JS

/* node.event = () => {
    // handle here 
   } */

let btn2 = document.querySelector("#btn2");

btn2.onclick = () => {
    console.log("btn2 was clicked.");
}

let box2 = document.querySelector("#div2");

box2.onmouseover = () => {
    console.log("You are inside the box.");
}

/*  DOM event handling is more prioritize than inline handling */

/*  Then if the event handling function is written twice,
    then the code will be overwritten and the second one will get execute. */

btn2.onclick = () => {
    console.log("Over written func");
}

// Event object 

/*  It is a special object that has details about the event.
    All the event handlers have access to the Event Object's properties and methods. */
    
/* node.event = (e) => {
    // handle here 
   } 
    
   e.target, e.type, e.clientX, e.clientY, etc. */

btn2.onclick = (evt) => {
    console.log("Event object results...")
    console.log(evt);
    console.log(evt.type);      // frequently used 
    console.log(evt.target);    // frequently used 
    console.log(evt.clientX, evt.clientY);  
}

box2.onmouseover = (evt) => {
    console.log("Event object results...")
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);  // Used in games and etc
}

// Event Listeners

/* node.addEventListener(event. callback)
 * node.removeEventListener(event, callback)
 * Note:
 *  - The callback reference should be same to remove.  */

let btn3 = document.querySelector("#btn3");

btn3.addEventListener("click", () => {
    // This function itself is callback function which handles the event
    console.log("Button 3 was clicked by Handler-1")
})

btn3.addEventListener("click", () => {
    console.log("Button 3 was clicked by Handler-2")
})

/* Output:
    Button 3 was clicked by Handler-1    eighth.js:75
    Button 3 was clicked by Handler-2    eighth.js:80    */

btn3.addEventListener("click", (e) => {
    // Even event object can be accessed 
    console.log(e);
})

const handler3 = () => {    
    console.log("Button 3 was clicked by Handler-3");
}
btn3.addEventListener("click", handler3);

// btn3.removeEventListener("click", () => {
//     console.log("Button 3 was clicked by Handler-3")
// })

// The above code does not remove the eventListener 

btn3.removeEventListener("click", handler3);