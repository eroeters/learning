// see https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code for examples

// for...of loop test

const contacts = [
  "Chris:2232322",
  "Sarah:3453456",
  "Bill:7654322",
  "Mary:9998769",
  "Dianne:9384975",
];
const forOfPara = document.querySelector("#forOfPara");
const search = document.querySelector("#search");
const searchBtn = document.querySelector("#searchBtn");
const addBtn = document.querySelector("#addBtn");
const addInput = document.querySelector("#addInput");

searchBtn.addEventListener("click", () => {
  // turns value in input box to lower cased variable
  const searchName = search.value.toLowerCase();
  //   clears input field
  search.value = "";
  //   keeps cursor in input field
  search.focus();
  forOfPara.textContent = "";
  for (const contact of contacts) {
    // variable 'splitContact' used to split array string into new array if found by user search in input field eg. "Chris:2232322" turns into contact["Chris", 2232322]
    const splitContact = contact.split(":");
    // if first name (1st index of 'contact' array after split) of input matches input value, run code
    if (splitContact[0].toLowerCase() === searchName) {
      // changes text content of <p> to output of split array index (first name and phone number)
      forOfPara.textContent = `${splitContact[0]}'s number is ${splitContact[1]}.`;
      break;
    }
  }
  if (forOfPara.textContent === "") {
    forOfPara.textContent = "Contact not found.";
  }
});

addBtn.addEventListener("click", () => {
  contacts.push(addInput.value.toLowerCase());
  addInput.value = "";
});

// continue loop test

const continuePara = document.querySelector("#continuePara");
const continueInput = document.querySelector("#continueInput");
const continueBtn = document.querySelector("#continueBtn");

continueBtn.addEventListener("click", () => {
  continuePara.textContent = "Output: ";
  const num = continueInput.value;
  //   clears input text after button press
  continueInput.value = "";
  //   keeps cursor in input box
  continueInput.focus();
  for (let i = 1; i <= num; i++) {
    // takes the square root of number and then outputs value into paragraph text, loops until input number is met. If the square root is not an integer(has decimals), loop will skip that output and continue to next incremental number
    let sqRoot = Math.sqrt(i);
    if (Math.floor(sqRoot) !== sqRoot) {
      continue;
    }
    continuePara.textContent += `${i} `;
  }
  0;
});
