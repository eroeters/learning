const button = document.querySelector(".button");
const output = document.querySelector("#submitText");
const name = document.querySelector("#first_name");

button.addEventListener("click", () => {
  output.innerText = `Hello ${name.value}!`;
});
