const fibonacci = function(n) {
const fibo = [0, 1];

if (n == 0) {
  return 0;
} else if (n == 1) {
  return 1;
} else if (n < 0) {
  return "OOPS";
} else {
  for (let i = 2; i <= n; i++) {
    fibo[i] = fibo[i-1] + fibo[i-2];
  }
}

return fibo[n];
};

// Do not edit below this line
module.exports = fibonacci;
