// https://www.youtube.com/watch?v=kVE4xX-OkJo

const Gameboard = (() => {
  let gameboard = ["", "", "", "", "", "", "", "", ""];

  const render = () => {
    let boardHTML = "";
    gameboard.forEach((square, index) => {
      boardHTML += `<div class="square" id=square-${index}">${square}</div>`;
    });
  };
  document.querySelector("#gameboard").innerHTML = boardHTML;

  return {
    render,
  };
})();

const startBtn = document.querySelector(".startBtn");

startBtn.addEventListener("click", () => {
  //   Game.start();
});
