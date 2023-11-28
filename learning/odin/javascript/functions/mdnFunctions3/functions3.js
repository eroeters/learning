const button = document.querySelector("button");

const names = [
  "Chris",
  "Li Kang",
  "Anne",
  "Francesca",
  "Mustafa",
  "Tina",
  "Bert",
  "Jada",
];
const para = document.createElement("p");

// Add your code here

function random(min, max) {
  let random = Math.floor(Math.random() * (max - min + 1) + min);
  return random;
}
function chooseName() {
  let randomName = random(0, names.length - 1);
  para.textContent = names[randomName];
  return randomName;
}

// Don't edit the code below here!

const section = document.querySelector("section");

section.appendChild(para);
