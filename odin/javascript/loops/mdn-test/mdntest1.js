const contacts = [
  "Chris:2232322",
  "Sarah:3453456",
  "Bill:7654322",
  "Mary:9998769",
  "Dianne:9384975",
];
const para = document.querySelector("p");
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  // We store the value entered into the text input in a variable called searchName, before then emptying the text input and focusing it again, ready for the next search. Note that we also run the toLowerCase() method on the string, so that searches will be case-insensitive.
  const searchName = input.value.toLowerCase();
  input.value = "";
  input.focus();
  para.textContent = "";
  for (const contact of contacts) {
    // Inside the loop, we first split the current contact at the colon character, and store the resulting two values in an array called splitContact.
    const splitContact = contact.split(":");
    // We then use a conditional statement to test whether splitContact[0] (the contact's name, again lower-cased with toLowerCase()) is equal to the inputted searchName. If it is, we enter a string into the paragraph to report what the contact's number is, and use break to end the loop.
    if (splitContact[0].toLowerCase() === searchName) {
      para.textContent = `${splitContact[0]}'s number is ${splitContact[1]}.`;
      break;
    }
  }
  if (para.textContent === "") {
    para.textContent = "Contact not found.";
  }
});
