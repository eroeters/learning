const convertToCelsius = function (temp) {
  let cels = (temp - 32) * (5 / 9);
  if (cels > 0 || cels < 0) {
    return cels.toFixed(1);
  } else {
    return cels;
  }
};

const convertToFahrenheit = function (temp) {
  let fahren = temp * (9 / 5) + 32;
  if (fahren > 0 || fahren < 0) {
    return fahren.toFixed(1);
  } else {
    return fahren;
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
