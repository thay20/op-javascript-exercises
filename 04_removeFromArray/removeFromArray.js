const removeFromArray = function() {
  const myArray = arguments[0];
  let args = Array.from(arguments);
  args.shift();

  for(const arg of args) {
    if(myArray.indexOf(arg) < 0) {
      continue;
    } else {
      while(myArray.indexOf(arg) >= 0){
        myArray.splice(myArray.indexOf(arg), 1)
      }
    }
  }
  return myArray;
};

//run the function for testing (index.html)
//console.log(removeFromArray([1,2,3,4],3));

// Do not edit below this line
module.exports = removeFromArray;
