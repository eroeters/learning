const container = document.querySelector("#gameContainer");
const generateGrid = document.querySelector("#generateGrid");

generateGrid.addEventListener("click", () => {
  for (let i = 0; i < 16; i++) {
    const div = document.createElement("div");
    div.classList.add("box");
    container.appendChild(div);
  }
});
