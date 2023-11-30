const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const p = document.querySelector("p");

function pressMe() {
  p.innerText = `Hello ${firstName.value} ${lastName.value}!`;
}

function sum(...args) {
  let total = 0;
  for (const arg of args) {
    total += arg;
  }
  return total;
}

function mult(...args) {
  let total = 1;
  for (const arg of args) {
    total *= arg;
  }
  return total;
}

function div(...args) {
  let total = 1;
  for (const arg of args) {
    total /= arg;
  }
  return total;
}
