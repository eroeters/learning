const palindromes = function (str) {
  let splitStr = str.split("");
  let reverseArray = splitStr.reverse();
  let joinArray = reverseArray.join("").toLowerCase();
  return joinArray;
};

// Do not edit below this line
module.exports = palindromes;
