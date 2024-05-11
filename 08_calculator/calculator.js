const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(values) {
  if (isNaN(values[0])) {
    return 0;
  }
	return values.reduce((total, value) => total + value, 0);
};

const multiply = function(multiples) {
  return multiples.reduce((total, current) => total * current, 1);
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(a) {
  if (a === 0 || a === 1) {
    return 1;
  } else {
    for (let i = a; i > 1; i--) {
      a = a*(i-1);
    }
    return a;
  }
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
