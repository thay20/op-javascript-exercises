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
      if(unicodeArray[i] < 66 || unicodeArray[i] > 122) {
        shiftedArray[i] = unicodeArray[i];
      } else if(unicodeArray[i] > 90 && unicodeArray[i] < 97) {
        shiftedArray[i] = unicodeArray[i];
      } else {
    //Need to add a loop around before setting the Shifted Array
        shiftedArray[i] = parseFloat(unicodeArray[i]) + parseFloat(shift);
      }
    }
    return shiftedArray;
  }

  function getShiftedString(shiftedArray) {

  }

//testing output before entire caeser is complete
 return shiftUnicode(getUnicode(oString), shift);

};

console.log(caesar('Zoo]', 8))
// Do not edit below this line
//module.exports = caesar;
