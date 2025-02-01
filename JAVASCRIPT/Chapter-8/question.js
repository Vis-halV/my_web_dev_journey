/*  Create a toggle button that changes the screen to dark-mode 
    when clicked & light mode when clicked again.*/

let modeBtn = document.querySelector("#toggle");
let body = document.querySelector("body");
let currMode = "light";

modeBtn.addEventListener("click", () => {
    if (currMode == "light") {
        currMode = "dark";
        body.classList.remove("light");
        body.classList.add("dark");
    } else {
        currMode = "light";
        body.classList.remove("dark");
        body.classList.add("light");
    }
});