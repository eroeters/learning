const button = document.querySelector(".create-account-btn");
const password = document.querySelector("#password");
const confirmPass = document.querySelector("#confirm-pass");

button.addEventListener("click", () => {
  if (password.value !== confirmPass.value) {
    alert("Passwords must match");
  }
});
