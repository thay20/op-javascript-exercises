const ftoc = function(degreesF) {

return Math.round(((degreesF-32)/1.8)*10)/10;

};

const ctof = function(degreesC) {

  return Math.round(((1.8*degreesC)+32)*10)/10;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
