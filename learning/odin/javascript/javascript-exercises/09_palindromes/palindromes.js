const palindromes = function (str) {
  let palindrome = str
    .split("")
    .reverse()
    .join("")
    .toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
    .replace(/\s/g, "");
  console.log(palindrome, str);
  if (
    palindrome ==
    str
      .split("")
      .join("")
      .toLowerCase()
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
      .replace(/\s/g, "")
  ) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
