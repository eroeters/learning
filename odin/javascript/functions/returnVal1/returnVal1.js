const input = document.querySelector(".numberInput");
const para = document.querySelector("p");

function squared(num) {
  return num * num;
}

function cubed(num) {
  return num * num * num;
}

function factorial(num) {
  if (num < 0) return undefined;
  if (num === 0) return 1;
  let x = num - 1;
  while (x > 1) {
    num *= x;
    x--;
  }
  return num;
}

input.addEventListener("change", () => {
  const num = parseFloat(input.value);
  if (isNaN(num)) {
    para.textContent = "You need to enter a valid number";
  } else {
    para.textContent = `${num} squared is ${squared(num)}.`;
    para.textContent = `${num} cubed is ${cubed(num)}.`;
    para.textContent = `${num} factorial is ${factorial(num)}.`;
  }
});
