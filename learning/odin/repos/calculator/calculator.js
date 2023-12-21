const displayText = document.querySelector("#displayText");
const storedNumText = document.querySelector("#storedNumText");
const numberBtn = document.querySelectorAll(".numberBtn");
const operatorBtn = document.querySelectorAll(".operator");
const equalsBtn = document.querySelector(".equalsBtn");
const buttons = document.querySelectorAll("button");
const clearBtn = document.querySelector(".clearBtn");

let num1 = "";
let num2 = "";
let currentOperation = null;
let shouldResetScreen = false;

equalsBtn.addEventListener("click", evaluate);
clearBtn.addEventListener("click", clear);

// runs appendNumber function each time a number button is clicked
numberBtn.forEach((button) => {
  button.addEventListener("click", () => {
    appendNumber(button.textContent);
  });
});

// sets setOperation function to clicked operator button
operatorBtn.forEach((button) => {
  button.addEventListener("click", () => {
    setOperation(button.textContent);
  });
});

// appends displayText field to show clicked on numbers
function appendNumber(number) {
  if (displayText.textContent == 0 || shouldResetScreen) {
    resetScreen();
  }
  displayText.textContent += number;
}
// stops appendNumber function from adding preceding zeroes
function resetScreen() {
  displayText.textContent = "";
  shouldResetScreen = false;
}

function clear() {
  displayText.textContent = "0";
  storedNumText.textContent = "";
  num1 = "";
  num2 = "";
  currentOperation = null;
}

function setOperation(operator) {
  if (currentOperation !== null) {
    evaluate();
  }
  // assigns first number to current number inside displaytext
  num1 = displayText.textContent;
  currentOperation = operator;
  // appends storedNumText field to first number and operator that was clicked on
  storedNumText.textContent = `${num1} ${currentOperation}`;
  shouldResetScreen = true;
}

function evaluate() {
  // if operator has not been clicked on prior to clicking '=', current displayText field stays the same
  if (currentOperation === null || shouldResetScreen) {
    return;
  } else if (currentOperation === "/" && displayText.textContent == "0") {
    alert("Cannot divide by zero");
    return;
  }
  // when '=' is clicked, run evaluate function. Set num2 to current textContent of displayText field
  num2 = displayText.textContent;
  displayText.textContent = operate(currentOperation, num1, num2);
  storedNumText.textContent = `${num1} ${currentOperation} ${num2}`;
  currentOperation = null;
}

function add(a, b) {
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

function operate(operator, a, b) {
  a = Number(a);
  b = Number(b);
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "x":
      return multiply(a, b);
    case "/":
      if (b == 0) {
        return null;
      } else {
        return divide(a, b);
      }
    default:
      return null;
  }
}

// Old iteration I attempted on my own. Could not figure out why operators weren't working properly

// function operate(num1, num2, operator) {
//   if (operator == "+") {
//     // return add(num1, num2)
//     displayText.textContent = add(num1, num2);
//   } else if (operator == "-") {
//     // return subtract(num1, num2);
//     displayText.textContent = subtract(num1, num2);
//   } else if (operator == "x") {
//     // return multiply(num1, num2);
//     displayText.textContent = multiply(num1, num2);
//   } else if (operator == "/") {
//     // return divide(num1, num2);
//     displayText.textContent = divide(num1, num2);
//   }
// }

// let num1 = 0;
// let num2 = 0;
// let storedNumber = 0;
// let storedOperator = "";

// buttons.forEach((button) => {
//   displayText.textContent = "";
//   button.addEventListener("click", () => {
//     // if the button click is a Number, update displayText
//     if (button.classList.contains("numberBtn")) {
//       displayText.textContent += button.value;
//       // if the button is an operator, assign value, and change display to match
//     } else if (button.classList.contains("operator")) {
//       // if the storedNumber section is blank, assign num1 and store operator
//       if (storedNumber == 0) {
//         num1 = Number(displayText.textContent);
//         displayText.textContent = "";
//         storedNumber = num1;
//         storedOperator = button.value;
//         storedNumText.textContent = num1;
//       } else {
//         num2 = Number(displayText.textContent);
//         storedOperator = button.value;
//         if (button.value == "+") {
//           displayText.textContent = add(num1, num2);
//           return add(num1, num2);
//         } else if (button.value == "-") {
//           displayText.textContent = subtract(num1, num2);
//           return add(num1, num2);
//         } else if (button.value == "x") {
//           displayText.textContent = multiply(num1, num2);
//           return add(num1, num2);
//         } else if (button.value == "/") {
//           displayText.textContent = divide(num1, num2);
//           return add(num1, num2);
//         }
//       }
//     }
//   });
// });

// // // clears displayText and storedNumText divs
// clearBtn.addEventListener("click", () => {
//   storedNumText.textContent = "";
//   displayText.textContent = "";
//   storedOperator = "";
//   storedNumber = "";
//   num1 = 0;
//   num2 = 0;
// });

// // // updates displayText with clicked on number button
// // numberBtn.forEach((number) => {
// //   number.addEventListener("click", () => {
// //     firstNum += number.value;
// //     displayText.textContent = firstNum;
// //   });
// // });

// // operatorBtn.forEach((operator) => {
// //   let num1 = 0;
// //   // gets num1 value of number currently in displayText
// //   operator.addEventListener("click", () => {
// //     num1 = displayText.textContent;
// //     storedNumText.textContent = num1;
// //     displayText.textContent = 0;
// //     // updates firstNum based on textContent value of displayText window
// //     firstNum = Number(num1);
// //   });
// // });
