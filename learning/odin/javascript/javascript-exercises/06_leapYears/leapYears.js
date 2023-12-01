const leapYears = function (year) {
  //  working function that I made before solution

  //   if (year % 4 === 0) {
  //     if (year % 100 === 0) {
  //       if (year % 400 === 0) {
  //         return true;
  //       } else {
  //         return false;
  //       }
  //     } else {
  //       return true;
  //     }
  //   } else {
  //     return false;
  //   }

  //   working function after checking solution

  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;
