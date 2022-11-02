const reverseString = function(string) {
  let rString = '';
  for(let i = string.length-1; i >= 0; i--) {
    rString += string[i];
  }
  return rString;
};

// Do not edit below this line
module.exports = reverseString;
