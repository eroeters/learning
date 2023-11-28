const myArray = ["tomatoes", "chick peas", "onions", "rice", "black beans"];
const list = document.createElement("ul");

// Add your code here

// using for...of loop for this, as we don't need to worry about index numbers
for (const array of myArray) {
  // per iteration, create an li element
  const newLi = document.createElement("li");
  // append the ul list with new li element
  list.appendChild(newLi);
  // update text for new li element with each iterated array index value
  newLi.textContent = array;
}

// Don't edit the code below here!

const section = document.querySelector("section");
section.appendChild(list);
