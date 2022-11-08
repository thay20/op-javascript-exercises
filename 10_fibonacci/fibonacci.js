const fibonacci = function(index) {
//Assuming our Fibonacci number will start with 1 1 2...
const fibArray = [1,1,2];
index = Math.floor(parseFloat(index))-1;
if(index < 0) {
    return "OOPS";

} else if(index < 3) {
    return fibArray[index];

} else {
    for(let i = 3; i <= index; i++) {
        fibArray[i] = fibArray[i-1] + fibArray[i-2];
    }
    return fibArray[index];
}
};

// Do not edit below this line
module.exports = fibonacci;
