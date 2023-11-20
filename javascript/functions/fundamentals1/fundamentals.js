const addNum = document.querySelector("#addNum");
const addNumTxt = document.querySelector("#addNumTxt");
const mult1 = document.querySelector("#mult1");
const mult2 = document.querySelector("#mult2");

function add() {
  addNumTxt.innerText = Number(addNum.value) + 7;
}

function multiply() {
  multNumTxt.innerText = Number(mult1.value) * Number(mult2.value);
}
