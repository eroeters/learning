const name = "Mustafa";
const para = document.createElement("p");

const phonebook = [
  { name: "Chris", number: "1549" },
  { name: "Li Kang", number: "9634" },
  { name: "Anne", number: "9065" },
  { name: "Francesca", number: "3001" },
  { name: "Mustafa", number: "6888" },
  { name: "Tina", number: "4312" },
  { name: "Bert", number: "7780" },
  { name: "Jada", number: "2282" },
];

// Add your code here

// working for...of loop, but mdn wants a different type of loop for this
// for (const listing of phonebook) {
//   if (listing.name === "Mustafa") {
//     para.textContent = `Contant Name: ${listing.name} - Phone#${listing.number}`;
//   }
// }

let i = 0;

while (i < phonebook.length) {
  // loop searches phonebook array for anything with the name object of "Mustafa" then prints name and number objects into text content of para
  if (phonebook[i].name === "Mustafa") {
    para.textContent = `Contact Name: ${phonebook[i].name} - Phone #:${phonebook[i].number}`;
  }
  i++;
}

// Don't edit the code below here!
const section = document.querySelector("section");
section.appendChild(para);
