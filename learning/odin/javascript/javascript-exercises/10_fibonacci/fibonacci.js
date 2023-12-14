const fibonacci = function (number) {
  // create array
  let array = [1];
  let sequence = 1;
  for (let i = 1; i <= number; i++) {
    sequence += i;
    array.push(sequence);
    console.log(array);
  }
  return array[number];
};

// Do not edit below this line
module.exports = fibonacci;
