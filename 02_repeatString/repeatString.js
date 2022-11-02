const repeatString = function(word, num) {
  let myString = '';
  if(num >= 0){
    for(let i = 0; i < num; i++){
    myString += word;  
    }
    return myString;
  } else {
    return 'ERROR';
  } 
};

// Do not edit below this line
module.exports = repeatString;
