const container = document.querySelector("#gameContainer");

function makeRow() {
  for (let i = 0; i < 16; i++) {
    const div = document.createElement("div");
    div.classList.add("box");
    container.appendChild(div);
  }
}
