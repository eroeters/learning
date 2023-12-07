const container = document.querySelector("#gameContainer");
const generateGrid = document.querySelector("#generateGrid");

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
});
