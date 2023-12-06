const container = document.querySelector("#gameContainer");
const generateGrid = document.querySelector("#generateGrid");

generateGrid.addEventListener("click", () => {
  container.textContent = "";
  const gridSize = Number(window.prompt("How many boxes would you like?"));
  for (let i = 0; i < gridSize; i++) {
    const div = document.createElement("div");
    div.classList.add("box");
    container.appendChild(div);
  }
});
