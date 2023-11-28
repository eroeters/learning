const removeFromArray = function (arr, value) {
  let index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
