const fibonacci = function (number) {
  let array = [1];
  if (number < 0) {
    return "OOPS";
  }
  for (let i = 0, j = 1, k = 0; k < number; i = j, j = x, k++) {
    x = i + j;
    array.push(x);
    console.log(array);
  }
  return Number(array[number - 1]);
};

// Do not edit below this line
module.exports = fibonacci;
