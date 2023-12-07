const container = document.querySelector("#gameContainer");
const generateGrid = document.querySelector("#generateGrid");
const resetBtn = document.querySelector("#resetBtn");

generateGrid.addEventListener("click", () => {
  container.textContent = "";
  const gridSize = Number(window.prompt("How many boxes would you like?"));
  for (let i = 0; i < gridSize; i++) {
    const div = document.createElement("div");
    container.appendChild(div);
    for (let i = 0; i < gridSize; i++) {
      const etchBox = document.createElement("div");
      etchBox.classList.add("box");
      div.appendChild(etchBox);
    }
  }
  hoverColor();
  // resetColor();
});

function hoverColor() {
  let boxColor = document.querySelectorAll(".box");
  boxColor.forEach((color) => {
    color.addEventListener("mouseover", () => {
      color.style.cssText = "background-color: red;";
    });
  });
}

// function resetColor() {
//   let resetColor = document.querySelectorAll(".resetColor");
//   resetColor.forEach((color) => {
//     color.addEventListener("mouseover", () => {
//       color.style.cssText = "background-color: white;";
//     });
//   });
// }

// resetBtn.addEventListener("click", () => {
//   let resetColor = document.querySelectorAll(".box");
//   resetColor.classList.remove("box");
//   resetColor.classList.add("resetBox");
// });
