const list = document.querySelector("ul");
const input = document.querySelector("input");
const addBtn = document.querySelector("button");

addBtn.addEventListener("click", () => {
  const newItem = input.value;
  input.value = "";

  const listItem = document.createElement("li");
  const listText = document.createElement("span");
  const deleteBtn = document.createElement("button");

  listItem.appendChild(listText);
  listText.textContent = newItem;
  listItem.appendChild(deleteBtn);
  deleteBtn.textContent = "Delete";
  list.appendChild(listItem);

  deleteBtn.addEventListener("click", () => {
    list.removeChild(listItem);
  });

  input.focus();
});
