const palindromes = function (string) {
  string = string.replace(/\W/g, '');
  let rString = '';
  for(let i = string.length-1; i >= 0; i--) {
    rString += string[i];
  }
  
  if(rString.toLowerCase() === string.toLowerCase()) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
