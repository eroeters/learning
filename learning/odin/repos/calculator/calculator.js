// const addBtn = document.querySelector("#addBtn");
// const subBtn = document.querySelector("#subBtn");
// const multBtn = document.querySelector("#multBtn");
// const divideBtn = document.querySelector("#divideBtn");
const displayText = document.querySelector("#displayText");
const numberBtn = document.querySelectorAll(".numberBtn");
const operatorBtn = document.querySelectorAll(".operator");

function sum(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

let storedNumber = "";

numberBtn.forEach((number) => {
  number.addEventListener("click", function () {
    storedNumber += number.value;
    displayText.textContent = storedNumber;
  });
});

function operate(num1, num2, operator) {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
  }
}
