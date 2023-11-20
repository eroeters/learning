const addNum = document.querySelector("#addNum");
const addNumTxt = document.querySelector("#addNumTxt");

const mult1 = document.querySelector("#mult1");
const mult2 = document.querySelector("#mult2");

const cap = document.querySelector("#capitalize");

function add() {
  addNumTxt.innerText = Number(addNum.value) + 7;
}

function multiply() {
  multNumTxt.innerText = Number(mult1.value) * Number(mult2.value);
}

function capitalize() {
  let string = cap.value;
  capTxt.innerText = string[0].toUpperCase() + string.slice(1).toLowerCase();
}
