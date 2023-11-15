const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const button = document.querySelector("button");

const x = 50;
const y = 60;
const width = 100;
const height = 75;
const color = "blue";

// Add your code here

button.addEventListener("click", () => {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
});

// function draw() {
//   ctx.fillStyle = color;
//   ctx.fillRect(x, y, width, height);
// }
// Don't edit the code below here!

const section = document.querySelector("section");
