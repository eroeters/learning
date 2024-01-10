const button = document.querySelector(".create-account-btn");
const password = document.querySelector("#password");
const confirmPass = document.querySelector("#confirm-pass");

button.addEventListener("click", (event) => {
  if (password.value !== confirmPass.value) {
    event.preventDefault();
    alert("Passwords must match");
  }
});
