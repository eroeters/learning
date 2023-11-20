const addNum = document.querySelector("#addNum");
const addNumTxt = document.querySelector("#addNumTxt");

function add() {
  addNumTxt.innerText = Number(addNum.value) + 7;
}
