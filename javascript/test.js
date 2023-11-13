// console.log(35 + 48);

// console.log((4 + 6 + 9) / 77);

// let a = 10;
// console.log(a);

// let b = 7 * a;
// console.log(b);

// const MAX = 57;
// let actual = MAX - 13;
// let percentage = actual / MAX;

// const button = document.querySelector("button");

// function greet() {
//   const name = prompt("What is your name?");
//   const greeting = document.querySelector("#greeting");
//   greeting.textContent = `Hello ${name}, nice to meet you!`;
// }

// button.addEventListener("click", greet);

// Tutorials from https://javascript.info/logical-operators exercises

//

// let x = prompt("How old are you?");

// if (x >= 14 && x <= 90) {
//   alert(`You're ${x} years old! You don't qualify for the discount`);
// } else {
//   alert(`You're ${x} years old, you qualify for the discount!`);
// }

//

// let age = prompt("How old are you?");

// if (age <= 14 && age >= 90) {
//   alert(`You are ${age} years old, you are not between 14 and 90`);
// } else {
//   alert(`You are ${age} years old, you are between 14 and 90`);
// }

//

// let username = "Admin";
// let password = "12345";

// let userAnswer = prompt("Enter Username:");

// if (userAnswer === username) {
//   let userPass = prompt("Password:");
//   if (userPass === password) {
//     alert("Welcome home!");
//   } else if (userPass != password || userPass == null) {
//     alert("Login cancelled");
//   } else if (userPass !== password) {
//     alert("Invalid password");
//   }
// } else if (userAnswer == "" || userAnswer == null) {
//   alert("Login cancelled");
// } else if (userAnswer != username) {
//   alert("Invalid username");
// }

// switch statements

// const select = document.querySelector("select");
// const para = document.querySelector("p");

// select.addEventListener("change", setWeather);

// function setWeather() {
//   const choice = select.value;

//   switch (choice) {
//     case "sunny":
//       para.textContent = "It is sunny outside today";
//       break;

//     case "rainy":
//       para.textContent = "It is rainy outside today";
//       break;

//     case "snowing":
//       para.textContent = "It is snowing outside today";
//       break;

//     case "overcast":
//       para.textContent = "It is cloudy and overcast today";
//       break;

//     default:
//       para.textContent = "";
//   }
// }

// Ternary operators

// const select = document.querySelector("select");
// const html = document.querySelector("html");
// document.body.style.padding = "10px";

// function update(bgColor, textColor) {
//   html.style.backgroundColor = bgColor;
//   html.style.color = textColor;
// }

// select.addEventListener("change", () =>
//   select.value === "black" ? update("black", "white") : update("white", "black")
// );

// Functions

function random(number) {
  return Math.floor(Math.random() * number + 1);
}

const text = "I am not your father";
