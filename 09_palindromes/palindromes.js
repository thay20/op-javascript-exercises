const palindromes = function (string) {
  const fArray = string.match(/[0-9a-zA-Z]/g);
  let rString = '';

  for (let i = fArray.length - 1; i >= 0; i--){
    rString += fArray[i];
  }

  return fArray.join('').toLowerCase() == rString.toLowerCase() ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
