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

function random(a, b) {
  let random = Math.floor(Math.random() * (b - a + 1) + a);
  return random;
}

function chooseName() {
  let random = Math.floor(Math.random() * names.length);
  para.textContent = names[random];
}

// Don't edit the code below here!

const section = document.querySelector("section");

section.appendChild(para);
