const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  return array.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
};

const multiply = (array) => {
  return array.reduce((a, b) => a * b);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function () {};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
