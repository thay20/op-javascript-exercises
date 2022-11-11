const caesar = function(oString, shift) {

  function getUnicode(string) {
    let unicodeArray = [];

    for(let i = 0; i < string.length; i++){
      unicodeArray.push(string.charCodeAt(i));
    }
    return unicodeArray;
  }

  function shiftUnicode(unicodeArray, shift) {
    let shiftedArray = [];
    
//add an if(maybe switch?) to only shift alpha unicode range, and loop if necessary
    for(let i = 0; i < unicodeArray.length; i++){
      shiftedArray[i] = parseFloat(unicodeArray) + parseFloat(shift);
    }
    return shiftedArray;
  }

  function getShiftedString(shiftedArray) {

  }

//testing output before entire caeser is complete
  console.log(shiftUnicode(getUnicode(oString), shift))

};

// Do not edit below this line
module.exports = caesar;
