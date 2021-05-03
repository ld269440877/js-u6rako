// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>JS Starter</h1>`;

let p;

let set = ["p1", "p2", "p3"];

function abc() {
  for (let i = 0; i < set.length; i++) {
    // alert(i)
    p = document.createElement("p");

    document.body.appendChild(p);
    p.textContent = set[i];
  }
}

abc();

let name = "Bingo";
name;
let hello = " says hello!";
hello;
let greeting = name + hello;

document.querySelector("h1").textContent = greeting;

const focus_ = document.querySelector("input");
// focus_.focus();
focus_.value = 123;

focus_.style.backgroundColor = "yellow";
focus_.style.fontSize = "200%";
focus_.style.padding = "10px";
focus_.style.boxShadow = "10px 60px 20px black";
