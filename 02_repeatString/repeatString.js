const repeatString = function(string, num) {
  let newString;
  
  if (string == '' || num == 0) {
    newString = '';
    return newString;
  } else if (num > 0) {
    newString = string.repeat(num);
    return newString;
  } else {
    return 'ERROR'
  }
};

// Do not edit below this line
module.exports = repeatString;
