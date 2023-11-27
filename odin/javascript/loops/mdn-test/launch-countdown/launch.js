const output = document.querySelector(".output");
output.innerHTML = "";

let i = 10;

while (i >= 0) {
  const para = document.createElement("p");
  if (i === 10) {
    output.appendChild(para);
    para.textContent = "Countdown 10";
  } else if (i === 0) {
    output.appendChild(para);
    para.textContent = "Blast off!";
  } else {
    output.appendChild(para);
    para.textContent = i;
  }
  i--;
}
