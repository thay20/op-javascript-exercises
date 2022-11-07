const add = function() {
  let args = Array.from(arguments);
  let answer = 0;
  for(const arg of args) {
    answer = answer + arg;
  }
  return answer;
};

const subtract = function() {
  const args = Array.from(arguments);
  let answer = args[0];
  for(let i = 0; i < args.length-1; i++) {
    answer = answer - args[i+1];
  }
  return answer;
};

//Is this different than the add() function? Yes. I am dumb. The input is an array
const sum = function() {
  const myArray = arguments[0];
  let answer = 0;
  if(myArray.length === 0) {
    return 0;
  } else {
    for(const num of myArray) {
      answer = answer + num;
    }
  }
  return answer;
};

const multiply = function() {
  const myArray = arguments[0];
  let answer = 1;
  if(myArray.length === 0) {
    return 0;
  } else {
    for(const num of myArray) {
      answer = answer * num;
    }
  }
  return answer;
};

const power = function() {
  return Math.pow(arguments[0],arguments[1]);
};


const factorial = function(num) {
	let answer = 1;
  if(num === 0) {
      return answer;
    } else {
      for(let i = num; i > 0; i--) {
      answer = answer * i
    }
  }
  return answer;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
