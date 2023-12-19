// const addBtn = document.querySelector("#addBtn");
// const subBtn = document.querySelector("#subBtn");
// const multBtn = document.querySelector("#multBtn");
// const divideBtn = document.querySelector("#divideBtn");
const displayText = document.querySelector("#displayText");
const storedNumText = document.querySelector("#storedNumText");
const numberBtn = document.querySelectorAll(".numberBtn");
const operatorBtn = document.querySelectorAll(".operator");
const allBtn = document.querySelectorAll("button");
const clearBtn = document.querySelector(".clearBtn");

let firstNum = "";
let secondNum = "";

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

// updates displayText with clicked on number button
numberBtn.forEach((number) => {
  number.addEventListener("click", () => {
    firstNum += number.value;
    displayText.textContent = firstNum;
  });
});

operatorBtn.forEach((operator) => {
  let num1 = 0;
  // gets num1 value of number currently in displayText
  operator.addEventListener("click", () => {
    num1 = displayText.textContent;
    storedNumText.textContent = num1;
    displayText.textContent = 0;
    // updates firstNum based on textContent value of displayText window
    firstNum = Number(num1);
  });
});

// clears displayText and storedNumText divs
clearBtn.addEventListener("click", () => {
  storedNumText.textContent = 0;
  displayText.textContent = 0;
});

function operate(firstNum, secondNum) {}
