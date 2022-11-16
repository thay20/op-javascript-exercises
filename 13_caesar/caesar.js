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
    shift = shift % 26;

    for(let i = 0; i < unicodeArray.length; i++){

      if(unicodeArray[i] < 65 || unicodeArray[i] > 122) {
        shiftedArray[i] = unicodeArray[i];
      } else if(unicodeArray[i] > 90 && unicodeArray[i] < 97) {
        shiftedArray[i] = unicodeArray[i];
      } else {
          if(unicodeArray[i] < 91) {
              shiftedArray[i] = parseFloat(unicodeArray[i]) + parseFloat(shift);

              //loop around if shifts beyound ALPHA unicode
              if (shiftedArray[i] > 90) { 
                shiftedArray[i] = shiftedArray[i] - 26;
              } else if (shiftedArray[i] < 65) {
                shiftedArray[i] = shiftedArray[i] + 26;
              }
          } else {
              shiftedArray[i] = parseFloat(unicodeArray[i]) + parseFloat(shift);

              //loop around if shifts beyound alpha unicode
              if (shiftedArray[i] > 122) { 
                shiftedArray[i] = shiftedArray[i] - 26;
              } else if(shiftedArray[i] < 97){
                shiftedArray[i] = shiftedArray[i] + 26;
              }
          }
      }
    }
    return shiftedArray;
  }

  function getShiftedString(shiftedArray) {
    let cipher = '';

    for(let i = 0; i < shiftedArray.length; i++) {
      cipher += String.fromCharCode(shiftedArray[i]) 
    }
    return cipher;
  }

  let unicode = getUnicode(oString);
  let shiftedArray = shiftUnicode(unicode, shift);
  let cipher = getShiftedString(shiftedArray);


//testing output before entire caeser is complete
 return cipher;

};

// Do not edit below this line
module.exports = caesar;
