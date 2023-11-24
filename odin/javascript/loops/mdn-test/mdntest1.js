// see https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code for examples

const contacts = [
  "Chris:2232322",
  "Sarah:3453456",
  "Bill:7654322",
  "Mary:9998769",
  "Dianne:9384975",
];
const para = document.querySelector("p");
const search = document.querySelector("#search");
const searchBtn = document.querySelector("#searchBtn");
const addBtn = document.querySelector("#addBtn");
const add = document.querySelector("#add");

searchBtn.addEventListener("click", () => {
  // turns value in input box to lower cased variable
  const searchName = search.value.toLowerCase();
  //   clears input field
  search.value = "";
  //   keeps cursor in input field
  search.focus();
  para.textContent = "";
  for (const contact of contacts) {
    // variable 'splitContact' used to split array string into new array if found by user search in input field eg. "Chris:2232322" turns into contact["Chris", 2232322]
    const splitContact = contact.split(":");
    // if first name (1st index of 'contact' array after split) of input matches input value, run code
    if (splitContact[0].toLowerCase() === searchName) {
      // changes text content of <p> to output of split array index (first name and phone number)
      para.textContent = `${splitContact[0]}'s number is ${splitContact[1]}.`;
      break;
    }
  }
  if (para.textContent === "") {
    para.textContent = "Contact not found.";
  }
});

addBtn.addEventListener("click", () => {
  contacts.push(add.value.toLowerCase());
});
