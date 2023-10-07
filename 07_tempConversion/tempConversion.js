const convertToCelsius = function(degF) {
  let degC;
  degC = Math.round(((degF - 32) / 1.8) * 10) / 10;
  return degC;
};

const convertToFahrenheit = function(degC) {
let degF;
degF = Math.round(((degC*1.8) + 32)*10) / 10;
return degF;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
