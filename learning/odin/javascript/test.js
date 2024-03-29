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

// // // // // // // // // // Functions // // // // // ///

// function random(number) {
//   return Math.floor(Math.random() * number + 1);
// }

// const text = "I am not your father";

// const textBox = document.querySelector("#textBox");
// const output = document.querySelector("#output");

// textBox.addEventListener("keydown", (event) => {
//   output.textContent = `You pressed "${event.key}."`;
// });

// object constructors

// function Book(title, author, pageCount) {
//   this.title = title;
//   this.author = author;
//   this.pageCount = pageCount;
//   this.info = function () {
//     return `"${title}" by ${author}, ${pageCount} pages long`;
//   };
// }

// const hobbit = new Book("The Lord of the Rings", "J.R.R. Tolkien", 20000);

// // // // // // // // // prototypal inheritance // // // // // // // //

// function Person(name) {
//   this.name = name;
// }

// Person.prototype.sayName = function () {
//   console.log(`Hello, I'm ${this.name}!`);
// };

// function Player(name, marker) {
//   this.name = name;
//   this.marker = marker;
// }

// Player.prototype.getMarker = function () {
//   console.log(`My marker is ${this.marker}`);
// };

// // Object.getPrototypeOf(Player.prototype) should
// // return the value of "Person.prototype" instead
// // of "Object.prototype"

// Object.getPrototypeOf(Player.prototype);

// // Now make `Player` objects inherit from `Person`
// Object.setPrototypeOf(Player.prototype, Person.prototype);
// Object.getPrototypeOf(Player.prototype); // returns Person.prototype

// const player1 = new Player("steve", "X");
// const player2 = new Player("steve-o", "O");

// player1.sayName();
// player2.sayName();

// player1.getMarker();
// player2.getMarker();

// // // // // // // // factory functions // // // // // // //

// let users = [];

// function createUser(name) {
//   const discordName = "@" + name;

//   let rep = 0;
//   const getRep = () => rep;
//   const giveRep = () => rep++;
//   // users.push(name);
//   // console.log(users);
//   return { name, discordName, getRep, giveRep };
// }

// const josh = createUser("Josh");
// josh.giveRep();
// josh.giveRep();

// console.log({
//   discordName: josh.discordName,
//   rep: josh.getRep(),
// });

// // // // // // // // // Prototypal factory functions ///////////////////////////

// function createPlayer(name, level) {
//   const { getRep, giveRep } = createUser(name);

//   const increaseLevel = () => level++;
//   return { name, getRep, giveRep, increaseLevel };
// }

// const calculator = (function () {
//   const add = (a, b) => a + b;
//   const sub = (a, b) => a - b;
//   const mul = (a, b) => a * b;
//   const div = (a, b) => a / b;2
//   return { add, sub, mul, div };
// })();

///////////////////////// Modules ////////////////////////

// let myModule = {
//   name: "Will",
//   age: 34,
//   sayName: function () {
//     alert(this.name);
//   },
//   setName: function (newName) {
//     this.name = newName;
//   },
// };

// myModule.setName("Willis");
// myModule.sayName();

let people = {
  people: [],
  template: document.querySelector("#people-template").innerHTML,
};

function miscFunction() {}
