const removeFromArray = function(array, ...args) {
  let newArray =[];
  for (let item of array) {
    for (let i = 0; i < args.length; i++) {
      if (item === args[i]) {
        item = '';
        break;
      }
    }
    if (item) newArray.push(item);
  }
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
