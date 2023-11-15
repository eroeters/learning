const link = document.querySelector("a");
const sect = document.querySelector("section");
const para = document.createElement("p");
const text = document.createTextNode(
  " - the premier source for web development knowledge."
);
const linkPara = document.querySelector("p");
linkPara.appendChild(text);

para.textContent = "We hope you enjoyed the ride";
link.textContent = "Mozilla Developer Network";
link.href = "https://developer.mozilla.org";

sect.appendChild(para);
sect.appendChild(linkPara);

// function updateStyles() {
//   para.style.color = "white";
//   para.style.backgroundColor = "black";
//   para.style.padding = "10px";
//   para.style.width = "250px";
//   para.style.textAlign = "center";
// }

para.setAttribute("class", "highlight");
