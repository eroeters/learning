const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const p = document.querySelector("p");

function pressMe() {
  p.innerText = `Hello ${firstName.value} ${lastName.value}!`;
}
