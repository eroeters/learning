const container = document.querySelector("#container");

const para = document.createElement("p");
const h3 = document.createElement("h3");
const div = document.createElement("div");
const h1 = document.createElement("h1");
const para2 = document.createElement("p");

para.textContent = "Hey, I'm red!";
para.style.cssText = "color: red;";
container.appendChild(para);

h3.textContent = "Hey, I'm blue!";
h3.style.cssText = "color: blue;";
container.appendChild(h3);

div.style.cssText = "border: 5px solid black; background-color: pink;";
h1.textContent = "I'm in a div!";
div.appendChild(h1);
para2.textContent = "Me too!";
div.appendChild(para2);

container.appendChild(div);

// Event test

const buttons = document.querySelectorAll("button");
const btn = document.querySelector("#btn");

btn.addEventListener("click", function (e) {
  let value = e.originalTarget.value;
  console.log(e);
  console.log(e.target);
  console.log(value);
  e.target.style.background = "blue";
});

// potential use for RPS game
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.id == "rock") {
      alert("You pressed the 1st button");
    } else if (button.id == "paper") {
      alert("You pressed the 2nd button");
    } else if (button.id == "scissors") {
      alert("You pressed the 3rd button");
    }
  });
});
